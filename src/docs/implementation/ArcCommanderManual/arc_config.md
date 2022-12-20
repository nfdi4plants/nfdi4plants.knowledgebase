---
layout: docs
title: "ARC User configuration"
published: 2022-12-20
add toc: true
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

## Setting a git user

`git` always signs commits made with a `name` and `e-mail` address of the user. These are then also used by `GitLab` and `GitHub` to assign the commits to user accounts. There are different ways to set this information.

### Globally in git

The easiest way would be to do it directly globally using git:

- `git config --global user.name "FIRST_NAME LAST_NAME"`

- `git config --global user.email "MY_NAME@example.com"`

<!-- ### 

You have the option to set this information globally, but you can also use different signatures for different repositories. E.g., when you develop software on `GitHub` and work on `ARCs` on the `nfdi4plants GitLab`.

For this case the `ArcCommander` has a set of features to ease your pain.

1. First set the information you want to use `globally` in the `ARC Commander config`: 
   - Either using `arc config edit -g` and adding the following fields: 
      - general.gitname="Full Name of User"
      - general.gitemail="Email of user"
   - or adding them directly in the cli:
      - `arc config set -g -n "general.gitname" -v "Full Name of User"`
      - `arc config set -g -n "general.gitemail" -v "Email of user"`
2. Afterwards, just use `arc config setgituser` for each ARC you download or create. -->

## Setting a git user locally for each ARC

Some users might want to use different signatures for different repositories, e.g., developing software on GitHub and working on ARCs on [the DataHUB](https://git.nfdi4plants.org). Besides your global git configuration, you can store the information you want to use for editing ARCs within the ARC Commander config:

```bash
arc config set -g -n "general.gitname" -v "Name of choice"
arc config set -g -n "general.gitemail" -v "Email of choice"
```

To transfer the information from the global ARC Commander config to the local git config of the ARC use

```bash
arc config setgituser
```

This will automatically transfer the info stored globally in the ArcCommander config to the local git config of the ARC.
