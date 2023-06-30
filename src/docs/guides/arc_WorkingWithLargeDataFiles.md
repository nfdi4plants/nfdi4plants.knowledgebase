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

In this guide we show you how you can actively handle large data files in your ARC. 

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-advanced">Advanced</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>    
</a>

<br>
<br>


<span id="badge-interim-left">Interim</span><span id="badge-interim-right">Solution</span><br>
This guide presents an interim solution. We are working on a more user friendly implementation.

## Before we can start

:ballot_box_with_check: You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token


## Large File Storage (LFS)

- ARCs come with a mechanism to sync and store large files, that is called *Large File Storage (LFS)*

- efficient way to store large files
   - First checks wether there was a change at all
   - And only then checks, what was changed. I.e. only then scans a complete large data file 

- By default, the ARC Commander tracks the following files via LFS: 
  1. All files stored in an assay's `dataset` folder, and
  2. All files with a size larger than 150 MB. 

The threshold of 150 MB can be adjusted using the ARC Commander. For instance, if you want to increase it to 250 MB (i.e. 250000000 bytes), use

```bash
arc config set -g -n "general.gitlfsbytethreshold" -v "250000000"
```

## Track files by LFS

- You can also actively add files to LFS



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