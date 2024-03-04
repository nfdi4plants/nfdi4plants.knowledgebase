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
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_arc_sync
---

# ARC synchronization

![bg right w:500](./../../../img/logos/ARCCommander/ARCCommander_Logo1.svg)

# ARC synchronization

Whenever you update your ARC (add, edit or delete data), you can synchronize it with the DataHUB using the command

```bash
arc sync 
```

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_sync-title.md -->


---

# Create a repository on the DataHUB

Create a new blank repository on the [DataHUB](https://git.nfdi4plants.org) by clicking "New project/repository" (`+` drop down menu of the navigation bar on top).

Make sure to uncheck the box "Initialize repository with a README" in order to create a completely blank repository.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_sync-Create.md -->


---

# Connect your local ARC to a remote ARC in the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<OwnerOfRepository>/<NameOfRepository>
```

> This step needs to be done only once per machine and ARC.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_sync-Connect.md -->


---

# Successful ARC synchronization

Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![w:800](./../../../img/datahub_repository.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_sync-Success.md -->
