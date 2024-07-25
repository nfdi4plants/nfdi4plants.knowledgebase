---
layout: docs
title: Uploading files
author:
  - name: Hamed Jalali
    github: https://github.com/hamedjalali1982
    orcid: https://orcid.org/0000-0002-1190-5652
add toc: false
add sidebar: _sidebars/mainSidebar.md
status: published
date: 2024-06-13
---

You can upload raw data from your local computer directly to the remote copy of your ARC on any DataHUB by using the ARCmanager. Assume we need to add some raw data to the dataset directory of an existing assay. To do so, first navigate to the `dataset` folder and use the `UPLOAD File(s)` button at the top of the screen. Then, select the files you want to upload from your local file system, and click `Open` to begin with the upload.

<p float="center">
    <img src="../img/ARCmanager_uploadingfiles_upload_command.png" width="500" style="border: 1px solid  black;" /> 
</p>

If you want to upload a whole folder instead of single files, use the `Upload Folder` button:

<p float="center">
    <img src="../img/ARCmanager_uploadingfiles_upload_data.png" width="500" style="border: 1px solid  black;" />
</p>

If the size of the data files is large (>100Mb), the  large file system package in Git is needed. To use this function for an upload, check the  `LFS` option and then start the upload as described before.

<p float="center">
        <img src="../img/ARCmanager_uploadingfiles_lfs.png" width="500" style="border: 1px solid  black;" />
</p>