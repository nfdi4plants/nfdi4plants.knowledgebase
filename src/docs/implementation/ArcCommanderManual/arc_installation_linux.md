---
layout: docs
title: "Installing the ARC Commander - Linux"
published: 2022-12-20
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

1. Download the latest ARC Commander release

    ```bash
    wget https://github.com/nfdi4plants/arcCommander/releases/download/v0.4.0-linux.x64/arc
    ```

1. Make it executable

    ```bash
    chmod u+x arc
    ```

1. Move to suitable place (e.g. in your home directory or to `/home/bin/` to make it accessible for all users)

    ```bash
    if ! [ -d "$HOME/bin" ]; then mkdir "$HOME/bin"; fi # If it does not exist, create a folder `bin` in your home directory. 
    mv arc $HOME/bin/ # move executable to that folder
    ```

1. You might have to start a fresh terminal or `source ~/.profile`

1. Test that ARC Commander is properly installed

    ```bash
    arc --version # check the current version 
    ```

You should see the following or similar message:

> Start processing parameterless command.  
> Start Arc Version  
> v0.4.0
> Done processing command.  

> :bulb: A global config file will be created the first time you use the ARC Commander in the folder `~/.config/DataPLANT/ArcCommander/`
