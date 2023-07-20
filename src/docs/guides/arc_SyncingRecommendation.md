---
layout: docs
title: Syncing recommendation
date: 2023-06-27
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we elaborate recommendations on syncing your ARC via the [ARC Commander](./../implementation/ArcCommander.html) 

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>    
</a>

<br>
<br>


:warning:
This guide presents an interim solution. We are working on a more user-friendly implementation.


## Before we can start

:ballot_box_with_check: You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

## You have full control

Unlike what you are used to from common cloud services, none of the ARC tools *automatically* or *passively* syncs your ARC between your computer and the DataHUB. You have to actively sync it. What may appear as an unwanted burden &ndash; "*Why do I have to do this myself?*" &ndash; actually grants you full access over what is happening with your ARC. First, it allows you to avoid syncing unwanted changes. For instance, consider adding a large amount of data, that may take some time to be uploaded into the DataHUB. You surely would want to decide yourself when to start the upload. Secondly, it allows you document your ARC's progress step by step. In general, the more you work with your ARC, the more you add or update, annotate or analyze data, the more you will want to make sure these changes are saved. Consider the syncing as a way to backup your project's progress as well as an "undo button".

:bulb: In the DataHUB, the individual sync steps are called "commit".

## Add a message to communicate your ARC's evolution

We recommend [adding a message](./../ArcCommanderManual/arc_synchronization.html) that shortly summarizes, what you did since you last synced your ARC. 

For instance: 

1. You start a fresh ARC for your project

```bash
arc sync -m "initialized ARC structure"
```

2. You add folders for your study and assay

```bash
arc sync -m "added folder structure"
```

3. You add the raw data to an RNASeq assay

```bash
arc sync -m "added RNAseq dataset"
```

4. You annotate the dataset using Swate 

```bash
arc sync -m "annotate RNAseq samples"
```

:bulb: If no commit message is added, the ARC Commander by default adds the commit message "Update" during `arc sync`. 

## Follow your progress in the DataHUB

You can actually see all `arc sync` actions (i.e. commits) to your ARC in the DataHUB.

1. Open your ARC in the [DataHUB](https://git.nfdi4plants.org/) 
2. In the sidebar on the left, navigate to `Repository` &rarr; `Commits`. 
3. There you find a chronological list of syncing messages together with who synced (if you collaborate with others on an ARC) and when.

<img src="./../img/datahub-commits.png" style="width:75%;display: block;margin-left: auto;margin-right: auto;">



## Undo latest changes

4. Click on the latest (i.e. uppermost) commit.
5. In the top-right corner select `Revert` from the drop-down menu `Options`. 

<img src="./../img/datahub-commits-revert01.png" style="width:75%;display: block;margin-left: auto;margin-right: auto;">

6. Un-check the box "Start a new merge request with these changes".
7. Click "Revert"

<img src="./../img/datahub-commits-revert02.png" style="width:55%;display: block;margin-left: auto;margin-right: auto;">




