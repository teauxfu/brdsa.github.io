import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { getPosts, getPostBySlug } from '$lib/utils';
import { render } from 'svelte/server';
import type { Picture } from 'vite-imagetools';


// SvelteKit pages are expected to export this load function
// this params object provides info about the current request, such as which slug is in the URL

export const load: PageServerLoad = (async ({ params }) => {
	const { slug } = params;

	try {
		const post = await getPostBySlug(slug);

		if (!post) {
			throw error(404, 'Post not found');
		}

		// For server-side rendering, we need to render the component to HTML
		// The module.default is the Svelte component
		const Component = post.module?.default;

		if (!Component) {
			throw error(500, 'Post content could not be loaded');
		}

		// Render the component to HTML string using Svelte 5's render function
		let html = '';
		try {
			const renderResult = render(Component, {
				props: {}
			});

			// In Svelte 5, render() returns { body, head }
			html = renderResult.body || '';
		} catch (renderError) {
			console.error('Error rendering component:', renderError);
			html = '<p>Content rendering failed</p>';
		}

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
			if(match)
				hero = match.default;
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
			html,
			hero
		};
	} catch (err) {
		console.error('Error loading post:', err);
		throw error(404, 'Post not found');
	}
}) satisfies PageServerLoad;

// because /blog/[slug] is a dynamic route, we need to let SvelteKit know to pre-render our blog posts
// we do this by globbing over the posts dir
// https://svelte.dev/docs/kit/page-options#entries
export const entries: EntryGenerator = () => {
	const posts = getPosts(true);
	const slugs = posts.map((p) => ({ slug: p.slug ?? p.title }));
	return slugs;
};
