---
id: installing_mods
title: Installing server mods
description: How to install server mods on your server
---
To install Fabric or Forge mods on your server you need to download the mod `.jar` file you wish to use and then upload it to the server, this guide will explain how to do this.

:::note
Even though both [CurseForge](https://www.curseforge.com/minecraft) and [Modrinth](https://modrinth.com/) are reputable sites, malware is still occasionally uploaded. Please be cautious with what you are downloading and using.
:::

## Where can I find mod files?
You are able to find mods published at many different places, some of these locations include [CurseForge](https://www.curseforge.com/minecraft) and [Modrinth](https://modrinth.com/) however there is many more sites available.

When downloading a mod file you must also ensure the following applies
- The file is the correct Minecraft version and the same as your server.
- You also download any dependancies that the mod needs, these are usually listed on the mods page.
- You ensure that the mod if for the correct mod loader Forge/Fabric

## Installing a mod
1. You need to obtain the mod file for example `EXAMPLE_PLUGIN.jar` and ensuring its using the correct Minecraft version that you are running your server with.
2. Once obtaining the jar file you can upload it to your Minecraft server using either the panel file manager or an SFTP client like [FileZilla](/knowledgebase/game_servers/tutorial_filezilla_sftp).
3. Upload the plugin file inside the directory named `mods`
4. After uploading the jar file you can go back to the console tab and restart the server.