import type { Recipie, RecipieModules } from "./types";

// NOTE this is pretty much just copy/pasted from the postUtils to allow for minor differences in loading without complicating things too much. consider merging later if it gets out of hand

// Convert file path to default slug (filename without extension)
export function pathToSlug(path: string): string {
	return path.replace("/src/lib/posts/recipies/", "").replace(".md", "");
}

// Convert slug back to file path
export function slugToPath(slug: string): string {
	return `/src/lib/posts/recipies/${slug}.md`;
}

export function getRecipieModules(): RecipieModules {
	return import.meta.glob("/src/lib/posts/recipies/*.md") as RecipieModules;
}

// Get all posts with metadata (eager loading for immediate access)
export function getRecipies(includeHidden = false): Recipie[] {
	const paths = import.meta.glob("/src/lib/posts/recipies/*.md", { eager: true });
	const posts: Recipie[] = [];
	const seenSlugs = new Set<string>();

	for (const [path, file] of Object.entries(paths)) {
		if (file && typeof file === "object" && "metadata" in file) {
			const metadata = file.metadata as Recipie;

			// Use custom slug from frontmatter, or fall back to filename
			const slug = metadata.slug || pathToSlug(path);

			// Check for duplicate slugs
			if (seenSlugs.has(slug)) {
				throw new Error(`Duplicate slug detected: ${slug} (from ${path})`);
			}
			seenSlugs.add(slug);

			const post: Recipie = {
				...metadata,
				slug, // Ensure slug is always present
				author: metadata.author || "Baton Rouge DSA",
				hidden: metadata.hidden || false
			};

			// Only include non-hidden posts unless explicitly requested
			if (includeHidden || !post.hidden) {
				posts.push(post);
			}
		}
	}

	// Sort by date (newest first)
	posts.sort((a, b) => {
		if (a.date && b.date) return new Date(b.date).getTime() - new Date(a.date).getTime();
		else return -1;
	});
	return posts;
}

export function getSummary(recipie: Recipie) {
	const values = [];
	values.push(recipie.difficulty);
	if (recipie.cookTime) values.push(recipie.cookTime);
	if (recipie.feeds) values.push(`feeds ${recipie.feeds}`);
	return values.join(", ");
}

// Get a single post by slug (for dynamic routes)
export async function getPostBySlug(targetSlug: string): Promise<Recipie | null> {
	const modules = getRecipieModules();
	// First, try to find by custom slug in frontmatter
	for (const [path, moduleLoader] of Object.entries(modules)) {
		const module = await moduleLoader();
		const metadata = (module as Record<string, unknown>).metadata as Recipie;
		const slug = metadata.slug || pathToSlug(path);

		if (slug === targetSlug) {
			return {
				...metadata,
				slug,
				author: metadata.author || "Baton Rouge DSA",
				hidden: metadata.hidden || false
			};
		}
	}

	return null;
}
