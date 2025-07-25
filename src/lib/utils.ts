import type { PostModules } from "./types";

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