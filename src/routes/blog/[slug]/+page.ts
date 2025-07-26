import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { slugToPath, getSlugs, getPostModules } from "$lib/utils";

// SvelteKit pages are expected to export this load function
// this params object provides info about the current request, such as which slug is in the URL 

export const load: PageLoad = (async ({ params }) => {
	// this will return pointers to all the available posts in the `/src/posts/` folder
	const posts = getPostModules();
	// we find a match by the slug, which should be unique 
	// TODO verify that getPostModules throws at build time if a duplicate is detected
	const thisPost = posts[slugToPath(params.slug)];

	if(!thisPost)
		error(404, "Sorry, we couldn't find that page");

	// here we actually load the markdown file and return it as an object whose
	// default property is a svelte component that can be rendered, plus a metadata object
	// that is populated with the stuff in frontmatter
	const { default: component, metadata } = await thisPost().then();
	
	// don't serve the blog post if it's not meant to be published
	// we can still use the text on the site if we reference it explicitly
	// it just won't be served as a blog post on its own 
	if(!metadata.published)
		error(404, "Sorry, we couldn't find that page");

	return {component, metadata};
});


// because /blog/[slug] is a dynamic route, we need to let SvelteKit know to pre-render our blog posts
// we do this by globbing over the posts dir 
// https://svelte.dev/docs/kit/page-options#entries
export const entries: EntryGenerator = async () => {
	return getSlugs();
};