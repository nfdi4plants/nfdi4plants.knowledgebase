---
layout: docs
title: "Initialize an ARC"
date: 2022-12-13
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

<!-- TODO: I would suggest to link this to ARC article rather than explaining the structure here -->

- The basic ARC folder structure can be created using `arc init`
  - .arc auxillary arc commander files
  - assays storage for raw data
  - studies storage for your material and external data
  - runs storage for processed data
  - workflows storage for computational workflows

- The flag `--repositoryaddress` (`-r`) followed by the URL + ".git" of a remote repository lets you connect your local ARC with the respective remote repository, e.g.,

<!-- TODO: I would suggest to link a small demo ARC from the DataHUB rather than the empty GitHub repo -->

```bash
arc init --repositoryaddress https://github.com/nfdi4plants/ARC.git
```
