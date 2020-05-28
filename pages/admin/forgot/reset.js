import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
import { Card, Button, Form } from 'semantic-ui-react'
import { applySession } from 'lib/session'
import axios from 'lib/axios'

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

const Reset = () => {
  const [body, setBody] = useState({ password: '', repassword: '' })

  const handleSubmit = () => {
    Router.replace('/admin/login')
    // axios.post('/api/reset-password', body)
    //   .then(() => Router.replace('/admin'))
    //   .catch(console.log)
  }

  const handleChange = e => {
    const { name, value } = e.currentTarget
    setBody(prevBody => ({ ...prevBody, [name]: value }))
  }

  return (<>
    <Head>
      <title>Reset Password - Admin</title>
    </Head>
    <div className="max-w-screen-xl h-screen flex justify-center items-center mx-auto">
      <Card>
        <Card.Content>
          <Card.Header className="text-center">Reset Password</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Password</label>
              <input onChange={handleChange} name="password" type="password" required placeholder="Password" />
            </Form.Field>
            <Form.Field>
              <label>Confirm Password</label>
              <input onChange={handleChange} name="repassword" type="password" required placeholder="Confirm Password" />
            </Form.Field>
            <div className="flex justify-center">
              <Button primary type='submit'>Reset Password</Button>
            </div>
          </Form>
        </Card.Content>
      </Card>
    </div>
  </>)
}

export default Reset