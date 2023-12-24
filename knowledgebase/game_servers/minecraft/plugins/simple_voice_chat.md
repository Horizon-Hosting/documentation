---
id: simple_voice_chat
title: Simple Voice Chat Setup
description: How to install Simple Voice Chat on your Minecraft server.
---
A proximity voice chat for Minecraft. You can choose between push to talk (PTT) or voice activation. The default PTT key is `CAPS LOCK`, but it can be changed in the key bind settings. You can access the voice chat settings by pressing the `V` key.

## Installation
1. Go to the [download page](https://modrinth.com/plugin/simple-voice-chat/versions) for Simple Voice Chat
2. Locate the latest version that supports your server version and type and download the `voicechat-*.jar` file
3. Once obtaining the Simple Voice Chat jar file you can upload it to your Minecraft server using either the pterodactyl file manager or a SFTP client like [FileZilla.](/knowledgebase/game_servers/tutorial_filezilla_sftp)
4. Upload the plugin file inside the relevant directory either `plugins` or `mods`
5. After uploading the jar file you can go back to the console tab and restart the server

## Setup Guide
1. Navigate to your server on the panel
2. Stop the server inside the console tab of your server
3. Navigate to Network, and create a new allocation
4. Note down the IP Address and Port of the new allocation you just created
5. Using either the pterodactyl file manager or a SFTP client like [FileZilla.](/knowledgebase/game_servers/tutorial_filezilla_sftp) locate the `voicechat` folder inside of the `plugins` or `mods` folder
6. Locate and open the `voicechat-server.properties` file
7. In the `voicechat-server.properties` find the line that says `port=24454` and replace this with `port=<port from step 4>`
8. Save changes to the `voicechat-server.properties`
9. Go back to the console tab on your server and click **start**