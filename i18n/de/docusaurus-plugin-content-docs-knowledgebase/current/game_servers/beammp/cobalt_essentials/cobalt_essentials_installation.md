---
id: cobalt_essentials_installation
title: Installation von Cobalt Essentials
description: Was sind Cobalt Essentials und Cobalt Essentials Interface und wie kann ich sie installieren?
---

## Cobalt Essentials (CE)

### Was ist Cobalt Essentials?

Cobalt Essentials ist ein Chat-basiertes Verwaltungs-Plugin, das Ihrem Server "Essentials" hinzufügt.
Es handelt sich um ein modulares System zur Verwaltung von Berechtigungen und Servern, d.h. Sie können sich Addons besorgen, um seine Funktionalität zu erweitern!

Es wurde von [Preston](https://github.com/prestonelam2003) & der Open-Source-Gemeinschaft geschrieben und steht auf [GitHub](https://github.com/prestonelam2003/CobaltEssentials) zum Download bereit.
Sie haben auch einen [Discord-Server](https://discord.gg/UV74wNXKdz) für Support und andere Fragen.

### Anforderungen
 
 - Ein BeamMP Server mit der Version `3.x.x`

### Installation

#### HRZN Hosting-Panel

1. Gehen Sie zu Ihrem BeamMP-Server auf unserer [Spielkonsole](https://hrzn.link/panel).
2. Klicken Sie auf die Option "Mods" in der Seitenleiste.
3. Klicken Sie auf Installieren für "Cobalt Essentials". Wenn Sie dies nicht sehen, wenden Sie sich bitte an den [Support](/knowledgebase/getting_support).
4. Starten Sie Ihren BeamMP-Server in der Registerkarte "Konsole" neu

#### Handbuch
1. Laden Sie die [Cobalt Essentials ZIP-Datei](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip) herunter.
2. Verschieben Sie die heruntergeladene ZIP-Datei in Ihren Ordner `Resources/Server`.
3. Entpacken Sie die Datei dort.
4. Starten Sie Ihren Server neu.

## Cobalt Essentials Interface (CEI)

### Was ist CEI?

CEI ist eine spielinterne Schnittstelle für CE. Sie ermöglicht es dem Server-Administrationspersonal, eine einfache Schnittstelle anstelle einer Liste von Chat-Befehlen zu verwenden.
Es wurde von [Stanley Dudek](https://github.com/StanleyDudek) geschrieben und steht auf [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface) zum Download bereit.

### Anforderungen

 - Ein BeamMP Server mit der Version `3.x.x`
 - Cobalt Essentials bereits installiert

### Installation

#### HRZN Hosting-Panel
1. Gehen Sie zu Ihrem BeamMP-Server auf unserer [Spielkonsole](https://hrzn.link/panel).
2. Klicken Sie auf die Option "Mods" in der Seitenleiste.
3. Klicken Sie auf Installieren für "Cobalt Essentials Interface". Wenn Sie dies nicht sehen, wenden Sie sich bitte an den [Support](/knowledgebase/getting_support).
4. Starten Sie Ihren BeamMP-Server in der Registerkarte "Konsole" neu

#### Handbuch

1. [Laden Sie CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) herunter, indem Sie auf die Datei `Cobalt_Essentials_Interface_...zip` klicken.
2. Laden Sie die ZIP-Datei in das Stammverzeichnis (`"/"`, in dem sich die ausführbare Datei BeamMP-Server befindet) Ihres Servers hoch.
3. Entpacken Sie die ZIP-Datei.
4. Öffnen Sie die Datei `Resources\Server\CobaltEssentials\LoadExtensions.cfg` und fügen Sie unten `CEI = "CEI"` hinzu.
5. Starten Sie Ihren Server neu

Um CEI zu öffnen, führen Sie den Befehl `/CEI` im Chat aus!