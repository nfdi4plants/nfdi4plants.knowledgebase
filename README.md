# @nfdi4plants/web-components docs

**[Link to gh-pages](https://nfdi4plants.github.io/web-components-docs/)**

# Development

## install 

1. Download repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet paket install` in root directory.
4. Run `dotnet fornax watch` in `\src` folder.
5. Open page in browser.


## update web-components

Check out the installation docs on [nfdi4plants/web-components](https://github.com/nfdi4plants/web-components#installation). For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

## update Nfdi4Plants.Fornax

```
dotnet paket update Nfdi4Plants.Fornax
```

_Load script will be generated automatically and is referenced in `src\loaders\docsloader.fsx`._