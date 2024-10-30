---
layout: docs
title: "Export ARC metadata"
date: 2022-12-20
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

Users have the possibility to export the metadata within the ARC as a JSON file. Using 

```bash
arc export
```

the ARC Commander transfers all metadata from the isa.study.xlsx and isa.assay.xlsx to the isa.investigation.xlsx registry and prints the information to the console in JSON format. Using

```bash
arc export > YourFile.json
```

the ARC Commander directly generates a JSON file at the root of the ARC. Currently, this JSON file is identical to the ISA.json.

> :warning: Important note: Both ISA-Tab and ISA.json support the `Data File` column. As this object has no factors field, which is essential for describing the experiment, the ARC Commander generates an additional sample object with the same name to store the factors when parsing a line with a data file output. As the mapping from input to output in the process is handled exactly n to n, this also requires a duplication of the input objects resulting in additional list entries.
