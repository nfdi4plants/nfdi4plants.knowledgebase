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
<br>

## ARC Commander

<details><summary><span style="color: #1fc2a7;font-size:1.2em">
Are there any recommendations for titles or identifiers?
</summary>
Avoid using spaces in the identifier. Use underscores and capital letters instead. There are no specific restrictions regarding the title. Although it is possible to fill in the workbook manually, we recommend using <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommander.html">ARC Commander</a> to add this metadata.
</details>
<br>
<!--<details><summary><span style="color: #1fc2a7;font-size:1.2em">
How to retrieve a valid access token? - #163
</summary>
English version of ARC Commander - Authentication Step Fix - detailed version #157
Note, this also works for "arc get"
<br>

___TLDR:___

- Have a GitLab account
- Generate a GitLab access token (Preferences -> Access Tokens) (with API and read/write repository)
- Copy token string
- Clone a GitLab repo with adjusted address (one for which you have the respective access rights): 

```BASH
git clone https://oauth2:TOKENSTRING@git.nfdi4plants.org/abc/xyz
```
<br>

___Detailed version:___

-> Go to https://git.nfdi4plants.org/explore and sign in

Prepare one project for testing:<br>
-> Menu -> Projects -> Your projects<br>
-> Create project<br>
-> Create blank project<br>
-> Select a project name, e.g. “Test"<br>
-> Visibility Level: “Private”<br>
-> remove the tick in front of README<br>
-> Create project<br>

-> In the upper right corner, next to the avatar in the dropdown menu, select “Preferences”.<br>
-> In the left menu, select “Access Tokens”.<br>
-> Select a name for the token, tick api, read_repository and write_repository.<br>
-> Create personal access token<br>

-> Copy token<br>
-> Prepare cmd command: <br>
```BASH
git clone https://oauth2:<TOKENSTRING>@git.nfdi4plants.org/abc/xyz
```
-> Replace „\<TOKENSTRING>“ with the token.<br>
-> abc is the GitHub handle (upper right corner, dropdown menu next to avatar, all parts of the string following “@“)<br>
-> xyz is the name of the project just created<br>
-> In Windows, go in the explorer in the directory in which the test repository shall be cloned (here named “project”)
enter „cmd“ and execute the command there, as an alternative, navigate in the Command Prompt to this directory.<br>

In case you want to delete the Test repo again: navigate into the project within the DataHUB, on the left hand side select settings and general
->advanced->Expand-> at the bottom: “ Delete project”.
</details>
<br>-->

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

**A:**  String formatted as ISO8601 date: YYYY-MM-DD
