# Contribution Guide

## Adding your materials

Slide decks or other materials may come in any format (pptx, md, html).
Although most materials are reusable and editable, this repo is primarily meant as an archive to stably collect materials of past events.

:bulb: Hence, please add your materials (also) in a stable file format (typically PDF) to make them independent of link changes, etc.

1. Add a new folder named `<date>_<context>_<title>` (date format: `yyyy-mm-dd`) with your materials to `slide-decks/`
2. add a `README.md` to describe the event / materials, etc.
3. List your slides in the root [README.md](./README.md) sorted by latest first
<!-- 
## marp (render markdown slides)

Definitely not a must, but it may make reuse more easily.

## Knowledge Base - git submodule
 -->


## File names

- All files and folders must always be [kebap-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case). This means all lower case and `-` as word separator.

```txt title="Example"
src\assets\images\arc-commander\access-2.png
```

## Images

### How to store

Try to use `.svg` files for icons, graphics and logos. Use any other file format for screenshots or tutorial images.

Images should be stored in the `images/` directory. If your image has a obvious context, you SHOULD create a subdirectory for it.

```txt title="Example"
|-- images
    |-- arc-commander
        |-- access-1.png
        |-- access-2.png
        |-- access-3.png
```
