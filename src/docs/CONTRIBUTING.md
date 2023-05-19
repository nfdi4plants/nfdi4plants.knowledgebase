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

# Contribution Guide
Your contribution to the DataPLANT Knowledge Base is highly appreciated.
This guide is intended to show you how to contribute new articles and tutorials or review and adapt parts of existing ones.

For changes and suggestions, feel free to open an issue or to open a pull request.

## Introduction

The DataPLANT Knowledge Base is built on [nfdi-web-components](https://nfdi4plants.github.io/web-components-docs/) which fit **markdown** content into this "framework".
For a general introduction to writing markdown, see: [Markdown tutorial](tutorials/IntroductionToMarkdown.html) and references therein.

## GitHub Routines

> Note: This is not a full-fledged GitHub tutorial. Please refer to available tutorials online or contact the Knowledge Base curators.

1. Sign up for a GitHub account.
2. [Fork](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/fork) the Knowledge Base Git repository.
   
   - This creates a copy of the Knowledge Base repository in your own GitHub account.
   - In the top left, you will see that the repository is associated with your account (1) and forked from the main repository (2).
   - You can either directly add or edit content using GitHub or clone (3) your repository to work on it locally.
   - Be aware that your fork is not automatically updated, if the main repository updates. Make sure to update your fork regularly (especially before creating new content) by clicking "Fetch upstream" (4) in the top-right corner of your repository.
   - If you cloned your repository locally, you also have to update the local clone (via "git pull").
   
  ![Git Routine](./img/contribution_git.png)

3. You can work and make any changes in your own repository and commit + push them to your fork.

4. Once you want to submit those changes to the main repository, you can open a "pull request" by clicking "Contribute" (5) in the top-right corner.
   > Remember to "Fetch upstream" (4), if your fork is not up-to-date with the main repository.

5. If edited or added existing content, please assign the original author during your pull-request to review your changes.
  
  - The github user name of the original author is stored in the yaml block on top under `author_github`
  - During the pull-request mention the author via `@<author_github>`.

## Local testing

The following instructions allow you to test and see how your changes come into play and whether everything renders correctly.

It's highly recommended to *frequently* check your changes locally.
Please **do not** produce and submit a lot of content without prior local testing.

### Setup

This needs to be done only once after downloading.

1. Download the repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet paket install` in root directory.
4. Run `npm install` in root directory.

### Run

1. Run `npm run fornax`.
2. Open page in browser [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

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

## Authoring Content

Read more in the fornax section of the nfdi4plants web components docs [here](https://nfdi4plants.github.io/web-components-docs/docs/SupportedStaticSiteGenerators.html#fornax)

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
<!--The last example link links now to "README.md" as the Contribution guide currently linked to from the website it the README within the repo and not shown on the website. If the contribution guide is moved in the future, this needs to be changed.-->
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

> Remember: Changing file names (and paths) means changing URLs and can easily lead to dead links.

## Addressing Readers

We generally try to address users and readers directly.
Use "you can", not "the user can" or "one can..."

## Language

British English

> Note: If you work with Visual Studio Code -
> Check out the extension "Code Spell Checker" https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker
> with British English ("cSpell.language": "en-GB") support.

## Link Collection

> Note: This is just a link collection for recurrent use in KB articles
> Nothing automatized. Just copy/paste.

⚠️ Must be read from [markdown](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/blob/main/src/docs/CONTRIBUTING.md), will not be shown in html.

<!-- Links to DataPLANT Knowledge Base (kb-) -->

<!-- kb-Fundamentals -->

[kb-DataManagementPlan]: ../fundamentals/DataManagementPlan.html "Data Management Plan"
[kb-DataPublications]: ../fundamentals/DataPublications.html "Data Publication"
[kb-DataSharing]: ../fundamentals/DataSharing.html "Data Sharing"
[kb-FairDataPrinciples]: ../fundamentals/FairDataPrinciples.html "FAIR Data principles"
[kb-Metadata]: ../fundamentals/Metadata.html "Metadata"
[kb-PersistentIdentifiers]: ../fundamentals/PersistentIdentifiers.html "Persistent Identifiers"
[kb-PublicDataRepositories]: ../fundamentals/PublicDataRepositories.html "Repositories"
[kb-ResearchDataManagement]: ../fundamentals/ResearchDataManagement.html "Research Data Management"
[kb-VersionControlGit]: ../fundamentals/VersionControlGit.html "Version Control and Git"

<!-- kb-Implementation -->
[kb-AnnotatedResearchContext]: ../implementation/AnnotatedResearchContext.html "Annotated Research Context"
[kb-DataHub]: ../implementation/DataHub.html "DataPLANT DataHUB"
[kb-ArcCommander]: ../implementation/ArcCommander.html "DataPLANT ARC Commander"
[kb-Swate]: ../implementation/Swate.html "DataPLANT Swate"

<!-- kb-Tutorials -->
[kb-QuickStart_arc]: ../tutorials/QuickStart_arc.html "Quickstart ARC"
[kb-QuickStart_swate]: ../tutorials/QuickStart_swate.html "Quickstart Swate"
[kb-QuickStart_arcCommander]: ../tutorials/QuickStart_arcCommander.html "QuickStart ARC Commander"

<!-- Links to DataPLANT Homepage (hp-) -->

[hp-Registration]: <https://register.nfdi4plants.org/> "DataPLANT Registration"
[hp-DataHUB]: <https://git.nfdi4plants.org> "DataPLANT DataHUB"
[hp-HelpDesk]: <https://helpdesk.nfdi4plants.org> "DataPLANT Help Desk"

<!-- Links to DataPLANT GitHub (gh-) -->

[gh-DataPlant]: <https://github.com/nfdi4plants/> "GitHub DataPLANT"
[gh-ArcSpecs]: <https://github.com/nfdi4plants/ARC-specification/> "ARC specifications"
[gh-ArcCommander]: <https://github.com/nfdi4plants/arcCommander/> "ArcCommander"
[kb-ArcCommander-Manual]: ../implementation/ArcCommanderManual/index.html "ARC Commander Manual"
[gh-Swate]: <https://github.com/nfdi4plants/Swate/> "GitHub Swate"

<!-- Links to external (ext-) sources -->

[ext-github-join]: <https://github.com/join/> "Join GitHub"
[ext-github-desktop]: <https://desktop.github.com/> "GitHub Desktop"
[ext-git]: <https://git-scm.com/download/> "Git"
[ext-git-lfs]: <https://git-lfs.github.com/> "Git-LFS"
[ext-excel-online]: <https://www.microsoft.com/en-us/microsoft-365/excel> "Excel online"

[ext-VSCode]: https://code.visualstudio.com/ "Visual Studio Code"

[ext-galaxy]: <https://plants.usegalaxy.eu/> "Galaxy Plants"
[ext-omero]: <https://www.openmicroscopy.org/omero/> "Omero"
[ext-zenodo]: <https://zenodo.org/> "Zenodo"
[ext-invenio]: <https://inveniosoftware.org/products/rdm/> "Invenio"
[ext-DataJournals]: https://www.researchdata.uni-jena.de/en/information/data-publication "RDM Jena Data Journals"

[ext-EBI-PRIDE]: https://www.ebi.ac.uk/pride/ "EBI PRIDE"
[ext-re3data]: https://www.re3data.org/ "re3data.org"
[ext-CreativeCommons]: https://creativecommons.org/ "Creative Commons"
[ext-DublinCore]: <https://www.dublincore.org/specifications/dublin-core/dcmi-terms/> "DublinCore"
[ext-DataCite]: <https://schema.datacite.org>  "DataCite"
[fairsharing.org]: https://fairsharing.org/search?fairsharingRegistry=Standard "Standards at fairsharing.org"
[doi]: https://www.doi.org/ "Digital Object Identifier"
[orcid]: https://www.orcid.org/ "ORCID"
