import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import yaml from 'yaml'
import connect from 'next-connect'
import getCollection from 'utils/getCollection'
import auth from 'middleware/auth'

const notFound = res => {
  res.statusCode = 404
  res.json({ message: 'Not found!' })
  res.end()
}

export default connect()
  .get((req, res) => {
    if (req.query.path.length > 2) {
      return notFound(res)
    }
    const [collectionName, slug] = req.query.path
    const collection = getCollection().find(({ name }) => name === collectionName)
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

        collection.fields
          .filter(({ widget }) => widget === 'date')
          .map(field => {
            return data[field.name] = data[field.name].toString()
          })

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
      response.collection = collection
    }

    res.statusCode = 200
    res.send(response)
  })