---
layout: docs
title: Teaching Materials
published: 2022-12-14
---

:bulb: mostly copied here from https://github.com/nfdi4plants/teaching_materials


## Moving contents from teaching materials to here (recommendations)

- Keep testing with `dotnet fornax watch` from `src` and make sure to follow the technical requirements collected in the [contribution guide](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/CONTRIBUTING.html)
- When adding markdowns (bricks, units) and images (i.e. to `img`), replace `/images/` with `/../img/`.

## git issues

Note, with the many images (and powerpoint files) stored in this repo, the overall size has become rather big leading to issues with `git push`
So far, it helped to increas the postBuffer:

```bash
git config --global http.postBuffer 2097152000
```

> source: https://stackoverflow.com/questions/6887228/git-hangs-while-writing-objects


## Bricks gallery

There's a "bricks gallery", compiling all available bricks, rendered as html.

In `dotnet fornax watch` mode, navigate to http://127.0.0.1:8080/docs/teaching-materials/_maintenance/bricks-gallery.html 

> :bulb:
> - this is not a slide deck
> - this is just to get a quick overview of available bricks
> - the file (bricks-gallery.md) can be auto-generated and will likely be overwritten

## VS Code Marp Settings

In order to work with the VS Code marp extension (i.e. preview and export slides to pdf, html, etc.), you might want to add the following to the gitignored VSC settings (`.vscode/settings.json`) of this repo:

```
{
  "markdown.marp.themes": [
    "src/docs/teaching-materials/style/dataplant_marp-theme.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-CMR.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-Intro.css"
  ],
  "markdown.marp.enableHtml": true,
  "markdown.marp.exportType": "html",
  "markdown.marp.pdf.noteAnnotations": false
}
```
