import { defineCollection, z } from 'astro:content';

const linkSchema = z.array(z.record(z.string().trim()));

const docSchema = z.object({
    title: z.string(),
    description: z.string(),
    hideTableOfContent:z.boolean().optional(),
    links: linkSchema.optional()
})
const docsCollection = defineCollection({
    type: "content",
    schema: docSchema
})

export const collections = {
    docs: docsCollection,
    components:docsCollection,
    preset:docsCollection
};