---
title: Getting and installing a gameserver token (GSL Token)
description: How to authenticate your server to the server list with a GSL Token
---

All Garry's Mod servers can be shown publicly through the Garry's Mod server list, to do this, a GSLT needs to be installed into the server.

## Creating and installing a Gameserver Login Token
1. Go to the [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) area on the steam website and login.
2. Locate the "Create a new game server account" near the bottom of the screen.
3. Enter the App ID for Garry's Mod (4000) and also a memo to remember which server it is for. For example, "DarkRP Server"
4. Copy the "Login Token" from the list of game server accounts.
5. Go to the [Game Panel](https://hrzn.link/panel) and go to your server.
6. In the startup section, paste the gameserver token in the "STEAM ACCOUNT TOKEN" box.
7. Restart/Start the server and now the server should authorise with the server list.

## Troubleshooting
* Please ensure you use one token per server as using one for multiple servers will cause authentication issues leading to your players being kicked.
* If a GSL Token is not used for a long period of time, it will expire and you will get this message when trying to run the server. `Could not establish connection to Steam servers. (GSL token expired)`. 
  - To fix this, you will need to go back to [Manage Game Server](https://steamcommunity.com/dev/managegameservers) and choose "Regenerate Token" on the token you wish to use. Then you can take the newly generated token and install it on your server.