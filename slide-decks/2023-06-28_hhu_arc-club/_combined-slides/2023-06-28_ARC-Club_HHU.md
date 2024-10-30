---
marp: true
theme: marp-theme_dataplant-ceplas-ccby
paginate: true
title: 2023-06-28_ARC-Club_HHU
date: 2024-10-29
---


# The ARC Club

<!-- <style scoped>section {background: none; background-color: white;}</style> -->
<!-- _paginate: false -->

a two-day adventure to prepare your lab for the ARC universe

<br>
<br>

Dominik Brilhaus &ndash; CEPLAS Data Science
June 28th, 2023

# Annotated Research Context (ARC)

![width:950](./../../../images/arc-datacentricintegration-img1.png)


# The ARC &ndash; a package for your research data

![width:950](./../../../images/arc-fillwithdata-seq8.png)


# The DataHUB &ndash; a place to share your ARCs

<style scoped>

section {
  background-image: url('././../../../images/datahub-icon-placeholder.drawio.svg');
  background-repeat: no-repeat;  
  background-size: 10%;
  background-position: 96% 5%;
  ; 
}

</style>

![](./../../../images/datahub-landingpage.png)


DataHUB: https://git.nfdi4plants.org/



## Status quo: Institute FileShare

![w:900](./../../../images/insitutefileshare01.drawio.svg)


## Moving from FileShare to DataHUB

![w:900](./../../../images/insitutefileshare02todatahub.drawio.svg)

## Moving from FileShare to DataHUB &ndash; *via* ARCs

![w:900](./../../../images/insitutefileshare03todatahubviaarc.drawio.svg)


## There's a tiny burden

![w:500](./../../../images/user-challenges-002.svg)


## The ARC Club &ndash; Setting

- Good internet connection
- Isolated from lab // office // daily duties
- Access to the data to be ARCified
(file share, hard disks)
- Agile, communicative, collaborative, positive
- Technical *ad-hoc* support by DataPLANT

![bg right:40% w:450px](./../../../images/arcclub.drawio.svg)

## The ARC Club &ndash; Goals

- Move existing datasets into ARCs
- Share them via the DataHUB
- First few steps into ARCs
- Data users can pick them up from there


## The ARC Club &ndash; Rules

You do not talk about **ARC Club**

## Rules: perfect is the enemy of good

- There is no perfect ARC
- There is no complete ARC
- The only bad ARCs are those that don't exist yet.

<br>

  :rocket: Let's get started, the rest is easy :rocket:


## Preparation

- DataHUB user accounts https://register.nfdi4plants.org/
- DataHUB user group: https://git.nfdi4plants.org/hhu-plant-biochemistry
- Installation
  - [ARCitect](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/index.html)
  - [Swate](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html)
  - [ARC Commander](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index-setup.html)  
- List of projects to be ARCified

## Why you want to join the **ARC Club**

- You've needed data before, now is your chance to make data available
- Your contribution to the project / ARC will be visible

## Why you want to join the **ARC Club**

- You've needed data before, now is your chance to make data available
- Your contribution to the ARC will be visible
- Food :pizza:
- Drinks :beers:
- After-ARCathon Party 🥳

## Rough Schedule

<style scoped>
.columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 50px;
    margin-left: 10px;
}
table {
  height: 350px;
  font-size: 20px;
}
</style>

<div class="columns">
<div>

### Day 1

Time | Content
--- | ---
Morning | - Tech-check (Installation) <br> - Intro ARC, ARC Commander & DataHUB <br> - hands-on with dummy data
Lunch | *tbd* :hamburger:
Afternoon | - Discuss / assign projects <br> - Start creating ARCs
Evening | *tbd* :tropical_drink:

</div>

<div>

### Day 2

Time | Content
--- | ---
Morning | - Present project status <br> - Intro Swate <br> - hands-on with dummy data
Lunch | *tbd* :pizza: 
Afternoon | - Annotate experimental data <br> - Start creating ARCs
Evening | *tbd* :beers:

</div>
</div>

## Volunteers

