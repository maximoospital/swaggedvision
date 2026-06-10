import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const ropa = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/ropa' }),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    category: z.string().optional(),
    status: z.enum(['available', 'no_stock', 'coming_soon', 'ultimas']).default('available'),
    images: z.array(z.string()).min(1),
    url: z.string().url(),
    date: z.coerce.date().optional(),
  }),
});

const shows = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shows' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    time: z.string().optional(),
    venue: z.string(),
    city: z.string(),
    country: z.string(),
    ticketUrl: z.string().url().optional(),
    soldOut: z.boolean().default(false),
    status: z.enum(['proximamente', 'cancelado', 'terminado']).optional(),
    description: z.string().optional(),
    artists: z.array(z.string()).optional(),
    images: z.array(z.string()).optional(),
    flyer: z.string().optional(),
    recap: z.string().optional(),
  }),
});

const musica = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/musica' }),
  schema: z.object({
    title: z.string(),
    artist: z.string().optional(),
    releaseType: z.enum(['album', 'ep', 'mixtape', 'compilacion', 'en vivo', 'single']).optional(),
    year: z.number().optional(),
    trackCount: z.number().optional(),
    image: z.string(),
    soundcloudUrl: z.string().url().optional(),
    youtubeUrl: z.string().url().optional(),
    spotifyUrl: z.string().url().optional(),
    tidalUrl: z.string().url().optional(),
  }),
});

const novedades = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novedades' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
  }),
});

export const collections = { ropa, shows, musica, novedades };
