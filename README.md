<!-- omit from toc -->
# Svelte migration 

This is a proposal for a migration of brdsa.org's source code to a new framework. 

- [What's this about?](#whats-this-about)
- [Why do this?](#why-do-this)
- [Why Svelte specifically?](#why-svelte-specifically)
- [TODOS](#todos)

## What's this about?

This branch is a proposal / proof of concept for of migrating the brdsa.org website from it's current site generator [Jekyll](https://jekyllrb.com/), to a new one called [SvelteKit](https://svelte.dev/docs/kit/introduction#What-is-SvelteKit).

## Why do this?

Changing a framework like this is usually something you'd want to avoid unless you had good reasons. Jekyll is a great tool because it makes it easy to quickly generate static sites. It's been around for a long time, has lots of community support online, and a low barrier to entry. So why go through the trouble of this? Personally, I wanted to do it for fun, but there are some other reasons that are worth considering.

Our current site currently uses a Jekyll template prepared by NTC. This is functional, but it has a few rough edges. One being the [lone-wolf](https://github.com/manid2/lone-wolf-theme) base theme that the DSA template itself inherits from. Our current setup tells Jekyll to treat lone-wolf as a remote theme, and we build on top of it. The lone-wolf GitHub activity suggests it's no longer actively developed. We've come across this somewhat recently [when we needed to update some socials icons](https://github.com/dsa-ntc/brdsa.github.io/pull/15).

Shy of changing the framework we could 
- fork lone-wolf, change it, and inherit from that
- find some other remote theme to inherit from
- don't use a remote theme and just improve the current stuff

But, for all that work, I suggest we might as well just rebuild it with something more convenient and retain the assets that we like. 

## Why Svelte specifically? 

TODO list some other tech specs to consider like build output size or some of the SEO features baked into SvelteKit

pros 
- we can continue to build with a GitHub action and host on GitHub Pages
- we can retain all our existing Markdown pages, and continue using Markdown to add content 
- the Svelte syntax is very similar to HTML and Jekyll syntax, so it's easy to transition
- it's an opportunity to make our site more distinctive. sites built with Svelte feel super fast.
- (opinion) it's easier to develop. the tooling is nice. the docs are nice.
cons
- it's time consuming to make the initial change
- it uses some file extensions that might be offputting for folks that want to contribute
- SvelteKit itself has an opinionated project structure that may be divisive 
- Jekyll was designed specifically for static site generation, Svelte was not
- Svelte is more niche

## TODOS
- update frontmatter so we can expose an image per post/page to the rss feed