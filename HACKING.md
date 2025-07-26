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

Copied and modified this person's GH workflow, updated the Node version I think
https://github.com/khromov/derivault/blob/main/.github/workflows/build.yml

### Setting up the blog route

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




https://svelte.dev/docs/kit/project-structure