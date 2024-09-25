
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
    section: z.string(),
      
      description: z.string().optional(),
      tags: z.string().array().optional(),
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};