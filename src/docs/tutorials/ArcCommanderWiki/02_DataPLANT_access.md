---
layout: docs
title: "DataHUB access for ARC Commander synchronization"
published: 2022-08-05
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

In case you are not a member of DataPLANT yet, please [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

After successful registration, create and set an access token for ARC Commander synchronization using

```bash
arc remote accesstoken get -s https://git.nfdi4plants.org
```

A window within your browser will open, asking for your DataPLANT Log In. In case you are already logged in, the browser will directly display a Success message to you.

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
