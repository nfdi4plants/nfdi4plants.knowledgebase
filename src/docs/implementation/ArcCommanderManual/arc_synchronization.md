---
layout: docs
title: "Sychronize an ARC"
published: 2022-12-13
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## arc sync

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

In case you have not yet connected your local repository to a remote one, you can specify the remote repository with the flag `--repositoryaddress` or `-r` in combination with a URL + ".git", e.g.,

```
arc sync -r https://github.com/nfdi4plants/ARC/tree/Example-ARC.git
``` 

**Note:** If your local repository is not connected to a remote repository, `arc sync` will only track LFS files and stage and commit changes to your local repository. The Commander will not pull or push any changes.
