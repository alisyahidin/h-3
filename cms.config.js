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
        { name: 'date', label: 'Published Date', widget: 'date' },
        { name: 'description', label: 'Description', widget: 'string' },
        { name: 'body', label: 'Main Content', widget: 'markdown' },
      ]
    },
    {
      name: 'demo',
      label: 'Demo',
      files: [
        {
          name: 'all',
          label: 'Demo Input Type',
          file: 'content/demo.yaml',
          fields: [
            { name: 'string', label: 'String', widget: 'string' },
            { name: 'text', label: 'Text', widget: 'text' },
            { name: 'date', label: 'Date', widget: 'date' },
            { name: 'image', label: 'Image', widget: 'image' },
            { name: 'markdown', label: 'Markdown', widget: 'markdown' },
            { name: 'list', label: 'List', widget: 'list', fields: [
              { name: 'string-list', label: 'String in List', widget: 'string'},
              { name: 'date-list', label: 'Date in List', widget: 'date'},
            ] },
            { name: 'object', label: 'Object', widget: 'object', fields: [
              { name: 'string-obj', label: 'String in Object', widget: 'string'}
            ] },
          ]
        },
      ],
    },
  ]
}