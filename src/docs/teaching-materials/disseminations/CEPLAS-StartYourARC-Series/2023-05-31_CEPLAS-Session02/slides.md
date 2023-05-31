---
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider:
- 1
- 2
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../../../img/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="../../../../img/_logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="../../../../img/_logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: Start-Your-ARC Workshop Series - Session 01
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
---

# Start Your ARC Workshop Series

<!-- Title slide to class -->

<!-- _color: white -->
<!-- _paginate: false -->
<!-- _footer: "" -->

![bg fit](../custom/img/background_title_ceplas.drawio.svg)

Session 02 - Build your ARC
May 31st, 2023

<br>

Dominik Brilhaus - CEPLAS Data Science

# Goals

- Create your first ARC
- Add data to your ARC
- Share the ARC

# Legend

💻 = Locally (on your machine)

🌐 = Remote (in the DataHUB)  

Info in `<brackets>` are placeholders - please replace with proper info


# Part 0: Check-in


## Open the online notepad

https://pad.hhu.de/u44vMavDQLa2e4hvjx1Oyg


## Screen-sharing during the workshop

https://hhu.webex.com/hhu-en/j.php?MTID=me5501c7ea1607b9ee3e1edfe401598f3

:bulb: Any windows volunteer?

## Installation

Open a terminal and one after the other execute

```bash
git --version
```

```bash
git-lfs --version
```

```bash
arc --version
```

:bulb: If you see a warning at any of these, let me know.

## Config

```bash
git config --global --get-regexp user
```

:bulb: If this does not display your user name and email, you need to [configure git](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/git_config.html).


## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editors with code highlighting:

- Visual Studio Code <https://code.visualstudio.com/>
- BBEdit <https://www.barebones.com/products/bbedit/>
- Sublime <https://www.sublimetext.com/>

## Create a fresh folder for your ARCs

For this workshop, create a new folder somewhere on your machine where you want to store ARCs, e.g. on the desktop:

- `C:\Users\<username>\Desktop\workshop-arcs` (windows)
- `~/Desktop/workshop-arcs` (mac)

## Download the demo data

```bash
git clone "https://demo-arc:x7ddrotJpzd5Rgfxx9d5@git.nfdi4plants.org/teaching/demo-arc_start-data.git"
```


# Part 1: Hands-on with demo data


# Your fresh ARC folder

1. 💻 Create a new folder, which you want to initialize as an ARC.
2. 💻 Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Desktop/workshop-arcs/arc-demo
cd ~/Desktop/workshop-arcs/arc-demo
```


## Initiate the ARC folder structure

```bash
arc init
```

## Create an investigation

```bash
arc i create -i TalinumPhotosynthesis
```

## Add a study

```bash
arc s add -s talinum_drought
```
  
## Add assays

```bash
arc a add -s talinum_drought -a rnaseq
arc a add -s talinum_drought -a metabolomics
```


# Upload your local ARC to the DataHUB

```bash
arc sync -r https://git.nfdi4plants.org/<username>/arc-demo
```


## Sort the demo data into the ARC

Identify "raw dataset(s)" and "protocols" and move them to the proper subfolders in the ARC. 

![bg right w:500](../../../../img/demo_data_screenshot.png)

## Invite a collaborator

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](../../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](../../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](../../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](../../../../img/datahub_members_seq5.png)

---

5. Select a role 

![fit w:1050](../../../../img/datahub_members_seq6.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_invite-collaborators.md -->


---



# Part 2: Create your first ARC

# Your fresh ARC folder

1. 💻 Create a new folder, which you want to initialize as an ARC.
2. 💻 Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Desktop/workshop-arcs/my-arc
cd ~/Desktop/workshop-arcs/my-arc
```

# ARC initialization

Initialize your ARC by executing

```bash
arc init
```

