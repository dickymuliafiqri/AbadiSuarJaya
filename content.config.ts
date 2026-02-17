import { defineContentConfig, defineCollection, property } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    products: defineCollection({
      type: "page",
      source: "**/products/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.object({
          src: property(z.string()).editor({ input: "media" }),
          alt: z.string(),
        }),
        price: z.string().optional(),
      }),
    }),
  },
});
