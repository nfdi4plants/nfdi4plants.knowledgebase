---
title: Frequently Asked Questions (FAQ)
lastUpdated: 2025-09-23
authors:
  - dominik-brilhaus
  - cristina-martins-rodrigues
---

Here we collect common questions raised by users.
Feel free to add a solved FAQ [here](https://github.com/nfdi4plants/nfdi4plants.knowledgebase/issues).

### DataPLANT

<details><summary><span style="color: #1fc2a7">
How can I change the main email address used for my DataPLANT account?
</summary>

The main email of your [DataPLANT account](https://auth.nfdi4plants.org/realms/dataplant/account) can only be adapted by the admins. Please open a ticket via our [helpdesk](https://helpdesk.nfdi4plants.org/?topic=ToolsandServices_DataHUB) to request a change listing your old and new email addresses. 

Note that in the DataHUB, users can add additional email addresses via their [profile settings](https://git.nfdi4plants.org/-/profile/emails).

</details>

### Annotated Research Context

<details><summary><span style="color: #1fc2a7">
Where should the metadata annotation be made. In the same documents containing the data? 
</summary>

No. The metadata describing the data is collected in separate xlsx-files – called `isa.assay.xlsx` – that resides in the parent folder of the dataset.

</details>

<details><summary><span style="color: #1fc2a7">
Is it necessary to fill in the empty fields in the investigation-file manually? 
</summary>

No. Although it is possible to fill out the workbook manually, we recommend using [ARC Commander](/nfdi4plants.knowledgebase/arc-commander) or [ARCitect](/nfdi4plants.knowledgebase/arcitect) to add this metadata.

</details>

<details><summary><span style="color: #1fc2a7">
Where in the ARC can I store "external" data? 
</summary>

Research projects rarely start out of the blue. Rather every project builds on previous findings and published datasets.
To properly re-use and reference such a dataset, we recommend to add a `study` to your ARC. Every study by default comes with four parts:

```
└── <StudyName>
    ├── README.md
    ├── isa.study.xlsx
    ├── protocols
    └── resources
```

- In the `resources` directory you can add the data (e.g. supplemental data files)
- In the `protocols` directory you can add notes on how you retrieved the data and from where.
- The study is registered in your ARC's `isa.investigation.xlsx`, which includes a section "STUDY PUBLICATIONS" for every study. Here, you can add publication details (author, DOI, etc.) about the external data source.

</details>

### ARC Commander

<details><summary><span style="color: #1fc2a7">
Are there any recommendations for titles or identifiers?
</summary>

Avoid using spaces in the identifier. Use underscores and capital letters instead. There are no specific restrictions regarding the title. Although it is possible to fill in the workbook manually, we recommend using <a href="/nfdi4plants.knowledgebase/arc-commander">ARC Commander</a> to add this metadata.

</details>

<details><summary><span style="color: #1fc2a7">
How often should I sync my ARC?
</summary>

We would not want to recommend a fixed time interval (once every hour / day / week) for how often you ideally sync the ARC. In general, the more you work with your ARC, the more you add or update, annotate or analyze data, the more you will want to make sure these changes are saved. Consider the syncing as a way to backup your project's progress as well as an "undo button".

:::tip
For more details, check out the [Syncing Recommendations](/nfdi4plants.knowledgebase/git/git-syncing-recommendation)
:::

</details>


<details><summary><span style="color: #1fc2a7">
Why do I get the error `'arc' is not recognized as an internal or external command, operable program or batch file.`?
</summary>

Your machine cannot find your ARC commander executable. Possible reasons are that you have not yet installed the ARC commander or that the `arc` executable was not added to your path. 

Please carefully retry the [ARC Commander setup](/nfdi4plants.knowledgebase/arc-commander/setup/installation). 

If this does not do the trick, please follow these steps towards debugging (on Windows): 

1. Open the command prompt (cmd) or powershell in the folder (e.g. `C:\Programs\ArcCommander`) where you stored the ARC Commander program (e.g. arc.exe). If `arc --version` shows the version, the executable is intact. 
2. Next, execute `path` to check wether the folder (e.g. `C:\Programs\ArcCommander`) appears in your path.
3. Adapt the user's path (not admin)
   
:bulb: If you do not have admin rights on the computer, please open the settings "Edit environment variables for your account" and follow steps described in the [ARC Commander setup](/nfdi4plants.knowledgebase/arc-commander/setup/installation).

</details>
<details><summary><span style="color: #1fc2a7">
Trying to get an access token on a Linux server, I get an error "ERROR: System InvalidOperationException"

</summary>

If you see something like this ...

```yaml
ERROR: System.InvalidOperationException: Error loading discovery document: Error connecting to https://git.nfdi4plants.org/.well-known/openid-configuration. The SSL connection could not be established, see inner exception.. System.InvalidOperationException: Error loading discovery document: Error connecting to https://git.nfdi4plants.org/.well-known/openid-configuration. The SSL connection could not be established, see inner exception..
```

... the Linux machine cannot verify the SSL certificates of the DataHUB.

The root certificates need to be present on the machine to verify certificates for any outgoing connection. These come from a package usually called `ca-certificates` on RHEL-derivates and on Debian-based systems. It can be installed quite easily with:

#### Debian

```bash
apt install ca-certificates
```

#### RHEL

```bash
dnf install ca-certificates
```




</details>

### ARCitect

<details>
<summary><span style="color: #1fc2a7">
I already committed my changes, but they are still displayed in the ARCitect and are not uploaded to the DataHUB.
</summary>

Sometimes, the ARCitect does not "accept" a commit or when writing a commit message and hitting the "commit" button the changes are still displayed. You can try the following:

1. Close all windows (e.g. windows explorer) and files (in particular Excel workbooks) related to the ARC
2. Try to commit again.

:::tip
In general, we recommend to close all isa.investigation.xlsx, isa.study.xlsx and isa.assay.xlsx workbooks when working on your ARC using ARCitect.
:::

</details>

<details>
<summary><span style="color: #1fc2a7">
I want to download my LFS files, but the files are not flagged. 
</summary>

To see the LFS flag and enable file download, you need Git LFS version 3.7.0 or higher. Please try the following steps:

1. Open command line via ARCitect --> Tools --> Command Window
2. Type and execute: `git-lfs --version`
3. If your Git LFS version is older then 3.7.0, follow the [Git Installation Guide](/nfdi4plants.knowledgebase/git/git-installation) to install the latest version. 
4. After installation reload ARCitect. The LFS files should now be flagged and can be downloaded with right-click.  



</details>

<!-- 
<details>
<summary><span style="color: #1fc2a7">
Why is the file tree flickering in ARCitect?
</summary>

So far we only saw this bug on macOS with ARCs stored in a folder that is watched and synced by iCloud (typically the `Desktop` and `Documents` folder and sub-folders). Please store your ARCs in folders outside iCloud.

</details>

<details>
<summary><span style="color: #1fc2a7">
Why do I get the warning "Clone succeeded, but checkout failed."?
</summary>

This warning is likely due to an issue with your Git or Git LFS installation.
If you see this error, when using ARCitect (version ≥ 0.0.21) under Windows or Linux, please let us know via e.g. helpdesk.

On macOS ARCitect's git dependency is not yet in place.
Please follow [this workaround](https://github.com/nfdi4plants/ARCitect/discussions/88).

</details> -->

<details>
<summary><span style="color: #1fc2a7">
What does the "Credential Helper Selector" mean?
</summary>

During ARCitect login, Windows asks you wether you want to use a "Credential Helper". This can be used to store your DataHUB credentials. You do not need this for ARCitect to work. You can choose "no helper" or "manager" and tick the check box "always use this from now on" to avoid the popup in the future.

![](@images/faqs/credential-helper-selector.png)

</details>


### Metadata annotation (Swate, ISA)

<!-- <details><summary><span style="color: #1fc2a7">
Is it possible to use common Excel functionalities?
</summary>

Yes. In fact, this is one of the reasons why we decided to embed Swate within Excel, as it allows users to continue using the Excel functionality they are accustomed to. -->

</details>

<details><summary><span style="color: #1fc2a7">
Do I have to fill in all columns when using a template?
</summary>

No. However, if you want to submit your data to a <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/fundamentals/PublicDataRepositories.html">public data repository</a>, these will require specific metadata. For this purpose we provide the corresponding templates helping you to annotate your data accordingly.

</details>

<!-- <details><summary><span style="color: #1fc2a7">
Installation (Windows, manual): How and where to create a shared folder?
</summary>

Wherever you created your <b>folder-to-be-shared</b> according to <a href="https://nfdi4plants.org/nfdi4plants.knowledgebase/docs/SwateManual/swate_installation_desktop-win-manually.html">these instructions</a>, you need to have the right to <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#share-a-folder">share a folder</a> at this particular location.  

This might not be possible at <span style="background-color: grey">'C:\folder-to-be-shared'</span> but, when you go one level down, into <span style="background-color: grey">'Users'</span>, <span style="background-color:grey">'C:\Users\folder-to-be-shared'</span> might be sharable. You can share a folder when the <span style="background-color:grey">'Sharing'</span> tab is shown next to the <span style="background-color:grey">'General'</span> tab in the properties dialog window (right click on the <b>folder-to-be-shared</b>, select 'properties').  

When you created a <b>folder-to-be-shared</b>, placed the latest manifest(s) from the zip-extracted <a href="https://github.com/nfdi4plants/Swate/blob/developer/.assets/swate-win.zip?raw=true">download</a> into it (<span style="background-color:grey">'core_manifest.xml'</span>, and optional: <span style="background-color:grey">'experts_manifest.xml'</span>), finished <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#share-a-folder">these steps</a> and continue with <a href="https://learn.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#configure-the-trust-manually">these steps</a> in Excel, you should be ready to dive into Swate. - Enjoy 🚀

</details> -->

<!-- 
## ISA

<details><summary><span style="color: #1fc2a7">
Which format must be used to enter a date?
</summary>

String formatted as ISO8601 date: YYYY-MM-DD

</details> -->

### DataHUB

<details><summary><span style="color: #1fc2a7">
Why do I see banners about "SSH Key", "SAML", "Personal Access Tokens" when logging into the DataHUB?
</summary>

After login to the DataHUB you see the following banners

![](@images/datahub/datahub-banner-token.png)


If you use DataPLANT tools (ARCitect or ARC commander) to sync your ARC with the DataHUB, you can safely ignore them and click "Don't show again".

</details>
