---
id: cobalt_essentials_installation
title: Installing Cobalt Essentials
description: What are Cobalt Essentials and Cobalt Essentials Interface and and how do I install them?.
---

## Cobalt Essentials (CE)

### What is Cobalt Essentials?

Cobalt Essentials is a chat-based administration plugin, which adds "essentials" to your server.
It is a modular permissions and server management system, meaning you can get addons to extend it's functionality!

It has been written by [Preston](https://github.com/prestonelam2003) & the open source community, and is available for download on [GitHub](https://github.com/prestonelam2003/CobaltEssentials).
They also have a [Discord server](https://discord.gg/UV74wNXKdz) for support and other queries.

### Requirements
 
 - A BeamMP Server running version `3.x.x`

### Installation

#### HRZN Hosting Panel

1. Go to your BeamMP server on our [game panel](https://hrzn.link/panel).
2. Click on the "Mods" option of the sidebar.
3. Click on install for "Cobalt Essentials". If you do not see this, please [contact support](/knowledgebase/getting_support).
4. Restart your BeamMP server in the "Console" tab

#### Manual
1. Download the [Cobalt Essentials ZIP File](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip).
2. Move/upload the downloaded ZIP to your `Resources/Server` folder.
3. Unzip the file there.
4. Restart your server.

## Cobalt Essentials Interface (CEI)

### What is CEI?

CEI is an in game interface for CE. It allows server administration staff to use a simple interface, rather than the list of chat commands.
It has been written by [Stanley Dudek](https://github.com/StanleyDudek), and is available for download on [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Requirements

 - A BeamMP Server running version `3.x.x`
 - Cobalt Essentials already installed

### Installation

#### HRZN Hosting Panel
1. Go to your BeamMP server on our [game panel](https://hrzn.link/panel).
2. Click on the "Mods" option of the sidebar.
3. Click on install for "Cobalt Essentials Interface". If you do not see this, please [contact support](/knowledgebase/getting_support).
4. Restart your BeamMP server in the "Console" tab

#### Manual

1. [Download CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) by clicking the `Cobalt_Essentials_Interface_...zip`
2. Upload the ZIP to the root (`"/"`, where the BeamMP-Server executable is) of your server.
3. Unarchive the ZIP file.
4. Open the `Resources\Server\CobaltEssentials\LoadExtensions.cfg` and add `CEI = "CEI"` at the bottom.
5. Restart your server

To open CEI, run the `/CEI` command in chat!