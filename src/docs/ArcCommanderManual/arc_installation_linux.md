---
layout: docs
title: "Installing the ARC Commander - Linux"
date: 2024-01-25
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

1. Download the latest ARC Commander release

```bash
wget https://github.com/nfdi4plants/ARCCommander/releases/download/v1.0.0/arc_linux-x64
```

2. Make it executable

```bash
chmod u+x arc_linux-x64
```

3. Move to suitable place (e.g. in your home directory or to `/home/bin/` to make it accessible for all users)

```bash
if ! [ -d "$HOME/bin" ]; then mkdir "$HOME/bin"; fi # If it does not exist, create a folder `bin` in your home directory. 
mv arc_linux-x64 $HOME/bin/arc # move executable to that folder
```

4. You might have to start a fresh terminal or `source ~/.profile`

5. Test that ARC Commander is properly installed

```bash
arc --version
```

You should see the following or similar message:

> Start processing parameterless command.  
> Start Arc Version  
> v1.0.0
> Done processing command.  

> :bulb: A global config file will be created the first time you use the ARC Commander at `~/.config/DataPLANT/ArcCommander/ArcCommander.config`
