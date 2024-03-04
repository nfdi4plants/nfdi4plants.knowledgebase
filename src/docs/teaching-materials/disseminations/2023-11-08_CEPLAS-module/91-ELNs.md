---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
layout: slides
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Electronic Lab Notebooks
date: 2023-11-07
---

# Electronic Lab Notebooks (ELNs)

---

# ELN ≈ Digital Protocol Editors

- Documenting daily lab routine
- Lab methods & protocols
- Lab inventory (biologicals, chemicals, instruments)
- Local sharing & collaboration
- Backup (locally)

✅ ELNs help to digitalize research documentation

![bg right:40% w:400](./../../../img/Documents_Handwritten.svg)

---

<!-- 
# Are ELNs FAIR?

- Version control / Track changes
- Transparent contributions
- Use of IDs / PIDs
- External sharing / access
- (Long term) data storage
- Analyses
  - is code reproducible
- Metadata
  - standards
  - schemata

--- -->

# Are ELNs FAIR?

FAIR indicator* | ELN
-------------- | ---
**Findable**
F1. (Meta)data are assigned a globally unique and persistent identifier.
F2. Data are described with rich metadata (defined by R1 below).
F3. Metadata clearly and explicitly include the identifier of the data they describe.
F4. (Meta)data are registered or indexed in a searchable resource.
**Accessible**
A1. (Meta)data are retrievable by their identifier using a standardised communications protocol
A1.1 The protocol is open, free, and universally implementable
A1.2 The protocol allows for an authentication and authorisation procedure, where necessary
A2. Metadata are accessible, even when the data are no longer available
**Interoperable**
I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
I2. (Meta)data use vocabularies that follow FAIR principles.
I3. (Meta)data include qualified references to other (meta)data.
**Reusable**
R1. (Meta)data are richly described with a plurality of accurate and relevant attributes
R1.1. (Meta)data are released with a clear and accessible data usage license
R1.2. (Meta)data are associated with detailed provenance
R1.3. (Meta)data meet domain-relevant community standards

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

---

# Findable

| FAIR indicator*                                                                       | elabFTW |
|---------------------------------------------------------------------------------------|---------|
| F1. (Meta)data are assigned a globally unique and persistent identifier.              | 🟠 / 🔴 |
| F2. Data are described with rich metadata (defined by R1 below).                      | 🔴      |
| F3. Metadata clearly and explicitly include the identifier of the data they describe. | 🟠 / 🔴 |
| F4. (Meta)data are registered or indexed in a searchable resource.                    | 🔴      |

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

--- 

# Accessible

| FAIR indicator*                                                                                 | elabFTW |
|-------------------------------------------------------------------------------------------------|---------|
| A1. (Meta)data are retrievable by their identifier using a standardised communications protocol | 🔴
| A1.1 The protocol is open, free, and universally implementable                                  | 🟢 / 🟠
| A1.2 The protocol allows for an authentication and authorisation procedure, where necessary     | ❓
| A2. Metadata are accessible, even when the data are no longer available                         | ❓

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

--- 

# Interoperable

| FAIR indicator*                                                                                                | elabFTW |
|----------------------------------------------------------------------------------------------------------------|---------|
| I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation. | 🔴
| I2. (Meta)data use vocabularies that follow FAIR principles.                                                   | 🔴
| I3. (Meta)data include qualified references to other (meta)data.                                               | 🔴

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>

---

# Reusable

| FAIR indicator*                                                                          | elabFTW |
|------------------------------------------------------------------------------------------|---------|
| R1. (Meta)data are richly described with a plurality of accurate and relevant attributes | 🔴
| R1.1. (Meta)data are released with a clear and accessible data usage license             | 🔴
| R1.2. (Meta)data are associated with detailed provenance                                 | 🔴
| R1.3. (Meta)data meet domain-relevant community standards                                | 🔴

<span class="footer-reference">*FAIR classified by https://www.go-fair.org/fair-principles/<span>
---

---

# Contributors

Slides presented here include contributions by

- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
