import { createClient }          from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: "1jmyyjqm",
  dataset: "production",
  apiVersion: "2026-07-26",
  useCdn: true,
})

const builder = createImageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}
