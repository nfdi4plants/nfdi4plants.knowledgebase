---
title: "README 2023-11-15_CEPLAS-ARC-Clubs"
layout: none
date: 2023-12-04
---

## See website locally

1. Execute
```bash
npm run fornax
```
3. Open http://127.0.0.1:8080/docs/teaching-materials/disseminations/2023-11-15_CEPLAS-ARC-Clubs/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/events-2023/2023-11-15_CEPLAS-ARC-Clubs
```

```bash

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
        npx @marp-team/marp-cli@latest --html --allow-local-files $unit --theme-set $marpTheme ../../style/ --
    fi

done
```

## automate hidden index

```bash

echo "---\nlayout: docs\ntitle: CEPLAS ARC Clubs 2023\ndate: 2023-11-15\nadd sidebar: _sidebars/mainSidebar.md\n---\n\n## Slide decks\n" > hidden-index.md

for unit in *.html; do
    
    noPrefix=${unit#*-}
    noSuffix=${noPrefix%.*}

    echo "- <a href="./$unit" target="_blank">$noSuffix</a>" >> hidden-index.md
   

done
```

## Combine all slide decks into one

```zsh
selectMarpTheme=marp-theme_dataplant-ceplas-ccby
outfolder=_combined-slides

mkdir -p $outfolder
title=$(pwd | xargs basename)
outfile="$outfolder"/"$title".md
currentDate=$(date +"%Y-%m-%d")

echo "---\nmarp: true\nlayout: slides\ntheme: $selectMarpTheme\npaginate: true\ntitle: $title\ndate: $currentDate\n---\n" > $outfile

for unit in *.md; do    
    if grep -q "^marp: true" "$unit"
    then
      yamlEnd=$(awk '/---/{++n; if (n==2) { print NR; exit}}' $unit)
      tail -n +$((yamlEnd+1)) $unit >> $outfile
      echo "\n---\n" >> $outfile
    fi
done

sed "s|\.\./\.\./\.\./img/|\.\./\.\./\.\./\.\./img/|g" $outfile > tmp; mv tmp $outfile

npx @marp-team/marp-cli@latest --html --allow-local-files $outfile --theme-set $marpTheme ../../style/ --
npx @marp-team/marp-cli@latest --html --allow-local-files --pdf $outfile --theme-set $marpTheme ../../style/ --

```
