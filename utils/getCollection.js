import { readFileSync } from 'fs'
import yaml from 'yaml'

export default function getCollection() {
  const file = readFileSync('collection.yaml', 'utf8')
  const collections = yaml.parse(file)
  return collections.map(collection => {
    if (collection.hasOwnProperty('folder')) {
      collection.create = collection.create ?? true
      collection.update = collection.update ?? true
      collection.delete = collection.delete ?? true
      collection.slug = collection.slug ?? '{{title}}'
      collection.identifier_field = collection.identifier_field ?? 'title'
    }
    if (collection.hasOwnProperty('files')) {
      collection.create = false
      collection.update = true
      collection.delete = false
    }
    return collection
  })
}