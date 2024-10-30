---
layout: docs
title: "Working on an ARC branch"
date: 2022-12-13
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---


## Challenge

- No direct access rights to the main branch (which can be handled via the [DataHUB](./../DataHub.md)) or 
- Many people working on the same repository, making direct pushing to main branch chaotic.

## Solution

Work on a second branch and contribute to the main branch using merge/pull requests

## Workflow

1. Use `arc get` to get the main branch of the repository.
2. Work on the ARC.
3. Use `arc sync -b SecondBranchName`.

> :bulb: This will create a commit with your newest changes and push the commit to a new branch with the given name. When you finished editing your ARC, you can merge your progress into the main branch.

## Git status

You can check on which branch you are currently working on and the status of this branch by using

```bash
git status
```

> :bulb: This will print to the console, if you are behind, up to date, or ahead of the main branch.
