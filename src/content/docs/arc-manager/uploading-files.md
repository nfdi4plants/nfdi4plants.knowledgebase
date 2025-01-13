---
title: Uploading files
sidebar:
  order: 6
authors:
 - hamed-jalali
 - alexander-kirbis
lastUpdated: 2025-01-13
---

You can upload raw data from your local computer directly to the remote copy of your ARC on any DataHUB by using the ARCmanager. Assume we need to add some raw data to the dataset directory of an existing assay. To do so, first navigate to the `dataset` folder and use the `UPLOAD File(s)` button at the top of the screen. Then, select the files you want to upload from your local file system, and click `Open` to begin with the upload.


![](@images/arc-manager/upload-files/01-upload-file.png)

If you want to upload a whole folder instead of single files, use the `Upload Folder` button:


![](@images/arc-manager/upload-files/02-upload-folder.png)


Files with a size larger than 50Mb are automatically uploaded using the large file system (LFS) package of Git. This means the file is not directly uploaded to your ARC, but is transferred to a separate storage system of the respective DataHUB. The ARC instead contains a link to the file that can be used to retrieve the original file upon request. The practical consequences of this behaviour is, that changes to the file are not tracked individually by git, but a new copy of the entire file replaces the original file when you upload a modified version. Therefore, please be thoughtful about uploading modified versions of large files repeatedly, since old copies of your files remain in the system and take up storage space, so that older versions can be restored easily when necessary.
