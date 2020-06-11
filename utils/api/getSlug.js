import mustache from 'mustache'

const getSlug = (slug, data) => {
  return mustache.render(slug, data).replace(/\s/g, '-').toLowerCase()
}

export default getSlug