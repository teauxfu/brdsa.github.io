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
	const entries = Object.keys(modules).map((path) => {
		return { slug: pathToSlug(path) };
	});

	return entries;
}