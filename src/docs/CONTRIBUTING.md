---
layout: docs
title: Knowledge Base Contribution Guide
published: 2022-12-14
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:  
---

## About this guide

Your contribution to the DataPLANT Knowledge Base is highly appreciated. This guide is intended to show you how to contribute new articles and tutorials or review and adapt parts of existing ones. For changes and suggestions, feel free to open an issue or to open a pull request.

<span class="badge-category">User</span><span class="badge-selected" id="badge-datasteward">Data Steward</span>  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>


<br>

## Before we start

<style scoped>
#before-start ul{
    list-style-type: none;
    margin-left: 0px;
    padding-left: 10;
}
</style>

<div id="before-start">

Before contributing to the knowledge base, you should have

- :ballot_box_with_check: a [GitHub](https://github.com) account and some routine with GitHub
- :ballot_box_with_check: an up-to-date version of [Node.JS](https://nodejs.org/) installed
- :bulb: We recommend working with [VS Code](https://code.visualstudio.com/download), with extensions for easy markdown editing and spell check.
- :bulb: Feel free to contact us for Data Steward support.

</div>

## Introduction

The DataPLANT Knowledge Base is built on [nfdi-web-components](https://nfdi4plants.github.io/web-components-docs/) which fit **markdown** content into this "framework".
For a general introduction to writing markdown, see: [Markdown tutorial](./guides/tutorial_IntroductionToMarkdown.html) and references therein.

## Authoring Content

Read more about authoring content in the fornax section of the nfdi4plants web components docs [here](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators.html#fornax)

:warning: Please make sure to especially follow the markdown syntax section of the [nfdi4plants web components docs](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators.html#markdown-syntax). 

## GitHub Routines

1. [Fork](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/fork) the Knowledge Base Git repository.
   
   - This creates a copy of the Knowledge Base repository in your own GitHub account.
   - In the top left, you will see that the repository is associated with your account (1) and forked from the main repository (2).
   - You can either directly add or edit content using GitHub or clone (3) your repository to work on it locally.
   - Be aware that your fork is not automatically updated, if the main repository updates. Make sure to update your fork regularly (especially before creating new content) by clicking "Fetch upstream" (4) in the top-right corner of your repository.
   - If you cloned your repository locally, you also have to update the local clone (via "git pull").
   
  ![Git Routine](./img/contribution_git.png)

2. You can work and make any changes in your own repository and commit + push them to your fork.

3. Once you want to submit those changes to the main repository, you can open a "pull request" by clicking "Contribute" (5) in the top-right corner.
   > Remember to "Fetch upstream" (4), if your fork is not up-to-date with the main repository.

4. If edited or added existing content, please assign the original author during your pull-request to review your changes.
  
  - The github user name of the original author is stored in the yaml block on top under `author_github`
  - During the pull-request mention the author via `@<author_github>`.

> :warning: This is not a full-fledged GitHub tutorial. Please refer to available tutorials online or contact the Knowledge Base curators.

## Local testing

The following instructions allow you to test and see how your changes come into play and whether everything renders correctly.

> :warning: It's highly recommended to *frequently* check your changes locally. Please **do not** produce and submit a lot of content without prior local testing.

### Setup

1. Download the repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet paket install` in root directory.
4. Run `npm install` in root directory.

:bulb: This needs to be done only once after cloning the repo.

### Run

1. Run `npm run fornax`.
2. Open the page in your browser [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

### Routines

#### Update Dependencies

This will update the npm package [`nfdi4plants/web-components`](https://github.com/nfdi4plants/web-components) to latest, as well as update the nuget dependency [`Nfdi4Plants.Fornax`](https://github.com/nfdi4plants/Nfdi4Plants.Fornax/tree/main) to latest. Then it will bundle all npm (javascript) dependencies to a single bundle.js file with rollup.

```bash
npm run updatecomponents
```

#### Bundle Npm Dependencies

This is part of the execution chain of `npm run updatecomponents`

```bash
npm run bundle
```

#### Update Searchbar Index

Index created html files. Creates `src/_public/pagefind` folder. **MUST** be used after running `npm run fornax` at least once. Otherwise there will be no `.html` files to index.

```bash
npm run index
```

Same as `npm run index` but starts local server to test searchbar. Currently the only way to test searchbar locally, **but will not** allow to track changes in markdown files like `npm run fornax` does (If you want to combine both a PR would be more than welcome). 

```bash
npm run indexserve
```

## Common Errors

- Missing metadata block
- Missing or false required (`MUST`) attribute in metadata block
- Using a layout in metadata block that does not exist
- Wrong links
  - to sidebar elements
  - to images

## Markdown to HTML Rendering Rules

Every markdown document stored in `/nfdi4plants.knowledgebase/src/docs` or any subfolder 
(except `_ignored`) will be rendered to html and become publicly available once pushed to the main repository.

### Ignored Content

- Anything inside the folder `_ignored` will not be used to generate html pages.
- This folder is intended for ideas and drafts that
  - should not yet become available in the Knowledge Base
  - should be under version control for discussion and reviewing

### Visible or Hidden

Although most markdown content will be rendered and published, it will not prominently be visible to all visitors.
It will only become visible in the sidebar once the article is linked in the respective sidebar 
(typically `add sidebar: _sidebars/mainSidebar.md`)

## Content Design Principles

### References

- **Literature / information references:** additional bibliography block below
- **External links (tools, sites, platforms):** as hyper-link
- **Knowledge Base cross-references:** relative path to *.md document, **BUT** replace the `.md` file extension 
with `.html`, as the markdown files are parsed to html.

### Relative Paths

We SHOULD always try to use relative paths, as they are easier to maintain. 
Although useful, they need a bit more fine tuning, as there are several options.

One of the major issues with relative paths is that during development the pages are accessed by `/`, for example `/docs/README.html`. 
Published they will be accessed by `/nfdi4plants.knowledgebase` (`/nfdi4plants.knowledgebase/docs/README.html`). 
In the following, some ideas are described on how to deal with this:

- **Basic relative paths:** These will look like this: `[Test](/README.html)`. 
By starting with `/` we implicitly say "start at host". 
So in development it will start with `http://127.0.0.1:8080/`, in production it will start with `https://nfdi4plants.github.io/`. 
Because in production we also need `https://nfdi4plants.github.io/nfdi4plants.knowledgebase/`, this type of relative paths can create issues! ⚠️
- **Relative paths in sidebar:** The sidebars actually check if you are currently in `dotnet fornax watch` mode. So you can use basic relative paths here. Example `
    ```markdown
    ```Fundamentals
    # Introduction:/docs/Home.html
    ```!
    ```
    `/docs/Home.html` will be parsed to `/nfdi4plants.knowledgebase/docs/Home.html`.
    
- **Relative paths from current file:** These need more maintenance as they MUST be changed when the folder/file structure changes, but they circumvent the basepath issue of "Basic relative paths". Example: `[Test](./ResearchDataManagement.html)`. Starting with `./` translates to "coming from the position of this file". We can even go up in the file hierarchy, like `[Test](./../docs/README.html)`. This translates to "coming from the position of this file, go one folder higher and into the docs directory to find the [Introduction](./../docs/Home.html) there."

### Structure and Format

Try to avoid deep structures by using no more than two headline levels, i.e.

<pre><code>```
## Headline level 2 <!-- omit in toc -->
### Headline level 3 <!-- omit in toc -->
```</code></pre>

Level 1 is automatically generated from the article's `title: `.

### Images

- simple markdown logic (not HTML): `![name_of_image](path_to_image.png)`

## File Name Requirements

File names:

- MUST use the article's title for the filename, e.g.: DataManagementPlan.md -> `title: Data Management Plan`
- MUST NOT contain special characters
- MUST NOT contain spaces
- MUST use [snake_case](https://en.wikipedia.org/wiki/Snake_case) (lower_case_with_underscores) OR [PascalCase](https://techterms.com/definition/pascalcase) (UpperCase)

> :warning: Changing file names (and paths) means changing URLs and can easily lead to dead links.

## Addressing Readers

We generally try to address users and readers directly.
Use "you can", not "the user can" or "one can..."

## Language

British English

> Note: If you work with Visual Studio Code -
> Check out the extension "Code Spell Checker" https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
> with British English ("cSpell.language": "en-GB") support.
