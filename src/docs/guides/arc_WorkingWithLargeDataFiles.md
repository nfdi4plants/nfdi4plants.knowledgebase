---
layout: docs
title: Working with large data files
date: 2023-12-05
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: true
add support: true
add sidebar: _sidebars/mainSidebar.md
---

## About this guide

In this guide we show you how you can actively handle large data files in your ARC using **[ARC Commander](./../implementation/ArcCommander.html)**.

:bulb: If you use **[ARCitect](./../ARCitect-Manual/index.html)** to manage your ARCs, make sure to select or unselect the boxes `LFS` (in the "Download ARC" panel) or `Download LFS Files` (in the "Versions" panel) in order to allow or prevent syncing large files (LFS = large file storage).

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

ARCs and the DataHUB come with a mechanism to sync and store large files called *Large File Storage (LFS)*. LFS is an efficient way to store your large data files. These files are called "LFS objects". Rather than checking every file during every `arc sync`, the ARC Commander first checks *wether there was a change at all*. And only if this is the case, it scans *what* was changed. This way it saves time and computing power compared to always scanning all large files for possible changes. 

By default, the ARC Commander tracks the following files via LFS: 
  1. All files stored in an assay's `dataset` folder, and
  2. All files with a size larger than 150 MB. 

The threshold of 150 MB can easily be adjusted using the ARC Commander. For instance, if you want to decrease it to 5 MB (i.e. 5000000 bytes), run

```bash
arc config set -g -n "general.gitlfsbytethreshold" -v "5000000"
```

:bulb: The LFS system is also the reason why [git LFS](https://git-lfs.github.com/) needs to be installed prior to using the ARC Commander. 

## Track files via LFS

In addition to the defaults, you can also actively choose, which files to track via LFS. 

1. Update your local ARC via `arc sync`
2. Add large files or folders by copying or moving them to your ARC
3. Track files via

```bash
git lfs track "<path/to/FolderWithLargeFiles/**>"
git add .gitattributes
```

4. Sync your ARC to the DataHUB via `arc sync`
5. Open your ARC in the DataHUB and navigate to the folder with LFS objects and see them flagged as "LFS".

## Downloading an ARC without large data files

Sometimes you may want to download your ARC to a smaller computer, where you do not need a full copy of your ARC including all its large data files. For instance, you just want to work with smaller derived data sets or want to update ISA metadata. 
In this case, you can add the `-n` or `--nolfs` flag to your `arc get` command: 

```bash
arc get --nolfs -r https://git.nfdi4plants.org/<YourUser>/<YourARC>
```

For example, have a look at the ARC https://git.nfdi4plants.org/shiltemann/physcomitrium-patens-light-signaling-2022/. 
In the DataHUB this ARC has a storage volume of ~84GB (December 2023), most of which comes from the [large RNASeq data files](https://git.nfdi4plants.org/shiltemann/physcomitrium-patens-light-signaling-2022/-/tree/main/assays/RNASeq/dataset) flagged as "LFS".

You can download this ARC without the LFS objects via

```bash
arc get --nolfs -r https://git.nfdi4plants.org/shiltemann/physcomitrium-patens-light-signaling-2022/
```

## Selectively download large files

If at some point you wish to selectively download one or more of the LFS objects of your ARC to that machine, you can do so via `git lfs pull --include "<path/to/fileOrFolder>"`

For example, the following command will download one of the large RNASeq data files.

```bash
git lfs pull --include "assays/RNASeq/dataset/R19/R19_1.fq.gz"
```

## Download all large files in the ARC

If at some point you wish to download **all** LFS files of your ARC, you can use the following command

```bash
git lfs pull --include "*"
```
