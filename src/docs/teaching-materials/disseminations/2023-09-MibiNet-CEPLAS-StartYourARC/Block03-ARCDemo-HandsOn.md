---
marp: true
theme: marp-theme_dataplant-ceplas-mibinet-ccby
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
title: ARC demo and hands-on
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
- name: Sabrina Zander
  orcid: https://orcid.org/0009-0000-4569-6126
---

<!-- TODO: delete if Block3 copy is fine -->

# Block 3 &ndash; ARC demo and hands-on

<style scoped>section {background: none; background-color: white}</style>
<!-- _paginate: false -->

September 21st, 2023
 

<div style="position: fixed; bottom: 10%; right: 40%;">
  <div class="profile-picture">
    <img src="https://www.biological-data-science.hhu.de/fileadmin/_processed_/8/c/csm_Sabrina_Zander_3c8daca973.jpg" alt="Sabrina Zander" style="position:absolute; height: auto; width: auto; top:65%; left: 0%; transform:translateY(-50%);"> 
  </div>

  <div>

  Sabrina Zander <br> [MibiNet](https://www.sfb1535.hhu.de/projects/research-area-z/z03)
  </div>
</div>

<div style="position: fixed; bottom: 10%; right: 10%;">
  <div class="profile-picture">
    <img src="https://www.ceplas.eu/fileadmin/_processed_/d/c/csm_Brilhaus_Dominik_4fd48a61a2.jpeg" alt="Dominik Brilhaus">
  </div>

  <div>

  Dominik Brilhaus <br> [CEPLAS Data Science](https://www.ceplas.eu/en/research/data-science-and-data-management/)

  </div>

</div>

---

<!-- 

## Tutor prep:

- change `<username>` in `arc sync` steps
- make sure no `demo-arc` exists at given URL or adapt URL in sync steps

- download the folder with unstructured sample data
    ```bash
    git clone "https://demo-user:1_eznikmzxzARAbUxxnF@git.nfdi4plants.org/teaching/demo-arc_level0.git"
    ```

    > no access needed, "read_registry" token is part of command
    > Note: If you want to provide another dataset for download. 
    > 1. Create a new DataHUB project with the data. 
    > 2. Create an access token only for that project with role "maintainer" and scopes "read_repository".
    > 3. Adapt the URL `https://<tokenname>:<token>@git.nfdi4plants.org/<username>/<projectname>.git`

 -->

# First steps towards your ARC

---

## You just received your data

![bg right width:400](./../../../img/demo_data_screenshot.png)

---

## Goal

- Structure,
- Annotate, and
- Share **your experimental data**.

---


<!-- 
## Tools and software

📂 Explorer or Finder on your local computer
<br>
<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_40x40.png'/> DataPLANT's Excel-Plugin SWATE
<br>
🌐 DataPLANT's [DataHUB](https://git.nfdi4plants.org/)
<br>
👩‍💻 "Terminal" or "command prompt" on your local computer 
-->

## Structure your data

![width:800](./../../../img/ARC_fillWithData_experimental.png)

---


## Annotate your data

<style scoped>

section p img {
width: 900px;
height: 400px;
object-fit: cover;
object-position: 50% 60%;
/* display: block; */;
}
</style>

![](./../../../img/Swate_metadataTemplates.png)

<!-- 
1. Fill study characteristics (completely manually)

2. Fill assay parameters (by template, copy paste metadata from sheet, link files by picker)

3. Fill assay parameters (by json import, link files by picker) -->

---


## Collaborate and share

<style scoped>

section p img {
width: 1000px;
height: 400px;
object-fit: cover;
object-position: 50% 30%;
/* display: block; */;
}
</style>


![](./../../../img/ARC_DataSharing_Experts02_img1.png)


---

## Sync your ARC to the DataHUB

```bash
arc sync -f -r https://git.nfdi4plants.org/brilator/demo-arc
```

<!-- 
:bulb: The URL decomposed:
- `https://git.nfdi4plants.org/` = DataHUB
- `brilator/` = username @ DataHUB  
- `demo-arc` = name of the ARC @ DataHUB   -->

---


## Invite collaborators to your ARC

https://git.nfdi4plants.org/brilator/demo-arc

<!-- 
## Check your progress at the DataHUB

- Open your ARC at https://git.nfdi4plants.org/brilator/demo-arc/ and click the `commits` link below the project avatar
- Or directly navigate to https://git.nfdi4plants.org/brilator/demo-arc/-/commits/main 

-->
---

## Using the ARC Commander to setup an ARC

<!-- *Create and navigate to a new folder* -->
<!-- 
```bash
mkdir ~/Desktop/demo-arc; cd ~/Desktop/demo-arc
``` -->

*Initiate the ARC folder structure*

```bash
arc init
```

*Add metadata structure*

```bash
arc investigation create -i TalinumPhotosynthesis
arc study add -s talinum_drought
arc assay add -s talinum_drought -a rnaseq
arc assay add -s talinum_drought -a metabolomics
```

---


## Your ARC is ready

![bg 80% right:75%](./../../../img/demo_data_screenshot.png)
![bg 80%](./../../../img/demo_arc_screenshot.png)

---


## Your ARC is ready

<style scoped>

section p br {
   display: block;
   margin-top: 20px;
   content: "";
}
</style>

👩‍💻 Initiated an ARC
<br>
📂 Structured and ...  
<br>
<img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/master/icons/Swate/Excel/Core/swate_c_40x40.png'/> ... annotated experimental data
<br>
🌐 Shared with collaborators

![bg right width:400](./../../../img/demo_arc_screenshot.png)


<!-- ## Outlook

1. Data analysis: add workflows and runs (scripts + external data)
2. Iterative and reproducible data analysis: add runs (CWL)
3. Publish your ARC and get a DOI -->

<!-- Source to slide(s) -->
<!-- ../../../units/promotion_arc-demo/promotion_arc-demo.md -->


---

# Resources

### <img align="left" height=35px src='../img/CEPLAS_Icon.jpeg'/> CEPLAS Data Science

> Website: https://www.ceplas.eu/en/research/data-science-and-data-management/

### <img align="left" height=35px src='https://raw.githubusercontent.com/nfdi4plants/Branding/7e7d442aafeaa767b9c14a63a16e459dadcbdaaf/logos/DataPLANT/DataPLANT_logo_minimal_rounded_bg_darkblue.svg'/> DataPLANT (nfdi4plants)

> Website: https://nfdi4plants.org/
> Knowledge Base: https://nfdi4plants.org/nfdi4plants.knowledgebase/ 
> DataHUB: https://git.nfdi4plants.org
> GitHub: https://github.com/nfdi4plants

<!-- Source to slide(s) -->
<!-- ../custom/bricks/links-resources.md -->


---

# Acknowledgements

<style scoped>
section {
  font-size: 22px;  
}
ul {
    margin: 10; padding: 0;
}
</style>

**CEPLAS**

Björn Usadel, Andrea Schrader, Hajira Jabeen (until 2021)

**DataPLANT**

Kaiserslautern: Timo Mühlhaus, Christoph Garth
- Kevin Frey, Lukas Weil, Oliver Maus, Kevin Schneider  
(`ARC Commander`, `Swate`)
- Martin Kuhl (`Knowledge Base`)
- Jonas Lukasczyk (`ARCitect`)

Freiburg: Dirk von Suchodeletz
- Jonathan Bauer, Marcel Tschöpe (`DataHUB`, `Swobup`)
- Cristina Martins Rodrigues (`Knowledge Base`)

![bg right:40% w:550](./../custom/img/hackathon_group.png)

<!-- Source to slide(s) -->
<!-- ../custom/bricks/acknowledgements.md -->


---


---

## Contributors 

Slides presented here include contributions by 

- Dominik Brilhaus | [GitHub](https://github.com/brilator) | [ORCID](https://orcid.org/0000-0001-9021-3197)
- Cristina Martins Rodrigues  | [GitHub](https://github.com/CMR248) | [ORCID](https://orcid.org/0000-0002-4849-1537)
- Martin Kuhl  | [GitHub](https://github.com/Martin-Kuhl) | [ORCID](https://orcid.org/0000-0002-8493-1077)
