const matter = require('gray-matter')
const yaml = require('yaml')
const fs = require('fs')
const { collections } = require('../../../cms.config')

const invalidCollection = (res, entityName) => {
  res.statusCode = 400
  res.json({ message: `There is no ${entityName} collections!` })
  return
}

const success = res => {
  res.statusCode = 201
  res.json({ message: 'Successfully saved!' })
  return
}

const error = res => {
  res.statusCode = 500
  res.json({ message: 'Something went wrong, please try again later :)' })
  return
}

export default (req, res) => {
  if (req.method === 'POST') {
    const { entity, data } = req.body
    const collection = collections.find(({ name }) => name === entity.name)
    if (typeof collection === 'undefined') {
      invalidCollection(res, entity.name)
    }
    try {
      if (collection.hasOwnProperty('folder')) {
        const { body, ...meta } = data
        fs.writeFileSync(`${collection.folder}/${entity.slug}.md`, matter.stringify(body, meta))
      }
      if (collection.hasOwnProperty('files')) {
        const collectionFile = collection.files.find(({ name }) => name === entity.slug)
        fs.writeFileSync(`${collectionFile.file}`, yaml.stringify(data))
      }
      success(res)
    } catch (e) {
      console.log(e)
      error(res)
    }
  }
}
