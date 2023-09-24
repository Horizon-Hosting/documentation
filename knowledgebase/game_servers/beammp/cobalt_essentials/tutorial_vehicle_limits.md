---
id: tutorial_vehicle_limits
title: How to change Cobalt Essentials' Vehicle Limit
description: The Cobalt Essentials mod will set its own vehicle limit, separate from the main vehicle limit.
---

## Introduction
Cobalt Essentials is a powerful moderation tool for BeamMP. Cobalt Essentials defines its own vehicles limits, which can be dynamic for different players, depending on permission level. However, this is not clear when installing Cobalt Essentials. This guide details how to change this limit, so you can have as many cars as you want.

## Steps
1. Navigate to the File Manager
   - ![Gamepanel File Manager](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/1Gamepanel%20File%20Manager.png)
2. Go to **`Resources -> Server -> CobaltEssentials -> CobaltDB`**
   - ![Gamepanel File Manager CobaltDB Folder](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/2Gamepanel%20File%20Manager%20CobaltDB%20Folder.png)
3. Click on `permissions.json` to open the file
   - ![Gamepanel FIle Manager with permissions.json highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/3Gamepanel%20FIle%20Manager%20with%20permissions.json%20highlighted.png)

:::warning

The `JSON` formatting in this file is important. Please try to keep the formatting as it is where possible, otherwise it might break the server.

:::

4. Under the **`vehicleCap`** section, the number of vehicles each permission level can spawn is defined.
   - For example, with the default configuration, a user with a level of 1, can only spawn one vehicle. A level of 1 is the default for a normal player.
   - ![Gamepanel file editor for permissions.json, with default values set](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/4Gamepanel%20file%20editor%20for%20permissions.json,%20with%20default%20values%20set.png)
5. Set the levels to how you wish. The below config allows any player to spawn 10 vehicles
   - ![Gamepanel file editor for permissions.json, with updated values](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/5Gamepanel%20file%20editor%20for%20permissions.json,%20with%20updated%20values.png)

:::info

If the MaxCars value on the *server* (set in Startup) is lower, than it will be limited to that value.

:::

6. Click **`Save Content`** to save the file, then return to the **Console** section
   - ![Gamepanel file editor for permissions.json, with Save Content and Console buttons highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/6Gamepanel%20file%20editor%20for%20permissions.json,%20with%20Save%20Content%20and%20Console%20buttons%20highlighted.png)
7. Restart the server
   - ![Gamepanel Console page, with Restart button highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Cobalt%20Essentials/Vehicle%20Limits/7Gamepanel%20Console%20page,%20with%20Restart%20button%20highlighted.png)

**Done!** You have now adjusted Cobalt Essentials' vehicle limit.