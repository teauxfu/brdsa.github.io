import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { SvelteComponent } from 'svelte'

const posts = import.meta.glob<{
		default: SvelteComponent
		metadata: Record<string, string>
	}>('/src/posts/*.md', { eager: true })


export const load: PageServerLoad = async ({ params }) => {
	try {	
		console.log(`looking for ${params.slug}`)
		console.log(`i see ${Object.keys(posts)}`)
		// const post = await import(`../../../posts/${params.slug}.md`)
		// const post = await import('../../../posts/about.md')
		return {
			PostContent: posts[1].default,
			meta: { slug: params.slug } 
		}
	} catch(err) {
		console.log(`could not resolve a post for ${params.slug} ${err}`)
		error(404, 'No such blog slug');
	}
};