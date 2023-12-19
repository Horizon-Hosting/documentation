---
id: dynmap
title: Dynmap Setup
description: How to install Dynmap on your Minecraft server.
---
A Google Maps-like map for your Minecraft server that can be viewed in a browser. Easy to set up when making use of Dynmap's integrated webserver which works out-of-the-box, while also available to be integrated into existing websites running on Apache and the like. Dynmap can render your worlds using different renderers, some suitable for performance, some for high detail.

## Installation
1. Go to the [download page](https://modrinth.com/plugin/dynmap/versions) for Dynmap
2. Locate the latest version that supports your server version and type and download the `dynmap-*.jar` file
3. Once obtaining the dynmap jar file you can upload it to your Minecraft server using either the pterodactyl file manager or a SFTP client like [FileZilla.](/knowledgebase/game_servers/tutorial_filezilla_sftp)
4. Upload the plugin file inside the relevant directory either `plugins` or `mods`
5. After uploading the jar file you can go back to the console tab and restart the server

## Setup Guide
1. Navigate to your server on the panel
2. Stop the server inside the console tab of your server
3. Navigate to Network, and create a new allocation
4. Note down the IP Address and Port of the new allocation you just created
5. Using either the pterodactyl file manager or a SFTP client like [FileZilla.](/knowledgebase/game_servers/tutorial_filezilla_sftp) locate the `dynmap` folder inside of the `plugins` folder
6. Locate and open the `configuration.txt` file
7. In the `configuration.txt` find the line that says `deftemplatesuffix: hires` and replace this with `deftemplatesuffix: vlowres` or `deftemplatesuffix: lowres`.
8. Next locate the line that says `webserver-port: 8123` and replace this with `webserver-port: <port from step 4>`
9. Save changes to the `configuration.txt`
10. Go back to the console tab on your server and click **start**
11. Once the Minecraft server fully starts up, your Dynmap server should be live at `http://IP:PORT` making sure to replace `IP` and `PORT` with the relevant values from step 4.

## Common Issues
### Webpage Not Loading
If you are having issues with the webpage not loading, please ensure your using `http://IP:PORT` and not `https://IP:PORT` if after that its still not working please open a [support request](/knowledgebase/getting_support) and we will be able to assist you.