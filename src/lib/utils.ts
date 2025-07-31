import type { PostMetadata, PostModules } from './types';

export function pathToSlug(path: string) {
	return path.replace('/src/lib/posts/', '').replace('.md', '');
}

export function slugToPath(slug: string) {
	return `/src/lib/posts/${slug}.md`;
}

export function getPostModules() {
	const modules = import.meta.glob('/src/lib/posts/*.md') as PostModules;
	return modules;
}

export function getSlugs() {
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

export function getPosts(all = false) {
	let posts: PostMetadata[] = [];

	const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });

	console.log('get posts sees posts: ' + Object.keys(paths));

	for (const path in paths) {
		const file = paths[path];
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as PostMetadata;
			const post = { ...metadata, module: file } satisfies PostMetadata;
			if (!post.author) post.author = 'Baton Rouge DSA';
			if (!post.hidden && !all) {
				posts.push(post);
				console.log('pushed  slug ' + post.slug);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	console.log('get posts returns posts: ' + posts.map((p) => p.slug));

	return posts;
}
