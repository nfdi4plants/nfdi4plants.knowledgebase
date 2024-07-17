---
layout: docs
title: Contribute slide decks
date: 2023-06-29
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

This guide tries to describe the current way to prepare and contribute slide decks via the knowledge base. 

:construction: The mechanism to prepare and render slide decks in the knowledge base is currently under construction. So this guide is incomplete.

<div style="padding-bottom: 20px">
    <a href="./index.html">
  <span class="badge-category">User</span><span class="badge-selected" id="badge-datasteward">Data Steward</span>  
  <span class="badge-category">Mode</span><span class="badge-selected" id="badge-read">Tutorial</span>
    </a>
</div>



## Before we start

<div id="before-start">

- :ballot_box_with_check: Please install [VS Code](https://code.visualstudio.com/download)
- :ballot_box_with_check: Please install the extension [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode)
- :bulb: For a general introduction to writing markdown, see the [markdown tutorial](./tutorial_IntroductionToMarkdown.html) and references therein.
- :bulb: Check out https://marp.app for official docs and tutorials

</div>



## Creating a marp slide decks

Creation of slide decks is based on [marp](https://marp.app)

1. Create a new markdown file `test-slides.md`
2. Add `marp: true` to the YAML frontmatter of the file. 
3. Add content to the file just as you would do for a markdown text document. 
4. Add `---` (horizontal lines) as slide breaks

:construction: Repo file structure and where to store the slide deck is under construction


## View / export result:

- preview via VS Code preview (cmd + k, v)
- export via VS Code command `Marp: Export Slide Deck` (to html or PDF) or right-click the Marp symbol in the top-right corner while in edit mode of the markdown file

## Speaker notes

Can be added as markdown comments. 

```md
<!-- markdown notes -->
```

These will appear in presenter mode (html) or in PDF (if `"markdown.marp.pdf.noteAnnotations": true` is added to the `.vscode/settings.json`)


## Presentation mode

- export to html (opens in browser) and hit the presentation icon


## Default slide size

1280 x 720

## Pro

- easy to adapt (from existing md content)
- customizable (requires css and / or html skills)
- can directly render draw.io images

## Con

- theme needs to be linked (also) via .vscode/settings.json

## Tips

https://www.hashbangcode.com/article/seven-tips-getting-most-out-marp


## Themes 

Custom themes based on CSS are currently stored in [src/docs/teaching-materials/style/](./../teaching-materials/style/)


## VS Code Marp Settings

In order to work with the VS Code marp extension (i.e. preview and export slides to pdf, html, etc.), you might want to add the following to the gitignored VS code settings (`.vscode/settings.json`) of this repo. If the file does not exist, please create it. 

```
{
  "markdown.marp.themes": [
    "src/docs/teaching-materials/style/dataplant_marp-theme.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-CMR.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-Intro.css",
    "src/docs/teaching-materials/style/marp-theme_dataplant-ceplas-ccby.css"
  ],
  "markdown.marp.enableHtml": true,
  "markdown.marp.exportType": "html",
  "markdown.marp.pdf.noteAnnotations": false
}
```

## Debugging

- If images are not properly linked, marp cannot parse and render them in pdf or html.
- the VS Code extension will not throw a warning and just ouput an empty (figure-less) slide
- There's an easy way to find the missing / incorrect image links on the html version of your marp slides using your browser described here: 

https://github.com/marp-team/marp/discussions/257


## Example Slide deck

Please check out the rendered [example slide deck](./contribute_slide-decks-example.html). 
And compare it to its [source markdown](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/blob/main/src/docs/guides/contribute_slide-decks-example.md?plain=1). 

