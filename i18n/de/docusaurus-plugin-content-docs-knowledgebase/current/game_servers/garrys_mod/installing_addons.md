---
id: installing_addons
title: Installieren von Zusatzprogrammen
description: Wie Sie ein Addon auf Ihrem Garry's Mod-Server installieren.
---

Die Installation von Addons ist ein wichtiger Bestandteil der Serverentwicklung und fügt neue Inhalte hinzu, die Ihren Server noch interessanter machen. Es gibt viele kostenlose Kreationen und Addons im [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), mit denen Sie Ihrem Server eine eigene Note geben können. Premium-Addons (kostenpflichtige) können Sie auch auf Websites wie [gmodstore](https://gmodstore.com) erwerben.

## Installieren von Addons
### Workshop-Zusätze
1. Gehen Sie zum [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), bewegen Sie den Mauszeiger auf "Durchsuchen" und wählen Sie [Sammlungen](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). Wenn Sie die Seite erreichen, wählen Sie "Sammlung erstellen".
2. Geben Sie auf der Seite "Sammlung erstellen" die erforderlichen Informationen ein, z. B. den Titel und das Markenbild. Wenn Sie dazu aufgefordert werden, müssen Sie mindestens ein Addon hinzufügen, um die Sammlung zu starten.
3. Sobald Ihre Sammlung erstellt ist, müssen Sie die Option Veröffentlichen wählen, um sie zugänglich zu machen.
4. Nehmen Sie die Nummer aus Ihrer URL, damit wird Ihre Sammlung identifiziert.
5. Rufen Sie die [Spielkonsole](https://hrzn.link/panel) auf und gehen Sie zu Ihrem Server.
6. Fügen Sie im Abschnitt "Start" die Nummer der Sammlung in das Feld "WORKSHOP ID" ein.
7. Starten Sie den Server neu. Er lädt neue Addons auf den Server herunter und lädt sie beim Booten.

### Dateisystem-Erweiterungen (Premium/Gmodstore)
1. Nachdem Sie Ihr ausgewähltes Addon im Gmodstore oder auf einer anderen Website gekauft haben, müssen Sie es herunterladen.
2. Jetzt, wo Sie Ihr heruntergeladenes Addon haben, müssen Sie die Datei über SFTP oder das Panel auf den Server hochladen.
   - Wenn Sie FTP verwenden, können Sie auch Ordner hochladen. Hier finden Sie eine Anleitung zur [Verwendung von FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - Wenn Sie das [Game Panel](https://hrzn.link/panel) verwenden, gehen Sie einfach zu Ihrem Dienst und wählen Sie Dateien.
5. Gehen Sie von hier aus zu /garrysmod/addons/ und fügen Sie die Zip-Datei des Addons entweder per Drag & Drop oder durch Hochladen zu Ihrem Server hinzu.
6. Entpacken/entarchivieren Sie die Datei, indem Sie mit der rechten Maustaste klicken und "Entpacken" auf dem Bedienfeld wählen.
7. Starten Sie den Server neu und er wird die Addons beim Booten laden.

### Clients erhalten Fehler bei neuen Addons?
Einige Addons erfordern, dass der Client bestimmte Inhalte herunterlädt, damit er die hinzugefügten Inhalte des Addons sehen kann. In dieser Anleitung (Coming Soon) erfahren Sie, wie Sie Clients dazu bringen, die erforderlichen Inhalte herunterzuladen, wenn Sie Ihrem Server mit FastDL/WorkshopDL beitreten.

## Fehlersuche
* Vergewissern Sie sich, dass Sie den Namen eines Addons geändert haben, um Großbuchstaben, Leerzeichen oder Sonderzeichen zu entfernen, da diese die Ausführung des Addons verhindern können.
* Achten Sie darauf, keine der Kerndateien des Spiels zu verändern oder zu löschen, da dies bedeuten kann, dass Sie Ihren gesamten Garry's Mod-Server neu installieren müssen!
* Wenn Sie das [Game Panel](https://hrzn.link/panel) verwenden, stellen Sie sicher, dass Sie eine Datei hochladen, z.B. eine .zip-Datei, nicht einen Ordner, da dies von Webbrowsern nicht unterstützt wird.