---
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider:
- 1
- 2
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../../../img/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://ceplas.eu"> <img id="footer-img2" src="../../../../img/_logos/CEPLAS/CEPLAS_Icon.jpeg"></a><a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img3" src="../../../../img/_logos/CreativeCommons/by.svg"></a>'
style: 'footer {height: 30px;padding: 10px;bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 30px; padding-left: 20px;opacity: 0.5;}  #footer-img3 {height: 20px;padding-left: 20px; opacity: 0.5;}'
title: Start-Your-ARC Workshop Series - Session 01
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
---

# Start Your ARC Workshop Series

<!-- Title slide to class -->

<!-- _color: white -->
<!-- _paginate: false -->
<!-- _footer: "" -->

![bg fit](../custom/img/background_title_ceplas.drawio.svg)

Session 02 - Build your ARC
May 31st, 2023

<br>

Dominik Brilhaus - CEPLAS Data Science

# Goals 

- Create your first ARC
- Add data to your ARC
- Share the ARC with another participant

# Legend

💻 = Locally (on your machine)

🌐 = Remote (in the DataHUB)  

Info in `<brackets>` are placeholders.


# Part 0: Tech Check

## Installation

Open a terminal and one after the other execute

```bash
git --version
```

```bash
git-lfs --version
```

```bash
arc --version
```

:bulb: If you see a warning at any of these, let me know.

## Config

```bash
git config --global --get-regexp user
```

:bulb: If this does not display your user name and email, you need to [configure git](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/implementation/ArcCommanderManual/git_config.html).


## DataHUB Login

https://git.nfdi4plants.org/ceplas/start-your-arc/-/blob/main/README.md

:bulb: If your user name is not on this list, please tell me.

## Create a fresh folder for your ARCs

For this workshop, create a new folder somewhere on your machine where you want to store ARCs, e.g. on the desktop:

- `C:\Users\<username>\Desktop\workshop-arcs` (windows)
- `~/Desktop/workshop-arcs` (mac)


# Part 1: Create and sync a first ARC

# Your fresh ARC folder

1. Create and navigate to a local folder, which you want to initialize as an ARC.
2. Open the command line inside the folder / Navigate via command line to that folder.



# ARC initialization

Initialize your ARC by executing

```bash
arc init
```

# Upload your local ARC to the DataHUB

In order to connect your local ARC with a remote ARC, you can specify the remote address with the flag `-r` followed by the URL of the remote ARC

```bash
arc sync -r https://git.nfdi4plants.org/<UserName>/<ARC>
```
# Successful ARC synchronization

Check if the upload was successful by visiting your ARC at the respective URL in your browser.

![w:800](../../../../img/datahub_repository.png)

# Part 2: Tic-Tac-Toe

## Player 1 &ndash; `o`

<style scoped>
section{
  font-size: 23px;
}
ol {
  margin: 0; padding: 0;
}
</style>

1. 💻 Create a fresh ARC

`arc init`

2. 💻 Add a **README.md** with the playground:

```md
       |   | 
     --+---+--
       |   | 
     --+---+--
       |   | 
```

</div>

<div class="columns-right">

3. 💻 Sync the ARC to the DataHUB

`arc sync -r https://git.nfdi4plants.org/<Player1>/<ARC>`

4. 🌐 Invite player 2

## Player 2 &ndash; `x`

<style scoped>
section{
  font-size: 23px;
}
ol {
  margin: 0; padding: 0;
}
</style>

1. 💻 "Clone" the ARC

`arc get -r https://git.nfdi4plants.org/<Player1>/<ARC>`

2. add your `x` to the playground (**README.md**)

```md
     x |   | 
     --+---+--
       |   | 
     --+---+--
       |   | 
```

3. 💻 Sync the ARC back to the DataHUB

`arc sync -m <move Player 1>`


## Player 1 &ndash; `o`

1. 💻 "Update" the ARC

`arc sync`


2. add your `o` to the playground (**README.md**)

```md
     x |   | 
     --+---+--
       | o | 
     --+---+--
       |   | 
```

3. 💻 Sync the ARC back to the DataHUB

`arc sync -m <move Player 2>`


## Keep playing

1. `arc sync`
2. Make your move
3. `arc sync -m <move player ..>`



## Part 2: