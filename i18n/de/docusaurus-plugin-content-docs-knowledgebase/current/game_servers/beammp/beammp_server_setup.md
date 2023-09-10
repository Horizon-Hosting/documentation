---
id: beammp_server_setup
title: Server-Einrichtung
description: Ihren BeamMP Gameserver einrichten
---

## Einleitung
Diese Anleitung beschreibt, wie Sie Ihren neuen Horizon Hosting BeamMP Gameserver so einrichten, dass er in der Serverliste erscheint. 

## Beziehen eines Server Keys
* Loggen Sie sich zunächst mit Ihrem Discord-Account beim **[BeamMP Keymaster](https://beammp.com/k/keys)** ein.
* Klicken Sie auf den blauen Text 'hier', um einen neuen Schlüssel zu erstellen. 
* Füllen Sie den Servernamen und die IP aus. Bitte beachten Sie, dass das IP-Feld *nichts* bewirkt und als `0.0.0.0` belassen werden kann.
* Ihr neu erzeugter Schlüssel wird dann angezeigt.

**Bitte stellen Sie sicher, dass Sie diesen Schlüssel nicht weitergeben. Dieser Schlüssel ist einzigartig für Sie.**

Es wird 1 Schlüssel pro Server benötigt, damit Ihr Server in der Serverliste angezeigt wird. Wenn Sie mehr Serverschlüssel benötigen, können Sie diese durch eine Spende auf der [BeamMP Patreon](https://patreon.com/BeamMP)

## Startup-Konfiguration
Die Konfigurationsoptionen für Ihren Server werden im Reiter **"Startup "** im [HRZN Hosting Panel](https://hrzn.link/panel) angezeigt. Die folgenden Felder sind vorhanden:

|Name | Beschreibung | Beispiel |
|-----|-------------|---------|
| Authentication Key | Ihr Schlüssel vom [BeamMP Keymaster](https://beammp.com/k/keys). Dieser wird benötigt, damit Ihr BeamMP Server in der Serverliste angezeigt wird. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Name | Der Name Ihres Servers, der in der Serverliste angezeigt wird | `Horizon Networks BeamMP Server` |
| Cars | Die Anzahl der Autos, die ein Benutzer spawnen kann | `3` |
| Map | Die Map, die der Server verwenden wird. | `/levels/gridmap_v2/info.json`
| Description | Die Beschreibung des Servers, die in der Serverliste angezeigt wird | `Horizon Networks BeamMP Server` |
| Max Players | Die maximale Anzahl an Spielern, die auf Ihrem Server sein können. Bitte kontaktieren Sie den Support über [unseren Discord](https://hrzn.link/discord) oder ändern Sie Ihr Paket, um dies zu bearbeiten. | `20` |
| Private | Ob dein Server in der Serverliste angezeigt werden soll oder nicht. Wenn es wahr ist, wird er **nicht** angezeigt. | `true` oder `false` |

## Hinzufügen von Client-Mods zu Ihrem Server
Das Hinzufügen von Mods zu Ihrem Server kann über die Online-Registerkarte **"File Manager"** oder einen **SFTP-Client** erfolgen.  
* Navigieren Sie zunächst zum Ordner "Resources" und dann zum Ordner "Client". 
* Laden Sie dann Ihre Mod-ZIPs in diesen Ordner hoch.
* Wechseln Sie schließlich zum Reiter **Console** in der Systemsteuerung. Klicken Sie hier auf "Neustart", um Ihren Server neu zu starten und die Änderungen zu übernehmen.

Client-Mods und -Karten werden automatisch von allen Clients beim Beitritt heruntergeladen. 

## Ändern der Karte auf Ihrem Server
Sie können die Karte ändern, indem Sie das Feld "Karte" in der **Registerkarte "Startup "** im Panel ändern. Nachfolgend finden Sie die Standardkarten von BeamNG.Drive, die keine zusätzlichen Client-ZIPs benötigen, um verwendet zu werden:
* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industrial/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### Für benutzerdefinierte Karten ist eine zusätzliche Konfiguration erforderlich:
* Schauen Sie zunächst in das Karten-ZIP und öffnen Sie dann den Ordner **levels**.
* Innerhalb dieses Ordners sollte sich ein weiterer Ordner befinden. Kopieren Sie den Namen dieses Ordners.
* Bearbeiten Sie die Kartenkonfiguration im Abschnitt **"Startup "**. Sie sollte `/levels/MAPNAME/info.json` lauten, wobei der MAPNAME der Name ist, den Sie gerade kopiert haben.

## Beitritt zu Ihrem Server

Wenn dein Server in der Serverliste sichtbar ist, kannst du nach dem Namen im Spiel suchen und ihm beitreten. 

Wenn dein Server nicht auf der Serverliste zu sehen ist, kannst du ihm auch beitreten, indem du die IP-Adresse kopierst: 
* Kopieren Sie zunächst die IP-Adresse, die auf der Registerkarte **"Konsole "** des Panels angezeigt wird. (Example `94.130.165.43:25612`)
* Gehen Sie dann im Mehrspieler-Menü auf die Registerkarte "Direktverbindung" und klicken Sie auf **"Aus Zwischenablage einfügen "**. 
* Klicken Sie schließlich auf "Verbinden" und Sie befinden sich auf Ihrem Server.