---
title: Image Index crawler
layout: docs
date: 2023-09-26
---

# Crawl images and add to _imageIndex.md

cd src/docs/img

```bash

find . -type f > _all-files
grep -v '.pptx' _all-files > _all-images-only
sed 's|^./|/docs/img/|g' _all-images-only > _all-images-absolute

rm -f _test.md

while IFS= read -r img; 
do
    if [ $(grep -c "$img" _ImageIndex.md) -eq 0 ]
        then
    
        echo '<a href="'$img'" target="_blank"><img src="'$img'" width="50px" alt="'$img'"/></a> | <a href="'$img'" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase'$img'</a> |  |  ' >> _ImageIndex.md
   fi
done < _all-images-absolute

```
