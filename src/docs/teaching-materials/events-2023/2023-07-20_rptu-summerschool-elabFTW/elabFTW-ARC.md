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
title: elabFTW-ARC
date: 2023-07-20
---

<style>

section {
   /* background: none; */
   background-color: white;
}

</style>


# RDM in practice &ndash; Electronic lab notebooks

Dominik Brilhaus &ndash; [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

RPTU Summer School
July 20th, 2023

--- 

# Content

* Intro to elabFTW as one example for electronic lab notebooks
* Pros & Cons of elabFTW
* Shaping your lab documentation towards FAIR

---

# Check-in

elabFTW @ RPTU: https://elab.rptu.de/

&emsp; :warning: this is the RPTU elabFTW instance &rarr; Changes cannot be deleted. 

Demo elabFTW: https://demo.elabftw.net/

&emsp; :warning: this is a public demo &rarr; All changes are public

<hr>

:rocket: **For today:** https://clerk.cs.uni-kl.de/

&emsp; :bulb: this instance will be deleted after the summer school

---

# Hands-on Circle

![w:500](images/hands-on-circle.drawio.svg)

---

# Experiments panel

- Create an experiment
- View / edit mode

![w:600 bg right:50%](./images/elabFTW-experiment-list-view.drawio.svg)



---

# 👩‍💻 Exercise

Create an experiment **Baking pancakes**

```yaml
1. Ingredients
   - Flour
   - Eggs
   - Milk
2. Procedure
   - Mix ingredients
   - Fry in pan
   - Serve with maple syrup
3. ...
```

![bg right:40% w:350px](./images/pancakes-cc0.jpg)

---

# :bulb: Recap

- keine Metadaten
- Freitext
- JSON hilfreich
- Daten nicht verlinkt


<!-- FAIR Recap: 


-->

---

# Categorize

- Tags
- Database
- Link items

---

## Tags

![w:900](images/elabFTW-experiment-tags.png)

<br>

![w:900](images/elabFTW-experiment-tags2.png)

---

## Database

![w:900](images/elabFTW-database-list-view2.png)

<br>

![w:900](images/elabFTW-adminpanel-item-types2.png)


---

## Linking items

![w:900](images/elabFTW-experiment-linkedItems.png)

<br>

![w:900](images/elabFTW-database-linkedItems.png)


---

# 👩‍💻 Exercise

**Categorize** your experiment items

- Use tags &rarr; "baking recipes"
- Create database entries &rarr; "ingredients"
- link items

---

# :bulb: Recap

- 2x selbes Item
- Capitalization
- using items in an experiment
- different approaches of linking / resuing items (from database)
- which metadata to add where
- "different ways to do it"
- CV / ontologies
- PIDs

---

# 👩‍💻 Exercise

Start another experiment **Baking a chocolate cake**

```yaml
1. Grocery list
   - Flour, Sugar, Eggs, Butter, Milk, Chocolate
2. Steps
   1. Mix ingredients
      1. type of mixer
      2. speed
      3. type of beater
   2. Prepare cake pan
      1. type of cake pan
      2. butter cake pan
   3. Bake
      1. temperature
      2. top heat / circulating air
      3. Cooling phase
```

![bg right:40% w:350px](./images/chocolate-cake-cc0.jpg)

---

# :bulb: Recap

- 

<!-- FAIR Recap: 
- re-use process (-> function "duplicate")
- re-use items
-->

---

# Provide structure: Create templates

![w:800](images/elabFTW-templates-create.png)

<br>

![w:800](images/elabFTW-templates-edit.png)


---

# 👩‍💻 Exercise

Create an experiment template for **baking recipes**

---

# :bulb: Recap

- user-friendly ++
- but a lot of free-text
- templating helps towards reusable structure


<!-- FAIR Recap 
- everyone comes up with their own template
- need for schema
- need for CV / ontology
-->

---

# Add data to your experiment

![w:1100](images/elabFTW-experiment-attachFile.png)

---

# :bulb: Recap

<!-- FAIR Recap 
- small data ok, large data impossible, but
- process / protocol and data are all dumped together
- linking data?
-->

---

# Share & Collaborate

---

# Visibility and write access

![w:1000](images/elabFTW-experiment-rights.png)

---

# Version history


![w:1000](images/elabFTW-experiment-changelogRevision1.png)
![w:1000](images/elabFTW-experiment-changelogRevision2.png)

---

# Restore revision

![w:1000](images/elabFTW-experiment-changelogRevision3.png)


---

# Export experiments

![w:1000](images/elabFTW-experiment-export.png)

---

# :bulb: Recap

<!-- FAIR Recap: 
- can only collaborate within instance -> complicated user management
- no re-usable format -> 
- provenance / reuse / contribution -> compare versioning to git (graph)
-->

---


# Towards **FAIR** elabFTW
---

# Cut protocols into pieces (processes)

![](./images/define-processes-01.drawio.svg)

---

# Define inputs and outputs

![](./images/define-processes-02.drawio.svg)

---

# Cut protocols into pieces

![](./images/define-processes-03.drawio.svg)

---

# Cut protocols into pieces

![](./images/define-processes-04.drawio.svg)


---


# Bridging elabFTW and ARC

![w:800](images/elabFTW-ARC.drawio.png)



---

# Example Scenario

1. You use **ARCs** to

   - organize and store your (raw) data locally
   - share and communicate data with collaboration partners
   - annotate and prepare your data for publication

2. You use **elabFTW** to

   - document your daily lab work "on the fly"
   - organize lab routines with colleagues


---

# Goals

1. Benefit from "both worlds" (ARC and elabFTW)

   - iteratively work on protocols
   - be able to associate metadata to the raw data

2. Align elabFTW structure and ARCs

<!-- :bulb: Note, the following slides outline the overlapping concepts of elabFTW a manual approach. -->


---


# Schematize: JSON templates


<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
}
</style>

