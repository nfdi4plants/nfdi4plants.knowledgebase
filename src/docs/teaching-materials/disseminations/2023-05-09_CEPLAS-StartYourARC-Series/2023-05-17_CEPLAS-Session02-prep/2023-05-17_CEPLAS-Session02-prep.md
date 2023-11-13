---
marp: true
theme: dataplant_marp-theme
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../../img/logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: Start-Your-ARC Workshop Series - Session 02
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
---

# Start Your ARC Workshop Series

<!-- Title slide to class -->

<!-- _color: white -->
<!-- _paginate: false -->
<!-- _footer: "" -->

![bg fit](./../../../../img/background_title_ceplas.drawio.svg)

**Preparation for** Session 02 &ndash; "Build your ARC"
(May 31st, 2023)

<br>

Dominik Brilhaus &ndash; CEPLAS Data Science

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

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Find your terminal
- :white_check_mark: Install ARC Commander and dependencies on your computer
<!-- - Install ARCitect on your computer :white_check_mark: -->

<!-- Source to slide(s) -->
<!-- ../../../bricks/checklist_ARC_hands-on.md -->


---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the [DataPLANT website](<https://register.nfdi4plants.org>).

![w:800](./../../../../img/dataplant_registration.png)

<!-- Source to slide(s) -->
<!-- ../../../bricks/datahub_registration.md -->


---

# Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`

![bg right:40% fit](./../../../../img/dataplant_registration_roles.png)

<!-- Source to slide(s) -->
<!-- ../custom/bricks/ceplas-datahub-registration.md -->


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

# ARC Commander Installation

Please install the latest version of the ARC Commander and dependencies for your operating system according to the [manual's setup instructions](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index.html).

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

![bg right:30% width:300](./../../../../img/arc-manual-setup.png)

<!-- Source to slide(s) -->
<!-- ../../../bricks/tutorial_arc_installation.md -->


---

# Hands-on: Bring your own data

In the hands-on session, we would like to start creating an ARC together.
To do so, please bring some data!

This can be data of your current research project or an already published manuscript with supplemental data. Anything that you feel familiar with.

<!-- Source to slide(s) -->
<!-- ../../../bricks/arc-hands-on-byod.md -->


---

# Resources

### <img align="left" height=35px src='./../../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg'/> CEPLAS Data Science

> Website: https://www.ceplas.eu/en/research/data-science-and-data-management/

### <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

> Website: https://nfdi4plants.org/
> Knowledge Base: https://nfdi4plants.org/nfdi4plants.knowledgebase/ 
> DataHUB: https://git.nfdi4plants.org
> GitHub: https://github.com/nfdi4plants

<!-- Source to slide(s) -->
<!-- ../custom/bricks/links-resources.md -->



