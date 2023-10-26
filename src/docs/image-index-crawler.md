---
title: Image Index crawler
layout: none
date: 2023-09-26
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

Note, this is just a quick and dirty crawler to list all images and add them to the $indexfile

# Define output

```bash
cd src/docs/
indexfile=image-index.md
sep=" | "
```

# Crawl images and add to $indexfile

```bash

touch $indexfile

find img -type f > .tmp_all-files
grep -v '.pptx' .tmp_all-files > .tmp_all-images-only
sed 's|^img/|./img/|g' .tmp_all-images-only > .tmp_all-images-relative

while IFS= read -r img; 
do
    if [ $(grep -c "$img" $indexfile) -eq 0 ]
        then
    
        echo '<a href="'$img'" target="_blank"><img src="'$img'" width="150px" alt="'$img'"/></a>'$sep'<a href="'$img'" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/'$img'</a>'$sep''$sep'' >> $indexfile
   fi
done < .tmp_all-images-relative

rm .tmp_all-*

grep -v ".DS_Store" $indexfile > tmpfile && mv tmpfile $indexfile

```
