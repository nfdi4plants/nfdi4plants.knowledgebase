---
# Slide-related yaml
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider: 
  - 1
  - 2
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../images/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="../../images/_logos/CreativeCommons/by.svg"> </a>'
style: 'footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity: 0.5;}'
# Training yaml
layout: slides
title: "Persistent identifiers"
suggested units: 
  - Publication
  - Persistent identifiers  
author: "Dominik Brilhaus"
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: "[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)"
citation: ""
description:
  - Introduce PIDs
learning outcomes:
  - Know what can be referenced with a pid (person - orcid; doi - digital objects)
  - explain the benefit of using PIDs
skills:
abilities:
DataPLANT implementation:
  - Invenio
exercise:
requirements:
  - 
target audience: ""
required resources: ""
keywords:
  - PID
  - ORCID
  - DOI
teaching mode: "inhale/listen"
duration_minutes: 5
alternative: ""
links and references:
date: "2022-12-12"
status: ready
---


# Globally unique, stable, persistent identifiers (PIDs)

* Long-term findability
* Make data, digital objects, people, … uniquely identifiable
* Diminish “dead links”
* Cope with name changes

![bg right width:500](../../images/pid_collage.drawio.svg)

<!--"Diminish "dead links"?": Follow the two links at the bottom and look for the own institute. GRID links back to ROR and on the ROR website the GRID identifier is shown but no longer clickable. At least they refer to each other.-->

<!--Here the specific exercise, e.g. exercise_003_PID_CEPLAS.md can be done coming back to the URI slide below. Understand DOIs as specific URIs within the Handle System. -->

<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/brick001_PID_basics1.md -->
<!-- ################# -->


# Properties of a PID

- Ideally it is permanent
- Location-independent
- Globally valid
- Addressable (citable)
- Clickable (resolvable)
<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/brick002_PID_basics2.md -->
<!-- ################# -->


# Good URIs (Uniform Resource Identifiers)

- Globally unique
  - One URI should never refer to two different concepts at the same time
- Persistent
  - A URI should continue to resolve for the foreseeable future
- Stable
  - A URI should never be re-used [...] even if the original is deleted
- Resolvable
  - A URI should redirect to a suitable document

Adapted from https://www.ebi.ac.uk/rdf/documentation/good_practice_uri/
<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/brick003_PID_URI.md -->
<!-- ################# -->


# Additional resources

- https://www.doi.org
- https://www.orcid.org
- https://pidservices.org/
- https://datacite.org
- https://www.project-freya.eu/en

<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/brick004_PID_links.md -->
<!-- ################# -->

