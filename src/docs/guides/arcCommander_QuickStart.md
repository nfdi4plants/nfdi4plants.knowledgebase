---
layout: docs
title: ARC Commander QuickStart
published: 2022-08-05
author: Martin Kuhl
author_github: martin-kuhl
add toc: true
add sidebar: _sidebars/mainSidebar.md
article_status: published
todo:
---

<br>

<a href="./index.html">
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">User</span><span style="background-color: #B4CE82;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Newbie</span>
    <span style="color: #2D3E50; padding: 4px 8px;text-align: center; border-radius: 10px 0px 0px 10px; border: solid 1px;">Mode</span><span style="background-color: #2D3E50;color:white; padding: 4px 8px;text-align: center; border-radius: 0px 10px 10px 0px; border: solid 1px #2D3E50">Tutorial</span>
</a>

## About

In this guide we focus on how to use the [ARC Commander](./../implementation/ArcCommander.html) to create your ARC and structure, store and share your data.

## Before we can start

:ballot_box_with_check: Please [install ARC Commander](./../ArcCommanderManual/arc_installation.html)  
:bulb: Consider reading about [ARC](./../implementation/AnnotatedResearchContext.html) and the [ARC Commander](./../implementation/ArcCommander.html)

<!-- 
## Environment and setup

### The command line

- Most of this Quickstart (especially the section [ARC initialization](#arc-initialization)) is based on the command line (Windows: powershell; Linux and Mac: terminal).
- The following picture shows exemplarily how to open a powershell on windows by entering *powershell* into the explorer path:  

![Windows Powershell](../img/windows_powershell.png)

- Text formatted as code blocks represents commands to copy/paste into the command line:

```bash
echo "hello - I am a code block"
```

### Required software

- [ ] Prerequisites for using the ARC Commander are [git](https://git-scm.com/downloads) and [git LFS](https://git-lfs.github.com/)

> :bulb: If this is your first time using git on this computer, you need to set your git user name and email address. These are needed for displaying them on the git commits. You can update the settings with

  ```bash
  git config --global user.name <your_name>
  git config --global user.email <your_email>
  ```

> You can check the configuration with

```bash
git config --global --get-regexp user
```

- [ ] Please download the latest version of the [ARC Commander](https://github.com/nfdi4plants/arcCommander/releases) for your operating system and install it according to [these instructions][kb-ARC_Commander-Manual-Installation].

- Check if the ARC Commander is functional by displaying the ARC commander version and help menu:

```bash
arc --version
arc --help
```

![ARC Commander help menu](../img/arcCommander_help.png)

<div style="page-break-after: always;"></div> -->

## ARC initialization

1. Create and navigate to a local folder, which you want to initialize as an ARC.

```bash
mkdir ~/Desktop/QuickStart; 
cd ~/Desktop/QuickStart
```

2. Initialize your ARC by executing

```bash
arc init
```

3. This will create the general ARC folder structure:

![arc init](../img/arcCommander_init.png)

<div style="page-break-after: always;"></div>

## Adding metadata

### ISA investigation

The ISA investigation (`-i`) workbook allows you to record administrative metadata of your project. Add the isa.investigation.xlsx workbook including an identifier to your ARC with

```bash
arc i create -i QuickStartInvestigation
```
> :bulb: Avoid using spaces in the identifier. Use underscores and capital letters instead.

### ISA studies and assays

The ISA study (`-s`) and ISA assay (`-a`) workbooks allow you to annotate your experimental data.

1. Add an isa.study.xlsx workbook including an identifier to your ARC with

```bash
arc s add -s QuickStartStudy
```
  
2. Add an isa.assay.xlsx workbook including an identifier to your ARC with

```bash
arc a add -s QuickStartStudy -a QuickStartAssay
```

> :bulb: An assay must be linked to a study. If a study does not exist, it will be created automatically in this step.

- The ARC Commander will add a subdirectories to the *studies* and *assays* folder. Your ARC should
    look similar to this now:  

![subdirectories](../img/arc_studies_assays.jpg)

- These steps can be repeated to add as many studies and assays as needed. Accordingly, more subdirectories will be added. Multiple assays can be grouped in a study when the same StudyIdentifier is used.

3. Place the data for each assay in the respective dataset folder.

<div style="page-break-after: always;"></div>

## Sharing your ARC

### DataPLANT registration and access

In case you are not a member of DataPLANT yet, please visit [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

![](../img/dataplant_registration.png)

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

![](../img/arcCommander_AccessToken.png)

### ARC synchronization

1. Synchronize your ARCs with the DataHUB using the command

```bash
arc sync 
```

2. If you did not connect your local ARC with a remote one so far, you can specify the remote address with the flag `-r` followed by an URL, e.g.,

```bash
arc sync -r https://git.nfdi4plants.org/martinkuhl/QuickStart
```

3. In case you want to create a new remote repository at this URL, it needs to be assembled as the following example: 
```bash
# https://git.nfdi4plants.org/<YourUserName>/<YourARC>
```

4. If no repository exists under the given URL, the ARC Commander will produce an error ensuring that you spelled the URL correctly. To force synchronization, use 

```bash
arc sync -f
```

![](../img/arcCommander_syncForce.png)

5. Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![](../img/datahub_repository.png)

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

- *Guests:* Have the least rights. This is recommended for people you ask for consultancy.
- *Developers:* The choice for most people you want to invite to your ARC. Developers have read and write access, but cannot maintain the project on the DataHUB, e.g. inviting others.  
- *Maintainers:* Gives the person the same rights as you have (except of removing you from your own project). This is recommended for inviting PIs or group leaders allowing them to add their group members for data upload or analysis to the project as well.

![](../img/datahub_members.png)

> :bulb: A detailed usage instruction for the ARC Commander can be found [here](./ArcCommanderManual/index.html).


<!-- kb-Implementation -->
[kb-ARC_Commander-Manual-Installation]: ./../ArcCommanderManual/arc_installation.html "ARC Commander Installation"