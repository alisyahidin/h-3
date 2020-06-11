import { existsSync, mkdirSync, readFileSync, readdirSync } from 'fs'
import connect from 'next-connect'
import matter from 'gray-matter'
import yaml from 'yaml'
import collections from 'utils/getCollection'
import { notFound } from 'utils/api/response'
import getSlug from 'utils/api/getSlug'

export default connect()
  .get((req, res) => {
    const collection = collections().find(({ name }) => name === req.query.name)
    if (typeof collection === 'undefined') return notFound(res)

    const response = { entries: [], collection: null }

    if (collection.hasOwnProperty('folder')) {
      !existsSync(collection.folder) && mkdirSync(collection.folder)
      const entries = readdirSync(collection.folder).map(filename => {
        const file = readFileSync(`${collection.folder}/${filename}`, 'utf8').toString()
        const { data: metaData, content } = matter(file)
        const data = { ...metaData, body: content }

        return { name: getSlug(collection.slug, data), data }
      })
      response.entries = entries

      res.statusCode = 200
      res.json(response)
      res.end()
      return
    }

    if (collection.hasOwnProperty('files')) {
      const entries = collection.files.map(({ file: filename, name }) => {
        const file = readFileSync(filename, 'utf8')
        const data = yaml.parse(file)

        return { name, data }
      })
      response.entries = entries

      res.statusCode = 200
      res.json(response)
      res.end()
      return
    }
  })