---
layout: docs
title: Knowledge Base Contribution Guide
date: 2023-07-19
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
status: published
author:
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Andrea Schrader
  github: https://github.com/andreaschrader
  orcid: https://orcid.org/0000-0002-3879-7057
---

## About this guide

Your contribution to the DataPLANT Knowledge Base is highly appreciated. This guide is intended to show you how to contribute new articles and tutorials or review and adapt parts of existing ones. For changes and suggestions, feel free to open a GitHub issue or pull request.


<a href="./index.html">
  <span class="badge-category">User</span><span class="badge-selected" id="badge-datasteward">Data Steward</span>  
  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>
<br>
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
- :ballot_box_with_check: an up-to-date version of [.NET](https://dotnet.microsoft.com/en-us/download) installed

- :bulb: We recommend working with [VS Code](https://code.visualstudio.com/download), with extensions for easy markdown editing and spell check.
- :bulb: For a general introduction to writing markdown, see the [markdown tutorial](./guides/tutorial_IntroductionToMarkdown.html) and references therein.
- :rocket: Feel free to contact us for Data Steward support.

</div>
<br>

## Introduction

The DataPLANT Knowledge Base is built on [nfdi-web-components](https://nfdi4plants.github.io/web-components-docs/) which fit **markdown** content into this "framework".

## GitHub Routines

Please follow these steps to fork the knowledge base repository and clone your fork to your computer. 

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
  
  - The github user name of the original author is stored in the yaml block on top under `author // github`
  - During the pull-request mention the author via `@<author_github>`.

> :warning: This is not a full-fledged GitHub tutorial. Please refer to available tutorials online or contact the Knowledge Base curators.

## Local testing

The following instructions allow you to test and see how your changes come into play and check whether everything renders correctly.

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

Same as `npm run index` but starts local server to test search bar. Currently the only way to test search bar locally, **but will not** allow to track changes in markdown files like `npm run fornax` does (If you want to combine both a PR would be more than welcome). 

```bash
npm run indexserve
```

---

## Authoring Content

Read more about authoring content in the fornax section of the [nfdi4plants web components docs](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators.html#fornax)

:warning: Please make sure to especially follow the markdown syntax section. 

:bulb: The following sections refer to contents with `layout: docs` as used for articles and guides. 

:construction: Contribution of slides (i.e. in folder `src/docs/teaching-materials/` and sidebar section "Teaching Materials") is currently under construction. See the additional guide on [slide decks](./guides/contribute_slide-decks.html). 

### Knowledge Base repo structure

- The source to all content shown at the public website https://nfdi4plants.org/nfdi4plants.knowledgebase/ resides in the folder `src/docs`
- All other files are mostly "backend", help to render the content to html and can safely be ignored by most contributors
- The `src/docs` structure (as of July 17th, 2023) looks like this

```
src/docs
├── _ignored
├── _sidebars
├── ArcCommanderManual
├── DataHUB-Manual
├── faqs
│   └── faqs.md
├── fundamentals
│   ├── DataManagementPlan.md
│   ├── DataPublications.md
│   ├── ...
├── guides
│   ├── ARCUserJourney.md
│   ├── BestPracticesForDataAnnotation.md
│   ├── ...
├── img
├── implementation
│   ├── AnnotatedResearchContext.md
│   ├── AnnotationPatterns.md
│   ├── ArcCommander.md
│   ├── ...
├── SwateManual
├── teaching-materials
├── tutorials
├── CONTRIBUTING.md
└── Home.md
```

:bulb: For easier findability, we try to align the folder structure with how the content is presented in the sidebar of the public site. However, this is not always feasible or sensible (for reasons).  


### Common Errors

- Missing metadata block
- Missing or false required (`MUST`) attribute in metadata block
- Using a layout in metadata block that does not exist or is deprecated
- Wrong links
  - to sidebar elements
  - to images

### Markdown to HTML Rendering Rules

Every markdown document with the YAML key `layout: docs` stored in `/nfdi4plants.knowledgebase/src/docs` or any subfolder 
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

---

## Content Design Principles

### References

- **Literature / information references:** additional bibliography block below
- **External links (tools, sites, platforms):** as hyper-link
  - E.g. like this:  
    ```
    [CLICKABLE TEXT](https://daringfireball.net/projects/markdown/syntax#link)
    ```  
    resulting in [CLICKABLE TEXT](https://daringfireball.net/projects/markdown/syntax#link)
  - or like this e.g. in the FAQ.md file:  
    ```
    <a href="https://en.wikipedia.org/wiki/Hyperlink">CLICKABLE TEXT</a>
    ```  
    resulting in: <a href="https://en.wikipedia.org/wiki/Hyperlink">CLICKABLE TEXT</a>
- **Knowledge Base cross-references:** relative path to *.md document, **BUT** replace the `.md` file extension 
with `.html`, as the markdown files are parsed to html.

### Relative Paths

We SHOULD always try to use relative paths, as they are easier to maintain.  
Although useful, they need a bit more fine tuning for different purposes.

Relative paths in production are differently accessed than in development. One of the major issues with relative paths is that during development the pages are accessed by `/`, for example `/docs/README.html`. 
Published they will be accessed by `/nfdi4plants.knowledgebase` (`/nfdi4plants.knowledgebase/docs/README.html`). 
In the following, some ideas are described on how to deal with this:

- **Basic relative paths:** 
  A basic relative path looks like this: `[Test](/README.html)`.  
  By starting with `/` we implicitly say "start at host".  
  In development the same path will start with `http://127.0.0.1:8080/`, in production it will start with `https://nfdi4plants.github.io/`.   
  In production we also use `https://nfdi4plants.org/nfdi4plants.knowledgebase/`.
- **Relative paths in sidebar:** 
  The sidebars actually checks if you are currently in `npm run fornax` mode. 
  Therefore, you can use basic relative paths for this. (mainSidebar.md)  

    For example

    ```markdown
    ```Fundamentals
    # [Fundamentals](/docs/fundamentals/index.html)
    ```!
    ```
    `/docs/fundamentals/index.html` will be parsed to `/nfdi4plants.knowledgebase/docs/fundamentals/index.html`.
    
- **Relative paths from current file:**  
  These might be easier to handle but need more maintenance as they MUST be changed when the folder/file structure changes, but they circumvent the basepath issue of "Basic relative paths". 
  ***Examples:*** 
  - `[Test](./ResearchDataManagement.html)`. Starting with `./` translates to "coming from the position of this file". 
  - We can go up in the file hierarchy, like `[Test](./../docs/README.html)`. 
  - For the link "./../docs/Home.html", this translates to "coming from the position of this file, go one folder higher and into the docs directory to find the [Introduction](./../docs/Home.html) which is named "Home" there."

### Document structure and format

Try to avoid deep structures by using no more than two headline levels, i.e.

<pre><code>```
## Headline level 2
### Headline level 3
```</code></pre>

Headline level 1 is automatically generated from the article's `title: `.

### Images / figures

Images can be linked

1. via simple markdown logic: `![name_of_image](path_to_image.png)`
2. via html: `<img src="path_to_image.png">` 

:bulb: Please store images in `src/docs/img`. 

- The folder `src/docs/img` holds image files (preferably *.svg, *.png) or the original source file (.pptx, .drawio.svg) used to create the image file(s).
- Avoid adding captions or links to figure files.
- If powerpoint was used to create a figure:
  - The pptx stored in `src/docs/img` is supposed to be a file of only a single slide or slide sequence (i.e. consecutive slides, where one image builds on the previous)
  - The name of the resulting figure file (e.g. "FAIRprinciples.png") MUST be aligned with the source file (e.g. "FAIRprinciples.pptx")
    - a consecutive number is suffixed to images from slide sequences (e.g. "FAIRprinciples_seq1.png", "FAIRprinciples_seq2.png")


### Licensed material

- Make sure you are allowed to add the content. If you reuse any content from other sources, make sure to reference the source and / or license, if applicable. 
- In particular, when adding images that you did not create yourself, please clearly state this by
  1. adding the source to the [`src/docs/img/_ImageIndex.md`](./img/_ImageIndex.html), 
  2. adding a link / license (however applicable) to the content (article, tutorial, slide deck, etc.) where you use the image, and
  3. reminding the knowledge base curators during your pull request.


---

## File Name Requirements

File names:

- MUST use the article's title for the filename, e.g.: DataManagementPlan.md -> `title: Data Management Plan`
- MUST NOT contain special characters
- MUST NOT contain spaces
- MUST use [snake_case](https://en.wikipedia.org/wiki/Snake_case) (lower_case_with_underscores) OR [PascalCase](https://techterms.com/definition/pascalcase) (UpperCase)

> :warning: Changing file names (and paths) means changing URLs and can easily lead to dead links.


## Avoiding dead links

Once in a while, we (need to) restructure the `/nfdi4plants.knowledgebase/src/docs` folder a bit, which includes changes to file and folder names, i.e. producing dead links. 
In this case, the least we can do, is to keep the knowledge base itself intact:

1. Carefully check **all markdown documents** for cross-links to the original file name (this can easily be done via e.g. VS Code). 
2. Remember to check for both file endings `.md` and `.html`.
3. Replace with the new file name / path. 

This however does not help for articles, tutorials, etc. that have been shared with the community (via mail, in slide decks, etc.). 
In this case, please leave a markdown with the original file name and path and just fill it with the following

```markdown
---
layout: docs
date: 2023-06-07
status: prevent-dead-link
title: Sorry, this site moved...
---

The site you are looking for was moved [here](./../path/to/new/file).
```

This is not the most beautiful solution as it clutters the knowledge base, but it helps against user frustration and should be done for frequently shared articles.
Adding a date helps us clean up those files after a certain time interval.

:bulb: If you're sharing content with the users, it might be best to only share the link to the knowledge base https://nfdi4plants.org/nfdi4plants.knowledgebase/, rather than a concrete link to a tutorial (e.g. https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/guides/arcCommander_QuickStart.html).

### Addressing Readers

We generally try to address users and readers directly.
Use "you can", not "the user can" or "one can..."

### Language

British English

> Note: If you work with Visual Studio Code -
> Check out the extension "Code Spell Checker" https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
> with British English ("cSpell.language": "en-GB") support.
