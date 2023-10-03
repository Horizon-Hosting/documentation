---
id: tutorial_filezilla_sftp
title: Installing and Using FileZilla FTP Client
description: How to download and Install FileZilla, and use it to transfer files to your server.
---

## Introduction
This guide details how to use SFTP with the Horizon Hosting gamepanel. This can be advantageous as SFTP allows for **faster**, **bulk** file transfer. However, it is not as intuitive as using the gamepanel's inbuilt file manager. This guide details how to install and setup **FileZilla**, a popular SFTP client. There is also a video available at the bottom of this page.

SFTP is a variant of the **File Transfer Protocol** (FTP) that allows for secure transfer. These days, SFTP is generally preferred.

## FileZilla Setup
### Downloading and Installing FileZilla
1. Navigate to the [FileZilla Client download page](https://filezilla-project.org/download.php)
2. Click "Download FileZilla Client"
3. Run the downloaded file
   - ![FileZilla downloads page](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. If prompted, click "Yes" on the User Account Control prompt.
   - ![User Account Control prompt, with Yes highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Agree with the license agreement
   - ![License Agreement page of the FileZilla installer](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Decline the optional offer
7. Click next
   - ![Optional Offer page, with decline option selected](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Select who you would like FileZilla to be installed for.
9. Click next
   - ![Installation Options](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Select which components you want. Gernally, the default selection is okay. If you would like a FileZilla icon on your desktop, select this option.
11. Click next
    - ![FileZilla Components](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Choose a folder to install FileZilla to. Changing this is not neccessary
13. Click next
    - ![Install Location](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Click install
    - ![Start menu folder](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Once the install is complete, click finish
    - ![Install complete](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla is now installed.**

### Connecting to your server
1. Navigate to your server on the panel
   - ![Gamepanel servers page](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Go to settings, and view the SFTP details
   - ![Gamepanel settings page](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Copy the server address, and paste it into the "Host" section on FileZilla
4. Copy the username, and paste it into the "Username" section on FileZilla
   - ![Server page, with SFTP details highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![FileZilla UI, with Host and Username sections highlighted](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Enter your password - this is the same password you use to login to the panel
6. Leave the port blank - this will be filled in automatically
7. Click "Quickconnect"

**You should now be connected to your server.** The remote server files should be shown on the right-hand side. 

If you do not see the files, or see errors in the status box, please check your password or [contact us](https://hrzn.link/getting_support) for further support.


## Video 

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Watch this video on YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)