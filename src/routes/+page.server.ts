import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
    const stuff = await fetch('/api/posts');
    const posts = await stuff.json();
    return {posts: posts};
};