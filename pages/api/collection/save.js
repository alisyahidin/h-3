const matter = require('gray-matter')
const yaml = require('yaml')
const fs = require('fs')
const collections = require('../../../lib/getCollection')

const invalidCollection = (res, entryName) => {
  res.statusCode = 400
  res.json({ message: `There is no ${entryName} collections!` })
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
    const { entry, data } = req.body
    const collection = collections.default().find(({ name }) => name === entry.name)
    if (typeof collection === 'undefined') {
      invalidCollection(res, entry.name)
    }

    try {
      if (collection.hasOwnProperty('folder')) {
        const { body, ...meta } = data
        fs.existsSync(entry.file) && fs.unlinkSync(entry.file)
        fs.writeFileSync(`${collection.folder}/${meta.slug}.md`, matter.stringify(body ?? '', meta))
      }
      if (collection.hasOwnProperty('files')) {
        const collectionFile = collection.files.find(({ name }) => name === entry.slug)
        fs.writeFileSync(`${collectionFile.file}`, yaml.stringify(data))
      }
      success(res)
    } catch (e) {
      console.log(e)
      error(res)
    }
  }
}
