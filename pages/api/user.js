import connect from 'next-connect'
import session from 'lib/session'

export default connect()
  .use(session)
  .get((req, res) => {
    res.statusCode = 200
    res.send({ loggedin: req.session.get('loggedin') ?? false })
  })