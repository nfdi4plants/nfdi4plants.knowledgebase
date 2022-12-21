---
layout: docs
title: "Git User Configuration"
published: 2022-12-20
add toc: true
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## Setting a git user

`git` always signs commits made with a `name` and `e-mail` address of the user. These are then also used by `GitLab` and `GitHub` to assign the commits to user accounts. There are different ways to set this information.

### Globally in git

The easiest way would be to do it directly globally using git:

- `git config --global user.name "FIRST_NAME LAST_NAME"`

- `git config --global user.email "MY_NAME@example.com"`
