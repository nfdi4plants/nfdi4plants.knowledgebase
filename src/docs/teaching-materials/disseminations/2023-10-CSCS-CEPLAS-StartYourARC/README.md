---
title: README 2023-10-CSCS-CEPLAS-StartYourARC
---

Audience:
    - CSCS https://cerealstemcells.de/
    - PhD / PostDoc / PI

## See website locally

1. Execute `npm run fornax`
2. Open http://127.0.0.1:8080/docs/teaching-materials/disseminations/2023-10-CSCS-CEPLAS-StartYourARC/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/disseminations/2023-10-CSCS-CEPLAS-StartYourARC
```

```bash

marpTheme=../../style/marp-theme_dataplant-ceplas-ccby.css

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
        marp --html $unit --allow-local-files --theme-set $marpTheme
    fi

done
```


## Run one slide deck in watch / server mode

```bash
unit=Block05-Intro-Day2.md
marpTheme=../../style/marp-theme_dataplant-ceplas-ccby.css


marp --html $unit --allow-local-files --theme-set $marpTheme --watch

```
