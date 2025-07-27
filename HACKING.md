# Dev notes

prereqs:
- node.js
- an editor (preferably VSCode)
  - open the workspace file to use its settings. it makes the file explorer easier to use
  - installing some of the recommended plugins is optional, but get Svelte and TailWind at least
  - the markdown all in one plugin is nice too
- a github account

## Cloning the repo 

TODO link to the github repo, instructions for cloning. 
gh cli is pretty nice, they have a desktop interface too

VSCode is not required, but highly recommended. The suggested settings in `.vscode/settings.json` and `.vscode/extensions.json` were tailored for this project, but are not required. For basic changes or working with Markdown, the online GitHub text editor is probably fine, too.

There shouldn't be too much need for interacting with the TypeScript files, besides maybe `/src/lib/config.ts`.

## Project structure

Here's the docs for the [Svelte markup syntax](https://svelte.dev/docs/svelte/basic-markup).
SvelteKit (the thing that builds our Svelte code into a website) has some strong opinions about the [project layout](https://svelte.dev/docs/kit/project-structure). 

They may seem weird at first, but they're nice once they click.

- `src` has the main code
  - `app.html` is the root document, and our content gets injected in there
  - `app.css` is the root stylesheet
  - `lib` holds some TypeScript files that the site uses
    - `config.ts` has some settings that affect the site, like it's title, a list of nav links to show in the header, etc.
    - `types.ts` has a type definition in it called `PostMetadata` which is what the site expects to show up in the frontmatter of Markdown content
  - `posts` holds all the copy in the form of markdown files
    - we can freely reuse pieces of text from here around the site
  - `routes` is where we define parts of the site by their URL. this is the most Svelte specific part of the project
    - basically each folder you make under here is a route, and by convention the files always have the same names like `+page.svelte`
    - so we have folders for some important pages that should have their own URL like `brdsa.org/about` or `brdsa.org/donate`
    - `blog/[slug]` is a dynamic route that serves all the other content that we don't want to have to explicitly define
      - `[slug]` is the next URL segment as defined in the Markdown file's frontmatter `slug` property
      - the code in 
- `static` is just static stuff that should be served at the site root. `robots.txt`, `favicon.ico` etc.


## Initial setup

Initial creation of the project. In the startup options we added `tailwind` and `mdsvex`, and opted for the static adapter since we're pushing to github pages.

```
npx sv create my-app
cd my-app
npm install
npm run dev
```

### GitHub workflow

Copied and modified this person's GH workflow, updated the Node version I think?
https://github.com/khromov/derivault/blob/main/.github/workflows/build.yml

### Setting up the blog route

I actually struggled with this a fair bit at first, but it's working now. I don't fully understand some of the more detailed points about JavaScript module loading. 


There seems to be some opportunity for conflict surrounding dynamic routes, and pre-rendering dynamic components that the build system can't walk.
One thing that wouldn't work, for example, was putting a `published` flag on the frontmatter of some posts. Even if you set that flag to `false` in the frontmatter, for some reason SvelteKit would still try to walk it (it doesn't know the published flag before it reads the files), but a conditional on returning the post would return a 404 error if it was false. I'm probably explaining that poorly. It had to do with the `/blog/[slug]/+page.ts` data loader. 

### If there's a weird problem
especially if you're getting a weird type error that seems wrong, give a shot just reloading vscode `ctrl shift p` then `developer: reload window`. occassionally the type cache is bad

### Quirks with images

for main content included in a page, we use `enhanced:img` wherever possible, including with a hero image optionall specified in the frontmatter of blog posts. however, it s

### Useful links

sveltekit project structure
https://svelte.dev/docs/kit/project-structure

tailwind container query size reference 
note that the standard viewport breakpoints `sm`, `md`, `lg`, `xl`, and `2xl` are different lengths from the container query breakpoints `@sm`, `@md`, `@lg`, 
https://tailwindcss.com/docs/responsive-design#working-mobile-first
https://tailwindcss.com/docs/responsive-design#container-size-reference

how to debug your code
https://svelte.dev/docs/kit/debugging#Visual-Studio-Code

general guidance for project layout (maybe outdated)
https://joyofcode.xyz/sveltekit-markdown-blog#rendering-a-single-post

some default settings to put in `.vscode` 
https://www.sveltepatterns.dev/getting-started-with-vscode

phenomenal guide, can probably ditch the mdsvex if it's excessive or causing problems
https://gebna.gg/blog/blog-from-scratch-using-sveltekit

hella baller
https://github.com/josh-collinsworth/sveltekit-blog-starter
also mega baller 
https://mli.puffinsystems.com/blog/sveltekit-blog-docs-with-mdsvex

nice icons, fontawesome is hella bloatware
https://simpleicons.org/?q=github
