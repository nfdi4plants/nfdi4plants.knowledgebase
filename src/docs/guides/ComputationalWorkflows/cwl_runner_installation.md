---
layout: docs
title: "CWL runner installation"
date: 2024-01-18
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

# CWL runner installation

The recommended CWL runner is [cwltool](https://github.com/common-workflow-language/cwltool), the 
reference implementation for the CWL standards.

## Installation Windows

The installation can be done following the guide [here](https://cwltool.readthedocs.io/en/latest/#ms-windows-users).

 - Install Windows Subsystem for Linux from the Microsoft Store
 
 ![WSL](./../../img/wsl.png)
 
 - Install Debian from the Microsoft Store
 
 ![Debian](./../../img/debian.png)
 - Set Debian as your default WSL 2 distro: `wsl --set-default debian`
 - Install [Docker Desktop for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)
   - Start Docker Desktop and Navigate to Settings
   - Select "Use WSL 2 based engine" in the general tab and apply
    ![Docker WSL2](./../../img/docker_wsl2.png)
   - Select "Enable Integration with my default distro" in the resources tab under WSL Integration
    ![Docker WSL Integration](./../../img/docker_wsl_integration.png)
 - Start WSL
 - Follow the Instructions for Linux (Debian/Ubuntu)

 ## Installation Linux (Debian/Ubuntu)
 
 - Run `sudo apt-get update`
 - Install Python 3 if it is not already preinstalled `sudo apt install python3`
 - Install python virtual environment `sudo apt install python3.[your version here]-venv`
 - Create a virtual environment `python3 -m venv env` (named env here, name can vary)
 - Activate the virtual environment `source env/bin/activate`
 - Install `cwltool` with pip `pip install cwltool`

 ## cwltool usage
 
 - If you are on Windows, start the WSL
 - Activate the virtual environment `source env/bin/activate`
 - Navigate to the results destination directory
 - Run `cwltool` by specifying the CWL `Workflow` or `CommandLineTool` description file path and the (optional) inputs file path: `cwltool path/to/cwlfile.cwl path/to/jobfile.yml` (you can use relative or full paths)
