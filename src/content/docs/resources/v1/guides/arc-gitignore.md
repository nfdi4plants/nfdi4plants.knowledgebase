---
title: Keep files from syncing to the DataHUB
lastUpdated: 2023-06-28
authors:
  - dominik-brilhaus
---

:::note[About this guide]
In this guide we show you how to keep files from syncing to the DataHUB. This can help to keep large intermediate, sensitive or unpublished data from uploading to the DataHUB.
:::

:::tip[Before we can start]
- You have created an ARC before using the [ARC Commander](./../implementation/ArcCommander.html)  
- The latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) is installed on your computer  
- You have a [DataPLANT](https://register.nfdi4plants.org) account  
- Your computer is linked to the [DataHUB](https://git.nfdi4plants.org) via personal access token
:::

## The .gitignore file

Every ARC comes with a special file called `.gitignore`, that resides in the root of your ARC. Files and folders listed in your ARC's `.gitignore` will be *ignored* by the ARC's version control system. That means changes to those files will not be tracked by ARC tools (e.g. ARC Commander or ARCitect) nor will the files be synced to the DataHUB.

:bulb: If `.gitignore` does not exist in your ARC, you can simply create it in your ARC's root using a text editor or the ARCitect.

:bulb: By default, this file is hidden from your File Explorer ([Windows](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5#WindowsVersion=Windows_11)) or Finder ([macOS](https://nordlocker.com/blog/how-to-show-hidden-files-mac/)).

:bulb: Since files added to `.gitignore` on one machine will not be synced to the DataHUB, they will also become available on another machine, to where you sync your ARC.

:warning: If a file in your ARC was already synced to the DataHUB, adding it to `.gitignore` will only keep it from future syncs, it will however not remove the existing file.

## Adding files to .gitignore

1. Open your ARC in the ARCitect or in your File Explorer (Windows) or Finder (macOS)
2. Add a new file `my-personal-notes.txt` or folder `intermediate-results` to the ARC
3. Open `.gitignore` via ARCitect or a text editor.
   1. Add a new line `my-personal-notes.txt` or `intermediate-results/` at the end of the file
   2. Save and close the file.
4. Sync the ARC via ARC commander or ARCitect.
5. Check your ARC in the DataHUB, to see that the file `my-personal-notes.txt` or folder `intermediate-results/` does not exist there.

## Allowing files to sync

If at some point you want the *ignored* file or folder to sync, you can simply remove the respective line from your ARC's `.gitignore` file.
