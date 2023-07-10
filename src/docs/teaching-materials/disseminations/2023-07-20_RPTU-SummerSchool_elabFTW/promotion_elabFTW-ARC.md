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
title: promotion_elabFTW-ARC
date: 2023-07-20
---

# RDM in practice

Dominik Brilhaus &ndash; CEPLAS 
RPTU Summer School
July 20th, 2023

---

## Content

- Intro to elabFTW
- 

---

## Example Scenario

1. You use **ARCs** to

   - organize and store your (raw) data locally
   - share and communicate data with collaboration partners
   - annotate and prepare your data for publication

2. You use **elabFTW** to

   - document your daily lab work "on the fly"
   - organize lab routines with colleagues


---

## Goals

1. Benefit from "both worlds" (ARC and elabFTW)

   - iteratively work on protocols
   - be able to associate metadata to the raw data

2. Align elabFTW structure and ARCs

<!-- :bulb: Note, the following slides outline the overlapping concepts of elabFTW a manual approach. -->


---

## Local ARCs - <br> Project overview

![bg right:50% w:600](images/arc-local-overview.png)


---

## Local ARCs - <br> Project overview

![bg right:50% w:600](images/arc-local-details1.png)

---

## Local ARCs - <br> Protocols

![bg right:50% w:550](images/arc-local-details2.png)


---

## DataHUB

https://git.nfdi4plants.org


---

## Example ARC DataHUB - project overview

![w:800](images/datahub-project-overview.png)


---

## Example ARC DataHUB - ARC overview

![w:800](images/datahub-arc-root.png)


---

## Example ARC DataHUB - assay protocols

![w:800](images/datahub-arc-assay-protocols.png)


---

## Example ARC DataHUB - protocol detail

![w:800](images/datahub-arc-study-protocol-view.png)


---

## elabFTW - Overview

![bg right:60% w:700](images/elabFTW-overview-panels.drawio.png)

elabFTW data is mainly divided in two main categories (panels)

> `Experiments`  
> 
> `Database`


---


## Experiment Panel

![bg right:60% w:700](images/elabFTW-experiment-list-view.png)

The `Experiment` panel is the default "working area" for protocols of daily lab work

---

## Database Panel

![bg right:60% w:700](images/elabFTW-database-list-view.png)

The `Database` panel is elabFTW`s place to categorize contents

---

## Database item types

:bulb: Item types can be defined in the `Admin Panel` (bottom)

1. Admin customizes types of items

![bg right  w:600](images/elabFTW-adminpanel-item-types.png)


---

## Preparing database lists for elabFTW import

:bulb: elabFTW offers batch-import from csv.

- elabFTW offers to import data from a csv file as described here: https://doc.elabftw.net/user-guide.html#importing-from-a-csv-file
- These can be imported as any type of database item or experiment
- elabFTW-specific columns
  - `title`: will be the displayed name of the individual item
  - `tags`: (separated by `|`) will be used as tags

---

## Database import

![](images/elabFTW-database-import.png)

---

## Database import example - Investigations

`db_investigations.csv`

title | tags | Investigation Identifier | Investigation Person Last Name | Investigation Person First Name | Investigation Person Email | Investigation Person Phone
------|------|--------------------------|--------------------------------|---------------------------------|----------------------------|---------------------------
inv001-talinum-cam | inv001-talinum-cam | inv001-talinum-cam | Beetroot | Jasmine | jasmine.beetroot@arc-uni.org | 0211-0212
inv002-arabidopsis-heat | inv002-arabidopsis-heat | inv002-arabidopsis-heat | Sage | Oliver | oliver.sage@arc-uni.org | 0211-0213
inv003-welwitschia-clock | inv003-welwitschia-clock | inv003-welwitschia-clock | Sugarcane | Viola | viola.sugarcane@arc-uni.org | 0211-0214

---

## Database import example - Studies

`exp_inv001-talinum-cam_studies.csv`


title | tags | Study Identifier | Study Title | Study Description
------|------|------------------|-------------|-------------------
sty01-aba-pre-experiment | inv001-talinum-cam | sty01-aba-pre-experiment | Pre-experiment to test ABA treatment | ABA treatment
sty02-aba-full | inv001-talinum-cam | sty02-aba-full | Large scale experiment with ABA | ABA treatment
sty03-aba-timeseries | inv001-talinum-cam | sty03-aba-timeseries | Time series experiment with ABA | Time Series Design

---

## Database import

![w:700](images/elabFTW-database-import-menu.png)

---

## Database import

![w:700](images/elabFTW-database-import-success.png)

---

## Database Panel

![w:700](images/elabFTW-database-list-view.png)


---

## Linking / grouping items

:bulb: Two mechanisms

1. Tags
   1. user-friendly, easy way to group items
2. Linking
   1. Database items
   2. Experiment items

---

## Linking items

In edit mode

![bg right:70%  w:700](images/elabFTW-experiment-linking-items.png)

---

## Linked items

![bg right:70% w:700](images/elabFTW-experiment-linked-items.png)



---
---

## Demo

:construction: The following slides are attached to prep a demo 


---

## Creating the ARC structure locally (demo)

---

## settings

```bash
gitlab_base_url=https://git.nfdi4plants.org/elab-demo-arcs/
arc_dir_local=~/gitlab_dataplant/elab-demo-arcs
```

---

## create a first arc

:bulb: This is a line-by-line example to initiate and share an ARC with a few studies and assays

```bash
arc_name=inv001-talinum-cam

mkdir -p "$arc_dir_local"/"$arc_name"
cd "$arc_dir_local"/"$arc_name"

arc init
arc investigation create -i "$arc_name"

arc study add -s sty01-aba-pre-experiment
arc assay add -s sty01-aba-pre-experiment -a sty01-asy01-acidity

arc study add -s sty02-aba-full
arc assay add -s sty02-aba-full -a sty02-asy01-acidity
arc assay add -s sty02-aba-full -a sty02-asy02-starch-content
arc assay add -s sty02-aba-full -a sty02-asy04-pepc-activity

arc study add -s sty03-aba-timeseries
arc assay add -s sty03-aba-timeseries -a sty03-asy01-plant-pictures
arc assay add -s sty03-aba-timeseries -a sty03-asy02-acidity
arc assay add -s sty03-aba-timeseries -a sty03-asy03-starch-content
arc assay add -s sty03-aba-timeseries -a sty03-asy04-chlorophyll-content
arc assay add -s sty03-aba-timeseries -a sty03-asy05-pepc-activity
arc assay add -s sty03-aba-timeseries -a sty03-asy06-rnaseq

arc sync -f -r "$gitlab_base_url""$arc_name" -m "initialize ARC structure"

```

---

## create and push more arcs (for loop)

```bash
for arc_name in inv002-arabidopsis-heat inv003-welwitschia-clock; do
  echo $arc_name
  mkdir -p "$arc_dir_local"/"$arc_name"
  cd "$arc_dir_local"/"$arc_name"    
  arc init
  arc investigation create -i "$arc_name"
  arc sync -f -r "$gitlab_base_url""$arc_name" -m "initialize ARC structure $arc_name"
done
```
