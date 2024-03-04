---
layout: docs
title: workshop-notepad
date: 2023-06-14
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

# Start-Your-ARC - Workshop Series

- [About](#about)
  - [Registration](#registration)
  - [Key Dates](#key-dates)
  - [Content](#content)
  - [Resources](#resources)
- [Your motivation](#your-motivation)
- [Screen-sharing during the workshop](#screen-sharing-during-the-workshop)
- [Comments, issues, TODOs, questions, feedback](#comments-issues-todos-questions-feedback)
- [Slides](#slides)
- [Session 1 (May 10th)](#session-1-may-10th)
  - [Video recordings](#video-recordings)
- [Session 2 (May 31st, 2023)](#session-2-may-31st-2023)
  - [Preparation](#preparation)
  - [Tech Check (online)](#tech-check-online)
- [Session 3 (June 14th, 2023)](#session-3-june-14th-2023)
  - [Preparation](#preparation-1)
  - [During the workshop](#during-the-workshop)

## About

You have probably heard about DataPLANT's **[Annotated Research Context](https://nfdi4plants.org/content/learn-more/annotated-research-context.html)** (ARC). This three-session workshop series demonstrates the ARC concept and introduces how to build a first ARC for your own research project and annotate the data in your ARC.

### Registration 

➡️ Please register [following this link](https://hhu2020.fra1.qualtrics.com/jfe/form/SV_9ozJXlz7xo0iSlE).

### Key Dates

- Dates: May 10th + May 31st + June 14th (Wednesdays)
- Time: 10:00 to 11:30 am
- Location: HHU, ZSL (22.07), Room U1.025
- Participants:
  - Max. 20 (first come, first serve)
  - PhD-students, postdocs, group leaders, (lab) data managers
- Contact: [Dominik Brilhaus](https://www.ceplas.eu/en/research/data-science-and-data-management/) (brilhaus@hhu.de)

### Content

- Session 1: Introduction to the ARC (demo)
- Session 2: Build your ARC
- Session 3: Annotate your data


> 
> 💡 We will try to record and share sessions with slides afterwards
> 👩‍💻 Sessions 2 and 3 are ***hands-on*** and require a laptop

### Resources


<!-- <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants) -->

> Website: https://nfdi4plants.org/
> Knowledge Base: https://nfdi4plants.org/nfdi4plants.knowledgebase/ 
> DataHUB: https://git.nfdi4plants.org
> GitHub: https://github.com/nfdi4plants

## Your motivation

some excerpts of your motivational statements

- **organizing** data efficiently
- establish a **stable data management** organization in our group
- generate a lot of data on microscopic images, transcriptomics, and metabolomics - help me and my group **organize** our data
- large-scale RNA-seq datasets - build ARCs based on the **FAIR data principles**
- **structure my data** and paths so I but also another person can find data easily

- making data **openly accessible** will benefit researchers to **collaborate** with others more efficiently
- organize data and make them **accessible** to the CEPLAS community
- I want to improve my data management which will help my future career in the academic


## Screen-sharing during the workshop

https://hhu.webex.com/hhu-en/j.php?MTID=me5501c7ea1607b9ee3e1edfe401598f3


## Comments, issues, TODOs, questions, feedback


- Swate: 
  - allow custom units https://github.com/nfdi4plants/Swate/issues/310
  - "undo" function https://github.com/nfdi4plants/Swate/issues/311
  - Prevent (excel)auto formatting / suggest number format
      - Example: RIN numbers 8.7 => July 8th
      - https://github.com/nfdi4plants/Swate/issues/312
  - File picker: change copy / paste icons and make clearer, that this step does not really "do" anything (you have to copy paste yourself)
    - https://github.com/nfdi4plants/Swate/issues/313
- ARC Commander
    - arc config (user name, user email)
    > :bulb: Check out the instructions in the [knowledge base](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/arc_config.html)
    - add `arc revert` function to revert a commit https://github.com/nfdi4plants/arcCommander/issues/196
    - arc commander confusion: `arc i ... -i` https://github.com/nfdi4plants/arcCommander/issues/192
    - access token needs to be stored again (in different network / wifi; on windows) https://github.com/nfdi4plants/arcCommander/issues/193
    - confusion with *DataHUB* username to be used during `arc sync`


## Slides

... are availble in the [DataPLANT knowledge base](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/disseminations/2023-05-09_CEPLAS-StartYourARC-Series/index.html). 


## Session 1 (May 10th)

### Video recordings

...are available online [at YouTube](https://www.youtube.com/playlist?list=PLi6d1LSow4XDfdAQrJ9iDf81rWIWs-8UK) and in the [DataPLANT knowledge base](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/videos/StartYourARC.html). 


## Session 2 (May 31st, 2023)

### Preparation 

:white_check_mark: [Register at DataPLANT](https://register.nfdi4plants.org) 
:white_check_mark: [Install ARC Commander](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/index.html) and dependencies on your computer
:white_check_mark: Bring your own data

### Tech Check (online)

Please let me know, if you want to join the tech check meeting - May 30th, 3-4 pm (link sent via email).


## Session 3 (June 14th, 2023)

### Preparation 

:white_check_mark: [Install Swate](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/SwateManual/Docs01-Installing-Swate.html) on your computer or check out how to use it online
:white_check_mark: Prepare an ARC with your data


### During the workshop

- [Today's slides](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/disseminations/2023-05-09_CEPLAS-StartYourARC-Series/2023-06-14_CEPLAS-Session03/2023-06-14_CEPLAS-Session03.html#30)
- [Screen-sharing](https://hhu.webex.com/hhu-en/j.php?MTID=me5501c7ea1607b9ee3e1edfe401598f3)
- Please download the demo data

```bash
git clone "https://demo-user:5ehDYeHcqP2MqVXsNNPu@git.nfdi4plants.org/teaching/demo-arc_level1.git"
```












