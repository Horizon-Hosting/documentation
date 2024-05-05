---
title: Installing Addons
description: How to install an addon to your Garry's Mod server.
---

Installing addons is a crutial part of server development and adds new content to make your server more fun. There are lots of free creations and addons on the [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) to make your server its own. Premium addons (ones that cost money) are also available to purchase on websites such as [gmodstore](https://gmodstore.com).

## Installing Addons
### Workshop addons
1. Go to the [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), hover over browse and select [collections](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). When you reach the page select "Create Collection".
2. Fill in the "Create a Collection" page with the required info such as Title and Branding image. When prompted you must add at least one addon to start the collection.
3. Once your collection is made you will need to select the publish option to make it accessible.
4. Grab the number from your URL, this will identify your collection.
5. Go to the [Game Panel](https://hrzn.link/panel) and go to your server.
6. In the startup section, paste the collection number in the "WORKSHOP ID" box.
7. Start/Restart the server and it will download new addons to the server and load them during boot.

### Filesystem addons (Premium/Gmodstore)
1. Once you have purchased your selected addon from Gmodstore or any other website you will need to download it.
2. Now that you have your downloaded addon you will need to upload the file to the server via SFTP or the panel.
   - If using FTP you can also upload folders. Here is a guide on [how to use FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - If using the [Game Panel](https://hrzn.link/panel) simply go to your service and select Files.
5. From here, go to /garrysmod/addons/ and either drag and drop or select upload to add the addon zip file to your server.
6. Unzip/Unarchive the file by right clicking and selecting "Unarchive" on the panel.
7. Start/Restart the server and it will load the addons during boot.

### Clients getting errors on new addons?
Some addons require the client to download some content to be able to view the added content from the addon. Please view this guide (Coming Soon) to learn how to make clients to download required content when joining your server using FastDL/WorkshopDL.

## Troubleshooting
* Please ensure you have changed any addons name to remove capital letters, spaces or special characters are they may the addon from running.
* Be careful not to modify or delete any of the core game files, as this may mean you will need to reinstall your entire Garry's Mod server!
* If using the [Game Panel](https://hrzn.link/panel) make sure you are uploading a file such as a .zip not a folder as that is not supported by web browsers.