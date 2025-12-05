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
		year: z.string().optional(),
		// image: z.object({
		// 	src: z.string(),
		// 	alt: z.string(),
		// }),
		cover: image(),
		coverAlt: z.string(),
		tags: z.array(z.string()),
		sortOrder: z.number().optional(),
	}),
});

export const collections = {
    page: page,
	art: artCollection,
};