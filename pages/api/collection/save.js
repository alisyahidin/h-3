const { collections } = require('../../../cms.config')

export default (req, res) => {
  if (req.method === 'POST') {
    const { entity, data } = req.body
    if (!collections.map(({ name }) => name).includes(entity.name)) {
      res.statusCode = 400
      res.json({ message: `There is no ${entity.name} collections!` })
      return
    }
    res.statusCode = 201
    res.json({ message: 'Successfully saved!' })
  }
}
