---
title: README 2023-09-MibiNet-CEPLAS-StartYourARC
---

## See website locally

1. Execute `npm run fornax`
2. Open http://127.0.0.1:8080/docs/teaching-materials/disseminations/2023-09-MibiNet-CEPLAS-StartYourARC/index.html


## Batch-compile marp slide decks to html

```bash
cd src/docs/teaching-materials/disseminations/2023-09-MibiNet-CEPLAS-StartYourARC
```

```bash

marpTheme=../../style/marp-theme_dataplant-ceplas-mibinet-ccby.css

for unit in *.md; do
    
    if grep -q "^marp: true" "$unit"
    then
        marp --html $unit --allow-local-files --theme-set $marpTheme
    fi

done
```

