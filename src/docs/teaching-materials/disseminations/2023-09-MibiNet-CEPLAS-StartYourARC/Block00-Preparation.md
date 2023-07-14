---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Preparation
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

# Block 0 &ndash; Preparation

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

**before** September 21st, 2023
 

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm_Sabrina_Zander_3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm_Brilhaus_Dominik_4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---

# Checklist hands-on sessions

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>


:bulb: Please follow the next slides to register with DataPLANT and install some helper tools on your computer

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Find your terminal
- :white_check_mark: Install ARC Commander and dependencies on your computer
- :white_check_mark: Install ARCitect on your computer
- :white_check_mark: Install Swate on your computer


---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the [DataPLANT website](<https://register.nfdi4plants.org>).

![w:800](./../../../img/dataplant_registration.png)

---

# Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`

![bg right:40% fit](./../../../img/dataplant_registration_roles.png)

---

# The command line

Find the **command-line interface (CLI)** on your system.

- On Windows: Enter `powershell` into the explorer path
- On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`

<br>

:bulb: In our tutorials we sometimes use *terminal*, *command-line interface (CLI)* and *powershell* interchangeably.

---

# ARC Commander Installation

Please install the latest version of the ARC Commander and dependencies for your operating system according to the [manual's setup instructions](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index.html).

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

![bg right:30% width:300](./../../../img/arc-manual-setup.png)

---

# ARCitect Installation

:warning: work in progress :construction:

https://github.com/nfdi4plants/ARCitect

<span style="color:red">TODO: add link to installation instructions</span>

---

# Swate Installation

Please follow [these instructions](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html) to install the latest version of Swate.

---

# Hands-on: Bring your own data

In the hands-on session, we would like to start creating an ARC together.
To do so, please bring some data!

This can be data of your current research project or an already published manuscript with supplemental data. Anything that you feel familiar with.

---

# Resources

### <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

> Website: https://nfdi4plants.org/
> Knowledge Base: https://nfdi4plants.org/nfdi4plants.knowledgebase/ 
> DataHUB: https://git.nfdi4plants.org
> GitHub: https://github.com/nfdi4plants
