---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARCitect and hands-on
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Sabrina Zander
  github: https://github.com/SabrinaZander
  orcid: https://orcid.org/0009-0000-4569-6126
---

# Block 3 &ndash; ARCitect and hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

---

# ARCitect installation

Please install the latest version of the ARCitect: https://github.com/nfdi4plants/ARCitect

:fire: (released September 20th, 2023) :fire:

---

# Download the demo data

```bash
git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
```

---

# Sort Demo data in an ARC

![bg right width:400](./../../../img/demo_data_screenshot.png)

![width:900](./../../../img/ARC_fillWithData_experimental.png)

---

# Open ARCitect


1. Login to DataHUB (1)
   ![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Initiate the ARC folder structure

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

1. Create a **New ARC** (2)
2. Select a location and name it **TalinumPhotosynthesis**

---

# Your ARC's name

<style scoped>section {font-size: 25px;}</style>

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

💡Don't use spaces in ARC's name

![bg right:30% w:500](././../../../img/ARCitect_TalinumPhotosynthesis.png)

---

# Add a description to your investigation

![w:800](./../../../img/ARCitect_TalinumPhotosynthesis_InvestigationMetadata.png)

---

# Add (at least one) contributor


![bg right w:500](./../../../img/ARCitect_TalinumPhotosynthesis_InvestigationPerson.png)

---

# Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](././../../../img/ARCitect_TalinumPhotosynthesis_Study.png)

---

# Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:500](././../../../img/ARCitect_TalinumPhotosynthesis_StudyPanel.png)

---


# Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](././../../../img/ARCitect_TalinumPhotosynthesis_Assay.png)

---

# Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one
  
Link your assays to your **talinum_drought** study


![bg right w:500](././../../../img/ARCitect_TalinumPhotosynthesis_Assay2.png)

---

# Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.
3. add data process information

![bg right w:500](././../../../img/ARCitect_TalinumPhotosynthesis_AssayPanel.png)

---

# Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../img/arcitect-ARCPanel-protocol.png)

---

# Add protocols and datasets

In the file tree you can
  - **add a dataset** and 
  - **protocols** associated to that dataset.

:bulb: **Add Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

<!-- Demo dataset cannot be added via add dataset. Only individual files can be added, not multiple folders -->

![bg right:40% w:400](./../../../img/arcitect-ARCPanel-assay03.png)

---

# Sort Demo Data to your ARC

💡 protocols can directly imported via ARCitect

💡 to add multiple datasets folders, they have to be added manually via file browser 

---

# Login to the DataHUB

Click **Login** (1) in the sidebar to login to the DataHUB.

:bulb: This automatically opens your browser at the DataHUB (https://git.nfdi4plants.org) and asks you to login, if you are not already logged in. 

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Upload your local ARC to the DataHUB

From the sidebar, navigate to **Versions** (6)

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.drawio.svg)

---

# Versions

The versions panel allows you to
- store the local changes to your ARC in form of "commits",
- sync the changes to the DataHUB, and
- check the history of your ARC

![bg right w:650](./../../../img/arcitect-VersionsPanel.png)

---

# Connection to the DataHUB

If you are logged in, the versions panel shows
- your DataHUB's *Full Name* and *eMail*
- the URL of the current ARC in the DataHUB `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`

![bg right w:650](./../../../img/arcitect-VersionsPanel.png)

---

# Check if your ARC is successfully uploaded

1. [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB 
2. Check your projects

---

# Received two emails from "GitLab" about a failed pipeline? <!-- fit -->

![w:600](./../../../img/cqc-error-email.png)

:fire: Don't worry :smile:

--- 

## Pipeline Failed

![bg right w:700](./../../../img/cqc-error-badges.png)

- a "continuous quality control" (CQC) pipeline validates your ARC
- This fails if one of the following metadata items is missing:

    ```bash
    Investigation Identifier
    Investigation Title
    Investigation Description
    Investigation Person Last Name
    Investigation Person First Name
    Investigation Person Email
    Investigation Person Affiliation
    ```  

---

## Pipeline Failed

If the pipeline has failed once, it is disabled by default

![bg right w:500](././../../../img/cqc-error-email2.png)

---

## Reactivate the CQC pipeline

<style scoped>
section {font-size: 22px;}
</style>

To reactivate it and let the DataHUB validate your ARC again:
  
  1. navigate to CI/CD setting `<arc-url>/-/settings/ci_cd`
  2. expand "Auto DevOps"
  3. check box "Default to Auto DevOps pipeline"
  4. Save changes

![bg right:60% w:600](./../../../img/cqc-activate-autodevops.png)

---

# Collaborate and share

![w:650](./../../../img/ARC_DataSharing_Experts02_img1.png)

---

# Invite collaborators

* Unless changed, your ARC is set to private by default. 
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](./../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](./../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](./../../../img/datahub_members_seq5.png)

---

5. Select a role 

![fit w:1050](./../../../img/datahub_members_seq6.png)


---

# Choosing the proper role

<style scoped> section{font-size: 22px;}</style>

<u>Guests</u>
Have the least rights. They will not be able to see the content of your ARC (only the wiki page).

<u>Reporters</u>
Have **read access** to your ARC. This is recommended for people you ask for consultancy.

<u>Developers</u>
The choice for most people you want to invite to your ARC. Developers have **read and write access**, but cannot maintain the project on the DataHUB, e.g. inviting others.

<u>Maintainers</u> 
Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

*A detailed list of all permissions for the individual roles can be found [here](https://docs.gitlab.com/ee/user/permissions.html)*

---

# <div align="center">Congratulations!</div>
<div align="center">You have just shared your ARC with a collaborator.</div>

<style scoped>

section p img {
width: 1000px;
height: 300px;
object-fit: cover;
object-position: 100% 45%;
/* display: block; */;
}
</style>

![](./../../../img/ARC_Sharing_img1.png)


---

# Your ARC is ready

<style scoped>

section p br {
   display: block;
   margin-top: 20px;
   content: "";
}
</style>

👩‍💻 Initiated an ARC
<br>
📂 Structured and ...  
<br>
<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_40x40.png'/> ... annotated experimental data
<br>
🌐 Shared with collaborators

![bg right width:400](./../../../img/demo_arc_screenshot.png)

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Sabrina Zander
  github: https://github.com/SabrinaZander
  orcid: https://orcid.org/0009-0000-4569-6126
