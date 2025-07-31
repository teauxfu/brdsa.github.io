import type { PostMetadata, PostModules } from './types';

// Convert file path to default slug (filename without extension)
export function pathToSlug(path: string): string {
	return path.replace('/src/lib/posts/', '').replace('.md', '');
}

// Convert slug back to file path
export function slugToPath(slug: string): string {
	return `/src/lib/posts/${slug}.md`;
}

// Get all post modules (lazy-loaded for dynamic imports)
export function getPostModules(): PostModules {
	return import.meta.glob('/src/lib/posts/*.md') as PostModules;
}

// Get all available slugs (for static generation)
export async function getSlugs(): Promise<{ slug: string }[]> {
	const modules = getPostModules();
	const slugs: { slug: string }[] = [];
	const seen = new Set<string>();

	// Load all modules to check their frontmatter for custom slugs
	for (const [path, moduleLoader] of Object.entries(modules)) {
		const module = await moduleLoader();
		const metadata = (module as any).metadata as PostMetadata;

		// Use custom slug from frontmatter, or fall back to filename
		const slug = metadata.slug || pathToSlug(path);

		if (seen.has(slug)) {
			throw new Error(`Duplicate slug detected: ${slug} (from ${path})`);
		}

		seen.add(slug);
		slugs.push({ slug });
	}

	return slugs;
}

// Get all posts with metadata (eager loading for immediate access)
export function getPosts(includeHidden = false): PostMetadata[] {
	const paths = import.meta.glob('/src/lib/posts/*.md', { eager: true });
	const posts: PostMetadata[] = [];
	const seenSlugs = new Set<string>();


	for (const [path, file] of Object.entries(paths)) {
		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as PostMetadata;

			// Use custom slug from frontmatter, or fall back to filename
			const slug = metadata.slug || pathToSlug(path);

			// Check for duplicate slugs
			if (seenSlugs.has(slug)) {
				throw new Error(`Duplicate slug detected: ${slug} (from ${path})`);
			}
			seenSlugs.add(slug);

			const post: PostMetadata = {
				...metadata,
				slug, // Ensure slug is always present
				author: metadata.author || 'Baton Rouge DSA',
				hidden: metadata.hidden || false,
				module: file
			};

			// Only include non-hidden posts unless explicitly requested
			if (includeHidden || !post.hidden) {
				posts.push(post);
			} 
		}
	}

	// Sort by date (newest first)
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}

// Get a single post by slug (for dynamic routes)
export async function getPostBySlug(targetSlug: string): Promise<PostMetadata | null> {
	const modules = getPostModules();

	// First, try to find by custom slug in frontmatter
	for (const [path, moduleLoader] of Object.entries(modules)) {
		const module = await moduleLoader();
		const metadata = (module as any).metadata as PostMetadata;
		const slug = metadata.slug || pathToSlug(path);

		if (slug === targetSlug) {
			return {
				...metadata,
				slug,
				author: metadata.author || 'Baton Rouge DSA',
				hidden: metadata.hidden || false,
				module
			};
		}
	}

	return null;
}

// Helper to get all posts including hidden ones (useful for admin views)
export function getAllPosts(): PostMetadata[] {
	return getPosts(true);
}
