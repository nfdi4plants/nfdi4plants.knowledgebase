import styles from "@nfdi4plants/swate-components/style.css?raw";
import { TermSearch, TIBApi } from "@nfdi4plants/swate-components";
import { useState } from "react";
import IsolatedFrame from "./IsolatedFrame";
import "@nfdi4plants/swate-components/style.css";

interface TermSearchProps {
  name: string;
  showTerm?: boolean;
  children: React.ReactNode;
  parentId?: string;
}

export function TIBTermSearch({
  name,
  showTerm,
  children,
  parentId
}: TermSearchProps) {
  const [term, setTerm] = useState("");
  return (
    <div
      id="container"
      style={{
        padding: "1rem",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >

      {name && (
        <label
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            fontWeight: "bold",
          }}
        >
          {" "}
          {name}
        </label>
      )}

      {children && children}

      <TermSearch
        term={term}
        onTermChange={setTerm}
        classNames={{ inputLabel: "!m-0" }}
        parentId={parentId}
        termSearchQueries={[
          [
            "tib_search",
            (query: string) => TIBApi.defaultSearch(query, 10, "DataPLANT"),
          ],
        ]}
        parentSearchQueries={[
          [
            "tib_search",
            ([parentId, query]: [string, string]) =>
              TIBApi.searchChildrenOf(query, parentId, 10, "DataPLANT"),
          ],
        ]}
        allChildrenSearchQueries={[
          [
            "tib_search",
            (parentId: string) =>
              TIBApi.searchAllChildrenOf(parentId, 500, "DataPLANT"),
          ],
        ]}
      />
      
      <details
        style={{
          padding: "1rem 0", // tailwind: p-4
          borderRadius: "0.5rem", // tailwind: rounded-lg
          fontFamily: "ui-sans-serif, system-ui",
          fontSize: "0.875rem", // tailwind: text-sm
          marginBottom: "1rem",
          display: showTerm ? "block" : "none",
        }}
      >
        <summary
          style={{
            cursor: "pointer",
            fontWeight: 600, // tailwind: font-semibold
            marginBottom: "0.5rem",
            userSelect: "none"
          }}
        >
          Term details
        </summary>
        <pre
          style={{
            backgroundColor: "#1e293b", // tailwind: bg-slate-800
            color: "#f8fafc", // tailwind: text-slate-100
            padding: "1rem", // tailwind: p-4
            borderRadius: "0.375rem", // tailwind: rounded-md
            overflowX: "auto",
            maxHeight: "300px",
          }}
        >
          <code
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              fontSize: "0.875rem", // tailwind: text-sm
            }}
          >
            {term ? JSON.stringify(term, null, 2) : "No term selected"}
          </code>
        </pre>
      </details>
      <style type="text/css">{styles}</style>
    </div>
  );
}

export default function IsolatedTermSearch(props: TermSearchProps) {
  return (
    <IsolatedFrame>
      <TIBTermSearch {...props} />
    </IsolatedFrame>
  );
}
