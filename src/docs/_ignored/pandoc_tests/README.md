# Conversion of knowledge base articles to polished pdf

Goal:

1. Hand-out materials as PDF
1. Have code chunks copy-paste friendly
1. Document everything in one place (GitHub) and format (Markdown)

## Dependencies

Requires local installations of

  1. Pandoc: https://pandoc.org/installing.html
  2. Latex: (see pandoc installation instructions for OS-specific recommendations)

## VS Code extensions

### Draw.io

This extensions allows editing draw.io

- Draw.io Integration https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio **or**
- Draw.io Integration - Insiders Build https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio-insiders-build

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
cd src/docs/tutorials
```

2. Run pandoc to produce a PDF

### without specific template

pandoc QuickStart_arc.md -o QuickStart_arc.pdf

### with template

pandoc QuickStart_arc.md -o ../_ignored/pandoc_tests/QuickStart_arc.pdf --from markdown --template dataplant_eisvogel.latex --listings

### with template and title page (based on a pdf)

Added this to the YAML header in "DataPlantOnboarding.md"

```bash
titlepage: true
titlepage-color: "2D3E50"
titlepage-text-color: "4FB3D9"
titlepage-rule-color: "4FB3D9"
titlepage-rule-height: 2
titlepage-background: ../_ignored/pandoc_tests/sources/dpbackground.pdf
```

```bash
pandoc DataPlantOnboarding.md -o ../_ignored/pandoc_tests/DataPlantOnboarding.pdf --from markdown --template dataplant_eisvogel.latex --listings
```

### with template and title page (based on a drawio)

Added this to the YAML header in "DataHub_GitHubDesktop.md"

```bash
titlepage: true
titlepage-rule-color: "4FB3D9"
titlepage-rule-height: 2
titlepage-background: ../_ignored/pandoc_tests/sources/dataplant_titlePage.drawio.png
```

```bash
pandoc DataHub_GitHubDesktop.md -o ../_ignored/pandoc_tests/DataHub_GitHubDesktop.pdf --from markdown --template dataplant_eisvogel.latex --listings
```
