---
layout: docs
title: "Configure a Git User"
date: 2022-12-20
add toc: false
add support: false
add sidebar: _sidebars/mainSidebar.md
---

`Git` always signs commits with a `name` and `e-mail` address of the user. These are then also used by `GitLab` and `GitHub` to associate the commits to user accounts.

## Checkpoint

Check the git user configuration on your system, by executing

```bash
git config --global --get-regexp user
```

This should prompt two lines:  
`user.name <Your Name>`  
`user.email <Your Email>`

If this does not prompt anything or if you want to change the configuration, follow the next steps. 

## Global Git Configuration

Set the git configuration globally (for your system):

1. Your name

```bash
git config --global user.name <Your Name>
```

2. Your email address

```bash
git config --global user.email <Your Email>
```

3. Check it

```bash
git config --global --get-regexp user
```

> :bulb: Configuration needs to be done only once after installation of git on your system.
