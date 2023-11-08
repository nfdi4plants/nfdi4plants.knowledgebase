---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Data Storage and Versioning
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121
---

# Data Storage and Versioning

---

# Data stores

![w:900](././../../../img/data-stores.drawio.svg)

---

# Backup vs. Archive

| <br>         | Backup              | Archive                       |
|--------------|---------------------|-------------------------------|
| Storage type | Short-, mid-term    | Long-term                     |
| Purpose      | Disaster recovery   | Long-term storage, compliance |
| Reason       | Duplication         | Migration                     |
| Usage        | Work in progress    | Cold, Unused data             |
| Changes      | Short-term updates  | No updates                    |
| Trend        | Cyclic, Replacement | Growing                       |
| Latency      | Short/Costly        | High/Cheaper                  |

---

# 3-2-1 backup rule

![w:800](././../../../img/3-2-1-backup-rule.drawio.svg)

---

# Version control and track changes

It’s good practice to document:

- What was changed?
- Who is responsible?
- When did it happen?
- Why the changes?

---

# Types of Version Control

- by file name (_v1, _v2)
- cloud services
  - dropbox, icloud, gdrive
- distributed version control system
  - e.g. Git

---

# Which files need to be "versioned"? :pencil: 

- paper manuscript (.docx)
- single-cell RNASeq reads (.fastq.gz)
- spread sheet with photometer measurements (.xlsx)
- calendar invitation (.ical)
- photo of SDS-PAGE (.jpeg)
- excel workbook with calculations (.xlsx)
- presentation for a conference (.pdf)
- data analysis script (.py)

<!--

## No versioning

- "Raw data" or "original data" > backup and do not touch
- do not calculate anything in measurement excel workbooks

## Versioning

anything that is (frequently) updated
- manuscripts
- calculations
- workflows
- scripts

## Does not matter

things you use and ignore
- calendar invitations

-->

---

# Concept of Git and git-based platforms

---

# Cloud Services

![bg right:50% w:800](./../../../img/DataSharing_Cloud_img6.png)

<span style="color:#B4CE82">✓ Documents</span>  
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#B4CE82">✓ Presentations</span>  

<span style="color:#c21f3a">X  Code</span>  
<span style="color:#c21f3a">X  Data analytical projects</span>  
<span style="color:#c21f3a">X  Big (“raw”) data</span>  

---

# Git and git platforms

![bg right:50% w:800](./../../../img/DataSharing_git_img1.png)

<span style="color:#F9CD69">∼ Documents</span>
<span style="color:#B4CE82">✓ Small data</span>  
<span style="color:#F9CD69">∼ Presentations</span>

<span style="color:#B4CE82">✓✓ Code</span>
<span style="color:#B4CE82">✓✓ Data analytical projects</span>
<span style="color:#F9CD69">∼ Big (“raw”) data</span>

---

# Why git? ≈> Why code?

- Save time
- Avoid doing repetitive tasks “by hand”
- Reuse scripts, analyses, pipelines
- Reproduce results

---

# A simple example: RNASeq project

![w:900](./../../../img/git_RNASeq_Example_img1.png)

---

# A simple example: RNASeq project

![w:900](./../../../img/git_RNASeq_Example_img2.png)

---

# A simple example: RNASeq project

![w:900](./../../../img/git_RNASeq_Example_img3.png)

---

# A simple example: RNASeq project

![w:900](./../../../img/git_RNASeq_Example_img4.png)

---

# A simple example: RNASeq project

![w:900](./../../../img/git_RNASeq_Example_img5.png)

---

# Take snapshots of your code work…

(... as long as it works)

![w:900](./../../../img/git_RNASeq_Example_img6.png)

---

# Take snapshots of your code work…

(... as long as it works)

![w:900](./../../../img/git_RNASeq_Example_img7.png)

---

# Scenario 1: More data

![w:900](./../../../img/git_RNASeq_Example_img8.png)

---

# Scenario 1: More data

![w:900](./../../../img/git_RNASeq_Example_img9.png)

---

# Scenario 1: More data

![w:900](./../../../img/git_RNASeq_Example_img10.png)

---

# Let git track changes and keep things clean

![w:900](./../../../img/git_RNASeq_Example_img11.png)

---

# Scenario 2: Pipeline breaks

![w:900](./../../../img/git_RNASeq_Example_img12.png)

---

# Revert to snapshot

![w:900](./../../../img/git_RNASeq_Example_img13.png)

---

# Scenario 3: New project, same type of data and analysis

![w:900](./../../../img/git_RNASeq_Example_img14.png)

---

# Scenario 3: New project, same type of data and analysis

![w:900](./../../../img/git_RNASeq_Example_img15.png)

---

# Re-use code

![w:900](./../../../img/git_RNASeq_ReuseCode_img1.png)

---

# Re-use code

![w:900](./../../../img/git_RNASeq_ReuseCode_img2.png)

---

# Re-use code – People have done this

![w:900](./../../../img/git_RNASeq_ReuseCode_img3.png)

---

# Re-use code – People have done this

![w:900](./../../../img/git_RNASeq_ReuseCode_img4.png)

---

# Re-use code – Link and contribute

![w:900](./../../../img/git_RNASeq_ReuseCode_img5.png)

---

# Git: summary

- Version control system
- Git “repository” = a central data package (directory)
- Allows to track changes to any file in the repository
  - **What** was changed
  - **When** was it changed
  - By **whom** was it changed
  - **Why** was it changed?

---

# GitHub and GitLab

- A well-documented cloud environment
- Active syncing
- Not automatically synced
- Non-automated version control
- You have the control what changes to track and what to sync
- Time machine to go back to older versions

---

# GitHub and Gitlab team projects

Simplifies concurrent work & merging changes

- Online service to host our projects
- Share code with other developers
- Others can download our projects, work on and contribute to them
- They can upload their changes and merge them with the main project

---

# Cloud vs. Git

![w:1000](./../../../img/git_cloud_comparison.png)

--- 

--- 

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Hajira Jabeen
  github: https://github.com/HajiraJabeen
  orcid: https://orcid.org/0000-0003-1476-2121