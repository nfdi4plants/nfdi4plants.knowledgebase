---
layout: docs
title: Keep files from syncing to the DataHUB
published: 2023-06-28
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we show you how to keep files from syncing to the DataHUB

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-read">Read</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>

<br>
<br>

## Before we can start

:ballot_box_with_check: You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token


## The .gitignore file

Files and paths listed in the `.gitignore` in the root of your ARC will be left out of the ARC's version control system. 


use of gitignore 
e.g. to keep sensible, unpublished data from sharing
note: files added to gitignore on one machine will neither be synced to the DataHUB nor tracked by version control
note: if a file was already in the DataHUB, using gitignore will only keep it from future syncs and not remove it