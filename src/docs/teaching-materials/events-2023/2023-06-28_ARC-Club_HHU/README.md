---
title: README 2023-06-28_ARC-Club_HHU
---

## See website locally

1. Execute `npm run fornax`
2. Open http://127.0.0.1:8080/docs/teaching-materials/disseminations/2023-06-28_ARC-Club_HHU/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/events-2023/2023-06-28_ARC-Club_HHU
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