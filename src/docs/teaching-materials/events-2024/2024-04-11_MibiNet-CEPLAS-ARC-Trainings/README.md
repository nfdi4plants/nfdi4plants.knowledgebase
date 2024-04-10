---
title: "README 2024-04-11_MibiNet-CEPLAS-ARC-Trainings"
layout: none
date: 2024-04-03
---

## See website locally

1. Execute

```bash
npm run fornax
```

2. Open http://127.0.0.1:8080/docs/teaching-materials/events-2024/2024-04-11_MibiNet-CEPLAS-ARC-Trainings/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/events-2024/2024-04-11_MibiNet-CEPLAS-ARC-Trainings
```

```bash
rm ./*.html

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
        npx @marp-team/marp-cli@latest --html --allow-local-files $unit --theme-set $marpTheme ../../style/ --
    fi

done
```

## automate adding slides to index

Slides will be placed between two tags <!-- linked-slides -->

```bash

linkedSlidesBegin=$(awk '/<!-- linked-slides -->/{++n; if (n==1) { print NR; exit}}' index.md)
linkedSlidesEnd=$(awk '/<!-- linked-slides -->/{++n; if (n==2) { print NR; exit}}' index.md)

head -n $linkedSlidesBegin index.md > tmp

for unit in *.html; do
    
    noPrefix=${unit#*-}
    noSuffix=${noPrefix%.*}

    echo "- <a href="./$unit" target="_blank">$noSuffix</a>" >> tmp
   
done

tail -n +$linkedSlidesEnd index.md >> tmp

mv tmp index.md

```

## Combine all slide decks into one

```zsh
selectMarpTheme=marp-theme_dataplant-ceplas-mibinet-ccby
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
sed "s|\./qr-code|\./\.\./qr-code|g" $outfile > tmp; mv tmp $outfile

marp --html --allow-local-files $outfile --theme-set $marpTheme ../../style/ --
marp --html --allow-local-files --pdf $outfile --theme-set $marpTheme ../../style/ --

```
