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

> :white_check_mark: In case you are not a member of DataPLANT yet, please [sign up](<https://register.nfdi4plants.org>). Afterwards, you will be granted access to DataPLANT’s [DataHUB](<https://git.nfdi4plants.org>). The DataHUB allows you to share your ARCs with registered lab or project partners.

## ARC Commander authentication

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

> :bulb: This authenticates your machine to communicate with your personal DataHUB account  

> :bulb: This step needs to be done only once per machine, unless you delete the token from your DataHUB account.

A window within your browser will open, asking for your DataPLANT login. In case you are already logged in, the browser will directly display a plain `Success` message to you.

<!-- TODO
Andrea: I suggest to directly add a linnk to the trouble shooting for authentication problems...
In case an authentification error occured please follow these instructions for the authentification step. (link to the FAQ for the access TOKEN)
 -->