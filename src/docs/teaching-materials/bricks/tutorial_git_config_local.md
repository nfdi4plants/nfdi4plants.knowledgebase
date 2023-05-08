---
marp: true
theme: dataplant_marp-theme
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_git_config_local
---

# Git configuration: Local

Set the git configuration locally (for the current git repository):

1. Your name

```bash
git config --local user.name <Your Name>
```

2. Your email address

```bash
git config --local user.email <Your Email>
```

3. Check it

```bash
git config --local --get-regexp user
```
