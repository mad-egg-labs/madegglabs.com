import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: "1jmyyjqm",
  dataset: "production",
  apiVersion: "2026-07-26",
  useCdn: true,
})
