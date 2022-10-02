---
id: Archive
title: Archive
description: The company public file archive.
---

### What is it?

The Public Archive is an area where Horizon can publish documents which should be viewed by the public for any reason.

### Managing Files

To manage files you should login to the `Infrastructure VPS` via SFTP and navigate to `/var/www/Archive/` from here you may navigate to the folder you wish to upload your document to and upload it, it will automatically show up on the archive website. **Try to not update files as they cache, instead create the file under a new name.**

### Deleting Files

Under no circumstances should files be removed from the archive, the exception to this is when files are accidentally published and are considered to be either incomplete or not fit for publication. In any other case, you should not delete files, instead, you should “archive” them, this can be achieved by placing a notice inside of the directory stating the deprecated use of the folder and informing the user of where they may find a replacement for the file if it exists. You may also add a redirect towards the new folder for easier access.

### Directory Standards

Changing the file structure of the archive system should not take place unless authorized by a another manager and is necessary. You may add folders if they do not exist already but do not delete or move a file or folder after uploaded without a migration plan to ensure that users can still find the specified files. A folder structure should consist of `/Broad_Topic/Specific_Topic/Year/`. You should also use a capital letter on every word of files and folders.