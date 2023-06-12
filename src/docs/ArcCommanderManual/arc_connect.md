---
layout: docs
title: "Connect an ARC to the DataHUB"
published: 2022-12-13
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

In case you have not yet connected your local repository to a remote one, you can specify the remote repository with the flag `--repositoryaddress` or `-r` in combination with a URL + ".git", e.g.,

```bash
arc sync -r https://github.com/nfdi4plants/ARC/tree/Example-ARC.git
```

> :bulb: If your local repository is not connected to a remote repository, `arc sync` will only track and store changes locally. The ARC Commander will not synchronize  any changes to the DataHUB.

<!-- TODO

Andrea: link to workaround / FAQ 
 -->
