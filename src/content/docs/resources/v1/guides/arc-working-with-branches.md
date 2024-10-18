---
title: Working with branches
lastUpdated: 2024-08-17
authors:
  - viktoria-petrova
---

## ARC branches

Branches in Git allow users to work on and develop new features of their projects without affecting or changing other branches in the repository. If you want to know more about branches check out the [Version control & Git](./../fundamentals/VersionControlGit.html) article.

In the example below, you can see how branches have been used to work on developing an ARC in parallel. The ARC is created within the "main" branch and some metadata and microscopy images are uploaded. A new branch called "plant material" is generated to describe the process of growing the plants, later used in the experimental assays, in a study. Moreover, another branch named "RNA-seq" deals with the description of the actual sequencing assay and the data generated from it. After completion, branches are merged into "main".

:::caution
Don't forget to sync your branch with the "parent" branch to avoid merging conflicts.
:::

<img src="./images/git-branches.drawio.svg" style="width:100%;display: block;margin: auto; padding: 30px 0px;">

## ARCitect

In ARCitect you can create a new branch or switch to already existing ones by navigating to "Commit" on the left sidebar (1), then clicking on the dropdown menu (2) and selecting "Add Branch" (3) or the name of an already existing branch respectively (4). 

<img src="./images/ARCitect_branches.drawio.svg" style="width:100%;display: block;margin: auto; padding: 30px 0px;">

## ARC Commander

You can work on your ARC locally and once you are done you can commit your changes to a different branch. 

```bash
arc sync -b SecondBranchName
```

This will create a commit with your newest changes and push the commit to a new branch with the given name. When you finished editing your ARC, you can merge your progress into the main branch.
