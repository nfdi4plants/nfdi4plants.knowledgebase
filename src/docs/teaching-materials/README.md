
# Teaching Materials

:bulb: mostly copied here from https://github.com/nfdi4plants/teaching_materials

## VS Code Marp Settings

In order to work with the VS Code marp extension (i.e. preview and export slides to pdf, html, etc.), you might want to add the following to the gitignored VSC settings (`.vscode/settings.json`) of this repo:

```
{
  "markdown.marp.themes": [
    "src/docs/teaching-materials/style/dataplant_marp-theme.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-CMR.css",
    "src/docs/teaching-materials/style/dataplant_marp-theme-Intro.css"
  ],
  "markdown.marp.enableHtml": true,
  "markdown.marp.exportType": "pdf",
  "markdown.marp.pdf.noteAnnotations": false
}
```
