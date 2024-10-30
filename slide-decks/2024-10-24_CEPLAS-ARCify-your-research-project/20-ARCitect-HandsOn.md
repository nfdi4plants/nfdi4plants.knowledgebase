---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARCitect Hands-on
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Cristina Martins Rodrigues
  github: https://github.com/CMR248
  orcid: https://orcid.org/0000-0002-4849-1537
- name: Sabrina Zander
  github: https://github.com/SabrinaZander
  orcid: https://orcid.org/0009-0000-4569-6126
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Lukas Weil
- name: Timo Mühlhaus
---


<style>

.arcitectLogo {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 100px;
  }

.yellowblock {
  display: inline-block;
  color: rgba(0, 0, 0, 0);
  width: 1em;
  height: 1em;
  padding-left: 20px; 
  background-color: #FFC000;
}

.blueblock {
  display: inline-block;
  color: rgba(0, 0, 0, 0);
  width: 1em;
  height: 1em;
  background-color: #2D3E50;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1em;
}

</style>


## ARCitect Hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## ARCitect installation

Please install version **v0.0.48** (or later) of the ARCitect: https://github.com/nfdi4plants/ARCitect/releases/latest

---

## Download the demo data

https://uni-duesseldorf.sciebo.de/s/C7ms3QA6q7OZnU2 

---

## A small prototypic project

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic.svg)

---

## ARC: Annotated research context

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-bag.svg)

---

## The ARC scaffold structure

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-scaffold.svg)

---

## Sort Demo data in an ARC <!-- fit -->

![bg right width:400](./../../images/demo-data-screenshot.png)

![width:900](./../../images/arc-fillwithdata-experimental.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Initiate the ARC folder structure

![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)

1. Open ARCitect
2. Create a **New ARC** (2)
3. Select a location and name it **TalinumPhotosynthesis**

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Your ARC's name

<style scoped>section {font-size: 25px;}</style>

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.


![bg right:30% w:500](./../../images/arcitect-talinumphotosynthesis.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add a description to your investigation

![w:900](./../../images/arcitect-talinumphotosynthesis-investigationmetadata.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add contributors


![bg right w:600](./../../images/arcitect-talinumphotosynthesis-investigationperson.png)
- you could also add the contacts directly via ORCID

---

## Divide and conquer for reproducibility

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-study-divide-conquer.svg)

---

## Identifying the ‘study’ part

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-study-identify.svg)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](./../../images/arcitect-talinumphotosynthesis-study.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:600](./../../images/arcitect-talinumphotosynthesis-studypanel.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Let's annotate the plant samples

1. Check out the lab notes `studies/talinum_drought/protocols/plant_material.txt`
2. Select the study `talinum_drought`
3. Add a new table sheet at the bottom

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Create an annotation table

1. Create a annotation table by adding **Building blocks** via the widget (A) or the sidebar (B)
1. Add an *Input* (`Source Name`) and *Output* (`Sample Name`) column

:bulb: Each table can contain only one *Input* and one *Output* column  

![bg right w:600](./../../images/swate-a-building-blocks.png)

---

## A table-based organization schema

![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-metadata-table-representation.svg)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Fill out source name and sample name

Transfer the sample ids from the protocol.

1. Invent names for `Source Name` (we do not have this information)
2. Use the sample names from the protocol (DB_*) as `Sample Name`

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../images/arcitect-arcpanel-protocol.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Link the protocol to the isa table

1. In the *Building Blocks* tab, select *More* -> *Protocol REF*.
2. Click <kbd>Add Column</kbd>.
3. Add the name of the protocol file (plant_material.txt) to the *Protocol REF* column.

---

## Referencing a protocol

This allows you to reference the free-text, human-readable protocol.


![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-study-protocolref.svg)

:bulb: It is recommended that the protocol is in an open format (.md|.txt|.docx|…)
:bulb: But everything is possible also an URI to an electronic lab notebook

---

## Parameterizing the ‘study’

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-study-parameterization.svg)

---

## Finding the right metadata vocabulary

<div class="two-columns">
  <div>
  
  ### Parameters []
  
  - Light intensity 200 µEinstein
  - Temperature 6°C / 25°C
  - Growing 4d
  
  </div>  
  <div>
  
  ### Characteristics []
  
  - Arabidopsis thaliana
  - Leaf
  - Hydroponic culture
  - Columbia
  
  </div>
</div>

---

## OLS: Finding the right metadata vocabulary

![w:1000](../../nfdi4plants.knowledgebase/src/assets/images/start-here/ontology-lookup-service.svg)

---

## Finding the metadata vocabulary and descriptors

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-metadata.svg)

---

## Finding the metadata vocabulary and descriptors

<div class="two-columns">

  <div>
  
  ### Parameters []
  
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Light intensity 200 µEinstein
  - <span class="yellowblock"></span>  
    - <span class="blueblock"></span> Temperature 6°C / 25°C
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Growing 4d
  
  </div>  

  <div>
  
  ### Characteristics []
  
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Arabidopsis thaliana
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Leaf
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Hydroponic culture
  - <span class="yellowblock"></span>
    - <span class="blueblock"></span> Columbia
  
  </div>

