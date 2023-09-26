---
title: Image Index crawler
layout: none
date: 2023-09-26
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

Note, this is just a quick and dirty crawler to list all images and add them to the _ImageIndex.md

# Crawl images and add to _imageIndex.md

```bash
cd src/docs/img
```

```bash

find . -type f > .tmp_all-files
grep -v '.pptx' .tmp_all-files > .tmp_all-images-only
sed 's|^./|/docs/img/|g' .tmp_all-images-only > .tmp_all-images-absolute

rm -f _test.md

while IFS= read -r img; 
do
    if [ $(grep -c "$img" _ImageIndex.md) -eq 0 ]
        then
    
        echo '<a href="'$img'" target="_blank"><img src="'$img'" width="50px" alt="'$img'"/></a> | <a href="'$img'" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase'$img'</a> |  |  ' >> _ImageIndex.md
   fi
done < .tmp_all-images-absolute

rm .tmp_all-*


grep -v "_ImageIndex" _ImageIndex.md > tmpfile && mv tmpfile _ImageIndex.md


```
