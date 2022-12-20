---
layout: docs
title: "Sychronize an ARC"
published: 2022-12-13
add toc: true
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


## Working on a second branch

*Problem:* 

- No direct access rights to the main branch (which can be handled via the [DataHUB](../DataHub.md)) or 
- Many people working on the same repository, making direct pushing to main branch chaotic.

*Solution:* 

Work on a second branch and contribute to the main branch using merge/pull requests

*Workflow:*
 1. Use `arc get` to get the main branch of the repository.
 2. Work on the ARC.
 3. Use `arc sync -b SecondBranchName`.

This will create a commit with your newest changes and push the commit to a new branch with the given name. When you finished editing your ARC, you can merge your progress into the main branch. 

## Git status

You can check on which branch you are currently working on and the status of this branch by using

```bash
git status
```

This will print to the console, if you are behind, up to date, or ahead of the main branch.
