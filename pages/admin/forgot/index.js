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

const Forgot = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    console.log('forgot ', email)
    Router.push('/admin/forgot/reset')
    // axios.post('/api/login', body)
    //   .then(() => Router.replace('/admin'))
    //   .catch(console.log)
  }

  const handleChange = e => {
    setEmail(e.currentTarget.value)
  }

  return (<>
    <Head>
      <title>Forgot Password - Admin</title>
    </Head>
    <div className="max-w-screen-xl h-screen flex justify-center items-center mx-auto">
      <Card>
        <Card.Content>
          <Card.Header className="text-center">Forgot My Password</Card.Header>
        </Card.Content>
        <Card.Content>
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Email</label>
              <input onChange={handleChange} type="email" required placeholder="example@email.com" />
            </Form.Field>
            <div className="flex justify-between items-center">
              <Button primary type='submit'>Reset My Password</Button>
              <Link href="/admin/login"><a>Back to Login</a></Link>
            </div>
          </Form>
        </Card.Content>
      </Card>
    </div>
  </>)
}

export default Forgot