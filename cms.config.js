module.exports = {
  collections: [
    {
      name: 'blog',
      label: 'Blog',
      folder: 'content/blog',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' },
        { name: 'slug', label: 'Slug', widget: 'string' },
        { name: 'date', label: 'Published Date', widget: 'date' },
        { name: 'description', label: 'Description', widget: 'string' },
        { name: 'body', label: 'Main Content', widget: 'markdown' },
      ]
    },
    {
      name: 'team',
      label: 'Our Teams',
      folder: 'content/team',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' }
      ]
    },
    {
      name: 'page',
      label: 'Pages',
      files: [
        {
          name: 'about',
          label: 'About Page',
          file: 'content/about.yaml',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' }
          ]
        }
      ]
    },
  ]
}