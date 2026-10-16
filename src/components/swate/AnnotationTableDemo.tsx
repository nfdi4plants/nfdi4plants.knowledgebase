import { useState } from "react";
import type { ComponentProps } from "react";
import { AnnotationTable } from "@nfdi4plants/swate-components";
import AnnotationTableSearchProvider from "./AnnotationTableSearchProvider";
import {
  ArcTable,
  CompositeCell,
  CompositeHeader,
  IOType,
  OntologyAnnotation,
} from "@nfdi4plants/arctrl";

function createSampleTable() {
  const table = ArcTable.init("Plant samples");
  const samples = [1, 2, 3];

  table.AddColumn(
    CompositeHeader.input(IOType.source()),
    samples.map((sample) => CompositeCell.createFreeText(`Plant ${sample}`)),
  );
  table.AddColumn(
    CompositeHeader.characteristic(
      new OntologyAnnotation("organism", "OBI", "OBI:0100026"),
    ),
    samples.map(() =>
      CompositeCell.createTerm(
        new OntologyAnnotation(
          "Arabidopsis thaliana",
          "NCBITaxon",
          "NCBITaxon:3702",
        ),
      ),
    ),
  );
  table.AddColumn(
    CompositeHeader.output(IOType.sample()),
    samples.map((sample) => CompositeCell.createFreeText(`Sample ${sample}`)),
  );

  return table;
}

export default function AnnotationTableDemo() {
  const [table, setTable] = useState<
    ComponentProps<typeof AnnotationTable>["arcTable"]
  >(createSampleTable);
  const [resetCount, setResetCount] = useState(0);

  function resetTable() {
    setTable(createSampleTable());
    setResetCount((count) => count + 1);
  }

  return (
    <main style={{ padding: "1rem", minWidth: 0 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.75rem",
          marginBottom: "1rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 600 }}>
          Annotation table
        </h1>
        <button
          type="button"
          className="swt:btn swt:btn-outline swt:btn-sm"
          onClick={resetTable}
        >
          Reset sample data
        </button>
      </header>
      <AnnotationTableSearchProvider>
        <AnnotationTable
          key={String(resetCount)}
          arcTable={table}
          setArcTable={setTable}
          height={500}
        />
      </AnnotationTableSearchProvider>
    </main>
  );
}
