#r "../_lib/Fornax.Core.dll"
#load "layout.fsx"

open Html

open Fornax.Nfdi4Plants
open Layout

let generate' (ctx : SiteContents) (_: string) =
    let docs0 = ctx.TryGetValues<Docs> () |> Option.defaultValue Seq.empty

    let landingPage = docs0 |> Seq.tryFindBack(fun x -> x.title = "Index" || x.title = "Home")
    match landingPage with
    | Some docs -> 
        Layout.layout ctx docs.title [
            Components.docsLayout(baseUrl, docs)
        ]
    | None -> 
        failwith "Could not find index markdown file (title: 'Index') in docs folder."

let generate (ctx : SiteContents) (projectRoot: string) (page: string) =
    generate' ctx page
    |> Layout.render ctx