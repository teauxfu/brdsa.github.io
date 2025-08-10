import type { PageServerLoad } from "./$types";
import type { PostMetadata } from "$lib/types";

export const load: PageServerLoad = async ({ fetch }) => {
	const stuff = await fetch("/api/posts");
	const posts: PostMetadata[] = (await stuff.json()) as PostMetadata[];
	// only return the 5 most recent posts
	return { posts: posts.slice(0, 5) };
};
