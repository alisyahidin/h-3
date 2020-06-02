import { useState } from 'react'
import Head from 'next/head'
import Error from 'next/error'
import Router from 'next/router'
import { Popup, Icon, Button } from 'semantic-ui-react'
import clsx from 'clsx'
import Widget from 'components/widgets'
import { applySession } from 'lib/session'
import UserSetting from 'components/admin/UserSetting'
import axios from 'lib/axios'
import useAuth from 'hooks/useAuth'

export const getServerSideProps = async ({ req, res, params }) => {
  await applySession(req, res)

  const props = { auth: { loggedin: Boolean(req.session.get('loggedin')) }, entry: null, collection: null }
  if (params.path.length > 2 || !props.auth.loggedin) return { props }

  try {
    const uri = '/api/collection/' + params.path.join('/')
    const { entry, collection } = await axios.get(uri, { headers: req.headers })
    props.collection = collection
    props.entry = entry

    return { props }
  } catch (e) {
    console.log(e.toString())
    return { props }
  }
}

const Path = ({ auth: initialData, entry, collection }) => {
  const back = () => {
    window.confirm('Are you sure want to leave this page?') && Router.back()
  }

  const [split, setSplit] = useState(false)
  const [data, setData] = useState(entry?.data ?? {})
  const handleChange = (key, value) => {
    setData(prevData => ({ ...prevData, [key]: value }))
  }

  const isFile = collection?.hasOwnProperty('files')

  const publish = () => {
    const [collectionName, slug] = Router.query.path
    if (!data.slug && !isFile) data.slug = data[collection.identifier_field].toLowerCase().replace(/\s/g, '-')
    axios.post(`/api/collection/save/${collectionName}${typeof slug === 'undefined' ? '' : '/' + slug}`, { data }, { headers: { 'Content-Type': 'application/json' } })
      // .then(() => Router.push('/admin'))
      .then(() => console.log('published!'))
      .catch(console.log)
  }
  const { auth } = useAuth(initialData)
  if (!auth.loggedin) return <Error statusCode={404} />

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    <header className="fixed w-full flex justify-between h-20 bg-white shadow-md z-10">
      <div className="flex items-center px-5 border-r-2">
        <Icon name="arrow left" />
        <div onClick={back} className="cursor-pointer ml-2">
          <span className="block">Writing in {collection?.label} collection</span>
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
        <a className="mr-5" href={process.env.NEXT_PUBLIC_SITE_URI} target="_blank" rel="noopener">
          <span className="mr-1">View Site</span>
          <Icon name="external square" />
        </a>
        <Popup
          on='click'
          position="bottom right"
          trigger={<Icon name="user circle" size="big" />}
          content={<UserSetting />}
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
            {entry?.fields?.map((fieldWidget, index) => (
              <Widget key={index} onChange={handleChange} value={data?.[fieldWidget.name] ?? ''} {...fieldWidget} />
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

export default Path