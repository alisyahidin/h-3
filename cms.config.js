module.exports = {
  content: [
    {
      name: 'blog',
      label: 'Blog',
      folder: 'content/blog',
      fields: [
        { name: 'title', label: 'Title', widget: 'string' }
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
          file: 'content/page.json',
          fields: [
            { name: 'title', label: 'Title', widget: 'string' }
          ]
        }
      ]
    },
  ]
}