---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: ' <a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a
  href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../img/logos/CreativeCommons/by.svg"></a> '
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px;padding-left:
  0px;} #footer-img2 {height: 30px;padding-left: 20px;opacity: 0.5;} #footer-img3
  {height: 20px;padding-left: 20px;opacity: 0.5;}'
layout: slides
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_datahub_PAT_add
---

# Add DataHUB Personal Access Token (PAT)

> - This tutorial shows you how to add your PAT to your local machine
> - The PAT authenticates your local machine to communicate with your DataHUB account
> - You need to do this only once per machine (unless you specify an expiration date)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_add-title.md -->


---

# Preparation

1. Sign in to the [DataHUB](https://git.nfdi4plants.org/)
2. Create a new blank project, by clicking "New Project" (Blue button on top right)
   1. Click "Create blank project"
   2. Add a project name
   3. Leave the "Visibility Level" set to "Private"
3. Copy the URL to your project (from the browser's URL field or the "clone" menu) `https://git.nfdi4plants.org/<YourUserName>/<YourProjectName>`

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_add-Preparation.md -->


---

# Option 1

1. Open a terminal
2. Clone your project via
  ```
  git clone https://git.nfdi4plants.org/<YourUserName>/<YourProjectName>
  ```
  > Replace `<YourUserName>`, `<YourProjectName>` with your personal information.
1. Once asked to fill your  `Username for 'https://git.nfdi4plants.org'`, fill in `<YourUserName>` and hit return &#8629;
2. Once asked to fill your  `Password for 'https://<YourUserName>@git.nfdi4plants.org':`,paste in `<YourPAT>` and hit return &#8629;

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_add-Option_1.md -->


---

# Option 2

1. Open a terminal
2. Clone your project via

```bash
git clone https://oauth2:<YourPAT>@git.nfdi4plants.org/<YourUserName>/<YourProjectName>
```

> Replace `<YourPAT>`, `<YourUserName>`, `<YourProjectName>` with your personal information.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_add-Option_2.md -->
