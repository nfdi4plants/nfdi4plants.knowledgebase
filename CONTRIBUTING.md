# Style Guide

## Use Starlight components

The Starlight framework has some nice components that can be used in the `.mdx` files.

Have an eye on the existing components to improve the readability of the content.

[Starlight components](https://starlight.astro.build/components/using-components/)

## General file information

- All files and folders must always be [kebap-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case). This means all lower case and `-` as word separator.

```txt title="Example"
src\assets\images\arc-commander\access-2.png
```

### Composition

Always follow **DRY (Don't Repeat Yourself)** principle. If you have the same content in multiple places, consider creating a reusable component.

In `.mdx` you can not only link to other content, but also directly insert other content in the current file. 


## Images

### How to store

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

### Use in `.md`/`.mdx`

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

## `<br />`

Don't!

## Tables

Tables as summary for content MUST be avoided!

Tables may be used to show an example Annotation Table or to compare small information sets.

## Lists

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
## Addition of assays

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

## Article cross-references

Avoid relative paths when cross-referencing another knowledge base article.
Instead, use references starting from the `docs` folder as root, e.g.

[wiki associated to the ARC](/datahub/datahub-arc-wiki), not [wiki associated to the ARC](../../datahub/datahub-arc-wiki)
