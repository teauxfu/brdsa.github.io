# Svelte migration 

This is a proposal for a migration of brdsa.org's source code to a new framework. 

## What's this about?

This branch is a prototype of migrating the brdsa.org website from it's current site generator [Jekyll](https://jekyllrb.com/), to a new one called [Svelte](https://svelte.dev/).

## Why do this?

Jekyll is a great tool because it makes it easy to quickly generate static sites. It's been around for a long time, has lots of community support online, and a low barrier to entry.

However, it can also be a little clunky when it comes to working with templates, especially for smaller reusable elements that you might want to use on every page. 
It's [includes](https://jekyllrb.com/docs/includes/) feature is specifically meant to address this use case. Later frameworks were designed entirely around reusing "components" in this way, making them easier to work with. 

Our current site currently uses a Jekyll template prepared by NTC. This has served us well, but it has a few rough edges. One being the [lone-wolf](https://github.com/manid2/lone-wolf-theme) base theme that the DSA template itself inherits from. The lone-wolf GitHub activity suggests it's no longer actively developed, and we've come across this somewhat recently [when we needed to update some socials icons](https://github.com/dsa-ntc/brdsa.github.io/pull/15).

We could avoid starting from scratch by forking lone-wolf and editing it, then having brdsa inherit from that.
But, for all that work, I suggest we might as well just rebuild it with something more convenient and retain the assets that we like. 

## Why Svelte specifically? 

pros 
- we can continue to build with a GitHub action and host on GitHub Pages
- we can retain all our existing markdown pages, and continue using markdown to add content 
- the Svelte syntax is very similar to Jekyll syntax and to HTML, so it's easy to transition
- it's an opportunity to make our site more distinctive 
- (opinion) it's easier to develop. the tooling is nice. the docs are nice.
cons
- it's time consuming to make the initial change
- it uses some file extensions that might be offputting for folks that want to contribute
- Jekyll was designed specifically for static site generation, Svelte was not

## Dev notes

### Initial setup

Initial creation of the project. In the startup options we added `tailwind` and `mdsvex`, and opted for the static adapter since we're pushing to github pages.

```
npx sv create my-app
cd my-app
npm install
npm run dev
```

#### GitHub workflow

Copied and modified this person's GH workflow, updated the Node version I think
https://github.com/khromov/derivault/blob/main/.github/workflows/build.yml

#### Setting up the blog route

I actually struggled with this a fair bit. 

### Useful links

how to debug your code
https://svelte.dev/docs/kit/debugging#Visual-Studio-Code

general guidance for project layout 
https://joyofcode.xyz/sveltekit-markdown-blog#rendering-a-single-post

some default settings to put in `.vscode` 
https://www.sveltepatterns.dev/getting-started-with-vscode

phenomenal guide, can probably ditch the mdsvex if it's excessive 
https://gebna.gg/blog/blog-from-scratch-using-sveltekit

baller
https://github.com/josh-collinsworth/sveltekit-blog-starter

https://mli.puffinsystems.com/blog/sveltekit-blog-docs-with-mdsvex

