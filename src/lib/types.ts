import type { Component } from "svelte";

export type Post = {
  id: number;
  title: string;
  slug: string;
  date: Date;
  description: string;
  published: boolean;
  content: string;
  // Add other fields as needed
};

export type PostModules = Record<string, () => Promise<{default: Component, metadata: Post}>>;