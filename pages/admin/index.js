import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Error from 'next/error'
import { Popup, Icon, Button, Dropdown } from 'semantic-ui-react'
import clsx from 'clsx'
import useMedia from 'hooks/useMedia'
import { applySession } from 'lib/session'
import UserSetting from 'components/admin/UserSetting'
import axios from 'lib/axios'
import useAuth from 'hooks/useAuth'

export const getServerSideProps = async ({ req, res }) => {
  const props = {
    collections: [],
    auth: {
      loggedin: false
    }
  }

  await applySession(req, res)
  if (!Boolean(req.session.get('loggedin'))) return { props }

  props.collections = await axios.get('/api/collection', { headers: req.headers })
  props.auth.loggedin = true
  return { props }
}

const Admin = ({ collections, auth: initialData }) => {
  const [activeMenu, setActiveMenu] = useState('page')
  const [display, setDisplay] = useState('list')
  const { open: OpenMedia, Component: Media } = useMedia()

  const collection = collections.find(({ name }) => name === activeMenu)

  const { auth } = useAuth(initialData)
  if (!auth.loggedin) return <Error statusCode={404} />

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    <Media />
    <header className="absolute w-full bg-white shadow">
      <div className="container px-5 flex justify-between mx-auto text-lg">
        <a className="flex items-center" href={process.env.NEXT_PUBLIC_SITE_URI} target="_blank" rel="noopener">
          <img width="26px" className="py-2 mr-2" src="/logo.svg" alt="Logo" />
          <h1 className="m-0 text-black">{process.env.NEXT_PUBLIC_SITE_NAME}</h1>
        </a>
        <div className="flex items-center cursor-pointer py-3">
          <Popup
            on='click'
            position="bottom right"
            trigger={<Icon name="user circle" size="big" />}
            content={<UserSetting />}
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
            <h2 className="m-0">{collection?.label}</h2>
            <div>
              {collection?.create && (
                <Link href="/admin/[...path]" as={`/admin/${collection?.name}`}>
                  <Button as="a" basic icon color="blue">
                    <Icon name="plus" /> New {collection?.label}
                  </Button>
                </Link>
              )}
              {/* <Dropdown
                direction="left"
                className="mx-3"
                trigger={<span className="text-lg">Sort by</span>}
                options={[
                  { key: 'date', text: 'Date Published' },
                  { key: 'category', text: 'Category' },
                ]}
              /> */}
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
            {collection?.entries.map(({ name, label }, index) => (
              <Link key={index} href="/admin/[...path]" as={`/admin/${activeMenu}/${name}`}>
                <a
                  className={clsx([
                    display === 'list' ? 'col-span-3 content-list--list' : 'col-span-1 content-list--grid',
                    'bg-white p-4 menu-item shadow'
                  ])}
                >
                  <h3 className="mb-1 text-black">{label}</h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Admin