</div>

---

## Finding the metadata vocabulary and descriptors

<div class="two-columns">

  <div>
  
  ### Parameters []
  
  - <span class="yellowblock"></span> Light intensity
    - <span class="blueblock"></span> 200 µEinstein
  - <span class="yellowblock"></span> Temperature  
    - <span class="blueblock"></span> 6°C / 25°C
  - <span class="yellowblock"></span> Growth time
    - <span class="blueblock"></span> 4d
  
  </div>

  <div>
  
  ### Characteristics []
  
  - <span class="yellowblock"></span> Organism
    - <span class="blueblock"></span> Arabidopsis thaliana
  - <span class="yellowblock"></span> Tissue
    - <span class="blueblock"></span> Leaf
  - <span class="yellowblock"></span> Growth medium
    - <span class="blueblock"></span> Hydroponic culture
  - <span class="yellowblock"></span> Ecotype
    - <span class="blueblock"></span> Columbia
  
  </div>

</div>

---



# Annotation Building Block types

<div class="two-columns" style="font-size: 25px">
  
  <div>
  
- Input (e.g. Source Name, Sample Name)
- Protocol columns
- Characteristic // Parameter // Factor // Component
- Output (e.g. Sample Name, Raw Data File, Derived Data File)

</div>
  
  <div>
  
  ![w:600px](./../../images/swate-a-overview.png)
    
  </div>
</div>

Let's take a detour on [Annotation Principles](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/units/AnnotationPrinciples/isa_AnnotationPrinciples-slides.html)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add Characteristics

1. Select *Characteristic* from the drop-down menu
1. Enter `organism` in the search bar. This search looks for suitable *Terms* in our *Ontology* database.
1. Select the Term with the id `OBI:0100026` and, 
1. Click <kbd>Add Column</kbd>

:bulb: This adds four columns to your table, one visible and **three** hidden.

![bg right:40% w:500](./../../images/swate-a-addbuildngblock.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Insert ontology terms

1. Insert values by selecting any cell below `Characteristic [organism]`
2. Use free text or use the magnifying glass to activate *Term* search
3. Write "Talinum fruticosum" and enable *Term* search
4. Select the hit

![bg right:40% w:500](./../../images/swate-a-addcharacteristic.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add a Parameter building block with a unit

1. In the *Building Blocks* widget, select *Parameter*, search for `light intensity exposure` and select the term with id `PECO:0007224`.
2. Check the box for *Unit* and search for `microeinstein per square meter per second` in the adjacent search bar.
3. Select `UO:0000160`.
4. Click Add Column.

:bulb: This also adds four columns to your table, one visible and **three** hidden.


---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Insert unit-values

In the annotation table, select any cell below `Parameter [light intensity exposure]` and add "425" as light intensity.

:bulb: You can see the numbers being complemented with the chosen unit, e.g. `425 microeinstein per square meter per second`

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Your annotation table is growing

At this point. Your table should look similar to this:

![w:1000](./../../images/demo-isa.study1.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Exercise :pencil:

Try to add suitable *Building Blocks* for other pieces of metadata from the plant growth protocol (`studies/talinum_drought/protocols/plant_material.txt`).

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add a factor building block

1. In the *Building Blocks* widget, select *Factor*, search for `watering exposure` and select the term with id `PECO:0007383`.
2. Click <kbd>Add Column</kbd>.
3. Add the drought treatment ("no water for 12 days", "re-water for 2 days") to the respective samples

:bulb: There are different options to add the drought treatment.

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Showing ontology reference columns

Use double pointed quotation mark to un-hide hidden columns. 

:bulb: You can see that your organism of choice was added with id and source Ontology in the reference (hidden) columns.


![w:900](./../../images/swate-a-reference-column.png)

---

## Identifying assays

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-identify.svg)

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](./../../images/arcitect-talinumphotosynthesis-assay.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Add information about your assay <!-- fit -->

In the assay panel you can define the assay's
 - measurement type
 - technology type, and
 - technology platform

![bg right w:600](./../../images/arcitect-talinumphotosynthesis-assaypanel.png)

---

## Assay for sugar measurement

![w:900](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-sugar.svg)

---

## Separating different assay elements

![w:800](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-modular2.svg)

---


## Parametric description of the lab process

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-labprocess-parameters1.svg)

---

## Parametric description of the lab process

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-labprocess-parameters2.svg)

---

## Isolating the lab processes in an assay

![w:600](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-modular1.svg)

---

## Save time using standard methods and SOPs

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-sop1.svg)

---

## Save time using standard methods and SOPs

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-sop2.svg)

---

## Applying standard procedures to sample record

![w:700](../../nfdi4plants.knowledgebase/src/assets/images/start-here/arc-prototypic-assay-sop3.svg)

---


# Realization of lab-specific metadata templates

![w:650px](./../../images/swate-metadatatemplates.png)

Facilities can define their most common workflows as templates

