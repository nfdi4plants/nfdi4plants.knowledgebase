---
layout: docs
title: Swate Desktop Installation
published: 2023-02-01
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

> :warning: Currently there is no installer available for Linux or MacOS. Please check out the alternatives.

> :bulb: As a university trying to publish to the Excel add-in store we encountered some legal roadblocks. Hence the current installer is far from perfect. Please check out the alternatives, if the installer does not work for your setup.

> ⚠️ **If you have an older Swate version installed already, it <u>might</u> be necessary to [clear the cache](https://docs.microsoft.com/de-de/office/dev/add-ins/testing/clear-cache#manually-clear-the-cache-in-excel-word-and-powerpoint) to apply the changes to Swate.**

- Download the [Windows Installer](https://github.com/nfdi4plants/Swate/blob/developer/.assets/swate-win.zip?raw=true).
- Close all Office instances (Excel, Powerpoint, Word, ...)
- Unzip (`Right click` ➞ `Extract All..`)
- Double click the `install.cmd`. You will be asked to give administrative permissions and in the end to allow changes to the registry. Allow both and you are good to go!
- Open Excel, go to `Insert` ➞ `My Add-ins` ➞ `Shared Folder`. There you should see both `Swate` and `Swate.Experts`.

<details><summary>Alternative | Using the previous Swate installer</summary>
<p>

[Swate installer](https://github.com/omaus/Swate_Install#swate-installer)

</p>
</details>

<details><summary>Alternative | Using the release archive</summary>
<p>
    
⚠️ This method might not be accessible anymore.

Using the release archive

- Install [node.js LTS](https://nodejs.org/en/) (needed for office addin related tooling)
- Download the [latest test release archive](https://github.com/nfdi4plants/Swate/releases) and extract it
- Execute the test.cmd (windows, as administrator) or test.sh (macOS, you will need to make it executable via chmod 
a+x) script.
  
</p>
</details>
