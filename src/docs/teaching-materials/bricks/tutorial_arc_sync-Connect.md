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
title: tutorial_arc_sync-Connect
---

# Connect your local ARC to a remote ARC in the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<OwnerOfRepository>/<NameOfRepository>
```

> This step needs to be done only once per machine and ARC.
