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
title: tutorial_datahub_PAT
---

# Generate a DataHUB Personal Access Token (PAT)

> This tutorial shows you how to generate a PAT
> The PAT can be used to authenticate your local machine to communicate with your DataHUB account
> You need to do this only once per machine (unless you specify an expiration date)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT-title.md -->


---

# Steps

1. Sign in to the [DataHUB](https://git.nfdi4plants.org/)
2. Go to the [Access Tokens](https://git.nfdi4plants.org/-/profile/personal_access_tokens) settings
3. Fill all required information
   1. Token name: e.g. the name of the machine to be linked ("Office PC")
   2. Expiration date (optional)
   3. Select scope: `api`

![bg right w:600](./../../../img/datahub-accessToken01.drawio.svg)

--- 

# Steps

4. Click "Create personal access token"
5. `Your new personal access token` appears on top. Copy it somewhere **save** for later use.

![Access Token w:800](./../../../img/datahub-accessToken02.drawio.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT-Steps.md -->
