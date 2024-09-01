---
layout: docs
title: Working with branches
date: 2024-08-17
author:
- name: Viktoria Petrova
  github: toriapetrova
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---


<!-- TODO article about licensing  -->

## Git branches

Branches in Git allow users to work on and develop new features of their projects without affecting or changing other branches in the repository. 

Imagine you're writing a book. The main path you're working on is the main storyline, which we'll call the main branch. But at some point, you get a new idea for an alternative storyline. Instead of changing the main storyline right away, you create a new path (or branch). Now, you can write and develop this new idea without affecting the main storyline. If you like how the alternative idea turns out, you can merge it back into the main storyline. If not, you can simply discard it, and the main storyline remains untouched.

In Git, branches help you experiment and develop different features or ideas in isolation, without messing up the main codebase. In addition, multiple people can work on different tasks within the same project without interfering with each other. You can switch between branches, merge them together, or delete them when they're no longer needed. 

In the example below, you can see how branches have been used to work on developing an ARC in parallel. The ARC is created within the "main" branch and some metadata and microscopy images are uploaded. A new branch called "plant material" is generated to describe the process of growing the plants, later used in the experimental assays, in a study. Moreover, another branch named "RNA-seq" deals with the description of the actual sequencing assay and the data generated from it. After completion, branches are merged into "main".

:warning: Don't forget to sync your branch with the "parent" branch to avoid merging conflicts.

<img src="./../img/git-branches.drawio.svg" style="width:100%;display: block;margin: auto; padding: 30px 0px;">

## ARCitectit

In ARCitect you can create a new branch or switch to already existing ones by navigating to "Commit" on the left sidebar (1), then clicking on the dropdown menu (2) and selecting "Add Branch" (3) or the name of an already existing branch respectively (4). 

<img src="./../img/ARCitect_branches.drawio.svg" style="width:100%;display: block;margin: auto; padding: 30px 0px;">

## ARC Commander

You can work on your ARC locally and once you are done you can commit your changes to a different branch. 

```bash
arc sync -b SecondBranchName
```
This will create a commit with your newest changes and push the commit to a new branch with the given name. When you finished editing your ARC, you can merge your progress into the main branch.
