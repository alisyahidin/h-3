import { existsSync, mkdirSync, writeFileSync, readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import yaml from 'yaml'
import connect from 'next-connect'
import getCollection from 'utils/getCollection'

export default connect()
  .get((req, res) => {
    const collections = [...getCollection()]
    collections.map(collection => {
      if (collection.hasOwnProperty('folder')) {
        !existsSync(collection.folder) && mkdirSync(collection.folder)
        collection.entries = readdirSync(collection.folder).map(filename => {
          const file = readFileSync(`${collection.folder}/${filename}`)
          const { data } = matter(file)

          return {
            name: filename.replace('.md', ''),
            label: data[collection.identifier_field]
          }
        })
      }
      if (collection.hasOwnProperty('files')) {
        collection.entries = collection.files.map(collectionFile => {
          const { file, label, name, fields } = collectionFile
          if (!existsSync(file)) {
            const initialFile = {}
            fields.forEach(obj => initialFile[obj.name] = '')
            writeFileSync(file, yaml.stringify(initialFile))
          }
          return {
            name,
            label
          }
        })
      }
      collection.isFile = collection.hasOwnProperty('files')
    })

    res.statusCode = 200
    res.send([...collections])
  })