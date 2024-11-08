---
title: Add new studies and assays
sidebar:
  order: 5
authors:
 - hamed-jalali
lastUpdated: 2024-11-08
---

According to the  [ISA Metadata Model](/nfdi4plants.knowledgebase/core-concepts/isa), each **study** is connected to an **Investigation** and can contain several **assays**. Follow the steps below to learn how to create new studies and assays and how to register them in the _isa.investigation.xlsx_ file.  

Navigate to the **studies** folder of your ARC. Then, click on the green `ADD` button to create a new study. A new input field will appear in which you need to specify a name for the study. Avoid whitespace characters when choosing a name for the study.

![](@images/arc-manager/studies-and-assays/01-add-study.png)

Next, navigate to the **assays** folder of your ARC. Assays are added in the same way as studies, by using the `ADD` button and choosing an identifier.

![](@images/arc-manager/studies-and-assays/02-add-assay.png)

Now, according to the ISA model, studies and assays need to be registered in the central _isa.investigation.xlsx_ file of your ARC. The `SYNC` functions explained below will take care of this tasks:

Navigate to the top-level directory of your ARC, then click on `SYNC STUDY/INVEST`. A new input field will appear below the list of files insider your ARC. Select the study you want to register from the drop-down menu and click the `SYNC` button.  

![](@images/arc-manager/studies-and-assays/03-sync-study.png)

To connect an assay to a study, use the `SYNC ASSAY/STUDY` button. Again, a new input field will be displayed at the bottom of the window. Select the study and assay you want to link from the drop-down menus and confirm with the `SYNC` button.

![](@images/arc-manager/studies-and-assays/04-sync-assay.png)