<style scoped>
h1{
  text-align: left
}
section {
  text-align: center;
}
</style>

---


# Import templates from a database

- DataPLANT curated
- Community templates

![bg right w:450](./../../images/swate-a-templates.png)


---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Let's annotate the RNA Seq assay

Open the lab notes `assays/rnaseq/protocols/`

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Use a template

1. Open the *Templates* widget in the Bar 

:bulb: Here you can find DataPLANT and community created workflow annotation templates

2. Search for `RNA extraction` and click <kbd>select</kbd> 
    - You will see a preview of all *Building Blocks* which are part of this template.
3. Click <kbd>Add template</kbd> to add all *Building Blocks* from the template to your table

![bg right:40% w:500px](./../../images/swate-a-templates.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Remove Building blocks

If there are any *Building Blocks* which do not fit to your experiment you can use right click --> "Delete Column" to remove it including all related (hidden) reference columns.

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Move Building blocks
If the order of the *Building Blocks* should be adjusted you can use right click --> "Move Column"
![bg right:40% w:500px](./../../images/swate-a-movecolumn.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Replace multiple names 

Right click --> "Update Column" can be used to replace names in batches
:bulb: this only works on Input columns
![bg right:40% w:500px](./../../images/swate-a-updatecolumn.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## New process, new worksheet

1. Add a new sheet to the `assays/rnaseq/isa.assay.xlsx` workbook.
2. Add the template "RNASeq Assay"

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Exercise :pencil:

Try to fill the two sheets with the protocol details:
  - `assays/rnaseq/protocols/RNA_extraction.txt` and
  - `assays/rnaseq/protocols/Illumina_libraries.txt`

---


# ARC builds on ISA to connect data

![w:800](./../../images/isamodel-arc01-img02.svg)

---

# ARC builds on ISA to link data

<div class="two-columns">

  <div>

  - Samples are linked study-to-assay, assay-to-assay
  - Raw data is linked to assays
  - Protocols can be referenced
  - ...

  </div>

  <div>
  
  ![w:800](./../../images/isamodel-arc01-img02.svg)
  
  </div>
</div>

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Link samples across studies and assays

1. Use the `Output [Sample Name]` of studies/talinum_drought/isa.study.xlsx as the `Input [Sample Name]` to **rna-extraction**.
1. Use the `Output [Sample Name]` of **rna-extraction** as the `Input [Sample Name]` to **illumina-libraries**.

**Seeds** &mdash;*Plant growth*&#x21FE; **Leaves** &mdash;*RNA Extraction*&#x21FE; **RNA** &mdash;*Illumina*&#x21FE; **fastq files**

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Link dataset files to samples

1. In the *Building Blocks* widget select *Output* -> *Raw Data File*.
2. Click <kbd>Add Column</kbd>.

:bulb: You see a warning about a changed output column.

3. Click <kbd>Continue</kbd>.
4. Go to the *File Picker* tab and click <kbd>Pick file names</kbd>.
5. Select and open the *fastq.gz files from the dataset folder.
6. Copy / paste them to the `Raw Data File`. 

:bulb: This allows you to link your samples to the resulting raw data files.

---

# Everything is a file

The ARC is a **data-centric** approach to RDM

![w:800](./../../images/arc-data-centric-everything-is-a-file.drawio.png)

---

# No technical lock-in

![w:1000](./../../images/arc-tool-assistance.drawio.png)

(Meta)data transparency with tool assistance but **no technical lock-in**

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Explorer

The **Explorer (6)** button directly opens your ARC locally

![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)

---

## Using the DataHUB to collaborate

![](../../nfdi4plants.knowledgebase/src/assets/images/start-here/collaboration-plantdatahub.svg)

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Login to DataHUB

1. Login to DataHUB (1)
   ![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)
2. Select `git.nfdi4plants.org` as Host 
    ![w:800](./../../images/arcitect-choose-datahub.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Commit panel (7)

You have to commit changes before you can upload to the DataHUB

![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Commit your changes

If you are logged in, the **Commit panel** shows
- your DataHUB's *Full Name* and *eMail*

It allows you to
- track changes of the ARC with git
- add a commit message 
- use different branches 

![bg right:50% w:500](./../../images/arcitect-commit-panel.png)

---
<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## History panel (9)

In the History panel you can inspect your ARCs history with all commits 


![bg right:55% w:500](./../../images/arcitect-history-panel.png)

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>


## Upload your local ARC to the DataHUB

From the sidebar, navigate to **DataHUB Sync** (8)

![bg right:40% w:250](./../../images/arcitect-help-sidebar.png)

---


<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## DataHUB Sync

The DataHUB Sync panel allows you to
- sync the changes to the DataHUB: **Push**
- sync from the DataHUB: **Pull**, and
- change the Remote for the synchronization


![bg right:50% w:500](./../../images/arcitect-datahub-sync.png) 

---

<img class="arcitectLogo" src="../../nfdi4plants.knowledgebase/src/assets/images/start-here/arcitectlogo.png"/>

## Check if your ARC is successfully uploaded

1. [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB 
2. Check your projects
