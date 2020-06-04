import { existsSync, mkdirSync, writeFileSync, readFileSync, unlinkSync } from 'fs'
import matter from 'gray-matter'
import yaml from 'yaml'
import connect from 'next-connect'
import collections from 'utils/getCollection'
import auth from 'middleware/auth'
import mustache from 'mustache'

const notFound = res => {
  res.statusCode = 404
  res.json({ message: 'Not found!' })
  res.end()
}
const invalidCollection = (res, entryName) => {
  res.statusCode = 404
  res.json({ message: `There is no ${entryName} collections!` })
  res.end()
}

const success = res => {
  res.statusCode = 201
  res.json({ message: 'Successfully saved!' })
  res.end()
}

const error = res => {
  res.statusCode = 500
  res.json({ message: 'Something went wrong, please try again later :)' })
  res.end()
}

const getSlug = (slug, data) => {
  return mustache.render(slug, data).replace(/\s/g, '-').toLowerCase()
}

export default connect()
  .get((req, res) => {
    if (req.query.path.length > 2) {
      return notFound(res)
    }
    const [collectionName, slug] = req.query.path
    const collection = collections().find(({ name }) => name === collectionName)
    if (typeof collection === 'undefined') return notFound(res)

    const response = { entry: null, collection: null }

    if (collection.hasOwnProperty('folder')) {
      !existsSync(collection.folder) && mkdirSync(collection.folder)
      if (typeof slug === 'undefined') {
        response.entry = {
          name: collection.name,
          label: collection.label,
          file: null,
          slug: null,
          fields: collection.fields,
          data: {}
        }
      } else {
        if (!existsSync(`${collection.folder}/${slug}.md`)) return notFound(res)

        const file = readFileSync(`${collection.folder}/${slug}.md`, 'utf8').toString()
        const { data, content } = matter(file)

        response.entry = {
          name: collection.name,
          label: collection.label,
          file: `${collection.folder}/${slug}.md`,
          slug: null,
          fields: collection.fields,
          data: {
            ...data,
            body: content
          }
        }
      }
      response.collection = collection
    }

    if (collection.hasOwnProperty('files')) {
      const collectionFile = collection.files.find(({ name }) => name === slug)
      if (typeof collectionFile === 'undefined') return notFound(res)

      const file = readFileSync(collectionFile.file, 'utf8')
      const data = yaml.parse(file)

      response.entry = {
        name: collection.name,
        label: collection.label,
        file: collectionFile.file,
        slug: collectionFile.name,
        fields: collectionFile.fields,
        data
      }
      collection.files = collection.files.filter(({ name }) => name === slug)
      response.collection = collection
    }

    res.statusCode = 200
    res.send(response)
  })
  .use(auth)
  .post((req, res) => {
    const { data: dataBody } = req.body
    const [collectionName, slug] = req.query.path
    const collection = collections().find(({ name }) => name === collectionName)
    if (typeof collection === 'undefined') {
      invalidCollection(res, collectionName)
    }

    try {
      if (collection.hasOwnProperty('folder')) {
        if (slug && !existsSync(`${collection.folder}/${slug}.md`)) return notFound(res)

        const { body, ...data } = dataBody
        existsSync(`${collection.folder}/${slug}.md`) && unlinkSync(`${collection.folder}/${slug}.md`)
        writeFileSync(`${collection.folder}/${getSlug(collection.slug, data)}.md`, matter.stringify(body ?? '', data))
      }
      if (collection.hasOwnProperty('files')) {
        const collectionFile = collection.files.find(({ name }) => name === slug)
        writeFileSync(`${collectionFile.file}`, yaml.stringify(dataBody))
      }
      success(res)
    } catch (e) {
      console.log(e)
      error(res)
    }
  })