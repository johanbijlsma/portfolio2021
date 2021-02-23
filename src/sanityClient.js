import { api } from './../sanity/sanity.json'
import sanityClient from '@sanity/client'
const { projectId, dataset } = api

const client = sanityClient({
    projectId,
    dataset,
    useCdn: true
})

export default client