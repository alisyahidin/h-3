module.exports = {
  collections: [
    {
      name: 'page',
      label: 'Pages',
      files: [
        {
          name: 'landingpage',
          label: 'Landing Page',
          file: 'content/landing-page.yaml',
          fields: [
            { name: 'logo', label: 'Logo', widget: 'image' },
            {
              name: 'our-people',
              label: 'Our People',
              widget: 'list',
              fields: [
                { name: 'name', label: 'Name', widget: 'string' },
                { name: 'avatar', label: 'Avatar', widget: 'image' },
                { name: 'position', label: 'Position', widget: 'string' },
                { name: 'company', label: 'Company', widget: 'string' },
                { name: 'description', label: 'Description', widget: 'text' },
              ]
            }
          ]
        },
      ]
    },
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
      identifier_field: 'name',
      fields: [
        { name: 'name', label: 'Name', widget: 'string' },
        { name: 'position', label: 'Position', widget: 'string' },
        { name: 'photo', label: 'Photo', widget: 'image' },
        {
          name: 'achievement',
          label: 'Achievements',
          widget: 'list',
          fields: [
            { name: 'name', label: 'Name', widget: 'string' }
          ]
        },
      ]
    },
  ]
}