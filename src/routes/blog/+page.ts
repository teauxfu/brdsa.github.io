import type { PageLoad } from './$types';
import type { PostMetadata } from '$lib/types';

export const load: PageLoad = async ({fetch}) => {
    const stuff = await fetch('/api/posts');
    const posts: PostMetadata[] = await stuff.json() as  PostMetadata[];
    return  { posts };
};