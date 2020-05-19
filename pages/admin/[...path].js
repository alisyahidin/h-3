import { useState } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popup, Icon, Button } from 'semantic-ui-react'
import { readFileSync } from 'fs'
import clsx from 'clsx'
import matter from 'gray-matter'
import yaml from 'yaml'
import config from '../../cms.config'
import Widget from '../../components/widgets'
import axios from '../../lib/axios'

const Path = ({ available, data: propsData, fields, entity, isFile }) => {
  if (!available) return <Error statusCode={404} />

  const router = useRouter()
  const back = () => {
    window.confirm('Are you sure want to leave this page?') && router.back()
  }

  const [split, setSplit] = useState(false)
  const [data, setData] = useState(propsData)
  const handleChange = (key, value) => {
    setData(prevData => ({ ...prevData, [key]: value }))
  }

  const publish = () => {
    if (!isFile) entity.slug = data.title.toLowerCase().replace(/\s/g, '-')

    axios.post('/api/collection/save', { entity, data }, { headers: { 'Content-Type': 'application/json' } })
      .then(console.log)
      .catch(console.log)
  }

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    <header className="fixed w-full flex justify-between h-20 bg-white shadow-md z-10">
      <div className="flex items-center px-5 border-r-2">
        <Icon name="arrow left" />
        <div onClick={back} className="cursor-pointer ml-2">
          <span className="block">Writing in {entity.label} collection</span>
          <span className="block text-red-600 font-bold">UNSAVED CHANGES</span>
        </div>
      </div>
      <div
        className={clsx([
          isFile ? 'justify-end' : 'justify-between',
          "flex items-center content-end px-5 border-r-2"
        ])}
        style={{ flex: '10 1 0%' }}
      >
        {!isFile && <Button basic negative>Delete</Button>}
        <Button onClick={publish} primary>Publish</Button>
      </div>
      <div className="flex items-center cursor-pointer px-5">
        <Popup
          on='click'
          position="bottom right"
          trigger={<Icon name="user circle" size="big" />}
          content={<>
            <Link href="/admin  ">
              <a className="block text-black py-2 px-2">
                <Icon name="user" /> Profile
                </a>
            </Link>
            <Link href="/admin/login">
              <a className="block text-black py-2 px-2">
                <Icon name="sign out" /> Logout
                </a>
            </Link>
          </>}
        />
      </div>
    </header>
    <div className="relative pt-24" style={{ height: '200vh' }}>
      <div className="fixed right-0">
        <Button onClick={() => setSplit(!split)} circular icon="eye" size="huge" basic primary={split} />
      </div>
      <div className="flex">
        <div className="flex-1 py-6">
          <div className="max-w-3xl mx-auto">
            {fields.map(({ name, label, widget }, index) => (
              <Widget key={index} onChange={handleChange} name={name} label={label} type={widget} value={data?.[name]} />
            ))}
          </div>
        </div>
        {split && (
          <div className="flex-1">
            <p>Preview</p>
          </div>
        )}
      </div>
    </div>
  </>)
}

export const getServerSideProps = ({ params }) => {
  const props = { entity: {}, available: false, data: null, fields: [], isFile: false }
  if (params.path.length > 2) return { props }

  const [collectionName, slug] = params.path
  const collection = config.collections.find(({ name }) => name === collectionName)
  if (typeof collection === 'undefined') return { props }
  props.entity['name'] = collection.name
  props.entity['label'] = collection.label

  if (collection.hasOwnProperty('folder')) {
    if (typeof slug === 'undefined') {
      props.data = { body: '' }
    } else {
      const file = readFileSync(`${collection.folder}/${slug}.md`, 'utf8').toString()
      const { data, content } = matter(file)
      data.date = data.date.toString()
      data.body = content
      props.data = data
    }
    props.fields = collection.fields
    props.available = true

    return { props }
  }

  if (collection.hasOwnProperty('files')) {
    const collectionFile = collection.files.find(({ name }) => name === slug)
    if (typeof collectionFile === 'undefined') return { props }

    const file = readFileSync(collectionFile.file, 'utf8')
    const data = yaml.parse(file)
    props.data = data
    props.isFile = true
    props.fields = collectionFile.fields
    props.available = true
    props.entity.slug = slug

    return { props }
  }
}

export default Path