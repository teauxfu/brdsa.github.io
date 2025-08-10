import type { PostMetadata, Recipie } from '$lib/types';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = async ({fetch}) => {
    const stuff = await fetch('/api/recipies');
    const posts = await stuff.json() as Recipie[];
    return  { posts };
};