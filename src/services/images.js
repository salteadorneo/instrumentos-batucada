import { createClient } from 'pexels'

const client = createClient('x2bQfZamNALwqVl6bbLB4ElzvWDacXbmxzgpu6LY55uBrSYbjocdkNg0')

export async function getSearch (query) {
  return await client.photos.search({ query })
}

export async function getBestPhoto (query) {
  const { photos } = await client.photos.search({ query, per_page: 1 })
  return photos[0]
}
