import type { PostMetadata, PostModules } from "./types";

export function pathToSlug(path: string)  {
	return path.replace("/src/posts/", "").replace(".md", "");
}

export function slugToPath(slug: string)  {
	return `/src/posts/${slug}.md`;
}

export function getPostModules()
{
	const modules = import.meta.glob("/src/posts/*.md") as PostModules;
	return modules;
}

export function getSlugs()
{
	const modules = getPostModules();
	const seen = new Set();
	const entries = Object.keys(modules).map((path) => {
		const slug = pathToSlug(path);
		if (seen.has(slug)) {
			throw new Error(`Duplicate slug detected: ${slug}`);
		}
		seen.add(slug);
		return { slug };
	});


	return entries;
}


export async function getPosts() {
	let posts: PostMetadata[] = []

	const paths = import.meta.glob('/src/posts/*.md', { eager: true })

	for (const path in paths) {
		const file = paths[path]
		const slug = path.split('/').at(-1)?.replace('.md', '')

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostMetadata, 'slug'>
			const post = { ...metadata, slug } satisfies PostMetadata
			if(post.published)
				posts.push(post);
		}
	}

	posts = posts.sort((first, second) =>
    	new Date(second.date).getTime() - new Date(first.date).getTime()
	)

	return posts
}