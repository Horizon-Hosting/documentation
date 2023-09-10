---
id: cobalt_essentials_installation
title: Installera Cobalt Essentials
description: Vad är Cobalt Essentials och Cobalt Essentials Interface och hur installerar jag dem?
---

## Cobalt Essentials (CE)

### Vad är Cobalt Essentials?

Cobalt Essentials är ett chattbaserat administrationsplugin som lägger till "essentials" till din server.
Det är ett modulärt behörighets- och serverhanteringssystem, vilket innebär att du kan få tillägg för att utöka dess funktionalitet!

Den har skrivits av [Preston](https://github.com/prestonelam2003) & open source community, och är tillgänglig för nedladdning på [GitHub](https://github.com/prestonelam2003/CobaltEssentials).
De har också en [Discord-server](https://discord.gg/UV74wNXKdz) för support och andra frågor.

### Krav
 
 - En BeamMP-server med version `3.x.x`.

### Installation

#### HRZN Värdpanel

1. Gå till din BeamMP-server på vår [spelpanel](https://hrzn.link/panel).
2. Klicka på alternativet "Mods" i sidofältet.
3. Klicka på installera för "Cobalt Essentials". Om du inte ser detta, vänligen [kontakta supporten](/knowledgebase/getting_support).
4. Starta om BeamMP-servern på fliken "Konsol"

#### Manual
1. Ladda ner [Cobalt Essentials ZIP File](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip).
2. Flytta/ladda upp den nedladdade ZIP-filen till mappen `Resources/Server`.
3. Packa upp filen där.
4. Starta om servern.

## Cobalt Essentials Interface (CEI)

### Vad är CEI?

CEI är ett gränssnitt för CE i spelet. Det gör det möjligt för serveradministrationspersonal att använda ett enkelt gränssnitt, snarare än listan över chattkommandon.
Den har skrivits av [Stanley Dudek](https://github.com/StanleyDudek) och finns tillgänglig för nedladdning på [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Krav

 - En BeamMP-server med version `3.x.x`.
 - Cobalt Essentials redan installerat

### Installation

#### HRZN Värdpanel
1. Gå till din BeamMP-server på vår [spelpanel](https://hrzn.link/panel).
2. Klicka på alternativet "Mods" i sidofältet.
3. Klicka på Installera för "Cobalt Essentials Interface". Om du inte ser detta, vänligen [kontakta supporten](/knowledgebase/getting_support).
4. Starta om BeamMP-servern på fliken "Konsol"

#### Manual

1. [Ladda ner CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) genom att klicka på `Cobalt_Essentials_Interface_...zip`.
2. Ladda upp ZIP-filen till roten (`"/"`, där BeamMP-Servers körbara program finns) på din server.
3. Avarkivera ZIP-filen.
4. Öppna `Resources\Server\CobaltEssentials\LoadExtensions.cfg` och lägg till `CEI = "CEI"` längst ner.
5. Starta om din server

För att öppna CEI, kör kommandot `/CEI` i chatten!