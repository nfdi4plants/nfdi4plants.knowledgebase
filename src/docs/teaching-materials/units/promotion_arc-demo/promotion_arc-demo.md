---
marp: true
theme: dataplant_marp-theme
paginate: true
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="./../../../img/logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="./../../../img/logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="./../../../img/logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: "First steps towards your ARC"
author: 
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
date: 2023-02-02
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


![w:650](./../../../img/ARC_DataSharing_Experts02_img1.png)


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
