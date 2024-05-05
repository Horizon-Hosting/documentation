---
title: Changing the server Icon
description: How to change the server icon that displays on the multiplayer server list.
---
A server icon is a picture or logo that shows up on the left side of the server name in your Minecraft client's multiplayer list.

## Preparing the image
Before setting up a server icon on your server you will need an image, for which there are a few requirements.
- The image size must be 64 pixels by 64 pixels
- The file type must be a `.png`
- The file name must be `server-icon`

## Setting up the icon
After preparing your image, follow the below steps to setup your server icon.
1. After prepairing your image, upload it to your Minecraft server using either the Panel file manager or a SFTP client like [FileZilla](/general/using-sftp).
2. Upload the `server-icon.png` file inside the root directory (/home/container)
3. After uploading the icon file, go back to the console tab and restart the server to apply the server-icon changes.