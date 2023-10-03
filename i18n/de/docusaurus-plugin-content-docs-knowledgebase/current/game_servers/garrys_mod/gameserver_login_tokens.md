---
id: gameserver_login_tokens
title: Abrufen und Installieren eines Gameserver-Tokens (GSL Token)
description: So authentifizieren Sie Ihren Server in der Serverliste mit einem GSL-Token
---

Alle Garry's Mod-Server können über die Garry's Mod-Serverliste öffentlich angezeigt werden. Dazu muss ein GSLT auf dem Server installiert sein.

## Erstellen und Installieren eines Gameserver Login Token
1. Gehen Sie zum Bereich [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) auf der Steam-Website und melden Sie sich an.
2. Suchen Sie die Option "Neues Spielserverkonto erstellen" am unteren Rand des Bildschirms.
3. Geben Sie die App ID für Garry's Mod (4000) ein und außerdem eine Notiz, um sich zu merken, für welchen Server sie bestimmt ist. Zum Beispiel: "DarkRP Server".
4. Kopieren Sie den "Login Token" aus der Liste der Spielserverkonten.
5. Rufen Sie die [Spielkonsole](https://hrzn.link/panel) auf und gehen Sie zu Ihrem Server.
6. Fügen Sie im Bereich Startup den Gameserver-Token in das Feld "STEAM ACCOUNT TOKEN" ein.
7. Starten Sie den Server neu und der Server sollte sich nun mit der Serverliste autorisieren.

## Fehlersuche
* Bitte stellen Sie sicher, dass Sie einen Token pro Server verwenden, da die Verwendung eines Tokens für mehrere Server zu Authentifizierungsproblemen führen kann, die den Rauswurf Ihrer Spieler zur Folge haben.
* Wenn ein GSL-Token über einen längeren Zeitraum nicht verwendet wird, läuft er ab und Sie erhalten diese Meldung, wenn Sie versuchen, den Server zu starten. Die Verbindung zu den Steam-Servern konnte nicht hergestellt werden. (GSL-Token abgelaufen)`.
  - Um dies zu beheben, müssen Sie zurück zu [Spielserver verwalten](https://steamcommunity.com/dev/managegameservers) gehen und "Token neu generieren" für den Token wählen, den Sie verwenden möchten. Dann können Sie den neu generierten Token nehmen und auf Ihrem Server installieren.