---
id: gameserver_login_tokens
title: Getting and installing a gameserver token (GSL Token)
description: How to authenticate your server to the server list with a GSL Token
---

All Garry's Mod servers can be shown publicly through the Garry's Mod server list, to do this, a GSLT needs to be installed into the server.

## Creating and Install a Gameserver Login Token To Your Game Server
1. Go to the [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) area on the steam website and login.
2. Locate the "Create a new game server account" near the bottom of the screen.
3. Enter the App ID for Garry's Mod which is 4000 and also a memo to remember which server it is for e.g. DarkRP Server
4. Locate and copy the "Login Token" from the list of game server accounts.
5. Go to the [Horizon Networks Panel](https://hrzn.link/panel) and go to your server.
6. In the startup section, paste the gameserver token in the "STEAM ACCOUNT TOKEN" box.
7. Restart/Start the server and now the gameserver should authorise with the server list.

## Troubleshooting
Please ensure you use one token per server as using one for multiple servers will cause authentication issues leading to your players being kicked.
And remember, if you are looking for incredibly fast and reliable GMod server hosting, try out Horizon Networks! Start your Garry's Mod server today.
If a GSL Token is not use for a long period of time, it will expire and you will get this message when trying to run the server. "Could not establish connection to Steam servers. (GSL token expired)"
To fix this, you will need to go back to [Manage Game Server](https://steamcommunity.com/dev/managegameservers) and choose "Regenerate Token" on the token you wish to use. Then you can take the newly generated token and install it on your server.