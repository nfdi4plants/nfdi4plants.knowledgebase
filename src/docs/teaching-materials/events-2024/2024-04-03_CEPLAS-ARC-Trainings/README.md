---
title: "README 2024-04-03_CEPLAS-ARC-Trainings"
layout: none
date: 2023-12-04
---


## See website locally

1. Execute

```bash
npm run fornax
```

2. Open http://127.0.0.1:8080/docs/teaching-materials/events-2024/2024-04-03_CEPLAS-ARC-Trainings/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/events-2024/2024-04-03_CEPLAS-ARC-Trainings
rm ./*.html
```

```bash

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
        npx @marp-team/marp-cli@latest --html --allow-local-files $unit --theme-set $marpTheme ../../style/ --
    fi

done
```


## Combine all slide decks into one

```zsh
cd src/docs/teaching-materials/events-2024/2024-04-03_CEPLAS-ARC-Trainings

mkdir -p _combined-slides

echo "---\nmarp: true\nlayout: slides\ntheme: marp-theme_dataplant-ceplas-ccby\npaginate: true\ntitle: \ndate: \n---\n" > _combined-slides/combined-slides.md

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
      yamlEnd=$(awk '/---/{++n; if (n==2) { print NR; exit}}' $unit)
      tail -n +$((yamlEnd+1)) $unit >> _combined-slides/combined-slides.md
      echo "---" >> _combined-slides/combined-slides.md

    fi

done

sed "s|\.\./\.\./\.\./img/|\.\./\.\./\.\./\.\./img/|g" _combined-slides/combined-slides.md > tmp
mv tmp _combined-slides/combined-slides.md

```

## automate adding slides to index

```bash


echo "---\nlayout: docs\ntitle: \ndate: \nadd sidebar: _sidebars/mainSidebar.md\n---\n\n## Slide decks\n" > hidden-index.md

for unit in *.html; do
    
    noPrefix=${unit#*-}
    noSuffix=${noPrefix%.*}

    echo "- <a href="./$unit" target="_blank">$noSuffix</a>" >> hidden-index.md
   

done
```
