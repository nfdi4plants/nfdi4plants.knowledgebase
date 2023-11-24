---
layout: docs
title: Installation of Git and Git LFS
date: 2023-11-24
add toc: true
add support: false
add sidebar: _sidebars/mainSidebar.md
---

In order to use the ARC Commander, Git (version ≥ 2.32.0) and Git LFS must be installed on your computer.

:bulb: The ARC Commander checks for presence of Git and Git LFS and results in an error, if not installed.

## Download and install Git and Git LFS

Please install <a href="https://git-scm.com/downloads" target="_blank">Git</a> and <a href="https://git-lfs.github.com/" target="_blank">Git LFS</a>

- On Windows Git LFS may already be installed during your Git installation
- For macOS we recommend to install via homebrew as described on the site above

### Check your Git installation

To check, that Git and Git LFS are installed on your computer, open a **new** command prompt or terminal and execute the following two commands. These should display the installed version.

```bash
git --version
```

```bash
git-lfs --version
```

:bulb: Recommended Git version ≥ 2.32.0

## Configure Git

Git always signs "commits" with a user `name` and `e-mail address`. These are then also used by the DataHUB to associate the commits to your user account.

To add your user name and email address to the git configuration on your computer, run the following two commands in a command prompt or terminal. Make sure to replace "Your DataHUB Name" and "Your DataHUB Email Address" with your information from the DataHUB.

1. Your name

```bash
git config --global user.name "Your DataHUB Name"
```

2. Your email address

```bash
git config --global user.email "Your DataHUB Email Address"
```

:bulb: Configuration needs to be done only once after installation of git on your system.

### Check your Git configuration

Run this command to display your user configuration

```bash
git config --global --get-regexp user
```
