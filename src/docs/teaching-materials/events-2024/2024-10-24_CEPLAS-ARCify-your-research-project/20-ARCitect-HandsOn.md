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

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## ARCitect installation

Please install version **v0.0.48** (or later) of the ARCitect: https://github.com/nfdi4plants/ARCitect/releases/latest

---

## Download the demo data

https://uni-duesseldorf.sciebo.de/s/C7ms3QA6q7OZnU2 

---

## A small prototypic project

![](./start-here/arc-prototypic.svg)

---

## ARC: Annotated research context

![w:900](./start-here/arc-bag.svg)

---

## The ARC scaffold structure

![w:900](./start-here/arc-scaffold.svg)

---

## Sort Demo data in an ARC <!-- fit -->

![bg right width:400](./../../../img/demo_data_screenshot.png)

![width:900](./../../../img/ARC_fillWithData_experimental.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Open ARCitect

1. Login to DataHUB (1)
   ![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)
2. Select `git.nfdi4plants.org` as Host 
    ![w:800](./../../../img/ARCitect_Choose_DataHUB.png)
---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Initiate the ARC folder structure

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

1. Create a **New ARC** (2)
2. Select a location and name it **TalinumPhotosynthesis**

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Your ARC's name

<style scoped>section {font-size: 25px;}</style>

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.


![bg right:30% w:500](./../../../img/ARCitect_TalinumPhotosynthesis.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add a description to your investigation

![w:900](./../../../img/ARCitect_TalinumPhotosynthesis_InvestigationMetadata.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add contributors


![bg right w:600](./../../../img/ARCitect_TalinumPhotosynthesis_InvestigationPerson.png)
- you could also add the contacts directly via ORCID

---

## Divide and conquer for reproducibility

![](./start-here/arc-prototypic-study-divide-conquer.svg)

---

## Identifying the ‘study’ part

![w:900](./start-here/arc-prototypic-study-identify.svg)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add a study

by clicking "Add Study" and entering an identifier for your study

Use **talinum_drought** as an identifier

![bg right w:500](./../../../img/ARCitect_TalinumPhotosynthesis_Study.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Study panel

In the study panel you can add

- general metadata,
- people, and
- publications
- data process information

![bg right w:600](./../../../img/ARCitect_TalinumPhotosynthesis_StudyPanel.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Let's annotate the plant samples

1. Check out the lab notes `studies/talinum_drought/protocols/plant_material.txt`
2. Select the study `talinum_drought`
3. Add a new table sheet at the bottom

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Create an annotation table

1. Create a annotation table by adding **Building blocks** via the widget (A) or the sidebar (B)
1. Add an *Input* (`Source Name`) and *Output* (`Sample Name`) column

:bulb: Each table can contain only one *Input* and one *Output* column  

![bg right w:600](./../../../img/Swate_a_Building_blocks.png)

---

## A table-based organization schema

![w:700](./start-here/arc-prototypic-metadata-table-representation.svg)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../img/arcitect-ARCPanel-protocol.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Link the protocol to the isa table

1. In the *Building Blocks* tab, select *More* -> *Protocol REF*.
2. Click <kbd>Add Column</kbd>.
3. Add the name of the protocol file (plant_material.txt) to the *Protocol REF* column.

---

## Referencing a protocol

This allows you to reference the free-text, human-readable protocol.


![w:700](./start-here/arc-prototypic-study-protocolref.svg)

:bulb: It is recommended that the protocol is in an open format (.md|.txt|.docx|…)
:bulb: But everything is possible also an URI to an electronic lab notebook

---

## Parameterizing the ‘study’

![w:900](./start-here/arc-prototypic-study-parameterization.svg)

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

![w:1000](./start-here/ontology-lookup-service.svg)

---

## Finding the metadata vocabulary and descriptors

![](./start-here/arc-prototypic-metadata.svg)

---

## Finding the metadata vocabulary and descriptors

<div class="two-columns">
  <div>
  
  ### Parameters []
  
  - <div class="yellowblock"></div>

    - <div class="blueblock"></div> Light intensity 200 µEinstein

  - <div class="yellowblock"></div>  

    - <div class="blueblock"></div> Temperature 6°C / 25°C

  - <div class="yellowblock"></div>

    - <div class="blueblock"></div> Growing 4d
  
  </div>  
  <div>
  
  ### Characteristics []
  
  - <div class="yellowblock"></div>

    - <div class="blueblock"></div> Arabidopsis thaliana

  - <div class="yellowblock"></div>

    - <div class="blueblock"></div> Leaf
  
  - <div class="yellowblock"></div>
  
    - <div class="blueblock"></div> Hydroponic culture
  
  - <div class="yellowblock"></div>

    - <div class="blueblock"></div> Columbia
  
  </div>
</div>

---

## Finding the metadata vocabulary and descriptors

<div class="two-columns">
  <div>
  
  ### Parameters []
  
  - <div class="yellowblock"></div> Light intensity

    - <div class="blueblock"></div> 200 µEinstein

  - <div class="yellowblock"></div> Temperature  

    - <div class="blueblock"></div> 6°C / 25°C

  - <div class="yellowblock"></div> Growth time

    - <div class="blueblock"></div> 4d
  
  </div>  
  <div>
  
  ### Characteristics []
  
  - <div class="yellowblock"></div> Organism

    - <div class="blueblock"></div> Arabidopsis thaliana

  - <div class="yellowblock"></div> Tissue

    - <div class="blueblock"></div> Leaf
  
  - <div class="yellowblock"></div> Growth medium
  
    - <div class="blueblock"></div> Hydroponic culture
  
  - <div class="yellowblock"></div> Ecotype

    - <div class="blueblock"></div> Columbia
  
  </div>
</div>

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add Characteristics

1. Select *Characteristic* from the drop-down menu
1. Enter `organism` in the search bar. This search looks for suitable *Terms* in our *Ontology* database.
1. Select the Term with the id `OBI:0100026` and, 
1. Click <kbd>Add Column</kbd>

:bulb: This adds four columns to your table, one visible and **three** hidden.

![bg right:40% w:500](./../../../img/Swate_a_addBuildngBlock.png)

---



<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Insert values to annotate your data

1. Insert values by selecting any cell below `Characteristic [organism]`
2. Use free text or use the magnifying glass to activate *Term* search
3. Write "Talinum fruticosum" and enable *Term* search
4. Select the hit 


![bg right:40% w:500](./../../../img/Swate_a_addCharacteristic.png)

---



<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add a Parameter building block with a unit

1. In the *Building Blocks* widget, select *Parameter*, search for `light intensity exposure` and select the term with id `PECO:0007224`.
2. Check the box for *Unit* and search for `microeinstein per square meter per second` in the adjacent search bar.
3. Select `UO:0000160`.
4. Click Add Column.

:bulb: This also adds four columns to your table, one visible and **three** hidden.


---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Insert unit-values

In the annotation table, select any cell below `Parameter [light intensity exposure]` and add "425" as light intensity.

:bulb: You can see the numbers being complemented with the chosen unit, e.g. `425 microeinstein per square meter per second`

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Showing ontology reference columns

Use double pointed quotation mark to un-hide hidden columns. 

:bulb: You can see that your organism of choice was added with id and source Ontology in the reference (hidden) columns.


![w:900](./../../../img/Swate_a_reference_column.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add an assay

by clicking "Add Assay" and entering an identifier for your assay

Add two assays with **rnaseq** and **metabolomics** as an identifier
![bg right w:500](./../../../img/ARCitect_TalinumPhotosynthesis_Assay.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add information about your assay

In the assay panel you can define the assay's
 - measurement type
 - technology type, and
 - technology platform

![bg right w:600](./../../../img/ARCitect_TalinumPhotosynthesis_AssayPanel.png)

---


<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Explorer

The **Explorer (6)** button directly opens your ARC locally

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Commit panel (7)

You have to commit changes before you can upload to the DataHUB

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

---
If you are logged in, the **Commit panel** shows
- your DataHUB's *Full Name* and *eMail*

It allows you to
- track changes of the ARC with git
- add a commit message 
- use different branches 

![bg right:50% w:500](./../../../img/ARCitect_Commit_panel.png)


---
<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## History panel (9)

In the History panel you can inspect your ARCs history with all commits 


![bg right:55% w:500](./../../../img/ARCitect-History_panel.png)


---
<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Upload your local ARC to the DataHUB

From the sidebar, navigate to **DataHUB Sync** (8)

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

---


<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## DataHUB Sync

The DataHUB Sync panel allows you to
- sync the changes to the DataHUB: **Push**
- sync from the DataHUB: **Pull**, and
- change the Remote for the synchronization


![bg right:50% w:500](./../../../img/ARCitect_DataHUB_Sync.png) 

<!-- TODO more to remote?-->
---


<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Check if your ARC is successfully uploaded

1. [sign in](https://auth.nfdi4plants.org/realms/dataplant/login-actions/registration?client_id=account&tab_id=4bQkU161waI) to the DataHUB 
2. Check your projects



---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add protocols and datasets

In the file tree you can
  - **import dataset files or folders** and 
  - **protocols** associated to that dataset.

:bulb: **Import Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.


![bg right:40% w:400](./../../../img/arcitect-ARCPanel-assay03.png)

---



---
---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Download the demo data

![bg right:40% w:250](./../../../img/ARCitect-help-Sidebar.png)

1. Open the ARCitect
2. Login (1) to your DataHUB account
3. Navigate to **Download ARC** (4)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Download the demo data

4. Search for **Talinum-CAM-Photosynthesis**
5. Click the download button, select a location and open the ARC.
6. Open the downloaded ARC

![w:700](./../../../img/arcitect-download-TalinumARC.png)

:bulb: This is basically the ARC we created in the last session.

---