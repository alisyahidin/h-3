import handler from '../../middleware/connect'

export default handler()
  .get((req, res) => {
    res.statusCode = 200
    res.send({ user: req.session.user })
  })