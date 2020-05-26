import handler from '../../middleware/connect'

export default handler
  .post(async (req, res) => {
    req.session.destroy()
    res.statusCode = 200
    res.send({ message: 'Succesfully logout!' })
  })