import Head from 'next/head'
import Error from 'next/error'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Popup, Icon, Button, Dropdown } from 'semantic-ui-react'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import classnames from 'classnames'
import config from '../../cms.config'

const Path = ({ isNew, content, attributes }) => {
  if (!isNew && content === null) return <Error statusCode={404} />

  const router = useRouter()
  const back = () => {
    window.confirm('Are you sure want to leave this page?') && router.back()
  }

  return (<>
    <Head>
      <title>Content Manager</title>
    </Head>
    <header className="fixed w-full flex justify-between h-20 bg-white shadow-md z-10">
      <div className="flex items-center px-5 border-r-2">
        <Icon name="arrow left" />
        <div onClick={back} className="cursor-pointer ml-2">
          <span className="block">Writing in {attributes.label} content</span>
          <span className="block text-red-600 font-bold">UNSAVED CHANGES</span>
        </div>
      </div>
      <div
        className={classnames([
          isNew ? 'justify-end' : 'justify-between',
          "flex items-center content-end px-5 border-r-2"
        ])}
        style={{ flex: '10 1 0%' }}
      >
        {!isNew && <Button basic negative>Delete</Button>}
        <Button className="" primary>Publish</Button>
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
        <Button circular icon="eye" size="huge" basic primary />
      </div>
    </div>
  </>)
}

export const getServerSideProps = ({ params }) => {
  const props = { isNew: false, content: null, attributes: null }
  if (params.path.length > 2) return { props }

  const [folder, item] = params.path
  if (existsSync(`content/${folder}`)) {
    props.isNew = typeof item === 'undefined'
    props.content = !props.isNew
      ? existsSync(`content/${folder}/${item}.md`)
        ? readFileSync(join(`content/${folder}`, `${item}.md`)).toString()
        : null
      : null
    props.attributes = config.content.find(({ name }) => name === folder)
  }

  return { props }
}

export default Path