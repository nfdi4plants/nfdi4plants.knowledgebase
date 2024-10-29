---
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider:
- 1
- 2
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../../img/logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: Start-Your-ARC Workshop Series - Session 03 (prep)
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
---

# Start Your ARC Workshop Series

<!-- Title slide to class -->

<!-- _color: white -->
<!-- _paginate: false -->
<!-- _footer: "" -->

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

(Preparation for) Session 03

<br>

Dominik Brilhaus - CEPLAS Data Science


# Checklist ARC data annotation hands-on

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>


- :white_check_mark: Install Swate on your computer
- :white_check_mark: Prepare an ARC with your data

# Swate Installation

Please follow [these instructions](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html) to install the latest version of Swate.


# Part 1: Prepare your ARC

## Your fresh ARC folder

1. 💻 Create a new folder, which you want to initialize as an ARC.
2. 💻 Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Desktop/workshop-arcs/my-arc
cd ~/Desktop/workshop-arcs/my-arc
```

## ARC initialization

Initialize your ARC by executing

```bash
arc init
```

## Upload your local ARC to the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<username>/my-arc
```

## Successful ARC synchronization

Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![w:800](./../../../../img/datahub_repository.png)

# Part 2: Adding subfolders for your data

## Preparation

Before you can fill your ARC, let's revise your data. 

- What is my **investigation**?
- What is my **study**?
- Which **assay** did I perform?
  - What is my (raw) **dataset**?
  - What **protocol**s did I use?

> :bulb: It might help to have this info ready in a text file.   In particular, try to think about useful identifiers for investigation, study and assay.


## ISA investigation

The ISA investigation (`-i`) workbook allows you to record administrative metadata of your project. Add the isa.investigation.xlsx workbook including an identifier to your ARC with

```bash
arc investigation create --identifier <YourInvestigationID>
```
:bulb: Avoid using spaces in the identifier. Use underscores and capital letters instead.

## ISA studies and assays

The ISA study (`s`) and ISA assay (`a`) workbooks allow you to annotate your experimental data.

## Adding a study

Add a study folder with the isa.study.xlsx workbook including an identifier to your ARC with

```bash
arc s add --studyidentifier <YourStudyID>
```
  
## Adding an assay

Add an assay folder with the isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc assay add --studyidentifier <YourStudyID> --assayidentifier <YourAssayID>
```

:bulb: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.

## ISA studies and assays

The ARC Commander adds subdirectories to the *studies* and *assays* folders. Your ARC should, look similar to this now:  

![bg right w:600](./../../../../img/arc_studies_assays.jpg)

These steps can be repeated to add as many studies and assays as needed. Accordingly, more subdirectories will be added

## Sync your ARC to the DataHUB

To save the changes, sync the ARC to the DataHUB including a message (`-m`).

```bash
arc sync -m "initiate arc structure"
```

🌐 Check your ARC in the DataHUB.

# Part 3: Structure your data

## Start adding your data to the ARC

Try to place your resources, datasets and protocols for each study and assay in the respective folders.

> :bulb: This part will likely require some iteration. 🗣️ Talk to us.
>
> - You might need to add new studies and assays or revise your overall structure during the process
> - Sometimes you might not immediately find a suitable position for your data
> 


# Part 4: Invite collaborators

* Unless changed, your ARC is set to private by default. 
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](./../../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](./../../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](./../../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](./../../../../img/datahub_members_seq5.png)

---

5. Select a role 

![fit w:1050](./../../../../img/datahub_members_seq6.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_invite-collaborators.md -->


## Choosing the proper role

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

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_choose-collaborator-role.md -->


## <div align="center">Congratulations!</div>
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

![](./../../../../img/ARC_Sharing_img1.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_congrats-for-sharing.md -->


## Contributors 

Slides presented here include contributions by 

- Dominik Brilhaus | [GitHub](https://github.com/brilator) | [ORCID](https://orcid.org/0000-0001-9021-3197)
- Cristina Martins Rodrigues  | [GitHub](https://github.com/CMR248) | [ORCID](https://orcid.org/0000-0002-4849-1537)
- Martin Kuhl  | [GitHub](https://github.com/Martin-Kuhl) | [ORCID](https://orcid.org/0000-0002-8493-1077)
