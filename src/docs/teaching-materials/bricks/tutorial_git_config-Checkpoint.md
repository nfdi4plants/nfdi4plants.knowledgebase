---
marp: true
theme: dataplant_marp-theme
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_git_config-Checkpoint
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
