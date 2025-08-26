import { json } from '@sveltejs/kit'
import { getPosts } from '$lib/postUtils'

export async function GET() {
	
	try {
		const posts = getPosts();
		return json(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}
