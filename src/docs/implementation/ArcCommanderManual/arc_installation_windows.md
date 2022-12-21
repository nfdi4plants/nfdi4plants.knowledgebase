---
layout: docs
title: "Installing the ARC Commander - Windows"
published: 2022-12-20
add toc: false
add support: false
add sidebar: _sidebars/arcCommanderManualSidebar.md
---

Head to the ARC Commander's GitHub [release page](https://github.com/nfdi4plants/arcCommander/releases). Download the newest release for Windows.

1. In Windows Explorer, head over to the folder where you downloaded the ARC Commander, e.g.
![image](https://user-images.githubusercontent.com/47781170/118627514-13e63f00-b7cc-11eb-95cb-1bf74a355cde.png)
2. You can move the .exe to a desired folder, e.g. to your personal folder
3. Add the folder with the ARC Commander to your PATH:
    - Open the Start Menu, type in `path` and click on _Edit the system environment variables_
    ![image](https://user-images.githubusercontent.com/47781170/119674721-b8a3f480-be3c-11eb-9982-e3c0fa191f05.png)
    - Click on _Environment Variables..._, click on _Path_ and on _Edit..._ in the tab _User variables for <your username>_, click on _New_ and type in the full path to your folder as seen in the example below:
    ![image](https://user-images.githubusercontent.com/47781170/119674652-a9bd4200-be3c-11eb-81f8-72f1198842ef.png) 
    - This allows you to start the ARC Commander from any folder
    - **Please make sure that you do not have any blank spaces in your path**
4. Navigate to a folder in which you want to initialize an ARC
5. Open the Command Prompt (CMD) via typing in `cmd` in the folder address, press Enter
![image](https://user-images.githubusercontent.com/47781170/119680874-dd4e9b00-be41-11eb-8faf-ed699c827395.png)
6. Run the ARC Commander from the CMD by executing `arc`

> :bulb: A global config file will be created the first time you use the ARC Commander in the folder `<YourDrive>:\Users\<Username>\AppData\Roaming\DataPLANT\ArcCommander\`
