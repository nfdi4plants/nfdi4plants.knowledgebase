---
layout: docs
title: "Export ARC metadata"
published: 2022-12-20
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## arc get

- Using `arc get -r` followed by a URL + ".git" enables you to clone an already existing ARC as a local repository, e.g.,

```bash
arc get -r https://github.com/nfdi4plants/ARC.git
```

> :warning: In previous versions of the ARC Commander, the subcommand `get` allowed you to retrieve information from the ARC, e.g., `arc assay get` or `arc study person get`.  
This function is now available using the command `show`, e.g. `arc assay show` or `arc study person show`.