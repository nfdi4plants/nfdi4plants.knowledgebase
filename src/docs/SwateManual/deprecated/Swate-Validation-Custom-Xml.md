---
layout: docs
title: Custom XML Validation (deprecated)
published: 2022-09-19
Author: Kevin Frey
add toc: false
add sidebar: _sidebars\mainSidebar.md
---

1. [Xml Example](#Swate-Validation-Xml-Example)
2. [Xml Schema (XSD)](#swate-validation-xml-schema-xsd)
3. [Version History](#Version-History)

Excel saves all custom generated xml inside the `<customXml>` tag. Swate will save all validation information inside of this `<customXml>` in a `<Validation>` tag. 

Each `<SwateTable>` tag CAN contain the following validation xml.

# Swate Validation Xml Example

```xml
<TableValidation DateTime="2021-02-23 16:33" SwateVersion="0.4.0" TableName="annotationTable" Userlist="" WorksheetName="Sheet1">
  <ColumnValidation ColumnAdress="0" ColumnHeader="Source Name" Importance="None" Unit="None" ValidationFormat="None"/>
  <ColumnValidation ColumnAdress="1" ColumnHeader="Parameter [Peptidase]" Importance="10" Unit="None" ValidationFormat="OntologyTerm Peptidase"/>
  <ColumnValidation ColumnAdress="4" ColumnHeader="Parameter [temperature]" Importance="None" Unit="degree Celsius" ValidationFormat="None"/>
  <ColumnValidation ColumnAdress="10" ColumnHeader="Parameter [time]" Importance="None" Unit="hour" ValidationFormat="None"/>
  <ColumnValidation ColumnAdress="16" ColumnHeader="Sample Name" Importance="None" Unit="None" ValidationFormat="None"/>
</TableValidation>
```

# Swate Validation Xml Schema (XSD)

This is the xml schema that can be used to [validate](https://www.freeformatter.com/xml-validator-xsd.html) `<Validation>` xml in the excel `customXml`.

```XSD
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="TableValidation">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="ColumnValidation" maxOccurs="unbounded" minOccurs="0">
          <xs:complexType>
            <xs:simpleContent>
              <xs:extension base="xs:string">
                <xs:attribute type="xs:integer" name="ColumnAdress" use="required"/>
                <xs:attribute type="xs:string" name="ColumnHeader" use="required"/>
                <xs:attribute type="xs:string" name="Importance" use="required"/>
                <xs:attribute type="xs:string" name="Unit" use="required"/>
                <xs:attribute type="xs:string" name="ValidationFormat" use="required"/>
              </xs:extension>
            </xs:simpleContent>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute type="xs:string" name="DateTime" use="required"/>
      <xs:attribute type="xs:string" name="SwateVersion" use="required"/>
      <xs:attribute type="xs:string" name="TableName" use="required"/>
      <xs:attribute type="xs:string" name="Userlist" use="required"/>
      <xs:attribute type="xs:string" name="WorksheetName" use="required"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
```
## Version History
The version given is the last version that used the given xml schema.

<details>
  <summary>Version 3.1</summary>

  ```xml
<?xml version="1.0"?>
<Validation SwateVersion="0.2.1">
  <TableValidation DateTime="2021-01-29 10:09" SwateVersion="0.2.1" TableName="annotationTable" Userlist="" WorksheetName="Sheet1">
    <ColumnValidation ColumnAdress="0" ColumnHeader="Source Name" Importance="100" Unit="None" ValidationFormat="Text"/>
    <ColumnValidation ColumnAdress="1" ColumnHeader="Parameter [instrument model]" Importance="100" Unit="None" ValidationFormat="OntologyTerm instrument model"/>
    <ColumnValidation ColumnAdress="4" ColumnHeader="Factor [day light exposure]" Importance="50" Unit="lux" ValidationFormat="Number"/>
    <ColumnValidation ColumnAdress="10" ColumnHeader="Sample Name" Importance="100" Unit="None" ValidationFormat="Text"/>
  </TableValidation>
</Validation>
```

  ```XSD
<xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
  <xs:element name="Validation">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="TableValidation">
          <xs:complexType>
            <xs:sequence>
              <xs:element name="ColumnValidation" maxOccurs="unbounded" minOccurs="0">
                <xs:complexType>
                  <xs:simpleContent>
                    <xs:extension base="xs:string">
                      <xs:attribute type="xs:integer" name="ColumnAdress" use="required"/>
                      <xs:attribute type="xs:string" name="ColumnHeader" use="required"/>
                      <xs:attribute type="xs:integer" name="Importance" use="required"/>
                      <xs:attribute type="xs:string" name="Unit" use="required"/>
                      <xs:attribute type="xs:string" name="ValidationFormat" use="required"/>
                    </xs:extension>
                  </xs:simpleContent>
                </xs:complexType>
              </xs:element>
            </xs:sequence>
            <xs:attribute type="xs:string" name="DateTime"/>
            <xs:attribute type="xs:string" name="SwateVersion"/>
            <xs:attribute type="xs:string" name="TableName"/>
            <xs:attribute type="xs:string" name="Userlist"/>
            <xs:attribute type="xs:string" name="WorksheetName"/>
          </xs:complexType>
        </xs:element>
      </xs:sequence>
      <xs:attribute type="xs:string" name="SwateVersion"/>
    </xs:complexType>
  </xs:element>
</xs:schema>
```
</details>