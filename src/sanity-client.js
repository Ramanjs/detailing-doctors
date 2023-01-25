import client from '@sanity/client'
const sanityClient = client({
  projectId: 'rzy1ts1z',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25'
})

export default sanityClient
