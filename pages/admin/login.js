import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Card, Button, Form } from 'semantic-ui-react'

const Login = () => {
  const router = useRouter()
  const handleSubmit = () => {
    router.push('/admin')
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
              <input type="email" required placeholder='example@email.com' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type="password" required placeholder='password' />
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