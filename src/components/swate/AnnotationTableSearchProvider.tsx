import { useEffect, useState } from "react";
import type { ComponentProps, ReactElement } from "react";
import { TermSearchConfigProvider, TIBApi } from "@nfdi4plants/swate-components";
import { value } from "@fable-org/fable-library-ts/Option.ts";

type SearchConfig = ComponentProps<typeof TermSearchConfigProvider>;
type Term = Awaited<ReturnType<SearchConfig["allTermSearchQueries"][number][1]>>[number];

function toTerms(response: Awaited<ReturnType<typeof TIBApi.defaultSearch>>): Term[] {
  if (response == null) return [];

  return Array.from(value(response).response.docs, (term) => ({
    name: term.label,
    id: term.obo_id,
    description: Array.from(term.description).join("; "),
    source: term.ontology_name,
    href: term.iri,
    isObsolete: term.is_obsolete == null ? false : value(term.is_obsolete),
  }));
}

const providerKey = "TIB_DataPLANT";
const storageKey = "knowledgebase-annotation-table-search";
const termQueries: SearchConfig["allTermSearchQueries"] = [
  [providerKey, async (query) => toTerms(await TIBApi.defaultSearch(query, 10, "DataPLANT"))],
];
const parentQueries: SearchConfig["allParentSearchQueries"] = [
  [providerKey, async ([parentId, query]) =>
    toTerms(await TIBApi.searchChildrenOf(query, parentId, 10, "DataPLANT"))],
];
const allChildrenQueries: SearchConfig["allAllChildrenSearchQueries"] = [
  [providerKey, async (parentId) =>
    toTerms(await TIBApi.searchAllChildrenOf(parentId, 300, "DataPLANT"))],
];

export default function AnnotationTableSearchProvider({ children }: { children: ReactElement }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Swate 2.6 exposes disableDefault only through its persisted search settings.
    // Use a demo-specific key so the playground doesn't change other Swate settings.
    if (localStorage.getItem(storageKey) === null) {
      localStorage.setItem(storageKey, JSON.stringify({
        activeKeys: [providerKey],
        disableDefault: true,
      }));
    }
    setReady(true);
  }, []);

  if (!ready) return <p>Loading annotation table…</p>;

  return (
    <TermSearchConfigProvider
      localStorageKey={storageKey}
      allTermSearchQueries={termQueries}
      allParentSearchQueries={parentQueries}
      allAllChildrenSearchQueries={allChildrenQueries}
    >
      {children}
    </TermSearchConfigProvider>
  );
}
