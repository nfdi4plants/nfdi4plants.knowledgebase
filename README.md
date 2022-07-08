# nfdi4plants.knowledgebase

**[WIP]()**

# Development

## install 

1. Download repo.
2. Run `dotnet tool restore` in root directory.
3. Run `dotnet paket install` in root directory.

## run

1. Run `dotnet fornax watch` in `\src` folder.
2. Open page in browser [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

## update web-components

Check out the installation docs on [nfdi4plants/web-components](https://github.com/nfdi4plants/web-components#installation). For fornax you will need to bundle the web-components with rollup. See the respective section for more information.

## update Nfdi4Plants.Fornax

```
dotnet paket update Nfdi4Plants.Fornax
```

_Load script will be generated automatically and is referenced in `src\loaders\docsloader.fsx`._