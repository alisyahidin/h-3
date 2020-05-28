import connect from 'next-connect'
import session from 'lib/session'
import { find } from 'utils/getUser'

export default connect()
  .use(session)
  .post(async (req, res) => {
    let statusCode, message
    const user = find(req.body.username)

    if (user && user.password === req.body.password) {
      req.session.set('loggedin', true)
      await req.session.save()
      statusCode = 200
      message = 'Successfully login!'
    } else {
      statusCode = 422
      message = 'Invalid credentials'
    }
    res.statusCode = statusCode
    res.send({ message })
  })