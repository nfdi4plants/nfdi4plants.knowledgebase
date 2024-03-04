---
layout: docs
title: ARC Commander QuickStart
author:
- name: Martin Kuhl
  github: https://github.com/Martin-Kuhl
  orcid: https://orcid.org/0000-0002-8493-1077
add toc: true
add sidebar: _sidebars/mainSidebar.md
status: published
date: 2023-06-09
---

## About this guide

In this guide we focus on how to use the [ARC Commander](./../implementation/ArcCommander.html) to create your ARC and structure, store and share your data.

<a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
</a>

<br>
<br>

## Before we can start

:ballot_box_with_check: Please [install ARC Commander](./../ArcCommanderManual/index-setup.html)  
:ballot_box_with_check: Find <a href="./tutorial_TheCommandLine.html" target="_blank">the command line</a> on your system  
:bulb: Consider reading about [ARC](./../implementation/AnnotatedResearchContext.html) and the [ARC Commander](./../implementation/ArcCommander.html)  
:bulb: After concluding this quickstart, consider exploring the [ARC Commander manual](./../ArcCommanderManual/index.html) for a more detailed usage instruction.

## ARC initialization

1. Create and navigate to a local folder, which you want to initialize as an ARC.

```bash
mkdir ~/Desktop/QuickStart
cd ~/Desktop/QuickStart
```

2. Initialize your ARC by executing

```bash
arc init
```

3. This will create the general ARC folder structure:

![arc init](./../img/arcCommander_init.png)

<div style="page-break-after: always;"></div>

## Adding metadata

### ISA investigation

The ISA investigation (`-i`) workbook allows you to record administrative metadata of your project. Add the isa.investigation.xlsx workbook including an identifier to your ARC with

```bash
arc investigation create -i QuickStartInvestigation
```
> :bulb: Avoid using spaces in the identifier. Use underscores and capital letters instead.

### ISA studies and assays

The ISA study (`-s`) and ISA assay (`-a`) workbooks allow you to annotate your experimental data.

1. Add an isa.study.xlsx workbook including an identifier to your ARC with

```bash
arc study add -s QuickStartStudy
```
  
2. Add an isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc assay add -s QuickStartStudy -a QuickStartAssay
```

> :bulb: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.

- The ARC Commander will add a subdirectories to the *studies* and *assays* folder. Your ARC should
    look similar to this now:  

![subdirectories](./../img/arc_studies_assays.jpg)

- These steps can be repeated to add as many studies and assays as needed. Accordingly, more subdirectories will be added. Multiple assays can be grouped in a study when the same StudyIdentifier is used.

3. Place the data for each assay in the respective dataset folder.

<div style="page-break-after: always;"></div>

## Sharing your ARC

### DataPLANT registration and access

In case you are not a member of DataPLANT yet, please visit [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

![](./../img/dataplant_registration.png)

After successful registration, setup your machine for smooth ARC synchronization using the ARC Commander

1. Allow git to store credentials on your machine.

    ***Windows***  
    ```bash
    git config --global credential.helper cache
    ```

    or  
    ```bash
    git config --global credential.helper store
    ```

    ***MacOS***  
    ```bash
    git config --global credential.helper osxkeychain
    ```

    ***Linux***  
    ```bash
    git config --global credential.helper store
    ```

2. Create and set an access token
    ```bash
    arc remote accesstoken get -s https://git.nfdi4plants.org
    ```

A window within your browser will open, asking for your DataPLANT Log In. In case you are already logged in, the browser will directly display a Success message to you:

![](./../img/arcCommander_AccessToken.png)

### ARC synchronization

1. Synchronize your ARCs with the DataHUB using the command

```bash
arc sync 
```

2. If you did not connect your local ARC with a remote one so far, you can specify the remote address with the flag `-r` followed by an URL, e.g.,

```bash
arc sync -r https://git.nfdi4plants.org/<YourUserName>/<YourARC>
```

3. In case you want to create a new remote repository at this URL, it needs to be assembled as the following example: 
```bash
# https://git.nfdi4plants.org/<YourUserName>/<YourARC>
```

4. If no repository exists under the given URL, the ARC Commander will produce an error ensuring that you spelled the URL correctly. To force synchronization, use 

```bash
arc sync -f
```

![](./../img/arcCommander_syncForce.png)

5. Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![](./../img/datahub_repository.png)

>Note: Alternatively, you can first create a new blank repository in the [DataHUB](https://git.nfdi4plants.org) by clicking "New project/repository" in the plus drop down menu of the navigation bar on top. Afterwards, you can sync your local ARC to the respective repository by adapting the URL to the newly generated one. 

### Setting a git user

Some users might want to use different signatures for different repositories, e.g. for developing software on GitHub and working on ARCs on [DataPLANT's DataHUB](https://git.nfdi4plants.org). Besides your global git configuration, you can store the information you want to use for editing ARCs within the ARC Commander config:

```bash
arc config set -g -n "general.gitname" -v "Name of choice"
arc config set -g -n "general.gitemail" -v "Email of choice"
```
To transfer the information from the global ARC Commander config to the local git config of the ARC use

```bash
arc config setgituser
```

### Invite collaborators

You can invite lab-colleagues or project partners to join your ARC for collaboration. While inside your ARC on the DataHUB, click on *Project information -\> Members* in the left navigation panel. Search for registered researchers and select a role for each individually. These roles come along with different rights.  
Briefly:

- *Guests:* Have the least rights. They will not be able to see the content of your ARC (only the wiki page).
- *Reporters*: Have read access to your ARC. This is recommended for people you ask for consultancy.
- *Developers:* The choice for most people you want to invite to your ARC. Developers have read and write access, but cannot maintain the project on the DataHUB, e.g. inviting others.  
- *Maintainers:* Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

![](./../img/datahub_members.png)

> :bulb: After concluding this quickstart, you might want to explore the [ARC Commander manual](./../ArcCommanderManual/index.html) for a more detailed usage instruction.


<!-- kb-Implementation -->
[kb-ARC_Commander-Manual-Installation]: ./../ArcCommanderManual/arc_installation.html "ARC Commander Installation"