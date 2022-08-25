---
id: cobalt_essentials_installation
title: Installing Cobalt Essentials
description: Installing Cobalt Essentials and Cobalt Essentials Interface to your BeamMP server.
---

## Cobalt Essentials (CE)

### What is Cobalt Essentials?

Cobalt essentials is a chat based administion plugin, which adds "essentials" to your server.
It is a modular permissions and server management system, meaning you can get addons to extend it's functionality!

### Installation

1. Go to your BeamMP server on our [game panel](https://hrzn.link/panel).
2. Click on the "Mods" option of the sidebar.
3. Click on install for "Cobalt Essentials"

It's as simple as that!

## Cobalt Essentials Interface (CEI)

### What is CEI?

CEI is an in game interface for CE. It allows server administration staff to use a simple interface, rather than the
list of chat commands.

### Installation

:::info
We are working on getting CEI added to our mod manager, for easier install. But at this time, it is manual.
:::

:::caution
You **must** have Cobalt Essentials installed already!
:::

1. [Download CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) by clicking the `Cobalt_Essentials_Interface_...zip`
2. Upload the ZIP to your server, either via our panel or SFTP.
3. Unpack the ZIP file.
4. Open the `Resources\Server\CobaltEssentials\LoadExtensions.cfg` and add `CEI = "CEI"` at the bottom.
5. Restart your server

To open CEI, run the `/CEI` command in chat!