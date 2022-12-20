---
layout: docs
title: "DataHUB access for ARC Commander synchronization"
published: 2022-08-05
author: Martin Kuhl
author_github: martin-kuhl
add toc: true
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## 2.1 DataHUB access
In case you are not a member of DataPLANT yet, please [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

After successful registration, create and set an access token for ARC Commander synchronization using

```bash
arc remote accesstoken get -s https://git.nfdi4plants.org
```

A window within your browser will open, asking for your DataPLANT Log In. In case you are already logged in, the browser will directly display a Success message to you.
