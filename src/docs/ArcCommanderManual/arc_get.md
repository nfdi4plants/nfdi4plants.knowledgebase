---
layout: docs
title: "Clone an ARC from the DataHUB"
date: 2022-12-20
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

Using `arc get -r` followed by a URL + ".git" enables you to clone an already existing ARC as a local repository, e.g.,

```bash
arc get -r https://github.com/nfdi4plants/ARC.git
```

> :bulb: Adding a `-n` flag to the get command allows you to download the ARC without large data files, e.g.
> ```bash 
> arc get -n -r https://git.nfdi4plants.org/brilator/Facultative-CAM-in-Talinum
> ```

> :warning: In previous versions of the ARC Commander, the subcommand `get` allowed you to retrieve information from the ARC, e.g., `arc assay get` or `arc study person get`.  
> This function is now available using the command `show`, e.g. `arc assay show` or `arc study person show`.
