import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { slugToPath, getSlugs, getPostModules } from "$lib/utils";

export const load: PageLoad = (async ({ params }) => {
	const posts = getPostModules();
	const thisPost = posts[slugToPath(params.slug)];

	if(!thisPost)
		error(404, `can't find a post for ${params.slug}`);

	const { default: component, metadata } = await thisPost().then();
	return {component, metadata};
}) satisfies PageLoad;


// because /blog/[slug] is a dynamic route, we need to let SvelteKit know to pre-render our blog posts
// we do this by globbing over the posts dir 
// https://svelte.dev/docs/kit/page-options#entries
export const entries: EntryGenerator = async () => {
	return getSlugs();
};