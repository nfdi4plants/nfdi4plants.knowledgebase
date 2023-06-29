---
title: Teaching Materials
published: 2023-05-05
---

:bulb: mostly copied here from https://github.com/nfdi4plants/teaching_materials  
Main contributors are:
- [Dominik Brilhaus](https://orcid.org/0000-0001-9021-3197) ([Brilator](https://github.com/Brilator))
- [Andrea Schrader](https://orcid.org/0000-0002-3879-7057) ([andreaschrader](https://github.com/andreaschrader))
- [Cristina Martins Rodrigues](https://orcid.org/0000-0002-4849-1537) ([CMR248](https://github.com/CMR248))
- [Martin Kuhl](https://orcid.org/0000-0002-8493-1077) ([Martin-Kuhl](https://github.com/Martin-Kuhl))

## Moving contents from teaching materials to here (recommendations)

- When adding markdowns (bricks, units) and images (i.e. to `img`), replace `/images/` with `/../img/`.

## git issues

Note, with the many images (and powerpoint files) stored in this repo, the overall size has become rather big leading to issues with `git push`
So far, it helped to increase the postBuffer:

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
