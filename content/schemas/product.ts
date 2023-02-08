export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [
        {
          name: 'point',
          title: 'Point',
          type: 'string'
        }
      ]
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    }
  ]
}
