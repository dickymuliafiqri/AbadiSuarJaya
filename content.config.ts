import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: "page",
      source: "**/products/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.string(),
        seo: z
          .object({
            title: z.string().optional(),
            description: z.string().optional(),
          })
          .optional(),
      }),
    }),
  },
});
