import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Card, Button, Form } from 'semantic-ui-react'
import { applySession } from '../../lib/session'
import axios from '../../lib/axios'

export const getServerSideProps = async ({ req, res }) => {
  await applySession(req, res)
  if (req.session.get('loggedin')) {
    res.writeHead(301, {
      Location: '/admin'
    })
    res.end()
  }

  return { props: {} }
}

const Login = () => {
  const [body, setBody] = useState({ username: '', password: '' })

  const handleSubmit = () => {
    axios.post('/api/login', body)
      .then(() => Router.replace('/admin'))
      .catch(console.log)
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget
    setBody(prevBody => ({ ...prevBody, [name]: value }))
  }

  return (<>
    <Head>
      <title>Login - Admin</title>
    </Head>
    <div className="max-w-screen-xl h-screen flex justify-center items-center mx-auto">
      <Card>
        <Card.Content>
          <Card.Header className="text-center">Login</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input onChange={handleChange} name="username" type="email" required placeholder='example@email.com' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input onChange={handleChange} name="password" type="password" required placeholder='password' />
            </Form.Field>
            <div className="flex justify-between">
              <Link href="/admin/login"><a>Forgot Password</a></Link>
              <Button primary type='submit'>Login</Button>
            </div>
          </Form>
        </Card.Content>
      </Card>
    </div>
  </>)
}

export default Login