---
id: cobalt_essentials_installation
title: Installing Cobalt Essentials
description: What are Cobalt Essentials and Cobalt Essentials Interface and and how do I install them?.
---

## Cobalt Essentials (CE)

### What is Cobalt Essentials?

Cobalt essentials is a chat based administration plugin, which adds "essentials" to your server.
It is a modular permissions and server management system, meaning you can get addons to extend it's functionality!

Cobalt Essentials is written by [Preston](https://github.com/prestonelam2003) & contributors. It is available on [GitHub](https://github.com/prestonelam2003/CobaltEssentials). They have also have a [Discord server](https://discord.gg/UV74wNXKdz).

### Requirements
A BeamMP Server running version 3.x.x

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

CEI is written by [Stanley Dudek](https://github.com/StanleyDudek), and is available on [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Requirements
A BeamMP Server running version 3.x.x **with Cobalt Essentials installed**

### Installation

:::info
We are working on getting CEI added to our mod manager, for easier install. But at this time, it is manual.
:::

1. [Download CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) by clicking the `Cobalt_Essentials_Interface_...zip`
2. Upload the ZIP to the root (`"/"`, where the BeamMP-Server executable is) of your server.
3. Unarchive the ZIP file.
4. Open the `Resources\Server\CobaltEssentials\LoadExtensions.cfg` and add `CEI = "CEI"` at the bottom.
5. Restart your server

To open CEI, run the `/CEI` command in chat!