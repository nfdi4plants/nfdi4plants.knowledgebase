---
marp: true
theme: dataplant_marp-theme
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
title: tutorial_arc_access
---

# Communicating with the DataHUB via the ARC Commander

Create and set an access token for ARC Commander synchronization using

```bash
arc remote accesstoken get -s https://git.nfdi4plants.org
```

> This authenticates your machine to communicate with your personal DataHUB account
> This step needs to be done only once per machine, unless you delete the token.
