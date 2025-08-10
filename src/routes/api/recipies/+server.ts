import { json } from '@sveltejs/kit'
import { getRecipies } from '$lib/recipieUtils';

export async function GET() {
	
	try {
		const posts = getRecipies();
		return json(posts);
	} catch (error) {
		console.error('Error fetching posts:', error);
		return json({ error: 'Failed to fetch posts' }, { status: 500 });
	}
}
