---
layout: docs
title: Add new studies and assays
author:
  - name: Hamed Jalali
    github: https://github.com/hamedjalali1982
    orcid: https://orcid.org/0000-0002-1190-5652
add toc: false
add sidebar: _sidebars/mainSidebar.md
status: published
date: 2024-06-13
---

According to the  [ISA Metadata Model](./../guides/index-AnnotateDataInYourARC.html), each **study** is connected to an **Investigation** and can contain several **assays**. Follow the steps below to learn how to create new studies and assays and how to register them in the _isa.investigation.xlsx_ file.  

1. Navigate to the **studies** folder of your ARC. Then, click on the green `ADD` button to create a new study. A new input field will appear in which you need to specify a name for the study. Avoid whitespace characters when choosing a name for the study.

    <p float="center">
        <img src="../img/ARCmanager_uploadingfiles_add_study.png" width="500" style="border: 1px solid  black;" /> 
    </p>

2. Next, navigate to the **assays** folder of your ARC. Assays are added in the same way as studies, by using the `ADD` button and choosing an identifier.

    <p float="center">
        <img src="../img/ARCmanager_uploadingfiles_add_assay.png" width="500" style="border: 1px solid  black;" />
    </p>

3. Now, according to the ISA model, studies and assays need to be registered in the central _isa.investigation.xlsx_ file of your ARC. The `SYNC` functions explained below will take care of this tasks:

    Navigate to the top-level directory of your ARC, then click on `SYNC STUDY/INVEST`. A new input field will appear below the list of files insider your ARC. Select the study you want to register from the drop-down menu and click the `SYNC` button.
    
    <p float="center">
        <img src="../img/ARCmanager_uploadingfiles_sync_study.png" width="500" style="border: 1px solid  black;"  /> 
    </p>

    To connect an assay to a study, use the `SYNC ASSAY/STUDY` button. Again, a new input field will be displayed at the bottom of the window. Select the study and assay you want to link from the drop-down menus and confirm with the `SYNC` button.

    <p float="center">
    <img src="../img/ARCmanager_uploadingfiles_sync_assay.png" width="500" style="border: 1px solid  black;"/>
    </p>
