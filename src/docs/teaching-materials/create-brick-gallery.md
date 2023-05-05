---
layout: script
title: Brick Gallery
published: 2023-05-02
add toc: false
add sidebar: _sidebars/mainSidebar.md
---

cd src/docs/fundamentals/slideDecks


```bash
touch brick-gallery.md

echo '---\nlayout: docs\ntitle: Brick Gallery\npublished: 2023-05-02\nadd toc: false\nadd sidebar: _sidebars/mainSidebar.md\n---' > brick-gallery.md
```

## batch-convert markdown bricks to html

```bash
for m in bricks/*.md; do

  # npx marp $m --html --allow-local-files --theme-set $marpTheme
  npx marp $m --html --allow-local-files  

done
```

## 

```bash
for i in bricks/*.html; do
  echo '\n\n### '$i'\n' >> brick-gallery.md
  
  echo '<iframe src="'$i'" style="height:222px; width:400px;" ></iframe>'  >> brick-gallery.md

done

```