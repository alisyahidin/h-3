import connect from 'next-connect'
import auth from 'middleware/auth'

export default connect()
  .use(auth)
  .get((req, res) => {
    res.statusCode = 200
    res.send({ loggedin: req.session.get('loggedin') ?? false })
  })