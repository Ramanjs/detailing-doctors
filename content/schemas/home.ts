export const home = {
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'stats',
      title: 'Stats',
      type: 'array',
      of: [
        {
          name: 'stat',
          title: 'Stat',
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'number'
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
