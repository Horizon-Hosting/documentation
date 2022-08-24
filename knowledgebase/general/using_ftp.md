---
id: using_ftp
title: File Transfer Basics
description: Answering all the FAQs surrounding FTP.
---

## What is MYSQL?

FTP is a commonly used protocol that allows you to move files and folders from your PC directly to your server!

Some examples of how FTP could be used:

- Transporting folders
- Uploading ZIP files
- Editing text and config files

## Finding your FTP host and information

On our [cPanel](https://hrzn.link/cpanel) home page, there is a "General Information" box on the right hand side.
The host would be the Shared IP.
The port will always be 21 for FTP.
The username and password can be created in the FTP accounts section.
Make sure to remove the text in the Directory box as it will limit your access to the files.

On our [Game Panel](https://hrzn.link/panel) server page, there is "Settings" tab on the left hand side.
In the SFTP DETAILS box, the host and port can be found in the SERVER ADDRESS box and copied with a left click.
The username is simularly in the USERNAME box and can be copied with a left click.
The password is the same as the password for your panel account.

## Connecting to your FTP server

Connecting to an FTP server requires some kind of FTP client.

A few we recommend are [FileZilla Client](https://filezilla-project.org/download.php?type=client) and [WinSCP Client](https://winscp.net/eng/download.php)

### FileZilla

For Filezilla, you can either enter the FTP info into the quick-connect bar at the top of the window or save it as a "Site" using the "Site Manager".
Make sure you select the correct protocol if saving as a "Site".
Leave the logon type as normal and enter the info then select connect.
