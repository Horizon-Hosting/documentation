---
id: beammp_server_setup
title: Server Setup
description: Setting up your BeamMP Gameserver
---

## Introduction
This guide details how to setup your new Horizon Hosting BeamMP Gameserver so that it shows on the serverlist. 

## Obtaining a server key
* Start by logging into the **[BeamMP Keymaster](https://beammp.com/k/keys)** with your Discord account.
* Click the blue 'here' text to create a new key. 
* Fill out the server name and the IP. Please note, the IP field does *nothing* and can be left as `0.0.0.0`.
* Your newly generated key will then be shown.

**Please ensure to not share this key. This key is unique to you.**

1 key per server is required for your server to show on the serverlist. If you require more server keys, this can be done by donating on the [BeamMP Patreon](https://patreon.com/BeamMP)

## Configuration
Configuration options for your server will show in the **"Startup" tab** on the [HRZN Hosting Panel](https://hrzn.link/panel). The following fields will be present:

|Name | Description | Example |
|-----|-------------|---------|
| Authentication Key | Your key from the [BeamMP Keymaster](https://beammp.com/k/keys). This is required to make your BeamMP server show on the serverlist. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Name | The name of your server, which will show on the server list | `Horizon Networks BeamMP Server` |
| Cars | The number of cars that a user can spawn | `3` |
| Map | The map that the server will use. | `/levels/gridmap_v2/info.json`
| Description | The description of your server, which will show on the server list | `Horizon Networks BeamMP Server` |
| Max Players | The maximum number of players that can be on your server, please contact support via [our Discord](https://hrzn.link/discord) or change your package to edit this. | `20` |
| Private | Whether your server should show on the server list or not. If it is true, it will **not** show. | `true` or `false` |

## Adding client mods to your server
Adding mods to your server can be done by using the online **"File Manager" tab** or an **SFTP Client**.  
* Firstly, navigate to the `Resources` folder, and then to the `Client` folder. 
* Then, upload your mod ZIPs to this folder.
* Finally, head back to the **"Console" tab** on the panel. Here, click restart to restart your server and apply the changes.

Client mods and maps will automatically be downloaded by all clients upon joining. 

## Changing the map on your server
Changing the map can be done by changing the `Map` field in the **"Startup" tab** on the Panel. Shown below are the default BeamNG.Drive maps that do not need additional client ZIPs to be used:
* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industrial/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### For custom maps, additional configuration is required:
* First, look inside the map ZIP and then open the **levels** folder.
* Inside this folder, there should be another folder. Copy the name of this folder.
* Edit the map configuration in the **"Startup" section**. It should read `/levels/MAPNAME/info.json` with the MAPNAME being the name you just copied.

## Joining your server

If your server is visible on the serverlist, you can search for the name in-game and join it. 

Alternatively, if your server is not visible on the serverlist, you can join it by: 
* First copying the IP address visible in the **"Console" tab** on the panel. (Example `94.130.165.43:25612`)
* Then, go to the "Direct Connect" tab in the multiplayer menu and click **"Paste from Clipboard"**. 
* Finally, click "Connect" and you will be on your server.