import type { PageServerLoad } from './$types';
import type { PostMetadata } from '$lib/types';

export const load: PageServerLoad = async ({fetch}) => {
    const stuff = await fetch('/api/posts');
    const posts: PostMetadata[] = await stuff.json() as  PostMetadata[];
    return  { posts };
};