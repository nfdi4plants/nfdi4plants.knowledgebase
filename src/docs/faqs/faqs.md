---
layout: docs
title: Frequently Asked Questions
date: 2023-05-11
add toc: true 
add support: true 
add sidebar: _sidebars/mainSidebar.md
status: published
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
Where should the metadata annotation be made. In the same documents containing the data? 
</summary>

No. The metadata describing the data is collected in a separate xlsx-file &ndash; called `isa.assay.xlsx` &ndash; that resides in the parent folder of the dataset.

:bulb: For more information, check out our guides on [annotating data in your ARC](./../guides/index-AnnotateDataInYourARC.html). 
<br>
<br>
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
How often should I sync my ARC?
</summary>
We would not want to recommend a fixed time interval (once every hour / day / week) for how often you ideally sync the ARC. In general, the more you work with your ARC, the more you add or update, annotate or analyze data, the more you will want to make sure these changes are saved. Consider the syncing as a way to backup your project's progress as well as an "undo button".

:bulb: For more details, check out the [Syncing Recommendations](./../guides/arc_SyncingRecommendation.html)

</details>

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
How to retrieve a valid access token?
</summary>
<br>
Please follow the short instructions below.  

Alternatively, please visit <a href="https://github.com/nfdi4plants/arcCommander/discussions/157English">#157 in the ARC Commander repository's discussion section</a> for detailed instructions.  
<br>
Note: This also works for "arc get"  
<br>

___TLDR:___  

- Have a GitLab account (here: <a href="https://git.nfdi4plants.org/explore">DataPLANT DataHUB</a>)  
- Generate a personal GitLab access token (Preferences -> Access Tokens) (with API and read/write repository)  
- Copy token string  
- Clone a GitLab repo with adjusted address (one for which you have the respective access rights):  

```BASH
git clone https://oauth2:TOKENSTRING@git.nfdi4plants.org/abc/xyz  
```

<br>
In case you created a <i>project access token</i> instead of a <i>personal access token</i>, a <a href="https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html#bot-users-for-projects">GitLab bot</a> will join your project as a member.  
Please note that this is supportive and not a “negative” bot in case you are not familiar with this. (Thanks to <a href="https://github.com/Zerskk">@Zerskk</a> and <a href="https://github.com/j-bauer">@j-bauer</a> for providing the background knowledge on this.)  
<br>
However, for the steps above, you want to create a <b>personal access token</b>.  
<br>
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
<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Installation (Windows, manual): How and where to create a shared folder?
</summary>
Wherever you created your <b>folder-to-be-shared</b> according to <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/swate_installation_manual.html">these instructions</a>, you need to have the right to <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#share-a-folder">share a folder</a> at this particular location.  
<br>
<br>
This might not be possible at <span style="background-color: grey">'C:\folder-to-be-shared'</span> but, when you go one level down, into <span style="background-color: grey">'Users'</span>, <span style="background-color:grey">'C:\Users\folder-to-be-shared'</span> might be sharable. You can share a folder when the <span style="background-color:grey">'Sharing'</span> tab is shown next to the <span style="background-color:grey">'General'</span> tab in the properties dialog window (right click on the <b>folder-to-be-shared</b>, select 'properties').  
<br>
<br>
When you created a <b>folder-to-be-shared</b>, placed the latest manifest(s) from the zip-extracted <a href="https://github.com/nfdi4plants/Swate/blob/developer/.assets/swate-win.zip?raw=true">download</a> into it (<span style="background-color:grey">'core_manifest.xml'</span>, and optional: <span style="background-color:grey">'experts_manifest.xml'</span>), finished <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#share-a-folder">these steps</a> and continue with <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#configure-the-trust-manually">these steps</a> in Excel, you should be ready to dive into Swate. - Enjoy 🚀
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
