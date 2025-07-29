<!-- omit from toc -->
# SvelteKit migration (WIP)

TODOS
- [x] nav icons above the brdsa text
- [x] checkboxes on interest form 
- [x] get involved shorter text on top, right to calendar on load 
- [x] donate is too skinny 
- [ ] black on grey image hero in home page (dark mode)

re: text contrast concerns, haven't applied it yet but found this https://webaim.org/resources/contrastchecker/

This is a proposal for a migration of brdsa.org's source code to a new framework. 




- [What's this about?](#whats-this-about)
- [Why do this?](#why-do-this)
- [Why SvelteKit specifically?](#why-sveltekit-specifically)
- [On approval](#on-approval)
- [Technical details](#technical-details)
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

But, for all that work, I suggest we might as well just rebuild it with something more convenient/powerful and retain the assets that we like. 

## Why SvelteKit specifically? 

Svelte is a JavaScript library for creating UIs, and SvelteKit is a webserver tailored to serving Svelte apps.
SvelteKit can also be used as a static site generator, which is what Jekyll is and what we want it for. 

Our website is a static site -- just some files sitting on a server without any dynamic content like a comments section. The parts that are truly interactive, like the mailing list and so on, are served through `<iframe>`s which act kind of like windows into a different website. For example, there's no comment section or like buttons because that would require updating a database somewhere, which we don't have or need.

More to the point, because SvelteKit excels at pre-prendering pages for optimal load times and SEO performance, all those benefits apply to using it as a static site generator. Static sites are great because they can usually be hosted for free or cheaply. Our current (free) webhost, GitHub Pages, requires that we produce a static build. 

Svelte itself as a UI library has a really robust component model -- basically we can design a few elements on the page and reuse them easily. For anything but trivial HTML layouts, this is essential. Furthermore, through community libraries such as `mdsvex` we can easily take advantage of using Markdown for writing content. In combination, we get to design beautiful and responsive UI using Svelte, and do the bulk of our copy/prose/post authoring in easy-breezy Markdown.

pros 
- we can continue to build with a GitHub action and host on GitHub Pages
- we can retain all our existing Markdown pages, and continue using Markdown to add content 
- the Svelte syntax is very similar to HTML and Jekyll syntax, so it's easy to transition
- it's an opportunity to make our site more distinctive. sites built with Svelte feel super fast.
- (opinion) it's easier to develop. the tooling is nice. the docs are nice.
cons
- it's time consuming to make the initial change
- Svelte uses some file extensions that might be offputting for folks that want to contribute
- SvelteKit itself has an opinionated project structure that may be divisive 
- Jekyll was designed specifically for static site generation, Svelte was not
- Svelte is more niche. however, once things are set up it's easy to copy/paste styles from existing pages

## On approval

If the proposal proceeds, we should schedule a day where I give a little walkthrough of the project to whoever is interested so we can see where additional documentaion might be needed, and to provide additional opportunity for input. That'll make it easier for other folks to contribute if they want to. 

Some of the copy has also been slightly changed. We should talk about that too and get feedback on site language.

## Technical details

TODO list some other tech specs to consider like build output size or some of the SEO features baked into SvelteKit

Here's a Lighthouse report on the current site: 


## TODOS
- remove unused image assets
- port over the "our work" and "fite" pages
- fill out the generic /blob/ route to list all the available posts
- make fill out meta tags for open graph images, title, etc. for when posts are shared
- update frontmatter so we can expose an image per post/page to the rss feed


sveltekit build is 9-9.3 MB
jekyll is 6.3-6.5 MB
however, we did add some images, many of which are unused so far
it also looks like sveltekit enhanced image is actually making some downsized copies of images for each image, it looks like the difference is largely there