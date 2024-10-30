---
layout: docs
title: Introduction to Markdown
date: 2022-07-06
author:
- name: Dominik Brilhaus
  github: https://github.com/brilator
  orcid: https://orcid.org/0000-0001-9021-3197
add toc: false
add sidebar: _sidebars/mainSidebar.md
status: published
---

- [What is Markdown?](#what-is-markdown)
- [Why Markdown?](#why-markdown)
- [Is there anything markdown can't do?](#is-there-anything-markdown-cant-do)
- [Markdown \<\> Code \& Data Management?](#markdown--code--data-management)
- [Implementations and variants](#implementations-and-variants)
- [Converting markdown files](#converting-markdown-files)
- [Real-time collaboration](#real-time-collaboration)
- [Tutorials and resources](#tutorials-and-resources)
- [Recommended VS code extensions](#recommended-vs-code-extensions)
- [Hands-on markdown tutorial](#hands-on-markdown-tutorial)
- [Software](#software)
- [Basic Syntax](#basic-syntax)
  - [Phrase Emphasis](#phrase-emphasis)
  - [Headers](#headers)
  - [Lists](#lists)
    - [Ordered, without paragraphs:](#ordered-without-paragraphs)
    - [Unordered, with paragraphs:](#unordered-with-paragraphs)
  - [Blockquotes](#blockquotes)
  - [Manual Line Breaks](#manual-line-breaks)
  - [Links](#links)
  - [Images](#images)



## What is Markdown?

- Markdown is a lightweight markup language
  - Other markup languages: HyperText Markup Language (HTML), Extensible Markup Language (XML), LaTeX
- WYSIWYG: "What You See Is What You Get
  - You literally write out, what you want the text to look like
- File extensions: `.md` or `.markdown`
- Official markdown website: <https://daringfireball.net/projects/markdown/>

> Note: No worries, this is not about learning HTML. The following is just an example to show the idea of markup.

**In HTML:**

```html
<html>
  <body>    
    <h3>headline level 3</h3>
    <h4>headline level 4</h4>
  </body>
</html>
```

**In Markdown:**

```
  ### headline level 3
  #### headline level 4
```

**Rendered output:**

### headline level 3 <!-- omit in toc -->

#### headline level 4 <!-- omit in toc -->

**In HTML:**

```html  
  <ul>
    <li>List item 1</li>
    <li><strong>List item 2 in bold</strong></li>
  </ul>
```

**In Markdown:**

```
  - List item 1
  - **List item 2 in bold**
```

**Rendered output:**

- List item 1
- **List item 2 in bold**

## Why Markdown?

- simple, plain text format
  - no hassle with formatting
  - Worry about content, not layout.
  - Most benefits of [LaTeX], but simpler
- easy-to-read, easy-to-write
  - intuitively human-readable
  - machine-actionable, convertible
- independent
  - open source
  - You only need a text editor
  - No need for "word processor programs"
    - Microsoft Word, WordPad, macOS Pages, Google Docs, LibreOffice Writer
- reusable
  - text is not stuck in formats or layouts
- extendible
  - many programs and tools work with markdown

## Is there anything markdown can't do?

- Beautiful, perfectly designed documents or slide shows
  - Reminder: "WYSIWYG"
  - Theming, customization, special formatting, design is hard(ly possible)
  - Use a word processor (or [LaTeX] ;-) )
- Collaboration on documents (e.g. reviewing manuscripts)
  - comments, suggestions, discuss changes, text highlighting

## Markdown <> Code & Data Management?

- Works perfectly with (text based) version-control (-> git)
- Many GitHub / GitLab features are based on MD
  - README.md, issues, wiki pages, discussions and comments
  - referencing files and folders, e.g. in a README.md
- Structuring and commenting code supported by IDEs[^1], e.g.
  - Jupyter Notebooks ~ markdown-commented python scripts
  - RMarkdown ~ markdown-commented R scripts

## Implementations and variants

Markdown can be used in many programming languages, platforms and frameworks, incl.:

- GitHub (see [GitHub Flavored Markdown](https://github.github.com/gfm/))
- Gitlab  
- Microsoft Team Chats
- Stack Exchange
- RStudio (see [RMarkdown](https://rmarkdown.rstudio.com/))
- Website generators (forget WordPress)

> **Note**: There are different flavors to how and what is "interpreted",  
> e.g. not every markdown parser understands
>
> - <strong>bold html text</strong>
> - emojis :bike:, :beers:, :tent:
> - or footnotes[^2]

## Converting markdown files

In case you want to provide your markdown document in another file format, converters help you.
The top recommendation: Pandoc.[^3]

> Note: pandoc conversion to pdf depends on a LaTeX Installation on your system.
> If you run into issues, see <https://pandoc.org/installing.html> for details and recommendations.

**Use pandoc to convert your...**

```bash
pandoc README.md -o markdown_intro.html   # ... markdown to .html
pandoc README.md -o markdown_intro.pdf    # ... markdown to .pdf
pandoc README.md -o markdown_intro.docx   # ... markdown to .docx
pandoc -t slidy -s --slide-level=2 --metadata pagetitle=markdown_intro README.md -o markdown_intro_slides.html # ... markdown to html slides
```

## Real-time collaboration

Although markdown is not perfect for collaboration on documents (e.g. manuscripts), there are occasions where online collaboration in markdown format comes in very handy (meetings with people that understand MD, code-intensive classes, etc.).

- HedgeDoc: <https://hedgedoc.org>
- CodiMD <https://github.com/hackmdio/codimd>

## Tutorials and resources

- Markdown Guide: <https://www.markdownguide.org/>
- Commonmark Tutorial: <https://commonmark.org/help/tutorial/>
- Cheat sheets:
  - <https://www.markdownguide.org/cheat-sheet/>
  - <https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet>
  - <https://daringfireball.net/projects/markdown/dingus>
- Markdown emojis <https://gist.github.com/rxaviers/7360908>

## Recommended VS code extensions

There are many markdown extensions available for [Visual Studio Code](https://code.visualstudio.com/).  
These support you in

- Creating a table, copy/pasting a table from excel
- Converting a markdown to PDF
- Structuring and formatting
- Creating a TOC
- Use shortcuts

- [Microsoft Docs Authoring Pack](https://marketplace.visualstudio.com/items?itemName=docsmsft.docs-authoring-pack), including
  - [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Markdown Shortcuts](https://marketplace.visualstudio.com/items?itemName=mdickin.markdown-shortcuts)
- [Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf)
- [Markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)

<!-- This is just to show references in markdown -->

[LaTeX]: https://www.latex-project.org/ "This a Link to the LaTeX Webpage"

<!-- This is just to show you a footnote in markdown -->

[^1]: Integrated development environments
[^2]: I am a footnote
[^3]: <https://pandoc.org/> "Pandoc"

----

## Hands-on markdown tutorial

> mostly (adapted) from <https://daringfireball.net/projects/markdown/dingus>

## Software

Try writing a markdown document, using either

1. an online markdown editor (e.g. <https://demo.hedgedoc.org/new>),
1. the GitHub or GitLab IDE to create / adapt the `README.md`, or
1. (advanced) your favorite text-editor that supports markdown.

## Basic Syntax

### Phrase Emphasis

```bash
*This is italic*   
_This is also italic_   
**This is bold**  
__This is also bold__ 
```

### Headers

```bash
# Header 1

## Header 2

###### Header 6
```

### Lists

#### Ordered, without paragraphs:

```bash
1. Item 1 
2. Item 2
4. Item 3
```

> Note the "4." in md

#### Unordered, with paragraphs:

```bash
- A list item.
- Bar
You can nest them:
- Abacus
  * answer
  * Bubbles
    1. bunk
    2. bupkis
      - BELITTLER
    3. burper
```

> Note: indentation matters

### Blockquotes

<pre><code>```
> Email-style angle brackets
> are used for blockquotes.

> > And, they can be nested.

> #### Headers in blockquotes
>
> - You can quote a list.
> - Etc.
```</code></pre>

### Code Spans

<pre><code>
```
- `&#60;code&#62;` spans are delimited by backticks.

- You can include literal backticks like `` `this` ``.
```
</code></pre>


### Code Blocks

<pre><code>```
This is a code block
```</code></pre>

### Horizontal Rules

Three or more dashes or asterisks:

```yml
---

* * *

- - - -
```

### Manual Line Breaks

```bash
End a line with two or more spaces:
Roses are red,  
Violets are blue.
```

### Links

```bash
- Inline:
  An [example](http://url.com/ "Title")

- Reference-style labels (titles are optional):
  An [example][id]. Then, anywhere else in the doc, define the link:

  [id]: http://example.com/  "Title"
```

### Images

```bash
![alt text](./../img/ARC_BuildsOnStandards1.png "This is an ARC")
```

![alt text](./../img/ARC_BuildsOnStandards1.png "This is an ARC")
