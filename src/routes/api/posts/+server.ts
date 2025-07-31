import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/utils'

export async function GET() {
	
	try {
		const posts = getPosts();
		
		// Remove the module property for API response (not serializable)
		const serializedPosts = posts.map(({ module, ...post }) => post);
		
		return json(serializedPosts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}
