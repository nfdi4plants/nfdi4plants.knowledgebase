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
title: Start-Your-ARC Workshop Series - Session 03
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8510-6810
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
date: 2023-06-14
---


# Start Your ARC Workshop Series

<!-- Title slide to class -->

<!-- _color: white -->
<!-- _paginate: false -->
<!-- _footer: "" -->

![bg fit](../custom/img/background_title_ceplas.drawio.svg)

Session 03 - Annotate your data
June 14th, 2023

<br>

Dominik Brilhaus - CEPLAS Data Science

# Goals

- Get familiar with ISA metadata and Swate
- Annotate data in your ARC

# Legend

💻 = Locally (on your machine)

🌐 = Remote (in the DataHUB)  

Info in `<brackets>` are placeholders - please replace with proper info


# Part 0: Check-in


## Open the online notepad

https://pad.hhu.de/u44vMavDQLa2e4hvjx1Oyg


## Screen-sharing during the workshop

https://hhu.webex.com/hhu-en/j.php?MTID=me5501c7ea1607b9ee3e1edfe401598f3

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editors with code highlighting:

- Visual Studio Code <https://code.visualstudio.com/>
- BBEdit <https://www.barebones.com/products/bbedit/>
- Sublime <https://www.sublimetext.com/>

## Download the demo data

```bash
git clone "https://demo-user:5ehDYeHcqP2MqVXsNNPu@git.nfdi4plants.org/teaching/demo-arc_level1.git"
```

# Part 1: Swate hands-on with demo data
