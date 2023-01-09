---
layout: docs
title: "Clone an ARC from the DataHUB"
published: 2022-12-20
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

Using `arc get -r` followed by a URL + ".git" enables you to clone an already existing ARC as a local repository, e.g.,

```bash
arc get -r https://github.com/nfdi4plants/ARC.git
```

> :bulb: Adding a `-n` flag to the get command allows you to download the ARC without large data files, e.g.
> ```bash 
> arc get -n -r https://git.nfdi4plants.org/brilator/samplearc_rnaseq
> ```

> :warning: In previous versions of the ARC Commander, the subcommand `get` allowed you to retrieve information from the ARC, e.g., `arc assay get` or `arc study person get`.  
> This function is now available using the command `show`, e.g. `arc assay show` or `arc study person show`.

<!-- TODO 

Andrea: Should we already mention the new lfs flag to prevent bad experience due to downloading very/too big shared ARCs?
Also, for arc get, the authentification problem might occur or re-occur when the access TOKEN is expired as somebody set it like this. Therefore, the respective link would be also of interest here.

 -->