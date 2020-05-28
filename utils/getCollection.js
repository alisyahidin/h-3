import config from 'cms.config'

export default function getCollection() {
  return config.collections.map(collection => {
    if (collection.hasOwnProperty('folder')) {
      collection.create = collection.create ?? true
      collection.update = collection.update ?? true
      collection.delete = collection.delete ?? true
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