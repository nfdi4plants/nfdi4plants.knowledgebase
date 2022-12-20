---
layout: docs
title: "Installation"
published: 2022-12-20
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## Installing Dependencies

An installation of [git](https://git-scm.com/downloads) and [git LFS](https://git-lfs.github.com/) is mandatory for ARC Commander usage. Whenever submitting a command that relies on a git functionality, the ARC Commander will check for presence of git and git LFS. If not installed, the respective command will result in an error. Throughout the installation setup of git, the user has the possibility to install git LFS. Git LFS can also be downloaded manually [here](https://git-lfs.github.com/).


## Installing the ARC Commander

Head to the ARC Commander's GitHub [release page](https://github.com/nfdi4plants/arcCommander/releases). Download the newest release for your operating system (OS).

Start the ARC Commander with the respective OS's command-line shell.  
A global config file will be created the first time you use the ARC Commander in the following folder:
- Windows: `<YourDriveLetter>:\Users\<Username>\AppData\Roaming\DataPLANT\ArcCommander\`
- Unix: `~/.config/DataPLANT/ArcCommander/`

We strongly recommend to read the in-depth guide to the ARC Commander manual on the following pages!

### Windows

1. In Windows Explorer, head over to the folder where you downloaded the ARC Commander, e.g.
![image](https://user-images.githubusercontent.com/47781170/118627514-13e63f00-b7cc-11eb-95cb-1bf74a355cde.png)
2. You can move the .exe to a desired folder, e.g. to your personal folder
3. Add the folder with the ARC Commander to your PATH:
    - Open the Start Menu, type in `path` and click on _Edit the system environment variables_
    ![image](https://user-images.githubusercontent.com/47781170/119674721-b8a3f480-be3c-11eb-9982-e3c0fa191f05.png)
    - Click on _Environment Variables..._, click on _Path_ and on _Edit..._ in the tab _User variables for <your username>_, click on _New_ and type in the full path to your folder as seen in the example below:
    ![image](https://user-images.githubusercontent.com/47781170/119674652-a9bd4200-be3c-11eb-81f8-72f1198842ef.png) 
    - This allows you to start the ARC Commander from any folder
    - **Please make sure that you do not have any blank spaces in your path**
4. Navigate to a folder in which you want to initialize an ARC
5. Open the Command Prompt (CMD) via typing in `cmd` in the folder address, press Enter
![image](https://user-images.githubusercontent.com/47781170/119680874-dd4e9b00-be41-11eb-8faf-ed699c827395.png)
6. Run the ARC Commander from the CMD by executing `arc`

### Linux

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

### MacOS

1. Open a Terminal (Applications -> Utilities -> Terminal)
2. Copy/paste the following commands into your terminal and execute them to (a) download the latest ARC Commander release, (b) change permissions to make the ARC Commander executable and (c) move the ARC Commander program to a location from where it is executable via the terminal:

    ```bash
    curl -L https://github.com/nfdi4plants/arcCommander/releases/download/v0.4.0-osx.x64/arc > arc
    chmod u+x ./arc
    mv ./arc /usr/local/bin/
    ```

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
