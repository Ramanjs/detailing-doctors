export const studio = {
  name: 'studio',
  title: 'Studio',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'calendar',
      title: 'Calendar',
      type: 'array',
      of: [
        {
          name: 'planner',
          title: 'Planner',
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'date'
            },
            {
              name: 'slots',
              title: 'Slots',
              type: 'array',
              of: [
                {
                  name: 'slot',
                  title: 'Slot',
                  type: 'object',
                  fields: [
                    {
                      name: 'slot_time',
                      title: 'Slot Time',
                      type: 'string'
                    },
                    {
                      name: 'available',
                      title: 'Available',
                      type: 'boolean'
                    }
                  ]
                }
              ]
            }
          ],
          preview: {
            select: {
              title: 'day'
            }
          }
        }
      ]
    }
  ]
}
