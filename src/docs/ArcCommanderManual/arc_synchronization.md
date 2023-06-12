---
layout: docs
title: "Sychronize an ARC"
published: 2022-12-13
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

The command `arc sync` handles multiple operations for your ARC in one step. It will

- track LFS files,
- stage changes,
- commit changes,
- pull changes from the remote repository, and
- push changes from your local repository. 

Using the flag `-m` allows you to add a message to your synchronization, e.g.,

```
arc sync -m "addition of proteomics dataset"
```
If no message was added, the Commander will generate a message by itself. 

<!-- TODO

Andrea: link to workaround / FAQ 
 -->
