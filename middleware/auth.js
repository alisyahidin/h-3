import connect from 'next-connect'
import session from 'lib/session'

export default connect()
  .use(session)
  .use((req, res, next) => {
    if (!req.session.get('loggedin')) {
      res.statusCode = 401
      res.json({ message: 'Unauthorized!' })
      res.end()
    }
    next()
  })