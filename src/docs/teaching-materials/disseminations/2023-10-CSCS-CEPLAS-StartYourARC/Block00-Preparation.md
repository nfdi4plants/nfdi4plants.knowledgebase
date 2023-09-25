---
marp: true
paginate: true
theme: marp-theme_dataplant-ceplas-ccby
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

**before** September 29th, 2023

Dominik Brilhaus, [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

---

# Checklist hands-on sessions

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>

:bulb: Please prepare the following before the workshop:

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Find your command line
- :white_check_mark: Install and configure Git on your computer
- :white_check_mark: Install ARCitect on your computer
- :white_check_mark: Install Swate on your computer
- :white_check_mark: (optional) Install VS Code

---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the <a href="https://register.nfdi4plants.org" target="_blank">DataPLANT website</a>.

![w:800](./../../../img/dataplant_registration.png)

---

## Role and consortium

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

# Git Installation

Please install <a href="https://git-scm.com/downloads" target="_blank">Git</a> and <a href="https://git-lfs.github.com/" target="_blank">Git LFS</a> on your system

:bulb: Git LFS may already be installed with your Git installation (at least on Windows)

:bulb: For macOS we recommend to install via homebrew as described on the site above

---

# Configuration of Git

Check the git user configuration on your system, by executing

```bash
git config --global --get-regexp user
```

This should prompt two lines
`user.name <Your Name>`
`user.email <Your Email>`

:bulb: Configuration needs to be done once after installation of git on your system.

---

# Git configuration

Set the git user configuration on your system, by executing

1. Your name

```bash
git config --global user.name "Your Name"
```

2. Your email address

```bash
git config --global user.email "Your Email"
```

---

# ARCitect Installation

Please follow the instructions to install the latest version of ARCitect.

- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_macos.html" target="_blank">macOS</a>
- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_windows.html" target="_blank">Windows</a>

---

# Swate Installation

Please follow <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html" target="_blank">these instructions</a> to install the latest version of Swate.

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

# Resources

### <img align="left" style="height:35px" src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>
GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>

---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197