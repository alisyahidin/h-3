import handler from '../../middleware/connect'
import { find } from '../../utils/getUser'

export default handler
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