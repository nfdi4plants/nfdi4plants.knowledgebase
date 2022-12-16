---
layout: docs
title: Frequently Asked Questions
published: 2022-12-14
add toc: true 
add support: true 
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo: 
1. Search for existing Questions (CMR)
2. Provide answers (CMR)
3. Include links to corresponding KB article (CMR)
4. Open FAQ-section to public (CMR)
---


## General

**Q:**  

**A:**  

## Annotated Research Context

**Q:**  Should the metadata annotation be made in the same document in which the dataset resides? 

**A:**  

## ARC Commander

**Q:**  Is it possible to use common Excel functionalities?


**A:**  Yes! In fact, this is one of the reasons why we decided to embed Swate within Excel, as it allows users to continue using the Excel functionality they are accustomed to. 

**Q:**  Do Excel files need to be closed before entering a new command in the terminal?

**A:**

**Q:**  Which aspects have to be taken into account when giving a title or an identifier?

**A:**

**Q:** How to retrieve a valid access token? - #163

**A:** English version of Arc Commander - Authentication Step Fix - detailed version #157
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

## Swate

**Q:**  Is it possible to use common Excel functionalities?


**A:**  Yes! In fact, this is one of the reasons why we decided to embed Swate within Excel, as it allows users to continue using the Excel functionality they are accustomed to. 

**Q:**  Do I have to fill in all columns when using a template?

**A:**  

**Q:**  Which format must be used to enter a date?

**A:**  String formatted as ISO8601 date
YYYY-MM-DD

ISA-Spec

**Q:**  Is it necessary to fill in the empty fields in the investigation-file manually? 

**A:** Eigentlich muss man da gar nichts amchen, aber wenn man will kann man, aber generell gilt: Was nicht passt, einfach frei lassen

**Q:**  How to separate multiple entries per row? 

**A:**  

## DataHUB

**Q:**  


**A:**  

## DataPLAN

**Q:**  


**A:**  

