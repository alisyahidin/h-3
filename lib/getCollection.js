import config from '../cms.config'

const getCollection = () => {
  return config.collections.map(collection => {
    if (collection.hasOwnProperty('folder')) {
      collection.create = collection.create ?? true
      collection.update = collection.update ?? true
      collection.delete = collection.delete ?? true
    }
    if (collection.hasOwnProperty('files')) {
      collection.create = false
      collection.update = true
      collection.delete = false
    }
    return collection
  })
}

export default getCollection