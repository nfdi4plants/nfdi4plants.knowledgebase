---
layout: docs
title: Frequently Asked Questions
published: 2023-05-11
add toc: true 
add support: true 
add sidebar: _sidebars/mainSidebar.md
article_status: published
---

## General

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Is it necessary to fill in the empty fields in the investigation-file manually? 
</summary>

No. Although it is possible to fill in the workbook manually, we recommend using <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommander.html">ARC Commander</a> to add this metadata.

</details>
<br>

## Annotated Research Context

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Should the metadata annotation be made in the same document in which the dataset resides? 
</summary>
No. The metadata describing the data is annotated in a separate xlsx-file that resides in the parent folder of the data sets.
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Is it necessary to fill in the empty fields in the investigation-file manually? 
</summary>
No. Although it is possible to fill out the workbook manually, we recommend using <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommander.html">ARC Commander</a> to add this metadata.
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Where in the ARC can I store "external" data? 
</summary>

Research projects rarely start out of the blue. Rather every project builds on previous findings and published datasets.
To properly re-use and reference such a dataset, we recommend to add a `study` to your ARC. Every study by default comes with four parts: 

```
└── <StudyName>
    ├── README.md
    ├── isa.study.xlsx
    ├── protocols
    └── resources
```

- In the `resources` directory you can add the data (e.g. supplemental data files)
- In the `protocols` directory you can add notes on how you retrieved the data and from where.
- The study is registered in your ARC's `isa.investigation.xlsx`, which includes a section "STUDY PUBLICATIONS" for every study. Here, you can add publication details (author, DOI, etc.) about the external data source.

</details>


<br>

## ARC Commander

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Are there any recommendations for titles or identifiers?
</summary>
Avoid using spaces in the identifier. Use underscores and capital letters instead. There are no specific restrictions regarding the title. Although it is possible to fill in the workbook manually, we recommend using <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommander.html">ARC Commander</a> to add this metadata.
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
How to retrieve a valid access token?
</summary>
Please follow the short instructions below.  

Alternatively, please visit <a href="https://github.com/nfdi4plants/arcCommander/discussions/157English">#157 in the ARC Commander repository's discussion section</a> for detailed instructions.  
<br>
Note: This also works for "arc get"  
<br>

___TLDR:___  

- Have a GitLab account (here: <a href="https://git.nfdi4plants.org/explore">DataPLANT DataHUB</a>)  
- Generate a GitLab access token (Preferences -> Access Tokens) (with API and read/write repository)  
- Copy token string  
- Clone a GitLab repo with adjusted address (one for which you have the respective access rights):  

```BASH
git clone https://oauth2:TOKENSTRING@git.nfdi4plants.org/abc/xyz
```
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Why do I get the error `'arc' is not recognized as an internal or external command, operable program or batch file.`?
</summary>

Your machine cannot find your ARC commander executable. Possible reasons are that you have not yet installed the ARC commander or that the `arc` executable was not added to your path. 

Please carefully retry the [ARC Commander setup](./../ArcCommanderManual/index-setup.html). 

If this does not do the trick, please follow these steps towards debugging (on Windows): 

1. Open the command prompt (cmd) or powershell in the folder (e.g. `C:\Programs\ArcCommander`) where you stored the ARC Commander program (e.g. arc.exe). If `arc --version` shows the version, the executable is intact. 
2. Next, execute `path` to check wether the folder (e.g. `C:\Programs\ArcCommander`) appears in your path.
3. Adapt the user's path (not admin)
   
:bulb: If you do not have admin rights on the computer, please open the settings "Edit environment variables for your account" and follow steps described in the [ARC Commander setup](./../ArcCommanderManual/index-setup.html).


</details>



<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Why do I get the error `ERROR: GIT: fatal: detected dubious ownership`?
</summary>
Possible reasons:

- You tried to work on an ARC that belongs to another person, e.g. another user account on the same computer or in the same file share - or vice versa.
- This issues might occur when working on a network drive (Fileshare, File Server, NAS) that has been mounted by another user account.

:bulb: We need more info to learn what causes this issue. Please let us know, if you run into that error! 
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Syncing my ARC to the DataHUB takes forever or gets stuck. What can I do?
</summary>
This is likely due to handling a big volume of data. 

Solution: Increase git's http post buffer

Execute the following command in your command line:

```
git config --global http.postBuffer 524288000
```

- 500 MB: 524288000
- 1 GB: 1048576000
- 2 GB: 2097152000

source: https://stackoverflow.com/questions/6887228/git-hangs-while-writing-objects
</details>


<br>

## Swate

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Is it possible to use common Excel functionalities?
</summary>
Yes. In fact, this is one of the reasons why we decided to embed Swate within Excel, as it allows users to continue using the Excel functionality they are accustomed to.
</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Do I have to fill in all columns when using a template?
</summary>
No. However, if you want to submit your data to a <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/fundamentals/PublicDataRepositories.html">public data repository</a>, these will require specific metadata. For this purpose we provide the corresponding templates helping you to annotate your data accordingly.
</details>
<br>

## ISA

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Which format must be used to enter a date?
</summary>
String formatted as ISO8601 date: YYYY-MM-DD
</details>
<br>
<!--
## ARCitect

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Question
</summary>
Answer
</details>

## DataHUB

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Question
</summary>
Answer
</details>

## DataPLAN

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Question
</summary>
Answer
</details>

<!--Other Design-version

**Q:**  Which format must be used to enter a date?

**A:**  String formatted as ISO8601 date: YYYY-MM-DD-->

Already got an answer to a question or figured out the answer yourself? Please let others benefit from it by adding your suggestion [here](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/issues/new?assignees=CMR248&labels=FAQ&projects=&template=contribution-to-the-faq-section.md&title=%5BFAQ%5D).
