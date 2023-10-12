---
layout: docs
title: ARCitect Installation - macOS
date: 2023-09-22
author:
- name: Dominik Brilhaus
  orcid: https://orcid.org/0000-0001-9021-3197
  github: brilator
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

:bulb: Updated for ARCitect v0.0.8 and higher :bulb:
1. You do not need to have ARC Commander installed

:fire: Note, that the current .dmg releases are not stable on all macOS systems. 

🚧 The ARCitect is currently being developed and not fully user-ready, yet. Installation for beta-testing requires an admin account.

## Prerequisites

### Install Node.js

Please install the latest version of [Node.js](https://nodejs.org/en/download).

1. Download the installer for your operating system (e.g. macOS Installer)
2. Once downloaded, open the `node-x.x.x.pkg` from your downloads folder and follow the "Install Node.js" instructions.

### Install Git

Please [install](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/arc_installation_dependencies.html) and [configure](https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/ArcCommanderManual/git_config.html) Git and Git LFS before using the ARCitect. 

## Install the ARCitect

1. Head to the ARCitect's GitHub [release page](https://github.com/nfdi4plants/ARCitect/releases/latest). 
2. Under "Assets" download the latest source code archive (`Source code (zip)`).
3. In Finder, open the folder where you downloaded the ARCitect
4. Unzip the folder (`ARCitect-x.x.x.zip`). You can move this folder to another location (e.g. `Applications`).

5. Open the folder in a terminal (right click -> services -> `New Terminal at Folder`)

<img src="./../img/arcitect-macos-terminal.png" style="width:70%;display: block; margin: 20px">

1. In the terminal, check that node.js is installed by executing 

```bash
node -v
```

:bulb: This should display your installed version of node.js, e.g.
> v18.17.0

7. In the terminal, execute the following command to **install** the ARCitect

```bash
npm install
```

:bulb: This may take some seconds to minutes depending on your internet connection.

## Start the ARCitect

1. In the terminal, execute the following command to **start** the ARCitect

```bash
npm run debug
```

<img src="./../img/arcitect-macos-incomingConnections.png" style="width:40%;display: block; margin: 20px">


:bulb: A window will pop-up asking whether you want to accept incoming network connections. This needs to be allowed for communication with the [DataHUB](./../implementation/DataHub.html).

1. You can leave the terminal running in the background. Once you close the terminal, the ARCitect quits.

2. Switch to the ARCitect app.

:bulb: You might have to select the app from your dock.
