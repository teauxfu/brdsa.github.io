import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/utils'

export async function GET({url}) {
	// Check if we should include hidden posts (useful for admin/preview)
	const includeHidden = url.searchParams.get('includeHidden') === 'true';
	
	try {
		const posts = getPosts(includeHidden);
		
		// Remove the module property for API response (not serializable)
		const serializedPosts = posts.map(({ module, ...post }) => post);
		
		return json(serializedPosts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}
