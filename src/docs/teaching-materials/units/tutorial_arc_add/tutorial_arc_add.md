---
marp: true
theme: dataplant_marp-theme
paginate: true
footer: ' <a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a>
  <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="./../../../img/logos/CreativeCommons/by.svg">
  </a> '
style: ' footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height:
  30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity:
  0.5;} '
layout: slides
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-03-16
title: tutorial_arc_add
---

# Adding metadata to your ARC

![bg right:50% w:800](./../../../img/ARC_fillWithData_seq6.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-Adding_metadata_to_your_ARC.md -->


---

# ISA investigation

The ISA investigation (`-i`) workbook allows you to record administrative metadata of your project. Add the isa.investigation.xlsx workbook including an identifier to your ARC with

```bash
arc investigation create -i QuickStartInvestigation
```

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-ISA_investigation.md -->


---

# ISA studies and assays

The ISA study (`-s`) and ISA assay (`-a`) workbooks allow you to annotate your experimental data.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-ISA_studies_and_assays.md -->


---

# Add a study

Add an isa.study.xlsx workbook including an identifier to your ARC with

```bash
arc study add -s QuickStartStudy
```

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-Add_a_study.md -->


---

# Add an assay

Add an isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc assay add -s QuickStartStudy -a QuickStartAssay
```

> Note: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-Add_an_assay.md -->


---

# subdirectories

The ARC Commander will add subdirectories to the *studies* and *assays* folder. Your ARC should look similar to this now: 

![w:800](./../../../img/arc_studies_assays.jpg)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-subdirectories.md -->


---

# Grow your ARC

- The previous steps can be repeated to add as many studies and assays as needed. Accordingly, more subdirectories will be added
- Multiple assays can be grouped in a study, if the same `StudyIdentifier` is used

![bg right:50% w:640](./../../../img/ARC_realLifeLoading.svg)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-Grow_your_ARC.md -->


---

# Add your data

Place the data and protocols for each study and assay in the respective `Dataset` and `Protocols` folders

![bg right:50% width:850](./../../../img/ARC_fillWithData_seq3.png)

<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_arc_add-Add_your_data.md -->
