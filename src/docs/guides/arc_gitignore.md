---
layout: docs
title: Keep files from syncing to the DataHUB
date: 2023-06-28
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


:warning:
This guide presents an interim solution. We are working on a more user-friendly implementation.

## Before we can start

:ballot_box_with_check: You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)  
:ballot_box_with_check: The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
:ballot_box_with_check: You have a [DataPLANT](https://register.nfdi4plants.org) account  
:ballot_box_with_check: Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token


## The .gitignore file

Every ARC comes with a special file called `.gitignore`, that resides in the root of your ARC. Files and folders listed in your ARC's `.gitignore` will be *ignored* by the ARC's version control system. That means changes to those files will not be tracked by the ARC Commander nor will the files be synced to the DataHUB.

:bulb: If `.gitignore` does not exist in your ARC, you can simply create it in your ARC's root using a text editor. 

:bulb: By default, this file is hidden from your File Explorer ([Windows](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5#WindowsVersion=Windows_11)) or Finder ([macOS](https://nordlocker.com/blog/how-to-show-hidden-files-mac/)). 


:bulb: Since files added to `.gitignore` on one machine will not be synced to the DataHUB, they will also not automatically become available on another machine, where you work with your ARC.

:warning: If a file in your ARC was already synced to the DataHUB, adding it to `.gitignore` will only keep it from future syncs, it will however not remove the existing file. 


## Adding files to .gitignore

1. Open your ARC in your File Explorer (Windows) or Finder (macOS)
2. Add a new file `my-personal-notes.txt` or folder `intermediate-results` to the ARC 
3. Open `.gitignore` in a text editor.
   1. Add a new line `my-personal-notes.txt` or `intermediate-results/` at the end of the file
   2. Save and close the file.
4. Sync the ARC via `arc sync`
5. Check your ARC in the DataHUB, to see that the file `my-personal-notes.txt` or folder `intermediate-results/` does not exist there.


## Allowing files to sync

If at some point you want the *ignored* file or folder to sync, you can simply remove the respective line from your ARC's `.gitignore` file. 

