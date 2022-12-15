---
layout: docs
title: "ARC initialization"
published: 2022-12-13
add toc: true
add sidebar: _sidebars/arcCommanderWikiSidebar.md
---

- The basic ARC folder structure can be created using `arc init`
  - .arc auxillary arc commander files
  - assays storage for raw data
  - externals storage for external data
  - runs storage for processed data
  - workflows storage for computational workflows

- The flag `--repositoryaddress` (`-r`) followed by the URL + ".git" of a remote repository lets you connect your local ARC with the respective remote repository, e.g. 

```
arc init --repositoryaddress https://github.com/nfdi4plants/ARC.git
```

- Using `arc get -r` followed by a URL + ".git" enables you to clone an already existing ARC as local repository, e.g.

```
arc get -r https://github.com/nfdi4plants/ARC.git
```

**In previous versions of the arcCommander, the subcommand `get` allowed you to retrieve information from the ARC, e.g. `arc assay get` or `arc study person get`. This function is now available using the command `show`, e.g. `arc assay show` or `arc study person show`.**   