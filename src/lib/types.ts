import type { Component } from "svelte";

// this type models the frontmatter of a markdown post

/** 
 * This type models the frontmatter of a Markdown blog post file.
*/
export interface PostMetadata {
	title: string;
	date: string;
	author?: string;
	slug?: string; // Custom slug from frontmatter
	hidden?: boolean; // Whether to hide from public post lists
	description?: string;
	tags?: string[];
	imageUrl?: string;
	imageDescription?: string;
}

export type PostModules = Record<
	string,
	() => Promise<{default: Component; metadata: PostMetadata;}>
>;