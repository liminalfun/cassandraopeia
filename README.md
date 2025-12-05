# cassandraopeia
Cassandraopeia is an interdisciplinary project founded and run by visual artist Cassandra Tankó. 

This website is designed and developed by Alex Nawotka, using Astro.js -- It is intended to serve as a reference for building custom artist portfolio websites for artists who are looking to upgrade from Tumblr, but don't want to use a site builder service.

## Editing Guide

// TODO Add basic editing guide

### Fundamental concepts

### How to edit existing content

### How to add new artwork

### How to add new pages


## Development Setup

1. Check that the following are installed on your computer:
    - Code editor (e.g. [VS Code](https://code.visualstudio.com/download))
    - Node.js and npm ([download guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm))
    - git ([installation guide](https://github.com/git-guides/install-git))
    - GitHub account (It should be linked to your code editor and/or terminal via [GitHub CLI](https://cli.github.com/))


2. Setup project folder
    - Use github to clone this repo onto your local device. If you don't have a folder where you keep your websites yet, create one (for example: /Documents/sites) and then clone this repo into that folder
    - Open your new project's folder in your code editor
    - Setup git for the new project (see [guide on datacamp](https://www.datacamp.com/tutorial/git-init) for reference)
    - Verify connection with GitHub for pushing/pulling commits


3. Install npm packages for local development
    - Use terminal at the root of your project to run: `npm install`. This looks at the `package.json` file and installs necessary Node.js packages to the `/node_modules` folder
    - If needed, run `npm audit fix` as well
    - Try running your project with `npm run dev` and check for issues

## Code Structure

This website uses a JavaScript web framework called Astro to render "components" loaded with your content, resulting in a fast website.

Inside of this repository (aka repo), you'll see the following folders and files:

```text
/
├── .astro/
│	└── // TODO Describe what lives here & why
├── .github
│	└── // TODO Describe what lives here & why
├── public/
│	└── fonts/
│	└── // TODO Decide what needs to live in public/ & review what is here
├── src/
│	└── components/ 
│   	└── Includes an `.astro` files for each distinct re-usable component to load & style content on different pages of the website 
│   	└── global/
│   	    └── Includes components that are loaded on every page
│	└── content/
│   	└── Includes folders to store `.mdx` files with text, image links, and properties for each page on the website 
│   	└── pages/
│   		└── Includes pages that are linked on your site
│   └── layouts
│   	└── Includes each specific page layout (e.g. home, basic, gallery, etc.)
│   └── pages
│   	└── //TODO explain difference between pages, layout, and content
└── astro.config.mjs // TODO Explain what this is
└── content.config.ts // TODO Explain what this is
└── LICENSE // TODO Explain what this is
└── package-lock.json // TODO Explain what this is
└── package.json // TODO Explain what this is
└── README.md // Documentation! This file B-)
└── tsconfig.json // TODO Explain what this is
```

Astro looks for `.astro`, `.md`, or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.


## Commands

All commands are run from the root (aka the parent folder, `cassandraopeia/`) of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |