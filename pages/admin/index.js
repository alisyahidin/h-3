import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popup, Icon, Button, Dropdown } from 'semantic-ui-react'
import classnames from 'classnames'
import config from '../../cms.config'
import Media from '../../components/admin/Media'

const Admin = () => {
  const [activeMenu, setActiveMenu] = useState('blog')
  const [display, setDisplay] = useState('list')
  const [showMedia, setShowMedia] = useState(false)

  const { content } = config

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    {showMedia && (
      <Media
        open={showMedia}
        closeModal={() => setShowMedia(false)}
      />
    )}
    <header className="bg-white" style={{ boxShadow: 'rgba(68, 74, 87, 0.05) 0px 2px 6px 0px, rgba(68, 74, 87, 0.1) 0px 1px 3px 0px' }}>
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
    <div className="bg-gray-200">
      <div className="py-6 container px-5 mx-auto min-h-screen grid grid-cols-5 gap-6">
        <div className="col-span-1">
          <div className="mb-6 bg-white shadow rounded divide-y divide-gray-300">
            <div className="p-4 flex items-center">
              <Icon name="newspaper outline" size="large" color="blue" />
              <h3 className="m-0 ml-2">Content</h3>
            </div>
            {content.map((item, index) => (
              <div
                key={index}
                className={classnames([
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
            <div onClick={() => setShowMedia(true)} className={"p-4 flex items-center cursor-pointer menu-item"}>
              <Icon name="images" size="large" color="blue" />
              <h3 className={"m-0 ml-2"}>Media</h3>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="m-0">{content.find(({ name }) => name === activeMenu)?.['label']}</h2>
            <div>
              <Button basic icon color="blue">
                <Icon name="plus" /> New {content.find(({ name }) => name === activeMenu)['label']}
              </Button>
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
            {[...new Array(8)].map((_, index) => (
              <div
                key={index}
                className={classnames([
                  display === 'list' ? 'col-span-3 content-list--list' : 'col-span-1 content-list--grid',
                  'bg-white p-4 menu-item cursor-pointer shadow-sm'
                ])}
              >
                <h3 className="mb-1">Hallo {index}</h3>
                <span className="text-gray-500">17 Januari 2020, Ali Syahidin</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default Admin