<br>


<div class="columns">

<div class="columns-right">

<img src="./images/elabFTW-templates-json.png" style="width:80%">

</div>


<div class="columns-left">

<img src="./images/elabFTW-templates-extraFields.png" style="width:40%">

</div>


</div>


---



# Catalog your lab

1. Which items want to be shared and cataloged? 
2. catalog: Name / ID items
3. Create item database 

![w:600px](./images/elabFTW-cataloging.drawio.svg)


---

# Local ARCs - <br> Project overview

![bg right:50% w:600](./images/arc-local-overview.png)


---

# Local ARCs - <br> Project overview

![bg right:50% w:600](./images/arc-local-details1.png)

---

# Local ARCs - <br> Protocols

![bg right:50% w:550](./images/arc-local-details2.png)


---

# DataHUB

https://git.nfdi4plants.org


---

# Example ARC DataHUB - project overview

![w:800](./images/datahub-project-overview.png)


---

# Example ARC DataHUB - ARC overview

![w:800](./images/datahub-arc-root.png)


---

# Example ARC DataHUB - assay protocols

![w:800](./images/datahub-arc-assay-protocols.png)


---

# Example ARC DataHUB - protocol detail

![w:800](./images/datahub-arc-study-protocol-view.png)


---

# elabFTW - Overview

![bg right:60% w:700](./images/elabFTW-overview-panels.drawio.png)

elabFTW data is mainly divided in two main panels

> `Experiments`  

> `Database`


---


# Experiment Panel

![bg right:60% w:700](./images/elabFTW-experiment-list-view.png)

The `Experiment` panel is the default "working area" for protocols of daily lab work

---

# Database Panel

![bg right:60% w:700](./images/elabFTW-database-list-view.png)

The `Database` panel is elabFTW's place to categorize contents

---

# Database item types

:bulb: Item types can be defined in the `Admin Panel`


![bg right  w:600](./images/elabFTW-adminpanel-item-types.png)


---

# Preparing database lists for elabFTW import

:bulb: elabFTW offers batch-import from csv.

- elabFTW offers to import data from a csv file as described here: https://doc.elabftw.net/user-guide.html#importing-from-a-csv-file
- These can be imported as any type of database item or experiment
- elabFTW-specific columns
  - `title`: will be the displayed name of the individual item
  - `tags`: (separated by `|`) will be used as tags

---

# Database import

![](./images/elabFTW-database-import.png)

---

# Database import example - Investigations

`db_investigations.csv`

title | tags | Investigation Identifier | Investigation Person Last Name | Investigation Person First Name | Investigation Person Email | Investigation Person Phone
------|------|--------------------------|--------------------------------|---------------------------------|----------------------------|---------------------------
inv001-talinum-cam | inv001-talinum-cam | inv001-talinum-cam | Beetroot | Jasmine | jasmine.beetroot@arc-uni.org | 0211-0212
inv002-arabidopsis-heat | inv002-arabidopsis-heat | inv002-arabidopsis-heat | Sage | Oliver | oliver.sage@arc-uni.org | 0211-0213
inv003-welwitschia-clock | inv003-welwitschia-clock | inv003-welwitschia-clock | Sugarcane | Viola | viola.sugarcane@arc-uni.org | 0211-0214

---

# Database import example - Studies

`exp_inv001-talinum-cam_studies.csv`


title | tags | Study Identifier | Study Title | Study Description
------|------|------------------|-------------|-------------------
sty01-aba-pre-experiment | inv001-talinum-cam | sty01-aba-pre-experiment | Pre-experiment to test ABA treatment | ABA treatment
sty02-aba-full | inv001-talinum-cam | sty02-aba-full | Large scale experiment with ABA | ABA treatment
sty03-aba-timeseries | inv001-talinum-cam | sty03-aba-timeseries | Time series experiment with ABA | Time Series Design

---

# Database import

![w:700](./images/elabFTW-database-import-menu.png)

---

# Database import

![w:700](./images/elabFTW-database-import-success.png)

---

# Database Panel

![w:700](./images/elabFTW-database-list-view.png)


---

# Linking / grouping items

:bulb: Two mechanisms

1. Tags
   1. user-friendly, easy way to group items
2. Linking
   1. Database items
   2. Experiment items

---

# Linking items

In edit mode

![bg right:70%  w:700](./images/elabFTW-experiment-linking-items.png)

---

# Linked items

![bg right:70% w:700](./images/elabFTW-experiment-linked-items.png)

---

# elabFTW &ndash; Conclusion


<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: rem;
}
ul {
    /* margin: 5; padding: 0; */
}
</style>

<div class="columns">
<div class="columns-left">

### <span style="color:#B4CE82">Good</span>

- Documenting daily lab routine
- Lab methods & protocols
- Lab inventory (biologicals, chemicals, instruments)
- Local sharing & collaboration
- Backup (locally)

</div>
<div class="columns-right">

### <span style="color:#F9CD69">Intermediate</span>

- Version control
- Track changes / contributions
- Use of IDs
- External sharing

</div>

<div class="columns-right">

### <span style="color:#c21f3a">Limited</span>  

- Data storage
- Analyses
- Structured metadata
- PIDs

</div>
</div>







---







---

# Demo

:construction: The following slides are attached to prep a demo 


---

# Creating the ARC structure locally (demo)

---

# settings

```bash
gitlab_base_url=https://git.nfdi4plants.org/elab-demo-arcs/
arc_dir_local=~/gitlab_dataplant/elab-demo-arcs
```

---

# create a first arc

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

# create and push more arcs (for loop)

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
