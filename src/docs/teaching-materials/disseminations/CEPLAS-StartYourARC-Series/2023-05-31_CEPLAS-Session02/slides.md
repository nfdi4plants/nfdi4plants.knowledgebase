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
- Share the ARC with another participant

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


## DataHUB Login

Participant's user names:

- chandar
- einar.haraldsson
- lea.wirth
- marjorie.guichard
- sabrina.zander
- tianyu.lan
- usman.anwer

:bulb: If your user name is not on this list, please tell me now.

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


# Part 1: Create and sync your first ARC

# Your fresh ARC folder

1. 💻 Create a new folder, which you want to initialize as an ARC.
2. 💻 Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Desktop/workshop-arcs/arc01
cd ~/Desktop/workshop-arcs/arc01
```

# ARC initialization

Initialize your ARC by executing

```bash
arc init
```

# Upload your local ARC to the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<username>/arc01
```
# Successful ARC synchronization

Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![w:800](../../../../img/datahub_repository.png)
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


## Part 2: Adding subfolders for your data


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





3. Place the data for each assay in the respective dataset folder.
