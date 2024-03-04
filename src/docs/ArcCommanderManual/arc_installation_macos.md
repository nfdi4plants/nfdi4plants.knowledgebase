---
layout: docs
title: "Installing the ARC Commander - MacOS"
date: 2024-01-25
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

1. Open a Terminal (Applications -> Utilities -> Terminal)

2. Copy/paste the following commands into your terminal and execute them to (a) download the latest ARC Commander release, (b) change permissions to make the ARC Commander executable and (c) move the ARC Commander program to a location from where it is executable via the terminal:

For AMD / x86 processors

```bash
curl -LO https://github.com/nfdi4plants/ARCCommander/releases/download/v1.0.0/arc_osx-x64
chmod a+x ./arc_osx-x64
mv ./arc_osx-x64 /usr/local/bin/arc
```

For ARM processors

```bash
curl -LO https://github.com/nfdi4plants/ARCCommander/releases/download/v1.0.0/arc_osx-arm64
chmod a+x ./arc_osx-arm64
mv ./arc_osx-arm64 /usr/local/bin/arc
```

> :warning: By moving the ARC commander binary to `/usr/local/bin/` it also becomes available to other users on your machine.

3. Run ARC Commander from the terminal by executing:

```bash
arc
```

4. MacOS security note: On first execution, MacOS will not allow arc to be run. Instead it opens a pop-up:

> "arc" cannot be opened because it is from an unidentified developer

5. Open the Security Panel in system Preferences (Applications -> System Preferences -> "Security & Privacy") or by executing the following command in your terminal:

```bash
open "x-apple.systempreferences:com.apple.preference.security"
```

In the "General" tab click the bottom-right button "Allow Anyway" right next to
> arc was blocked from use because it is not from an identified developer.

6. Head back to the terminal and execute `arc` again. Another pop-up will ask you to confirm by clicking "Open".

7. Check that arc is properly installed by executing

```bash
arc --version
```

You should see the following or similar message:

> Start processing parameterless command.  
> Start Arc Version  
> v1.0.0  
> Done processing command.  

> :bulb: A global config file will be created the first time you use the ARC Commander at `~/.config/DataPLANT/ArcCommander/ArcCommander.config`
