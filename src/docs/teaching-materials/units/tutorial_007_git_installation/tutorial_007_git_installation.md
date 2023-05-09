---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: <a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../images/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="../../images/_logos/CreativeCommons/by.svg">
  </a>
style: 'footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height:
  30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity:
  0.5;}'
layout: slides
title: null
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
images_used: null
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
description: null
keywords:
- Git
- Git LFS
- installation
comments: null
citation: null
learning outcomes: null
skills: null
abilities: null
requirements:
- computer with terminal and git
required resources: null
teaching mode: hands-on
links and references: null
duration_minutes: 5
date: 2022-10-01
status: ready
---

<!-- Source to slide(s) -->
<!-- ../../bricks/title_git_installation.md -->


---

# Checkpoint: Git

Check whether git is installed on your system.
Open a terminal and execute the following command:

```bash
git --version
```

> :bulb: This should prompt the git version installed on your system, e.g.,  
> `git version 2.39.0`

> :white_check_mark: Git is installed || :x: Please install Git.

<!-- Source to slide(s) -->
<!-- ../../bricks/checkpoint_git.md -->


---

#  Installation: Git

Please follow the instructions at the [Git website][ext-git] to install Git on your system.

> On MacOS we recommend git installation via `homebrew` following the [git website's][ext-git] instruction. This may require installation of `homebrew` as instructed there.

<!-- Links -->

[ext-git]: <https://git-scm.com/download/> "Git"

<!-- Source to slide(s) -->
<!-- ../../bricks/installation_git.md -->


---

# Checkpoint: Git-LFS

Check whether git is installed on your system.
Open a terminal and execute the following command:

```bash
git-lfs --version
```

> :bulb: This should prompt the git-lfs version installed on your system, e.g.,  
> `git-lfs/3.2.0`

> :white_check_mark: Git-LFS is installed || :x: Please install Git-LFS.

<!-- Source to slide(s) -->
<!-- ../../bricks/checkpoint_gitlfs.md -->


---

# Installation: "Git Large File Storage (LFS)"

Please follow the instructions at the [Git LFS website][ext-git-lfs] to install Git LFS on your system.

> For some operating systems *Git LFS* may already be available as part of the *Git* installation

<!-- Links -->

[ext-git-lfs]: <https://git-lfs.github.com/> "Git-LFS"

<!-- Source to slide(s) -->
<!-- ../../bricks/installation_gitlfs.md -->


---
