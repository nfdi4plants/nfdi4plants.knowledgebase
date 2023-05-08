---
marp: true
theme: dataplant_marp-theme
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: lesson_documentation-Markdown_HTML
---

# Markdown vs. HTML

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5rem;
}
ul {
    margin: 5; padding: 0;
}
</style>

<div class="columns">
<div class="columns-left">


**In HTML:**

```html
<html>
  <body>    
    <h3>headline level 3</h3>
    <h4>headline level 4</h4>
  </body>
</html>
```

**In Markdown:**

```md
  ### headline level 3
  #### headline level 4
```

</div>
<div class="columns-right">

### Rendered output

### headline level 3
#### headline level 4

</div>
</div>
