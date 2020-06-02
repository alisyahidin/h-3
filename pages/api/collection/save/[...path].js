const matter = require('gray-matter')
const yaml = require('yaml')
const fs = require('fs')
const collections = require('utils/getCollection')

const invalidCollection = (res, entryName) => {
  res.statusCode = 404
  res.json({ message: `There is no ${entryName} collections!` })
  return
}

const success = res => {
  res.statusCode = 201
  res.json({ message: 'Successfully saved!' })
  return
}

const notFound = res => {
  res.statusCode = 404
  res.json({ message: 'Not found!' })
  return
}

const error = res => {
  res.statusCode = 500
  res.json({ message: 'Something went wrong, please try again later :)' })
  return
}

export default (req, res) => {
  if (req.method === 'POST') {
    const { data: dataBody } = req.body
    const [collectionName, slug] = req.query.path
    const collection = collections.default().find(({ name }) => name === collectionName)
    if (typeof collection === 'undefined') {
      invalidCollection(res, collectionName)
    }

    try {
      if (collection.hasOwnProperty('folder')) {
        if (slug && !fs.existsSync(`${collection.folder}/${slug}.md`)) return notFound(res)

        const { body, ...data } = dataBody
        fs.existsSync(`${collection.folder}/${slug}.md`) && fs.unlinkSync(`${collection.folder}/${slug}.md`)
        fs.writeFileSync(`${collection.folder}/${data.slug}.md`, matter.stringify(body ?? '', data))
      }
      if (collection.hasOwnProperty('files')) {
        const collectionFile = collection.files.find(({ name }) => name === slug)
        fs.writeFileSync(`${collectionFile.file}`, yaml.stringify(dataBody))
      }
      success(res)
    } catch (e) {
      console.log(e)
      error(res)
    }
  }
}
