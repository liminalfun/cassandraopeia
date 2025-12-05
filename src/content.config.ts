import { defineCollection, z } from 'astro:content';

const page = defineCollection({
    schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

const artCollection = defineCollection({
	schema: ({ image}) => z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.string().optional(),
		imagePath: image(),
		altText: z.string(),
		tags: z.array(z.string()),
		sortOrder: z.number().optional(),
		medium: z.string().optional(),
	}),
});

export const collections = {
    page: page,
	art: artCollection,
};