---
layout: docs
title: Working with large data files
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

In this guide we show you how to keep files from syncing to the DataHUB. This can help to keep large intermediate, sensitive or unpublished data from uploading to the DataHUB. 

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


## Large File Storage (LFS)

- ARC's come with a mechanism to sync and store large files, that is called *Large File Storage (LFS)*

- by default, files stored in an assay's `dataset` folder are added to LFS
- you can also actively add files to LFS
- files 


## Track files by LFS

1. Update your local ARC via `arc sync`
2. Add large files or folders by copying or moving them to your ARC
3. Track files 

```bash
git lfs track "<path/to/FolderWithLargeFiles/**>"
git add .gitattributes
```

4. Sync your ARC to the DataHUB via 

```bash
arc sync -m "add large files"
```


#### Cloning Including LFS objects

```bash
arc get -r https://git.nfdi4plants.org/<YourUser>/<YourARC>
```
#### Cloning Excluding LFS objects

:bulb: recommended on small machines, where you **do not want to download lfs objects**

```bash
arc get --nolfs -r https://git.nfdi4plants.org/<YourUser>/<YourARC>
```

Change LFS option on that machine for this ARC.
:bulb: This makes sure that also during an upcoming arc sync (git pull), LFS objects are not transferred.

Navigate to your ARC. 

```bash
git config --local filter.lfs.smudge "git-lfs smudge --skip -- %f"
git config --local filter.lfs.process "git-lfs filter-process --skip"
```

## Selectively download large files

LFS-pull only a specific subdirectory / file

```bash
git lfs pull --include "<path/to/fileOrFolder/>"
```