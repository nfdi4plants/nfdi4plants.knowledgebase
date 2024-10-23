---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: Swate hands-on
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Kevin Frey
  github: https://github.com/Freymaurer
  orcid: https://orcid.org/0000-0002-8493-1077
- name: Sabrina Zander
  orcid: https://orcid.org/0009-0000-4569-6126
---

<style>

.arcitectLogo {
  position: absolute;
  top: 1%;
  left: 1%;
  width: 100px;
  }

</style>

---


<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Your ISA table is growing

At this point. Your table should look similar to this:

![w:1000](./../../../img/demo_isa.study1.png)



---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Exercise :pencil:

Try to add suitable *Building Blocks* for other pieces of metadata from the plant growth protocol (`studies/talinum_drought/protocols/plant_material.txt`).

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Add a factor building block

1. In the *Building Blocks* widget, select *Factor*, search for `watering exposure` and select the term with id `PECO:0007383`.
2. Click <kbd>Add Column</kbd>.
3. Add the drought treatment ("no water for 12 days", "re-water for 2 days") to the respective samples

:bulb: There are different options to add the drought treatment.

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Fill out source name and sample name

Transfer the sample ids from the protocol.

1. Invent names for `Source Name` (we do not have this information)
2. Use the sample names (DB_*) as `Sample Name`

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Let's annotate the RNA Seq assay

1. Navigate to the demo ARC. 
2. Open the lab notes `assays/rnaseq/protocols/RNA_extraction.txt` in a text editor.
3. Import the empty `assays/rnaseq/isa.assay.xlsx` workbook in Swate.

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Use a template

1. Open the *Templates* widget in the Bar 

:bulb: Here you can find DataPLANT and community created workflow annotation templates

1. Search for `RNA extraction` and click <kbd>select</kbd> 
    - You will see a preview of all *Building Blocks* which are part of this template.
2. Click <kbd>Add template</kbd> to add all *Building Blocks* from the template to your table, which <u>do not exist yet</u>.

![bg right:40% w:500px](./../../../img/swate_a_templates.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Remove Building blocks

If there are any *Building Blocks* which do not fit to your experiment you can use right click --> "Delete Column" to remove it including all related (hidden) reference columns.

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Move Building blocks
If the order of the *Building Blocks* should be adjusted you can use right click --> "Move Column"
![bg right:40% w:500px](./../../../img/Swate_a_moveColumn.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Replace multiple names 

Right click --> "Update Column" can be used to replace names in batches
:bulb: this only works on Input columns
![bg right:40% w:500px](./../../../img/Swate_a_updateColumn.png)

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## New process, new worksheet

1. Add a new sheet to the `assays/rnaseq/isa.assay.xlsx` workbook.
2. Add the template "RNASeq Assay"

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Exercise :pencil:

Try to fill the two sheets with the protocol details:
  - `assays/rnaseq/protocols/RNA_extraction.txt` and
  - `assays/rnaseq/protocols/Illumina_libraries.txt`

---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Link samples across studies and assays

1. Use the `Output [Sample Name]` of studies/talinum_drought/isa.study.xlsx as the `Input [Sample Name]` to **rna-extraction**.
1. Use the `Output [Sample Name]` of **rna-extraction** as the `Input [Sample Name]` to **illumina-libraries**.

**Seeds** &mdash;*Plant growth*&#x21FE; **Leaves** &mdash;*RNA Extraction*&#x21FE; **RNA** &mdash;*Illumina*&#x21FE; **fastq files**


---

<img class="arcitectLogo" src="./start-here/arcitectLogo.png"/>

## Link dataset files to samples

1. In the *Building Blocks* widget select *Output* -> *Raw Data File*.
2. Click <kbd>Add Column</kbd>.

:bulb: You see a warning about a changed output column.

3. Click <kbd>Continue</kbd>.
4. Go to the *File Picker* tab and click <kbd>Pick file names</kbd>.
5. Select and open the *fastq.gz files from the dataset folder.
6. Copy / paste them to the `Raw Data File`. 

:bulb: This allows you to link your samples to the resulting raw data files.

