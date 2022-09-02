
# Conversion of knowledgebase articles to polished pdf

## Dependencies

Requires local installations of

  1. Pandoc: https://pandoc.org/installing.html
  2. Latex: (see pandoc installation instructions for OS-specific recommendations)

## Template

The `dataplant_eisvogel.latex` is just a copy of the `eisvogel.tex` downloaded from https://github.com/Wandmalfarbe/pandoc-latex-template/ (commit #f5c1f20; Dec 19, 2021).
See original repo for instructions and more examples.

Since `pandoc` does not support to specify a path-to-template, the template needs to be copied to the default local `pandoc` templates folder.

> Note: This `$HOME/.pandoc/templates/` be the macOS-specific directory. Check! 

```bash
#  cd <path/to>/nfdi4plants.knowledgebase
cp src/docs/_ignored/pandoc_tests/sources/dataplant_eisvogel.latex $HOME/.pandoc/templates/
```

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

pandoc QuickStart_arc.md -o QuickStart_arc.pdf --from markdown --template dataplant_eisvogel.latex --listings

### with template and title page

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
pandoc DataPlantOnboarding.md -o DataPlantOnboarding.pdf --from markdown --template dataplant_eisvogel.latex --listings
```
