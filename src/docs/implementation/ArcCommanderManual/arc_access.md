---
layout: docs
title: "DataHUB access for ARC synchronization"
published: 2022-12-20
author: Martin Kuhl
author_github: martin-kuhl
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

In case you are not a member of DataPLANT yet, please [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

## ARC Commander authentication

Create and set an access token for ARC Commander synchronization using

After successful registration, create and set an access token for ARC Commander synchronization using

```bash
arc remote accesstoken get -s https://git.nfdi4plants.org
```

> This authenticates your machine to communicate with your personal DataHUB account  
> This step needs to be done only once per machine, unless you delete the token from your DataHUB account.

A window within your browser will open, asking for your DataPLANT Log In. In case you are already logged in, the browser will directly display a Success message to you.
