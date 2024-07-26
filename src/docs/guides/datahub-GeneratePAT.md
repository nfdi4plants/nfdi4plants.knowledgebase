---
title: Generate a Personal Access Token (PAT)
layout: docs
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
license: '[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)'
date: 2023-07-07
add toc: true 
add sidebar: _sidebars/mainSidebar.md
---


## About this guide

This guide shows you how to generate a Personal Access Token (PAT). The PAT can be used to authenticate your local machine to communicate with your DataHUB account. 

:bulb: You need to do this only once per machine (unless you specify an expiration date)

<div style="padding-bottom: 20px">
    <a href="./index.html">
    <span class="badge-category">User</span><span class="badge-selected" id="badge-newbie">Newbie</span>
    <span class="badge-category">Mode</span><span class="badge-selected" id="badge-tutorial">Tutorial</span>
    </a>
</div>





1. Sign in to the [DataHUB](https://git.nfdi4plants.org/)
2. Go to the [Access Tokens](https://git.nfdi4plants.org/-/profile/personal_access_tokens) settings
3. Fill all required information:
   - Token name: e.g. the name of the machine to be linked ("Office PC") (1)
   - Expiration date (optional) (2)
   - Select a scope: e.g. `api` (3)
4. Click "Create personal access token" (4)

<img src="./../img/datahub-accessToken01.drawio.svg" style="width:100%;display: block;margin: 30px auto;">


5. `Your new personal access token` appears on top. Copy (1) it somewhere **safe** for later use.

<img src="./../img/datahub-accessToken02.drawio.svg" style="width:100%;display: block;margin: 30px auto;">

