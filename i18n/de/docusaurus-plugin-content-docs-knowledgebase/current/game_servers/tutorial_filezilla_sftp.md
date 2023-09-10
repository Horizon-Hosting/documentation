---
id: tutorial_filezilla_sftp
title: Installation und Verwendung von FileZilla FTP Client
description: So laden Sie FileZilla herunter, installieren es und verwenden es, um Dateien auf Ihren Server zu übertragen.
---

## Einleitung
In dieser Anleitung erfahren Sie, wie Sie SFTP mit dem Gamepanel von Horizon Hosting verwenden können. Dies kann von Vorteil sein, da SFTP eine **schnellere**, **große** Dateiübertragung ermöglicht. Allerdings ist es nicht so intuitiv wie die Verwendung des eingebauten Dateimanagers des Gamepanels. In dieser Anleitung erfahren Sie, wie Sie **FileZilla**, einen beliebten SFTP-Client, installieren und einrichten. Unten auf dieser Seite finden Sie auch ein Video.

SFTP ist eine Variante des **File Transfer Protocol** (FTP), die eine sichere Übertragung ermöglicht. Heutzutage wird SFTP im Allgemeinen bevorzugt.

## FileZilla Einrichtung
### Herunterladen und Installieren von FileZilla
1. Navigieren Sie zur [FileZilla Client Download-Seite](https://filezilla-project.org/download.php)
2. Klicken Sie auf "FileZilla Client herunterladen".
3. Führen Sie die heruntergeladene Datei aus
   - ![FileZilla Downloads Seite](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Wenn Sie dazu aufgefordert werden, klicken Sie bei der Aufforderung zur Benutzerkontensteuerung auf "Ja".
   - ![Eingabeaufforderung zur Benutzerkontensteuerung, wobei Ja hervorgehoben ist](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Stimmen Sie der Lizenzvereinbarung zu
   - ![Seite der Lizenzvereinbarung des FileZilla-Installationsprogramms](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Das optionale Angebot ablehnen
7. Klicken Sie auf Weiter
   - ![Optionale Angebotsseite, mit gewählter Ablehnungsoption](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Wählen Sie aus, für wen FileZilla installiert werden soll.
9. Weiter klicken
   - ![Installations-Optionen](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Wählen Sie aus, welche Komponenten Sie wünschen. In der Regel ist die Standardauswahl in Ordnung. Wenn Sie ein FileZilla-Symbol auf Ihrem Desktop haben möchten, wählen Sie diese Option.
11. Klicken Sie auf Weiter
    - ![FileZilla Komponenten](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Wählen Sie einen Ordner, in dem FileZilla installiert werden soll. Dies zu ändern ist nicht notwendig
13. Weiter klicken
    - ![Standort installieren](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Klicken Sie auf Installieren
    - ![Ordner Startmenü](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Sobald die Installation abgeschlossen ist, klicken Sie auf Fertig stellen
    - ![Installation abgeschlossen](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla ist jetzt installiert.**

### Verbindung zu Ihrem Server herstellen
1. Navigieren Sie im Panel zu Ihrem Server
   - ![Gamepanel Server Seite](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Gehen Sie zu Einstellungen und sehen Sie sich die SFTP-Details an
   - ![Gamepanel Einstellungen Seite](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Kopieren Sie die Serveradresse und fügen Sie sie in den Abschnitt "Host" in FileZilla ein.
4. Kopieren Sie den Benutzernamen, und fügen Sie ihn in den Abschnitt "Benutzername" in FileZilla ein
   - ![Server-Seite, mit hervorgehobenen SFTP-Details](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![FileZilla UI, mit hervorgehobenen Abschnitten Host und Benutzername](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Geben Sie Ihr Passwort ein - dies ist dasselbe Passwort, das Sie für die Anmeldung beim Panel verwenden
6. Lassen Sie den Port leer - er wird automatisch ausgefüllt.
7. Klicken Sie auf "Quickconnect".

**Sie sollten nun mit Ihrem Server verbunden sein.** Die Dateien des Remote-Servers sollten auf der rechten Seite angezeigt werden.

Wenn Sie die Dateien nicht sehen oder im Statusfeld Fehler angezeigt werden, überprüfen Sie bitte Ihr Passwort oder wenden Sie sich an [contact us](https://hrzn.link/getting_support), um weitere Unterstützung zu erhalten.


## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Dieses Video auf YouTube ansehen](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)