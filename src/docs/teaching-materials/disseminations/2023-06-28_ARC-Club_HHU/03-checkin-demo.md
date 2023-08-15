---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
date: 2023-08-14
title: ARC Club - Check-in and Demo
---

# The ARC Club

Check-in and Demo

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

## Registration

- Everyone <a href="https://register.nfdi4plants.org" target="_blank">signed-up</a>
- and joined the group [HHU Plant Biochemistry](https://git.nfdi4plants.org/hhu-plant-biochemistry)

---

## ARCitect

---

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

---

## Config

```bash
git config --global --get-regexp user
```

:bulb: If this does not display your user name and email, you need to [configure git](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/git_config.html).

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

## Communication

- Chat / channel
  - Notes
  - Project List

<span style="color:red">TODO</span>

---

## Create a fresh folder for your ARCs

For this workshop, create a new folder somewhere on your machine where you want to store ARCs, e.g. on the desktop:

- `C:\Users\<username>\Desktop\workshop-arcs` (windows)
- `~/Desktop/workshop-arcs` (mac)

---

## Download the demo data

```bash
git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
```

---

# Hands-on with demo data

---

# Your fresh ARC folder

1. Create a new folder, which you want to initialize as an ARC.
2. Open the command line inside the folder or navigate via command line to that folder.

For example:
```bash
mkdir -p ~/Desktop/workshop-arcs/arc-demo
cd ~/Desktop/workshop-arcs/arc-demo
```

---

## Round 1: *via* ARC Commander

---

## Initiate the ARC folder structure

```bash
arc init
```

---

## Create an investigation

```bash
arc investigation create -i TalinumPhotosynthesis
```

---

## Add a study

```bash
arc study add -s talinum_drought
```
  
---

## Add assays

```bash
arc assay add -s talinum_drought -a rnaseq
arc assay add -s talinum_drought -a metabolomics
```

---

# Upload your local ARC to the DataHUB

```bash
arc sync -r https://git.nfdi4plants.org/<username>/arc-demo
```

---

## Sort the demo data into the ARC

Identify "raw dataset(s)" and "protocols" and move them to the proper subfolders in the ARC.

![bg right w:500](./../../../img/demo_data_screenshot.png)

---

## Sync your ARC to the DataHUB

To save the changes, sync the ARC to the DataHUB including a message.

```bash
arc sync -m "sorted the demo data"
```

---

## Check the ARC in the DataHUB

- Navigate to https://git.nfdi4plants.org/<username>/arc-demo to visit your ARC in the DataHUB

