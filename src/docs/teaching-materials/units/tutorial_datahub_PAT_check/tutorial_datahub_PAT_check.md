---
# Slide-related yaml
marp: true
theme: dataplant_marp-theme
paginate: true
headingDivider: 
  - 1
  - 2
footer: '<a href="https://nfdi4plants.org"> <img id="footer-img1" src="../../images/_logos/DataPLANT/DataPLANT_logo_square_bg_transparent.svg"></a> <a href="https://creativecommons.org/licenses/by/4.0/"><img id="footer-img2" src="../../images/_logos/CreativeCommons/by.svg"> </a>'
style: 'footer {height: 30px; padding: 10px; bottom: 00px;} #footer-img1 {height: 30px; padding-left: 0px;} #footer-img2 {height: 20px; padding-left: 20px; opacity: 0.5;}'
# Training yaml
layout: slides
author: Dominik Brilhaus
author_orcid: https://orcid.org/0000-0001-9021-3197
author_github: brilator
license: "[CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/)"
date: 2023-03-16
---

# Check or erase DataHUB Personal Access Token (PAT)

- This checks wether your local machine is authenticated to communicate with your DataHUB account
- If needed, you can erase the PAT from your local machine 
> Note this tutorial is currently Mac / OsX specific

<!-- TODO add options for windows and linux -->


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_check-title.md -->
<!-- ################# -->


# Get your access token

> The following steps have to be done one after another (hit return &#8629; after each step)

1. `git credential-osxkeychain get` &#8629;
2. `host=git.nfdi4plants.org`  &#8629;
3. `protocol=https` &#8629;


<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_check-Get_your_access_token.md -->
<!-- ################# -->


# Erase your access token

> The following steps have to be done one after another (hit return &#8629; after each step)

1. `git credential-osxkeychain erase` &#8629;
2. `host=git.nfdi4plants.org`  &#8629;
3. `protocol=https` &#8629;

<!-- ################# -->
<!-- Source to slide(s) -->
<!-- ../../bricks/tutorial_datahub_PAT_check-Erase_your_access_token.md -->
<!-- ################# -->

