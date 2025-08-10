import { getPostBySlug, getRecipieModules, getRecipies, slugToPath } from '$lib/recipieUtils';
import { error } from '@sveltejs/kit';
import type { Picture } from 'vite-imagetools';
import type { EntryGenerator, PageLoad } from './$types';

// SvelteKit pages are expected to export this load function
// this params object provides info about the current request, such as which slug is in the URL

export const load: PageLoad = (async ({ params }) => {
	const { slug } = params;

	try {
		const post = await getPostBySlug(slug);
		if (!post) {
			throw error(404, 'Post not found');
		}
		
		const posts = getRecipieModules();
		const contentModule = posts[slugToPath(params.slug)];
		const { default: component, metadata } = await contentModule().then();


		const imageModules = import.meta.glob(
			'/src/lib/images/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
			{
				eager: true,
				query: {
					enhanced: true
				}
			}
		);

		let match: any | undefined = undefined;
		let hero: Picture | undefined;
		if (post.imageUrl) {
			match = imageModules[`/src/lib/images/${post.imageUrl}`];
			// the typescript compiler says there's no default on match, but the code only works with it, so...
			if (match) hero = match.default;
		}

		return {
			post: {
				title: post.title,
				date: post.date,
				author: post.author,
				slug: post.slug,
				hidden: post.hidden,
				description: post.description,
				tags: post.tags,
				imageUrl: post.imageUrl,
				imageDescription: post.imageDescription
			},
			hero,
			component
		};
	} catch (err) {
		console.error('Error loading recipie:', err);
		throw error(404, 'Recipie not found');
	}
}) satisfies PageLoad;

// because /blog/[slug] is a dynamic route, we need to let SvelteKit know to pre-render our blog posts
// we do this by globbing over the posts dir
// https://svelte.dev/docs/kit/page-options#entries
export const entries: EntryGenerator = () => {
	const posts = getRecipies(true);
	const slugs = posts.map((p) => ({ slug: p.slug ?? 'no-slug' }));
	return slugs;
};