# Upload your local ARC to the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<username>/my-arc
```
# Successful ARC synchronization

Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![w:800](../../../../img/datahub_repository.png)

# Part 3: Adding subfolders for your data

## Preparation

Before you can fill your ARC, let's revise your data.

- What is my **investigation**?
- What is my **study**?
- Which **assay**(s) did I perform?
  - What is my (raw) **dataset**?
  - What **protocol**s did I use?


## ISA investigation

The ISA investigation (`-i`) workbook allows you to record administrative metadata of your project. Add the isa.investigation.xlsx workbook including an identifier to your ARC with

```bash
arc i create -i <YourInvestigationID>
```
:bulb: Avoid using spaces in the identifier. Use underscores and capital letters instead.

## ISA studies and assays

The ISA study (`-s`) and ISA assay (`-a`) workbooks allow you to annotate your experimental data.

## Adding a study

Add an isa.study.xlsx workbook including an identifier to your ARC with

```bash
arc s add -s <YourStudyID>
```
  
## Adding an assay

Add an isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc a add -s <YourStudyID> -a <YourAssayID>
```

:bulb: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.


## ISA studies and assays


The ARC Commander adds subdirectories to the *studies* and *assays* folders. Your ARC should, look similar to this now:  

![bg right w:600](../../../../img/arc_studies_assays.jpg)

These steps can be repeated to add as many studies and assays as needed. Accordingly, more subdirectories will be added


## Sync your ARC to the DataHUB

To save the changes, sync the ARC to the DataHUB including a message. 

```bash
arc sync -m "initiate arc structure"
```

🌐 Check your ARC in the DataHUB.

## Part 4: Start adding your data

Place the dataset and protocols for each assay in the respective folders.



## Part 5: DataHUB Features



## Invite collaborators

* Unless changed, your ARC is set to private by default. 
* To collaborate, you can invite lab colleagues or project partners to your ARC by following the steps on the subsequent slides. 
* To get started [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB and open the ARC you want to share.

---

1. Click on **Project Information** in the left navigation panel

![fit w:1050](../../../../img/datahub_members_seq2.png)

---

2. Click on **Members**

![fit w:1050](../../../../img/datahub_members_seq3.png)

---

3. Click on **Invite members**

![fit w:1050](../../../../img/datahub_members_seq4.png)

---

4. Search for potential collaborators

![fit w:1050](../../../../img/datahub_members_seq5.png)

---

5. Select a role 

![fit w:1050](../../../../img/datahub_members_seq6.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_invite-collaborators.md -->


---

## Choosing the proper role

<u>Guest</u>
Have the least rights. This is recommended for people you ask for consultancy.

<u>Developers</u> 
The choice for most people you want to invite to your ARC. Developers have read and write access, but cannot maintain the project on the DataHUB, e.g. inviting others.

<u>Maintainers</u> 
Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

*A detailed list of all permissions for the individual roles can be found [here](https://docs.gitlab.com/ee/user/permissions.html)*

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_choose-collaborator-role.md -->


---

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

![](../../../../img/ARC_Sharing_img1.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/datahub_congrats-for-sharing.md -->







<!-- 
# Part 2: Tic-Tac-Toe

## Player 1 &ndash; `o`

<style scoped>
section{
  font-size: 23px;
}
ol {
  margin: 0; padding: 0;
}
</style>

1. 💻 Create a fresh ARC

`arc init`

2. 💻 Add a **README.md** with the playground:

```md
       |   | 
     --+---+--
       |   | 
     --+---+--
       |   | 
```

</div>

<div class="columns-right">

3. 💻 Sync the ARC to the DataHUB

`arc sync -r https://git.nfdi4plants.org/<Player1>/<ARC>`

4. 🌐 Invite player 2

## Player 2 &ndash; `x`

<style scoped>
section{
  font-size: 23px;
}
ol {
  margin: 0; padding: 0;
}
</style>

1. 💻 "Clone" the ARC

`arc get -r https://git.nfdi4plants.org/<Player1>/<ARC>`

2. add your `x` to the playground (**README.md**)

```md
     x |   | 
     --+---+--
       |   | 
     --+---+--
       |   | 
```

3. 💻 Sync the ARC back to the DataHUB

`arc sync -m "move Player 2"`


## Player 1 &ndash; `o`

1. 💻 "Update" the ARC

`arc sync`


2. add your `o` to the playground (**README.md**)

```md
     x |   | 
     --+---+--
       | o | 
     --+---+--
       |   | 
```

3. 💻 Sync the ARC back to the DataHUB

`arc sync -m "move Player 1"`


## Keep playing

1. `arc sync`
2. Make your move
3. `arc sync -m "<move player ..>"`
 -->


