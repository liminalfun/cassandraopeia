import { defineCollection, reference, z } from "astro:content";

const page = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            featured_image: reference("art").optional(),
            share_image: image().optional(),
            selected_artworks: z.array(reference("art")).optional(),
            tag: z.string().optional(),
            collection: z.string().optional(),
            title_image: image().optional(),
        }),
});

const artCollection = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string().optional(),
            date: z.string().optional(),
            imagePath: image().optional(),
            altText: z.string().optional(),
            tags: z.array(z.string()).optional(),
            sortOrder: z.number().optional(),
            medium: z.string().optional(),
            dimensions: z.string().optional(),
            backgroundColor: z.string().optional(),
        }),
});

export const collections = {
    page: page,
    art: artCollection,
};
