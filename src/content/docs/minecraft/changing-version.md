---
title: Changing the Minecraft Version
description: How to change and update the server with a different Minecraft version.
---

:::danger
We highly encourage making a backup of the server before switching version, data may be lost and **going back versions is not supported and will cause world corruptions.**
:::

1. Navigate to the [Game Panel](https://hrzn.link/panel) and select the server you wish to use.
2. Locate and navigate to the server startup section and locate the **Minecraft Version** field.
3. Replace the **Minecraft Version** with a valid server version, for example **1.16.4** or **1.8.8**
4. Navigate to the settings page and press the **Reinstall** button.

## Changing server type
To change your server type, for example changing `PaperMC -> Forge`, you can follow the steps below.
1. Navigate to the [Game Panel](https://hrzn.link/panel) and select the server you wish to use.
2. Locate and navigate to the Software section of the panel.
3. Select the software you want you use and press Change Version, ensure the Reinstall Server toggle is checked and press Change Version.

## Common Issues
### Invalid Java Version
If the server fails to start and the console outputs something along the lines of ``Minecraft x.xx requires running the server with Java xx or above.`` Then it means your server is using the wrong Java version and the version of Minecraft you are using does not support the Java version you are trying to use it with. To fix this follow the steps below:
1. Navigate to the startup startup section and locate the **Docker Image** field.
2. Select the correct Docker image that matches your server version as below.
    - **Minecraft version 1.8** use `Java 8`
    - **Minecraft version 1.12** use `Java 11`
    - **Minecraft version 1.17** use `Java 16`
    - **Minecraft version 1.18** use `Java 17`

If you are using a minecraft version that does not run on one of the java version's listed above open a [support request](/knowledgebase/get