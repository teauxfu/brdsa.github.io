import type { Component } from "svelte";

// this type models the frontmatter of a markdown post

/** 
 * This type models the frontmatter of a Markdown blog post file.
*/
export type PostMetadata = {
  title: string;
  slug: string;
  date: Date;
  description: string;
  author: string;
  published: boolean;
  imageUrl?: string;
  imageDescription?:string;
};

export type PostModules = Record<string, () => Promise<{default: Component, metadata: PostMetadata}>>;