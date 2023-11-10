---
layout: none
title: CEPLAS Good Data Management Practices
---

# Good Data Management Practices

- [Good Data Management Practices](#good-data-management-practices)
  - [About](#about)
  - [Day 1](#day-1)
  - [Day 2](#day-2)
  - [Day 2 - Hands on](#day-2---hands-on)
  - [Day 2 - Feedback](#day-2---feedback)
  - [Day 3](#day-3)


## About

### Share your screen

https://hhu.webex.com/hhu-en/j.php?MTID=m32b0c859525c2caabd04c7294d081015


### Dates

Dates: November 7th, 8th and 10th, 2023
Time: 9:30 - 16:00
Building: HHU - ZSL 22.07 ([Directions](https://www.ceplas.eu/de/contact/how-to-get-there/))
Room: 22.07.U1.23

### Content

- Day 1: Basics of Research Data Management (RDM), [FDMK](https://www.fdm.hhu.de) and Dominik Brilhaus
- Days 2 and 3: Practical RDM with DataPLANT, [Dominik Brilhaus](https://www.ceplas.eu/en/research/data-science-and-data-management/)

### Materials

:fire: Slides are **now available** :fire:

Slides are shared via the [DataPLANT knowledge base](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/teaching-materials/disseminations/2023-11-08_CEPLAS-module/) during the class and via Sciebo afterwards

### Preparation and tech check

Please follow the links and instructions in the preparation slides to setup the required software on your laptop **before day 1**. 

:bulb: If you run into trouble with any installation, we can fix this together at the end of day 1.


## Day 1

### Your concerns

- (missing experience with) code

### Your Data types

- Imaging
- Quantification of agronomic traits
- Genome assemblies
- qPCR
- Sequencing

### Satifyd (FAIR principles tool)

https://satifyd.dans.knaw.nl

### Discussion points

- should data be public?
- "data belongs to the group"


### DMP
- Scenario 1
  - Data set
  - "phenotyping"

  - Metadata standard
  - Minimum Information About Plant Phenotyping Experiments (MIAPPE), https://www.miappe.org

  - Repository
  - eDAL-PGP (IPK), https://edal-pgp.ipk-gatersleben.de


- Scenario 2

  - Data set
  - RNASeq, transcriptomics, gene expression
  - Standard data format: one fastq per sample, fasta

  - Metadata standard
  - Minimum Information about a high-throughput Nucleotide SeQuencing Experiment (MINSEQE), https://doi.org/10.5281/zenodo.5706412


### Search for repositories

https://re3data.org



## Day 2


### Questions 

- where is the arc stored?

> locally
> Central DP DataHUB: Computing Center Freiburg

- is the arc just data storage?

> collaborate, share, reuse
> concept - hooked up to other services (e.g. Galaxy)
> CWL and other workflow / analysis options
> publication

- possible to personalize the arc?
- is the arc customizable individually

> to an extent 
> everything "non-arc" is considered "payload"

- should the arc be shared?

> depends (ownership, IPR, legal)
> YES! Open access! 

- git vs gitlab vs github?

> git: "backend programm"
> github / gitlab: online platforms to share gits 

- when do you expect arc to be ready to use? should we start with arc right away when starting the phd?

> Now 
> Yes!

- everything is supposed to go there?

> everything project-related: why not? 

- how secure is the arc?

> depends on where and how you use and store it

- for the future: a simpler installation? (one ARCitect file and you have already Git and so installed?) --> cumstomer friendly

> good point

- Do you have to download the complete ARC before you can work on it?

> no; you can leave out LFS files 

- Can you download an ARC that is not yours and built your own ARC based on that ARC?

> yes/no
> use fork!
> or branches
> checkout gitlab tutorials for more

- Can you rename your folders in studies and assays with the isa file automatically changing?

> it depends (currently not really)
> use arc commander functions https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/arc_isa_study.html#editing-study-information

- Is there an "undo button" so you can erase mistakes made in the arc? 

> yes / no
> use git revert (i.e. in DataHUB)

- Is the ARC system used globally?

> not yet
> but: standards are (Git, CWL, ISA, RO-crate)

- still having trouble to decide when to put files in "studies" and when to put them in "assays"

- how do you add resources folder in arcitect?

> currently not implemented

- why does the arcitect limit your possibilties for your arc design?

> adding additional folders
> to prevent users from running into errors...


- Where would you put your (preliminary) thesis inside the arc?

> into an additional folder at the root


### Ideas 

- isa order not represented in arcitect, there assay is top, counterintuitive

> alphabetically ordered just like file tree

- implemented file viewer?

> Yes / no. Some more file types will be available

### Issues

- things not deletable? deleting studies accidentally created when not linking an assay to an existing one would be cool

> complicated

- Swate does not allow adding a unit to a column in retrospect

- :rocket: **Can anyone please describe the 403 error during `arc sync` and leave a screenshot**?

On MacOS:

> 1. Get access token via arc commander
> 1. Tried `arc sync -f -r <fresh-repo-adress>`
> 1. see 403 error
> 1. Create empty ARC at <fresh-repo-adress> via DataHUB and rerun `arc sync`
> 1. Mac asks to allow using git credential manager -> allow -> arc asks for username and pw -> still 403 error
> 1. Generate PAT via DataHUB and use this as PW. Still 403 error. 



## Day 2 - Hands on

### Download demo data

- Option 1:

```bash
git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
```

- Option 2: 

https://nfdi4plant.sharepoint.com/:f:/s/Teaching/Eik7k-oJiMREgZ24kto7sIYBGxHmmZlS_Kzf7psk-5w-xg?e=u0sADd

### Link computer to DataHUB via ARC Commander

https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/arc_access.html

### ARC Commander Hands-on 


#### Create an investigation

```bash
arc investigation create -i TalinumPhotosynthesis
```

```bash
arc i person register --lastname Brilhaus --firstname Dominik --email brilhaus@hhu.de --affiliation CEPLAS
```

#### Add a study

```bash
arc study add -s talinum_drought
```

#### Add assays 

```bash
arc assay add -s talinum_drought -a rnaseq
arc assay add -s talinum_drought -a metabolomics
```

#### Upload ARC to DataHUB


```bash
arc sync -f -r https://git.nfdi4plants.org/<username>/arc-demo

```

#### :bulb: Workaround for Error 403

If the `arc sync` command prompts a 403 error: 

1. Create an empty ARC (New project without README) in the DataHUB
2. Use the url of that repository



## Day 2 - Feedback


...was too short | I'm happy with... | I did not like at all ...| This idea or advice was good: ... | I really liked ...  
---|---|---|---|---
ELN | getting to know ARC | order of intro to ARC tools | use gitlab | ARC structure helps for PhD
sharing (other) platforms (gitlab, github), cloud services | attitude; good learning atmosphere | adjust more to heterogenous level of experience (code) | get help on git rather than learning on your own | not loosing track of data; have a convention for structure
arc commander details |---|---|---|---



## Day 3

### Hands-on 

Swate alpha: https://swate-alpha.nfdi4plants.org
