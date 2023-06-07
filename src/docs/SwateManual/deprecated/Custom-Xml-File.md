---
layout: docs
title: Custom XML (deprecated)
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

# Base Structure

The customXml file in the .xlsx folder always has the root element `<customXml>`, which CAN contain any number of `<SwateTable>` elements. Each CAN contain ONE `<ProtocolGroup>` and ONE `<TableValidation>`.

```xml
<customXml>
  <SwateTable Table="annotationTable" Worksheet="Sheet1">
    <ProtocolGroup SwateVersion="0.4.0" TableName="annotationTable" WorksheetName="Sheet1">
      ..
    </ProtocolGroup>
    <TableValidation DateTime="2021-02-23 16:39" SwateVersion="0.4.0" TableName="annotationTable" Userlist="" WorksheetName="Sheet1">
      ..
    </TableValidation>
  </SwateTable>
  <SwateTable Table="annotationTable1" Worksheet="Sheet2">
    ..
  <SwateTable>
</customXml>
```

# Example

```xml

<customXml>
  <SwateTable Table="annotationTable" Worksheet="Sheet1">
    <ProtocolGroup SwateVersion="0.4.0" TableName="annotationTable" WorksheetName="Sheet1">
      <Protocol Id="peptide_digestion_2" ProtocolVersion="1.0.0" SwateVersion="0.4.0" TableName="annotationTable" WorksheetName="Sheet1">
        <SpannedBuildingBlock Name="Parameter [Peptidase]" TermAccession="NCIT:C16965"/>
        <SpannedBuildingBlock Name="Parameter [temperature]" TermAccession="NCRO:0000029"/>
        <SpannedBuildingBlock Name="Parameter [time]" TermAccession="EFO:0000721"/>
      </Protocol>
      <Protocol Id="TestTemplate" ProtocolVersion="1.0.0" SwateVersion="0.4.0" TableName="annotationTable" WorksheetName="Sheet1">
        <SpannedBuildingBlock Name="Parameter [instrument model] (#2)" TermAccession="MS:1000031"/>
        <SpannedBuildingBlock Name="Parameter [day light exposure] (#2)" TermAccession="PECO:0007163"/>
        <SpannedBuildingBlock Name="Parameter [temperature unit] (#2)" TermAccession="UO:0000005"/>
      </Protocol>
    </ProtocolGroup>
    <TableValidation DateTime="2021-02-23 16:39" SwateVersion="0.4.0" TableName="annotationTable" Userlist="" WorksheetName="Sheet1">
      <ColumnValidation ColumnAdress="0" ColumnHeader="Source Name" Importance="None" Unit="None" ValidationFormat="None"/>
      <ColumnValidation ColumnAdress="1" ColumnHeader="Parameter [instrument model] (#2)" Importance="10" Unit="None" ValidationFormat="OntologyTerm instrument model"/>
      <ColumnValidation ColumnAdress="1" ColumnHeader="Parameter [instrument model]" Importance="10" Unit="None" ValidationFormat="OntologyTerm instrument model"/>
      <ColumnValidation ColumnAdress="4" ColumnHeader="Parameter [day light exposure] (#2)" Importance="10" Unit="lux" ValidationFormat="UnitTerm lux"/>
      <ColumnValidation ColumnAdress="4" ColumnHeader="Parameter [day light exposure]" Importance="10" Unit="lux" ValidationFormat="UnitTerm lux"/>
      <ColumnValidation ColumnAdress="10" ColumnHeader="Parameter [temperature unit] (#2)" Importance="10" Unit="degree Celsius" ValidationFormat="UnitTerm degree Celsius"/>
      <ColumnValidation ColumnAdress="10" ColumnHeader="Parameter [temperature unit]" Importance="10" Unit="degree Celsius" ValidationFormat="UnitTerm degree Celsius"/>
      <ColumnValidation ColumnAdress="16" ColumnHeader="Sample Name" Importance="None" Unit="None" ValidationFormat="None"/>
    </TableValidation>
  </SwateTable>
</customXml>
```