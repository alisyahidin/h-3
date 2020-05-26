import connect from 'next-connect'
import session from '../../lib/session'

export default connect()
  .use(session)
  .post(async (req, res) => {
    req.session.destroy()
    res.statusCode = 200
    res.send({ message: 'Succesfully logout!' })
  })