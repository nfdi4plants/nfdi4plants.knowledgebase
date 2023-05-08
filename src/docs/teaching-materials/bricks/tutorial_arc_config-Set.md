---
marp: true
theme: dataplant_marp-theme
layout: slides
author:
- Martin Kuhl
- Dominik Brilhaus
author_orcid:
- https://orcid.org/0000-0002-8493-1077
- https://orcid.org/0000-0001-9021-3197
author_github:
- Martin-Kuhl
- brilator
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_arc_config-Set
---

# Setting a git user

Some users might want to use different signatures for different repositories, e.g. for developing software on GitHub and working on ARCs on [DataPLANT's DataHUB](https://git.nfdi4plants.org). Besides your global git configuration, you can store the information you want to use for editing ARCs within the ARC Commander config:

```bash
arc config set -g -n "general.gitname" -v "Name of choice"
arc config set -g -n "general.gitemail" -v "Email of choice"
```
