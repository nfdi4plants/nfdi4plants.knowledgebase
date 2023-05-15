---
marp: true
theme: dataplant_marp-theme
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../../../img/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="../../../../img/_logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="../../../../img/_logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: Start-Your-ARC Workshop Series - Session 02
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

**Preparation for** Session 02 - "Build your ARC"
(May 31st, 2023)

<br>

Dominik Brilhaus - CEPLAS Data Science

<!-- Source to slide(s) -->
<!-- ../custom/bricks/ceplas-title-02.md -->


---

# Checklist ARC hands-on

<style scoped>

ul{
  list-style-type: none; /* Remove bullets */
}
</style>


:bulb: Please follow the next slides to register with DataPLANT and install some helper tools on your computer

- Find your terminal :white_check_mark:
- Register at DataPLANT :white_check_mark:
- Install and configure git on your computer :white_check_mark:
- Install ARC Commander on your computer :white_check_mark:
- Install ARCitect on your computer :white_check_mark:
<!-- Source to slide(s) -->
<!-- ../../../bricks/checklist_ARC_hands-on.md -->


---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the [DataPLANT website](<https://register.nfdi4plants.org>).

![w:800](../../../../img/dataplant_registration.png)

<!-- Source to slide(s) -->
<!-- ../../../bricks/datahub_registration.md -->


---

# Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`

![bg right:40% fit](../custom/img/dataplant_registration_roles.png)

<!-- Source to slide(s) -->
<!-- ../custom/bricks/ceplas-datahub-registration.md -->


---

# DataPLANT Roles

<style scoped>
section {
  font-size: 25px;
}
ul {
    margin: 0; padding: 1;
}
</style>

During the registration you can "Choose your role in DataPLANT"

- DataSteward
  - Member of / associated to DataPLANT
  - Teaches DataPLANT tools and services to community members
- Developer
  - Member of / associated to DataPLANT
  - Develops DataPLANT tools and services
- Member
  - Other member of DataPLANT
- Guest
  - Guest users who want to use the DataPLANT tools and services

![bg right:35% fit](../../../../img/dataplant_registration_roles.png)

<!-- Source to slide(s) -->
<!-- ../../../bricks/datahub_registration_role.md -->


---

# The command line

Find the **command-line interface (CLI)** on your system.

- On Windows: Enter `powershell` into the explorer path
- On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`

<br>
> Note: In our tutorials we sometimes use "terminal", "command-line interface (CLI)" and "powershell" interchangeably.

<!-- Source to slide(s) -->
<!-- ../../../bricks/tutorial_IntroCLI-The_command_line.md -->


---

<!-- Source to slide(s) -->
<!-- <!-- ../../../bricks/tutorial_007_git_installation.md --> -->


---

# Configuration of Git

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_git_config-title.md -->


---

# Checkpoint

Check the git user configuration on your system, by executing

```bash
git config --global --get-regexp user
```

This should prompt two lines
`user.name <Your Name>`
`user.email <Your Email>`

> Configuration needs to be done only once after installation of git on your system.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_git_config-Checkpoint.md -->


---

# Git configuration: Global

Set the git configuration globally (for your system):

1. Your name

```bash
git config --global user.name <Your Name>
```

2. Your email address

```bash
git config --global user.email <Your Email>
```

3. Check it

```bash
git config --global --get-regexp user
```

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_git_config-Global.md -->

<!-- Source to slide(s) -->
<!-- ../../../units/tutorial_git_config/tutorial_git_config.md -->


---

# ARC Commander

DataPLANT provides the ARC Commander command line tool to create, manage and share your ARCs.


![bg right w:500](../../../../img/_logos/ARCCommander/ARCCommander_Logo1.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_title.md -->


---

# ARC Commander Installation

Please install the latest version of the ARC Commander for your operating system according to [these instructions](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/index.html).

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_installation.md -->

<!-- Source to slide(s) -->
<!-- ../../../units/tutorial_arc_installation/tutorial_arc_installation.md -->


---

# Resources

### <img align="left" height=35px src='../img/CEPLAS_Icon.jpeg'/> CEPLAS Data Science

> Website: https://www.ceplas.eu/en/research/data-science-and-data-management/

### <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

> Website: https://nfdi4plants.org/
> Knowledge Base: https://nfdi4plants.org/nfdi4plants.knowledgebase/ 
> DataHUB: https://git.nfdi4plants.org
> GitHub: https://github.com/nfdi4plants

<!-- Source to slide(s) -->
<!-- ../custom/bricks/links-resources.md -->



