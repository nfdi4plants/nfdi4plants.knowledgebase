// Icons of the widget toolbar in ARCitISA.
// Source: nfdi4plants/ARCitISA, src/Components/src/Page/ArcFileEditor/Widgets.fs (widgetInfo).
// The SVGs are Fluent UI System Icons (MIT), as bundled in ARCitISA's swate-components.css.

type IconProps = { className?: string; title?: string };

function makeIcon(viewBox: string, d: string, label: string, transform?: string) {
  return ({ className, title }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width="1.25em"
      height="1.25em"
      fill="currentColor"
      role="img"
      aria-label={title ?? label}
      className={className}
      style={{ display: "inline-block", verticalAlign: "-0.25em", transform }}
    >
      <title>{title ?? label}</title>
      <path d={d} />
    </svg>
  );
}

const Icons = {
  // fluent--table-column-insert-24-filled
  BuildingBlock: makeIcon("0 0 24 24", "M4.5 3.75v16.5a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 1.5 0M16 5.25C16 4.007 15.105 3 14 3h-4C8.895 3 8 4.007 8 5.25V8h8zM8 14.5v-5h8v5zM8 16v2.75c0 1.243.895 2.25 2 2.25h4c1.105 0 2-1.007 2-2.25V16zm13 4.25V3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0", "Add Building Block"),
  // fluent--table-add-24-filled
  Template: makeIcon("0 0 24 24", "M9.5 21h2.522a6.52 6.52 0 0 1-.848-5H9.5zM21 9.5v2.522a6.52 6.52 0 0 0-5-.848V9.5zm-6.5 0v2.232a6.53 6.53 0 0 0-2.768 2.768H9.5v-5zM21 8V6.25A3.25 3.25 0 0 0 17.75 3H16v5zm-6.5-5h-5v5h5zM8 3H6.25A3.25 3.25 0 0 0 3 6.25V8h5zM3 9.5v5h5v-5zM3 16v1.75A3.25 3.25 0 0 0 6.25 21H8v-5zm20 1.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 1 0V17h2.503a.5.5 0 1 1 0 1z", "Add Template"),
  // fluent--document-text-link-20-filled
  FilePicker: makeIcon("0 0 20 20", "M10 6.5V2H5.5A1.5 1.5 0 0 0 4 3.5V13h2.5a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-6c.954 0 1.818.381 2.45 1h3.55a.5.5 0 0 1 0 1h-2.837c.216.455.337.963.337 1.5s-.12 1.045-.337 1.5H14.5a1.5 1.5 0 0 0 1.5-1.5V8h-4.5A1.5 1.5 0 0 1 10 6.5M6.5 10h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1M11 6.5V2.25L15.75 7H11.5a.5.5 0 0 1-.5-.5M3.5 14a2.5 2.5 0 0 0 0 5H4a.5.5 0 0 0 0-1h-.5a1.5 1.5 0 0 1 0-3H4a.5.5 0 0 0 0-1zM7 14a.5.5 0 0 0 0 1h.5a1.5 1.5 0 0 1 0 3H7a.5.5 0 0 0 0 1h.5a2.5 2.5 0 0 0 0-5zm-4 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5", "File Picker"),
  // fluent--document-data-link-24-filled
  DataAnnotator: makeIcon("0 0 24 24", "M12 8V2H6a2 2 0 0 0-2 2v10.559a5 5 0 0 1 .75-.059H8v-2.75a.75.75 0 0 1 1.5 0v2.916c.65.177 1.243.488 1.75.901v-.817a.75.75 0 0 1 1.5 0v2.975c.162.479.25.992.25 1.525a4.73 4.73 0 0 1-.877 2.75H18a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2m3.25 4a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0v-5.5a.75.75 0 0 1 .75-.75M13.5 8V2.5l6 6H14a.5.5 0 0 1-.5-.5M12 19.25a3.75 3.75 0 0 0-3.75-3.75l-.102.007A.75.75 0 0 0 8.25 17l.154.005A2.25 2.25 0 0 1 8.25 21.5l-.003.005l-.102.007a.75.75 0 0 0 .108 1.493V23l.2-.005A3.75 3.75 0 0 0 12 19.25m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005A3.75 3.75 0 0 0 4.75 23l.102-.007A.75.75 0 0 0 4.75 21.5l-.154-.005A2.25 2.25 0 0 1 4.75 17l.102-.007a.75.75 0 0 0 .648-.743m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007A.75.75 0 0 0 4.75 20h3.5l.102-.007A.75.75 0 0 0 9 19.25", "Data Annotator"),
  // fluent--arrow-import-20-filled
  JsonImport: makeIcon("0 0 20 20", "M17.25 3.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M2 10a.75.75 0 0 1 .75-.75h10.19l-2.72-2.72a.75.75 0 1 1 1.06-1.06l3.997 3.996a.8.8 0 0 1 .156.223a.75.75 0 0 1-.156.845L11.28 14.53a.75.75 0 1 1-1.06-1.06l2.72-2.72H2.75A.75.75 0 0 1 2 10", "Import JSON", "rotate(180deg)"),
  // fluent--arrow-export-20-filled
  JsonExport: makeIcon("0 0 20 20", "M2.75 3.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M5 10a.75.75 0 0 1 .75-.75h10.19l-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.997 3.996a.8.8 0 0 1 .156.223a.75.75 0 0 1-.156.845L14.28 14.53a.75.75 0 1 1-1.06-1.06l2.72-2.72H5.75A.75.75 0 0 1 5 10", "Export JSON"),
  // Template filter: "Filter Communities" button.
  // Source: ARCitISA src/Components/src/Composite/TemplateBrowser/TemplateFilter.fs -> Icons.Institution (src/Components/src/Primitive/Icons.fs)
  Institution: makeIcon("0 0 512 512", "M271.9 20.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 208 32 208h32v208l-51.2 38.4C4.7 460.4 0 469.9 0 480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32c0-10.1-4.7-19.6-12.8-25.6L448 416V208h32c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15.1-36l-224-128zM400 208v208h-64V208zm-112 0v208h-64V208zm-112 0v208h-64V208zm80-112a32 32 0 1 1 0 64a32 32 0 1 1 0-64", "Communities"),
};

export default Icons;
