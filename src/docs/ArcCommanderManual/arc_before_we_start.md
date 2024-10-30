---
layout: docs
title: "Before we start"
date: 2023-06-14
add toc: true
add sidebar: _sidebars/mainSidebar.md
---

After the setup steps, you're all set and ready to start using the ARC Commander. 🎉

:bulb: We recommend trying the [quickstarts](./../guides/index-CreateYourARC.html) for your first steps with the ARC Commander. 

:bulb: After the quickstarts, we strongly recommend to read the in-depth ARC Commander Manual here. 

## Notes on ARC Commander Guides

- For most steps in this manual and in the [guides](./../guides/index-CreateYourARC.html), it is assumed, that you opened a <a href="./../guides/tutorial_TheCommandLine.html" target="_blank">shell or command prompt</a> within a directory you want to initiate as an ARC
- In the shell, `arc` defines the path to the ARC Commander executable (e.g. on Windows "C:\Users\userA\programs\ArcCommander\arc.exe").
- Note that each input that contains non-literal characters must be encapsulated in "quotation marks" when entered within the shell. This also applies when using the editor for numerals that are no numbers (dates, phone numbers, etc.).

## Different Routes to add Metadata

Using the ARC commander, most metadata information (e.g. the title or identifier of your investigation) can theoretically be entered solely by using the shell.

For instance, the following command would create an investigation with the identifier "MyInv001" and title "My Investigation 001":
```
arc investigation create --identifier "MyInv001" --title "My Investigation 001"
``` 

If no arguments are supplied, a text editor may pop up asking you for suitable metadata values. 
For instance, the command 

```
arc investigation create
```

will open a text editor and (amongst other metadata keys) allow you to enter


```yaml
Identifier:

#A concise name given to the investigation
Title:

#A textual description of the investigation
Description:
```

After entering the required values, you can save and close the editor.

## ARC Commander's Help Menu

The ARC Commander comes with a leveled help menu, that suggests suitable inputs on every level of command or subcommand. You can simply add `-h` or `--help` at the end of an ARC Commander action to display the respective help menu.

Some examples: 

```
arc --help
```

```
arc investigation --help
```
```
arc investigation create --help
```

```
arc study --help
```

```
arc study add --help
```

```
arc assay remove --help
```





