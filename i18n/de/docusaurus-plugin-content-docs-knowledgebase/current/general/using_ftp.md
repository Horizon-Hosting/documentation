---
id: using_ftp
title: Grundlagen der Dateiübertragung
description: Antworten auf alle häufig gestellten Fragen zu FTP.
---

## Was ist FTP?

FTP ist ein weit verbreitetes Protokoll, mit dem Sie Dateien und Ordner von Ihrem PC direkt auf Ihren Server übertragen können!

Einige Beispiele, wie FTP verwendet werden kann:

- Transport von Ordnern
- Hochladen von ZIP-Dateien
- Bearbeiten von Text- und Konfigurationsdateien

## Suche nach Ihrem FTP-Host und Informationen

Auf unserer [cPanel](https://hrzn.link/cpanel)-Startseite gibt es auf der rechten Seite ein Feld "Allgemeine Informationen".
Der Host wäre die Gemeinsame IP.
Der Port ist für FTP immer 21.
Den Benutzernamen und das Passwort können Sie im Bereich FTP-Konten erstellen.
Stellen Sie sicher, dass Sie den Text im Feld Verzeichnis entfernen, da er Ihren Zugriff auf die Dateien einschränkt.

Auf unserer Serverseite [Game Panel](https://hrzn.link/panel) finden Sie auf der linken Seite die Registerkarte "Einstellungen".
Im Feld SFTP DETAILS können Sie den Host und den Port im Feld SERVER ADDRESS finden und mit einem Linksklick kopieren.
Der Benutzername steht ebenfalls im Feld USERNAME und kann mit einem Linksklick kopiert werden.
Das Passwort ist dasselbe wie das Passwort für Ihr Panel-Konto.

## Verbindung zu Ihrem FTP-Server herstellen

Für die Verbindung zu einem FTP-Server benötigen Sie eine Art FTP-Client.

Einige davon sind [FileZilla Client](https://filezilla-project.org/download.php?type=client) und [WinSCP Client](https://winscp.net/eng/download.php), die wir empfehlen.

### FileZilla

Bei Filezilla können Sie die FTP-Informationen entweder in die Schnellverbindungsleiste am oberen Rand des Fensters eingeben oder über den "Site Manager" als "Site" speichern.
Stellen Sie sicher, dass Sie das richtige Protokoll auswählen, wenn Sie als "Site" speichern.
Belassen Sie den Anmeldetyp auf normal, geben Sie die Daten ein und wählen Sie Verbinden.
