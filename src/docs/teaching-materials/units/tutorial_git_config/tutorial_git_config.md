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
title: tutorial_git_config
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
