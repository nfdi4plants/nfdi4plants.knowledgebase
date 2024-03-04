---
layout: docs
title: Swate Installation &ndash; macOS Excel Desktop
date: 2023-02-01
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

## Prerequisites

- A Mac running OS X v10.10 "Yosemite" or later with Office on Mac installed.
- Excel on Mac version 15.19 (160206).

## Steps

1. Download the latest [Swate manifests](https://github.com/nfdi4plants/Swate/blob/developer/.assets/swate-win.zip?raw=true)
2. Open a Finder and hit &#8984;+&#8679;+G (or via menu: Go -> "Go to Folder...") to open the "Go to Folder..." dialog
3. Navigate to `/Users/<username>/Library/Containers/com.microsoft.Excel/Data/Documents/` (replace <username> with your user name on the computer)
4. (If it does not exit, create and) open the folder `wef`
5. Add the files `core_manifest.xml` (and optionally the `experts_manifest.xml`) downloaded in step 1 to the folder `wef`.
6. Open a fresh Workbook in Excel, go to the `Insert` tab. 
7. Click the arrow next to `My Add-ins`. There you should be able to select `Swate` (and optionally `Swate.Experts`).
8. Once selected, Swate appears in the `Data` tab. ![Swate.Core Icon](https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_48x48.png)


> Adapted from: https://learn.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-mac