- coders
- data handlers
- data users
- ARC early adopters
- long-term lab-associates

## Dates

August 16/17 or August 17/18

---


# The ARC Club

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

Preparation
**before** August 16th, 2023

<br>

Dominik Brilhaus &ndash; CEPLAS Data Science

---

# Checklist hands-on sessions

<style scoped>

ul{
  list-style-type: none;
}
</style>

:bulb: Please prepare the following before the workshop:

Required:

- :white_check_mark: Register at DataPLANT
- :white_check_mark: Install ARCitect on your computer
- :white_check_mark: Install Swate on your computer

Recommended (for trouble-shooting):
- :white_check_mark: Find your command line
- :white_check_mark: Install ARC Commander and dependencies on your computer
- :white_check_mark: Install VS Code

---

# DataPLANT Registration

If you do not have a DataPLANT account, please register at the <a href="https://register.nfdi4plants.org" target="_blank">DataPLANT website</a>.

![w:800](./../../../images/dataplant-registration.png)

---

## Role and consortium

Please add your `Project/consortium` (e.g. CEPLAS, SFB, TRR) and choose the role `Guest`

![bg right:40% fit](./../../../images/dataplant-registration-roles.png)

---

## Join the group

Once signed-up and logged in, please join the <a href="https://git.nfdi4plants.org/hhu-plant-biochemistry" target="_blank">HHU Plant Biochemistry group</a>.


---

# ARCitect Installation

Please follow the instructions to install the latest version of ARCitect.

- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_macos.html" target="_blank">macOS</a>
- <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ARCitect-Manual/arcitect_installation_windows.html" target="_blank">Windows</a>

---

# Swate Installation

Please follow <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/Docs01-Installing-Swate.html" target="_blank">these instructions</a> to install the latest version of Swate.

---

# Recommended for trouble-shooting

:bulb: We will likely not use the tools on the next few slides.  
However, as of now (early August 2023), it's probably better to have them ready for trouble-shooting and to show some inner workings of the ARC.

---

## The command line

Find the **command-line interface (CLI)** on your system.

