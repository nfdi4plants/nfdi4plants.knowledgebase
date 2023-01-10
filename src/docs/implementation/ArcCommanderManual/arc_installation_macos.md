---
layout: docs
title: "Installing the ARC Commander - MacOS"
published: 2022-12-20
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

1. Open a Terminal (Applications -> Utilities -> Terminal)
2. Copy/paste the following commands into your terminal and execute them to (a) download the latest ARC Commander release, (b) change permissions to make the ARC Commander executable and (c) move the ARC Commander program to a location from where it is executable via the terminal:

    ```bash
    wget https://github.com/nfdi4plants/arcCommander/releases/download/v0.4.0-osx.x64/arc
    chmod a+x ./arc
    mv ./arc /usr/local/bin/
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
> v0.4.0
> Done processing command.  

> :bulb: A global config file will be created the first time you use the ARC Commander in the folder `~/.config/DataPLANT/ArcCommander/`
