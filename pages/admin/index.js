import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Popup, Icon, Button, Dropdown } from 'semantic-ui-react'
import clsx from 'clsx'
import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'fs'
import config from '../../cms.config'
import useMedia from '../../hooks/useMedia'
import matter from 'gray-matter'

const Admin = ({ collections }) => {
  const [activeMenu, setActiveMenu] = useState('blog')
  const [display, setDisplay] = useState('list')
  const { open: OpenMedia, Component: Media } = useMedia()

  const collection = collections.find(({ name }) => name === activeMenu)

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    <Media />
    <header className="absolute w-full bg-white shadow">
      <div className="container px-5 flex justify-between mx-auto text-lg">
        <div className="flex items-center">
          <h2 className="m-0">Dashboard</h2>
        </div>
        <div className="flex items-center cursor-pointer py-3">
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
      </div>
    </header>
    <div className="bg-gray-200 min-h-screen pt-16">
      <div className="py-6 container px-5 mx-auto grid grid-cols-5 gap-6">
        <div className="col-span-1">
          <div className="mb-6 bg-white shadow rounded divide-y divide-gray-300">
            <div className="p-4 flex items-center">
              <Icon name="newspaper outline" size="large" color="blue" />
              <h3 className="m-0 ml-2">Content</h3>
            </div>
            {collections.map((item, index) => (
              <div
                key={index}
                className={clsx([
                  'menu-item py-3 px-4 cursor-pointer',
                  activeMenu === item.name && 'active'
                ])}
                onClick={() => setActiveMenu(item.name)}
              >
                {item.label}
              </div>
            ))}
          </div>
          <div className="mb-6 bg-white shadow rounded divide-y divide-gray-300">
            <div onClick={OpenMedia} className={"p-4 flex items-center cursor-pointer menu-item"}>
              <Icon name="images" size="large" color="blue" />
              <h3 className={"m-0 ml-2"}>Media</h3>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="m-0">{collection.label}</h2>
            <div>
              {!collection.isFile && (
                <Link href="/admin/[...path]" as={`/admin/${collection.name}`}>
                  <Button as="a" basic icon color="blue">
                    <Icon name="plus" /> New {collection.label}
                  </Button>
                </Link>
              )}
              <Dropdown
                direction="left"
                className="mx-3"
                trigger={<span className="text-lg">Sort by</span>}
                options={[
                  { key: 'date', text: 'Date Published' },
                  { key: 'category', text: 'Category' },
                ]}
              />
              <Button.Group>
                <Button onClick={() => setDisplay('list')} primary={display === 'list'} icon>
                  <Icon name="content" />
                </Button>
                <Button onClick={() => setDisplay('grid')} primary={display === 'grid'} icon>
                  <Icon name="block layout" />
                </Button>
              </Button.Group>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {collection.data.map(({ title, name }, index) => (
              <Link key={index} href="/admin/[...path]" as={`/admin/${activeMenu}/${name}`}>
                <a
                  className={clsx([
                    display === 'list' ? 'col-span-3 content-list--list' : 'col-span-1 content-list--grid',
                    'bg-white p-4 menu-item shadow'
                  ])}
                >
                  <h3 className="mb-1 text-black">{title}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export const getServerSideProps = () => {
  const { collections } = config

  collections.map((attribute, index) => {
    attribute.data = []

    if (attribute.hasOwnProperty('folder')) {
      !existsSync(attribute.folder) && mkdirSync(attribute.folder)
      readdirSync(attribute.folder).forEach(filename => {
        const file = readFileSync(`${attribute.folder}/${filename}`)
        const { data } = matter(file)
        data.date = data.date.toString()
        data.name = data.title.toLowerCase().replace(/\s/g, '-')

        attribute.data.push(data)
      })
    }
    if (attribute.hasOwnProperty('files')) {
      attribute.files.forEach(collectionFile => {
        const { file, label: title, name, fields } = collectionFile
        const initialFile = {}
        fields.forEach(obj => initialFile[obj.name] = '')

        !existsSync(file) && writeFileSync(file, JSON.stringify(initialFile))
        attribute.data.push({ name, title })
      })
    }
    attribute.isFile = attribute.hasOwnProperty('files')
  })

  return { props: { collections } }
}

export default Admin