---
layout: docs
title: knowledge-base2pdf
published: 2022-07-01
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
add toc: false
add sidebar: _sidebars/hiddenMenuSidebar.md
---

Goal:

1. Hand-out materials as PDF
1. Have code chunks copy-paste friendly
1. Document everything in one place (GitHub) and format (Markdown)

## Dependencies

Requires local installations of

  1. Pandoc: https://pandoc.org/installing.html
  2. Latex: (see pandoc installation instructions for OS-specific recommendations)

## Pandoc template

The `dataplant_eisvogel.latex` is just a copy of the `eisvogel.tex` downloaded from https://github.com/Wandmalfarbe/pandoc-latex-template/ (commit #f5c1f20; Dec 19, 2021).
See original repo for instructions and more examples.

Since `pandoc` does not support to specify a path-to-template, the template needs to be copied to the default local `pandoc` templates folder.

> Note: This `$HOME/.pandoc/templates/` be the macOS-specific directory. Check!

```bash
#  cd <path/to>/nfdi4plants.knowledgebase
cp src/docs/_ignored/pandoc_tests/sources/dataplant_eisvogel.latex $HOME/.pandoc/templates/
```

## Common issues with pandoc (and latex)

- special characters in YAML metadata,
  - e.g. `title: How-To: Synchronize ...` must be escaped or put into apostrophes `title: "How-To: Synchronize..."`
- embedded images in pdflatex (e.g. when using the pandoc template)
  - pdf is ok
  - png is ok (also *.drawio.png)
  - **.svg does not work!**
- the titlepage-background from eisvogel.latex template will center and fit the linked image
  - if the file is not of the same paper size / ratio (e.g. DIN A4) as the output, it will align it middle-center

## Example usage

1. Navigate to the folder, where the `*.md` article is stored (to maintain relative paths, e.g. to images),

```bash
#  cd <path/to>/nfdi4plants.knowledgebase
cd src/docs/hidden
```

2. Run pandoc to produce a PDF


### with template and title page (based on a pdf)

Added the following attributes to the YAML header of `src/docs/fundamentals/DataSharing.md` to produce pandoc_example_DataSharing.md

```bash
titlepage: true
titlepage-color: "2D3E50"
titlepage-text-color: "4FB3D9"
titlepage-rule-color: "4FB3D9"
titlepage-rule-height: 2
titlepage-background: pandoc_sources/dpbackground.pdf
```

```bash
pandoc pandoc_example_DataSharing.md -o pandoc_example_DataSharing.pdf --from markdown --template dataplant_eisvogel.latex --listings
```
