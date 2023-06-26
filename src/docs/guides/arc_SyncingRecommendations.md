---
layout: docs
title: Syncing recommendations
published: 2023-06-26
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

## Before we can start

:ballot_box_with_check: You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token

## You have full control

Unlike what you are used to from common cloud services, non of the ARC tools *automatically* or *passively* syncs your ARC between your computer and the DataHUB. You have to actively sync it. What may appear as an unwanted burden &ndash; "*Why do I have to do this myself?*" &ndash; actually grants you full access over what is happening with your ARC. First, it allows you to avoid syncing unwanted changes. For instance, consider adding a large amount of data, that may take some time to be uploaded into the DataHUB. You surely would want to decide yourself when to start the upload and take a break. 
Secondly, it allows you document your ARC's progress. 


## Add a commit message to protocol your ARC's evolution

```bash
arc sync -r https://git.nfdi4plants.org/<YourUserName>/<YourARC> -m "added RNAseq dataset"
```

## The "undo button"

<!-- ## An `arc sync` a day keeps the Data Steward away -->


The more you work with your ARC, the more you add or update, annotate or analyze data, 

