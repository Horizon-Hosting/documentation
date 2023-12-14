---
id: installing_plugins
title: Installing Plugins
description: How to install plugins on your minecraft server.
---
Minecraft servers such as Spigot or Paper are able to run plugins which modify the experience within the server. Plugins come in many different forms and this guide explains how to setup and install plugins on your server.

## Where can I find plugins?
You are able to find plugins published at many different places, some of these locations include [SpigotMC](https://www.spigotmc.org/) and [Hangar](https://hangar.papermc.io/) however there is many more sites available.
:::note
Even though both [SpigotMC](https://www.spigotmc.org/) and [Hangar](https://hangar.papermc.io/) are reputable sites, malware is still occasionally uploaded. Please be cautious with what you are downloading and using.
:::

## Installing a plugin
1. You need to obtain the plugin file for example `EXAMPLE_PLUGIN.jar` and ensuring its using the correct Minecraft version that you are running your server with which can be found in many places documented [above.](/knowledgebase/game_servers/minecraft/installing_plugins#where-can-i-find-plugins)
2. Once obtaining the jar file you can upload it to your Minecraft server using either the pterodactyl file manager or a SFTP client like [FileZilla.](/knowledgebase/game_servers/tutorial_filezilla_sftp)
3. Upload the plugin file inside the directory named `plugins`
4. After uploading the jar file you can go back to the console tab and restart the server.