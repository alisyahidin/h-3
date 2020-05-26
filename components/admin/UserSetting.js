import Link from 'next/link'
import Router from 'next/router'
import { Icon } from 'semantic-ui-react'
import axios from '../../lib/axios'

const UserSetting = () => {
  const logout = e => {
    e.preventDefault()
    axios.post('/api/logout')
      .then(() => Router.replace('/'))
  }

  return (<>
    <Link href="/admin  ">
      <a className="block text-black py-2 px-2">
        <Icon name="user" /> Profile
      </a>
    </Link>
    <a onClick={logout} className="block text-black py-2 px-2 cursor-pointer">
      <Icon name="sign out" /> Logout
    </a>
  </>)
}

export default UserSetting