- On Windows: Enter `powershell` into the explorer path
- On MacOS: Search `terminal` via spotlight (&#8984; + &#9251;) or navigate to `Applications` -> `Utilities` -> `Terminal`

<br>

:bulb: In our tutorials we sometimes use *terminal*, *command-line interface (CLI)* and *powershell* interchangeably.

---

# ARC Commander Installation

Please install the latest version of the ARC Commander and dependencies for your operating system according to the <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/index.html" target="_blank">manual's setup instructions</a>.

Check if the ARC Commander is functional by displaying the ARC Commander version and help menu:

```bash
arc --version
```

![bg right:30% width:300](./../../../images/arc-manual-setup.png)

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editor with code highlighting, git support, terminal, etc: <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>

---

# Resources

### <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/dataplant-logo-minimal-rounded-bg-darkblue.svg'/> DataPLANT (nfdi4plants)

Website: <a href="https://nfdi4plants.org/" target="_blank">https://nfdi4plants.org/</a>
Knowledge Base: <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/" target="_blank">https://nfdi4plants.org/nfdi4plants.knowledgebase/</a>
DataHUB: <a href="https://git.nfdi4plants.org" target="_blank">https://git.nfdi4plants.org</a>
GitHub: <a href="https://github.com/nfdi4plants" target="_blank">https://github.com/nfdi4plants</a>

---


# The ARC Club

Day 1 &ndash; Into the ARC

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

# ARC Club Goals

- Move existing datasets into ARCs
- Share them via the DataHUB
- First few steps into ARCs
- Data users can pick them up from there

---

# Rules: perfect is the enemy of good

- There is no perfect ARC
- There is no complete ARC
- The only bad ARCs are those that don't exist yet.

<br>

:rocket: Let's get started, the rest is easy :rocket:

---

# Annotated Research Context (ARC)

![width:950](./../../../images/arc-datacentricintegration-img1.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq1.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq2.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq3.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq4.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq5.png)

---

# What does an ARC look like?

![width:950](./../../../images/arc-fillwithdata-seq6.png)

---

![left h:640](./../../../images/user-challenges-002.svg)

---

![bg cover](./../../../images/dataplant-bigpicture-seq1.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq2.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq3.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq4.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq5.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq6.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq7.png)

---

![bg cover](./../../../images/dataplant-bigpicture-seq8.png)

--- 

## Contributors

Slides presented here include contributions by 

- Dominik Brilhaus | [GitHub](https://github.com/brilator) | [ORCID](https://orcid.org/0000-0001-9021-3197)
- Cristina Martins Rodrigues  | [GitHub](https://github.com/CMR248) | [ORCID](https://orcid.org/0000-0002-4849-1537)
- Martin Kuhl  | [GitHub](https://github.com/Martin-Kuhl) | [ORCID](https://orcid.org/0000-0002-8493-1077)

---


# The ARC Club

ARCitect QuickStart

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

## Initiate the ARC folder structure

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

1. Create a **New ARC** (2)
2. Select a location and name for your ARC

---

## Your ARC's name

💡 By default, your ARC's name will be used
   - for the ARC folder on your machine
   - to create your ARC in the DataHUB at `https://git.nfdi4plants.org/<YourUserName>/<YourARC>` (see next steps)
   - as the identifier for your investigation

💡 Make sure that no ARC exists at  `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`. Otherwise you will sync to that ARC.

![bg right:30% w:450](./../../../images/arcitect-arcpanel.png)

---

## Add a study

by clicking "Add Study" and entering an identifier for your study

![bg right w:500](./../../../images/arcitect-arcpanel-study01.png)

---

## Add information about your study

In the study panel you can add

- general metadata,
- people, and
- publications

![bg right w:600](./../../../images/arcitect-studypanel.png)

---

## Add protocols to your study

In the file tree you can **add protocols**

![bg right w:500](./../../../images/arcitect-arcpanel-study02.png)

---

## Add protocols

You can either
- directly write a **new protocol** within the ARCitect or
- import an existing one from your computer

![w:800](./../../../images/arcitect-arcpanel-protocol.png)

---

## Add an assay

by clicking "Add Assay" and entering an identifier for your assay

![bg right w:500](./../../../images/arcitect-arcpanel-assay01.png)

---

## Link your assay to a study

You can either
- link your new assay to an existing study in your ARC or
- create a new one

![bg right w:500](./../../../images/arcitect-arcpanel-assay02.png)

---

## Add information about your assay

In the assay panel you can

1. link or unlink the assay to studies, and
2. define the assay's
   - measurement type
   - technology type, and
   - technology platform.

![bg right w:700](./../../../images/arcitect-assaypanel.png)

---

## Add protocols and datasets

In the file tree you can
  - **add a dataset** and 
  - **protocols** associated to that dataset.

:bulb: **Add Dataset** allows to import data from any location on your computer into the ARC.

:warning: Depending on the file size, this may take a while. Test this with a small batch of files first.

![bg right:40% w:400](./../../../images/arcitect-arcpanel-assay03.png)

---

## Login to the DataHUB

Click **Login** (1) in the sidebar to login to the DataHUB.

:bulb: This automatically opens your browser at the DataHUB (https://git.nfdi4plants.org) and asks you to login, if you are not already logged in. 

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

---

## Upload your local ARC to the DataHUB

From the sidebar, navigate to **Versions** (6)

![bg right:40% w:250](./../../../images/arcitect-help-sidebar.drawio.svg)

---

## Versions

The versions panel allows you to
- store the local changes to your ARC in form of "commits",
- sync the changes to the DataHUB, and
- check the history of your ARC

![bg right w:650](./../../../images/arcitect-versionspanel.png)

---

## Connection to the DataHUB

If you are logged in, the versions panel shows
- your DataHUB's *Full Name* and *eMail*
- the URL of the current ARC in the DataHUB `https://git.nfdi4plants.org/<YourUserName>/<YourARC>`

![bg right w:650](./../../../images/arcitect-versionspanel.png)
---


# The ARC Club

Happy ARCing

Dominik Brilhaus &ndash; CEPLAS Data Science
August 16th, 2023

---

## Moving from FileShare to DataHUB &ndash; *via* ARCs

![w:900](./../../../images/insitutefileshare03todatahubviaarc.drawio.svg)

---

## Assign projects


---

## Rough routine for each project

1. Identify the available data and resources
2. Create the ARC
3. Add metadata and data
4. Share via DataHUB group https://git.nfdi4plants.org/hhu-plant-biochemistry/

---

## Low(er) hanging fruits: published projects

1. Add the authors
2. Add the publication(s)
   1. Add citation and DOI
   2. Add supplemental
   3. Convert M&M to *protocols*
3. Reference data in public repositories
4. Add large data (e.g. from file share)
5. Set ARC to **public!**

---

## More challenging ARCs

- (unpublished) left-overs of colleagues who have since moved
- unclear

---

## Collect / derive as much info about the **investigation** as possible

**MUST** haves

```yaml
Investigation Identifier
Investigation Title
...
Investigation Publication Status
...
Investigation Person Last Name
Investigation Person First Name
```

:bulb: This and more investigation-level info can be collected in the ARC's `isa.investigation.xlsx`

---

## Create and share the ARC

```bash
arc init
arc sync -f -r https://git.nfdi4plants.org/hhu-plant-biochemistry/<InvestigationID>
```

---

## Copy data

1. **Copy** data to the ARC, do not **move** data from original source  
(we'll take care of that later)
2. Ideally use `rsync` rather than copying manually
3. Ideally use `md5` or `md5sum` to check for correct file transfer

:bulb: Ask the coders for help!

---

## Perspective and administration in the future

---

## Administration / Backup

![Alt text](./../../../images/insitutefileshare04-backupclones.drawio.svg)

---


# The ARC Club

Intro and Hands-on Swate

Dominik Brilhaus &ndash; CEPLAS Data Science
August 17th, 2023

---

# Goals

- Get familiar with ISA metadata and Swate
- Annotate data in your ARC

---

## Check Swate installation

:ballot_box_with_check: Make sure [Swate is installed](./../SwateManual/Docs01-Installing-Swate.html):

1. Open Excel (online or Desktop)
2. Go to the `Insert` tab: Click the arrow next to "My Add-ins". There you should be able to select Swate.
3. Go to the `Data` tab: you should see the Swate (Core) add-in.

:bulb: Alternatively, you can use [Swate standalone](https://swate-alpha.nfdi4plants.org)  
(:warning: this is however *work in progress* and likely to change)

---

## Have a simple text editor ready

- Windows Notepad
- MacOS TextEdit

Recommended text editors with code highlighting:

- Visual Studio Code <https://code.visualstudio.com/>

---

## Download the demo data

```bash
git clone "https://demo-user:5ehDYeHcqP2MqVXsNNPu@git.nfdi4plants.org/teaching/demo-arc_level1.git"
```

---

## Where we left off last time

👩‍💻 Initiated an ARC
📂 Structured and ...  
🌐 Shared with collaborators

<br>

**Today** we want to 

<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate-c-40x40.png'/> ... **annotate the experimental data**

![bg right:40% width:400](./../../../images/demo-arc-screenshot.png)

---

# Intro ISA

---

## ARC builds on ISA

![w:900](./../../../images/isamodel-arc01-img01.svg)

https://isa-tools.org/format/specification.html

---

# ARC builds on ISA

![w:1100](./../../../images/isamodel-arc01-img02.svg)

---

# isa.<>.xlsx files within ARCs

![w:1000](./../../../images/isamodel-arc01-img03.svg)

---

# Study and assay files are registered in the investigation file 

![w:950](./../../../images/isamodel-arc01-img04.svg)

---

# The output of a study or assay file can function as input for a new isa.assay.xlsx 

Output building blocks:
- Sample Name
- Raw Data File
- Derived Data File

![bg right w:600](./../../../images/isamodel-arc01-img05.svg)

---

![bg w:1050](./../../../images/isamodel-arc01-img6.svg)

---

# Annotation Building Block types

![bg right:40% w:520](./../../../images/swate-overview.svg)

- Source Name (Input)
- Protocol Columns
  - Protocol Type, Protocol Ref
- Characteristic
- Parameter
- Factor
- Component
- Output Columns
  - Sample Name, Raw Data File, Derived Data File

:bulb: For details, check out the [Annotation Principles](https://nfdi4plants.github.io/AnnotationPrinciples/).

---

# Swate hands-on with demo data

---

## Swate Overview

<figure>
  <img src="./../../../images/swate-overlay-exp.jpg?v27.01.202" style="height: 400px">
  <figcaption>Major areas of the Swate user interface.</figcaption>
</figure>

---

## Let's annotate the plant samples first

1. Navigate to the demo ARC. 
2. Open the lab notes `studies/talinum_drought/protocols/plant_material.txt` in a text editor. 
3. Open the empty `studies/talinum_drought/isa.study.xlsx` workbook in Excel.

---

## Create an annotation table

<br>

<style scoped>
.columns {
    /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
    grid-template-columns: 500px 500px;
    gap: 30px;
    display: flex;
    justify-content: center;
}
</style>

<div class="columns">
<div class="columns-left">

Create a Swate annotation table via the <kbd>create annotation table</kbd> button in the yellow pop-up box *OR* click the <kbd>Create Annotation Table</kbd> quick access button.

<br>

> :bulb: Each table is by default created with one input (`Source Name`) and one output (`Sample Name`) column  

> :bulb: Only one annotation table can be added per Excel sheet

</div>

<div class="columns-right">
    <img src="./../../../images/swate-createannotationtable-exp.jpg" style="width: 1200px">
</div>

</div>

---

## Add a building block

1. Navigate to the *Building Blocks* tab via the navbar. Here you can add *Building Blocks* to the table.
2. Instead of *Parameter* select *Characteristic* from the drop-down menu (A)
3. Search for `organism` in the search bar (B). This search looks for suitable *Terms* in our *Ontology* database.
4. Select the Term with the id `OBI:0100026` and, 
5. Click <kbd>Add building block</kbd>.

> :bulb: This adds three columns to your table, one visible and **two** hidden.

![bg right:30% w:400](./../../../images/swate-addbuildingblock-exp.jpg?v31.01.22)

---
## Insert values to annotate your data

1. Navigate to the *Terms* tab in the Navbar
2. In the annotation table, select any number of cells below `Characteristic [organism]`
3. Click into the search field in Swate.

> :bulb: You should see `organism` showing in a field in front of the search field  
> :bulb: The search will now yield results related to `organism`

4. In the search field, search for "Talinum fruticosum"
5. Select the first hit and click <kbd>Fill selected cells with this term</kbd>

---

## Add a building block with a unit

1. In the *Building Blocks* tab, select *Parameter*, search for `light intensity exposure` and select the term with id `PECO:0007224`.
2. Check the box for *This Parameter has a unit* and search for `microeinstein per square meter per second` in the adjacent search bar.
3. Select `UO:0000160`.
4. Click <kbd>Add building block</kbd>.

> :bulb: This adds four columns to your table, one visible and **three** hidden.

---

## Insert unit-values to annotate your data

In the annotation table, select any cell below `Parameter [light intensity exposure]` and add "425" as light intensity.

> :bulb: You can see the numbers being complemented with the chosen unit, e.g. `425.00 microeinstein per square meter per second`

---

## Showing ontology reference columns

Hold <kbd>Ctrl</kbd> and click the *Autoformat Table* quick access button to adjust column widths and un-hide all hidden columns.

> :bulb: You can see that your organism of choice was added with id and source Ontology in the reference (hidden) columns.  
> :warning: This feature is currently not supported on MacOS

---

## Update ontology reference columns

Click the <kbd>Update Ontology Terms</kbd> quick access buttons.

> :bulb: This updates all reference columns according to the main column. In this case the reference columns for `Parameter [light intensity exposure]` are updated with the id and source ontology of the `microeinstein per square meter per second` unit.

---

## Your ISA table is growing

At this point. Your table should look similar to this:

![w:1000](./../../../images/demo-isa.study1.png)

---

## Hiding ontology reference columns

Click the <kbd>Autoformat Table</kbd> quick access button without holding <kbd>Ctrl</kbd> to hide all reference columns.

--- 

## Exercise :pencil:

Try to add suitable *building blocks* for other pieces of metadata from the plant growth protocol (`studies/talinum_drought/protocols/plant_material.txt`).

---

## Let's annotate the RNA Seq data

1. Navigate to the demo ARC. 
2. Open the lab notes `assays/rnaseq/protocols/RNA_extraction.txt` in a text editor. 
3. Open the empty `assays/rnaseq/isa.assay.xlsx)` workbook in Excel.

---

## Use a template

1. Navigate to *Templates* in the Navbar and click *Browse database* in the first function block.

> :bulb: Here you can find community created workflow annotation templates

1. Search for `RNA extraction` and click <kbd>select</kbd> 
    - You will see a preview of all building blocks which are part of this template.
2. Click <kbd>Add template</kbd> to add all Building Blocks from the template to your table, which <u>do not exist yet</u>.

![bg right:30% w:350px](./../../../images/swate-templates.svg)

---

## Adding / Updating unit references

Sometimes you need to add or update the unit of an existing building block. 

1. Select any number of rows of the `Parameter [biosource amount]` building block to mark it for the next steps.
2. Open the *Building Blocks* tab
3. In the bottom panel "Add/Update unit reference to existing building block", search for the unit "milligram". Select the unit term and click <kbd>Update unit for cells</kbd>.
:bulb: If you already had values in the main column they will be updated automatically.
4. Click the *Update Ontology Terms* <a href="./images/swate-overlay-exp.jpg" target="_blank">quick access button</a>, to update the reference columns.
   
---

## Remove building blocks

If there are any Building Blocks which do not fit your experiment you can use the <kbd>Remove Building Block</kbd> quick access button to remove it including all related (hidden) reference columns.

:warning: Due to the hidden reference columns, we recommend not to delete table columns via usual Excel functions. 

---

## New process, new worksheet

1. Add a new sheet to the `assays/rnaseq/isa.assay.xlsx)` workbook.
2. Add the template "RNASeq Assay"

--- 

## Exercise :pencil:

Try to fill the two sheets with the protocol details:
  - `assays/rnaseq/protocols/RNA_extraction.txt` and
  - `assays/rnaseq/protocols/Illumina_libraries.txt`

---

## Your ISA table is ready 🎉

Go ahead, adjust the Building Blocks you want to use to describe your experiment as you see fit.
Insert values using Swate Term search and add input and output.

---

## A small detour on "Excel Tables"

Swate uses Excel's "table" feature to annotate workflows. Each table represents one *process* from input (e.g. plant leaf material) to output (e.g. leaf extract).

Example workflows with three *processes* each:

- Plant growth &rarr; sampling &rarr; extraction
- Measured data files  &rarr; statistical analysis  &rarr; result files

> :bulb: Excel tables allow to group data that belongs together inside one sheet. This is not to be confused with a (work)sheet or workbook.
> ```bash
> workbook              (e.g. "isa.assay.xlsx")
>  └─── worksheet       (e.g. "plant_growth")
>           └─── table  (e.g. "annotationTable")

--- 

## Contributors 

Slides presented here include contributions by 

- Dominik Brilhaus | [GitHub](https://github.com/brilator) | [ORCID](https://orcid.org/0000-0001-9021-3197)
- Kevin Frey  | [GitHub](https://github.com/Freymaurer) | [ORCID](https://orcid.org/0000-0002-8510-6810)
- Martin Kuhl  | [GitHub](https://github.com/Martin-Kuhl) | [ORCID](https://orcid.org/0000-0002-8493-1077)
---

