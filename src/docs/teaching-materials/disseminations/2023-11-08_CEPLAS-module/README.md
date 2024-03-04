---
title: "README 2023-11-08_CEPLAS-module"
layout: none
date: 2023-11-06
---

## Add sections from last year

- git / version control
- FAIR project exercises

## See website locally

1. Execute `npm run fornax`
2. Open http://127.0.0.1:8080/docs/teaching-materials/disseminations/2023-11-08_CEPLAS-module/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/disseminations/2023-11-08_CEPLAS-module
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

## automate hidden index

```bash

echo "---\nlayout: docs\ntitle: CEPLAS Module 2023\ndate: 2023-11-08\nadd sidebar: _sidebars/mainSidebar.md\n---\n\n## Slide decks\n" > hidden-index.md

for unit in *.html; do
    
    noPrefix=${unit#*-}
    noSuffix=${noPrefix%.*}

    echo "- <a href="./$unit" target="_blank">$noSuffix</a>" >> hidden-index.md
   

done
```
