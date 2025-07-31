import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import { slugToPath, getSlugs, getPostModules, getPosts } from "$lib/utils";

// SvelteKit pages are expected to export this load function
// this params object provides info about the current request, such as which slug is in the URL 

export const load: PageServerLoad = (async ({ params }) => {
	// this will return pointers to all the available posts in the `/src/lib/posts/` folder
	const posts = getPosts(true);
	// we find a match by the slug, which should be unique 
	// TODO verify that getPostModules throws at build time if a duplicate is detected

	console.log('blog load sees posts: ' + posts);

	const thisPost = posts.find(p => p.slug == params.slug);

	if(!thisPost || !thisPost.module)
		error(404, "Sorry, we couldn't find that page");

	// here we actually load the markdown file and return it as an object whose
	// default property is a svelte component that can be rendered, plus a metadata object
	// that is populated with the stuff in frontmatter

	const path = slugToPath(params.slug);
	const mods = import.meta.glob(`/src/lib/posts/${path}.md`, { eager: true });

	const {default: component} = await thisPost.module().then();

	return {component, thisPost};
}) satisfies PageServerLoad;


// because /blog/[slug] is a dynamic route, we need to let SvelteKit know to pre-render our blog posts
// we do this by globbing over the posts dir 
// https://svelte.dev/docs/kit/page-options#entries
export const entries: EntryGenerator = () => {
	const posts = getPosts(true);
	const slugs = posts.map(p => ({slug: p.slug}));
	console.log(slugs);
	return slugs;
};