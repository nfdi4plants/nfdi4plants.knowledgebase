# Contribution Guide

Your contribution to the DataPLANT Knowledge Base is highly appreciated. This guide is intended to show you how to contribute new articles and tutorials or review and adapt parts of existing ones. For changes and suggestions, feel free to open a GitHub issue or pull request.


- [Setup](#setup)
  - [Installation](#installation)
  - [Create content and watch locally](#create-content-and-watch-locally)
  - [Check for dead links](#check-for-dead-links)
  - [Markdown](#markdown)
  - [VSCode](#vscode)
- [Where should I place my content?](#where-should-i-place-my-content)
  - [Start here](#start-here)
  - [Guides](#guides)
  - [`<specific-tool>`](#specific-tool)
  - [Core concepts](#core-concepts)
- [Style Guide](#style-guide)
  - [Use Starlight components](#use-starlight-components)
  - [General file information](#general-file-information)
  - [Authors](#authors)
  - [Images](#images)
  - [html](#html)
  - [Tables](#tables)
  - [Lists](#lists)
  - [Article cross-references](#article-cross-references)

## Setup

The DataPLANT Knowledge Base is built on [astro starlight](https://starlight.astro.build). Many features not covered here specifically may be found in their docs.

Starlight itself builds on [Astro](https://astro.build). Please check out [their website](https://docs.astro.build/en/install-and-setup/) for detailed installation instructions.

### Installation

1. Install [Node JS](https://nodejs.org/)
2. Clone the Knowledge Base repository via `git clone https://github.com/nfdi4plants/nfdi4plants.knowledgebase`

### Create content and watch locally

1. Install package dependencies via `npm install`
2. Start the knowledge base in watch mode via `npm run dev`

### Check for dead links

Especially when moving or cross-linking files (other articles or images), make sure to test-build the site via `npm run build`! This validates all links.

### Markdown

All articles are written in markdown (.md or .mdx).
See https://starlight.astro.build/guides/authoring-content/ for a short introduction.

### VSCode

We recommend working with VSCode to generate content.

Recommended VSCode extensions:

- Astro Build: https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
- MDX: https://marketplace.visualstudio.com/items?itemName=unifiedjs.vscode-mdx

:::note
The mdx files cannot be previewed in VSCode. Please use `npm run dev` as described above.
:::

## Where should I place my content?

### Start here

This is a place for content required for the recommended way to work with an ARC.

### Guides

Here you can place content for a specific topic or task. Do not place specific tools documentation here.

### `<specific-tool>`

If you have a tool that is used in the context of an ARC, you can place the documentation here.

### Core concepts

Basic information about RDM, not necessary ARC related.

## Style Guide

### Use Starlight components

The Starlight framework has some nice components that can be used in the `.mdx` files.

Have an eye on the existing components to improve the readability of the content.

[Starlight components](https://starlight.astro.build/components/using-components/)

### General file information

- All files and folders must always be [kebap-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case). This means all lower case and `-` as word separator.

```txt title="Example"
src\assets\images\arc-commander\access-2.png
```

#### Composition

Always follow **DRY (Don't Repeat Yourself)** principle. If you have the same content in multiple places, consider creating a reusable component.

In `.mdx` you can not only link to other content, but also directly insert other content in the current file. 

### Authors

Authors listed via a file in [`src/content/authors`](src/content/authors) can easily be mentioned in the yaml header of articles. 

For example `src/content/authors/kevin-frey.yml`:

```yaml
name: Kevin Frey
image: "@images/authors/kevin-frey.jpg"
socials:
  - icon: simple-icons:github
    href: https://github.com/Freymaurer
  - icon: simple-icons:orcid
    href: https://orcid.org/0000-0002-8510-6810
affiliation: DataPLANT
styling:
  text: KFR
```

The author is linked simply via yaml article metadata

```yaml
authors:
  - kevin-frey
```

### Images

#### How to store

Try to use `.svg` files for icons, graphics and logos. Use any other file format for screenshots or tutorial images.

Images should be stored in the `src/assets/images` directory. If your image has a obvious context, you SHOULD create a subdirectory for it. 

```txt title="Example"
src
|-- assets
    |-- images
        |-- arc-commander
            |-- access-1.png
            |-- access-2.png
            |-- access-3.png
```

#### Use in `.md`/`.mdx`

Two options on how to insert images. 

In markdown you can use the following syntax:

```md
![Alt text](@images/path/to/image.png)
```

For html in `.mdx` you can use the following syntax:

```mdx
import MacOSSecurity from "@images/arcitect/macos-security.png"

<img src={MacOSSecurity.src} style="width:50%;display: block; margin: 20px" />
```

### html

Try to avoid html as it will usually override the consistent page design.  
**Don't use `<br />`!**

If you really need some special design or styling, raise an issue or contact the main contributors to discuss.

### Tables

Tables as summary for content MUST be avoided!

Tables may be used to show an example Annotation Table or to compare small information sets.

### Lists

Do not use lists for content. Lists are only allowed for navigation or short information sequences.

<details>
<summary>Good example:</summary>

```md
Please explore the sections on the left to find guides on:

- adding building blocks to your annotation table
- filling cells with ontology terms
- using and creating templates
```
</details>

<details>
<summary>Bad example:</summary>

```md
### Addition of assays

- An assay may consist of experimentally measured data together with experimental protocols.
- An assay folder structure can be created by using `arc a init`. Under assays an assay folder named after the assay identifier is created which includes:
  - dataset
  - protocol
  - assay.isa.xlsx
  - README.md
- An existing assay can be registered to the investigation by using `arc a register`.
- To create the folder structure and afterwards register the new assay `arc a add` can be used. This command combines init and register.
```
</details>

### Article cross-references

Avoid relative paths when cross-referencing another knowledge base article.
Instead, use references starting from the `docs` folder as root and add `/nfdi4plants.knowledgebase/`, e.g.

```md
[wiki associated to the ARC](/nfdi4plants.knowledgebase/datahub/datahub-arc-wiki)
```