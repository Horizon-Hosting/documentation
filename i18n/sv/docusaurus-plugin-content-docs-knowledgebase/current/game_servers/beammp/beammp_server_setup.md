---
id: beammp_server_setup
title: Serverinställningar
description: Installera din BeamMP-spelserver
---

## Introduktion
Den här guiden beskriver hur du konfigurerar din nya BeamMP Gameserver från Horizon Hosting så att den visas på serverlistan.

## Erhålla en servernyckel
* Börja med att logga in på **[BeamMP Keymaster](https://beammp.com/k/keys)** med ditt Discord-konto.
* Klicka på den blå texten "här" för att skapa en ny nyckel.
* Fyll i serverns namn och IP. Observera att IP-fältet gör *ingenting* och kan lämnas som `0.0.0.0`.
* Din nyligen genererade nyckel visas sedan.

**Var vänlig se till att inte dela denna nyckel. Den här nyckeln är unik för dig.**

1 nyckel per server krävs för att din server ska visas på serverlistan. Om du behöver fler servernycklar kan detta göras genom att donera på [BeamMP Patreon] (https://patreon.com/BeamMP)

## Startkonfiguration
Konfigurationsalternativ för din server visas på fliken **"Startup"** i [HRZN Hosting Panel] (https://hrzn.link/panel). Följande fält kommer att visas:

|Namn | Beskrivning | Exempel |
|-----|-------------|---------|
| Autentiseringsnyckel | Din nyckel från [BeamMP Keymaster] (https://beammp.com/k/keys). Detta krävs för att din BeamMP-server ska visas på serverlistan. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Namn | Namnet på din server, som kommer att visas i serverlistan | `Horizon Networks BeamMP Server` |
| Bilar | Antalet bilar som en användare kan skapa | `3` |
| Karta | Den karta som servern ska använda. | `/levels/gridmap_v2/info.json`
| Beskrivning | Beskrivningen av din server, som visas i serverlistan | `Horizon Networks BeamMP Server` |
| Max Players | Det maximala antalet spelare som kan finnas på din server, kontakta support via [vår Discord] (https://hrzn.link/discord) eller ändra ditt paket för att redigera detta. | `20` |
| Privat | Om din server ska visas på serverlistan eller inte. Om det är sant kommer den **inte** att visas. | `true` eller `false` |

## Lägga till klientmodifikationer på din server
Du kan lägga till mods på din server genom att använda online-fliken **"Filhanteraren"** eller en **SFTP-klient**.  
* Navigera först till mappen `Resources` och sedan till mappen `Client`.
* Ladda sedan upp dina mod ZIP-filer till denna mapp.
* Slutligen går du tillbaka till fliken **"Konsol"** på panelen. Klicka här på starta om för att starta om servern och tillämpa ändringarna.

Klientmoddar och kartor kommer automatiskt att laddas ner av alla klienter när de ansluter sig.

## Ändra kartan på din server
Du kan ändra kartan genom att ändra fältet `Map` i **"Startup"-fliken** på panelen. Nedan visas standardkartorna för BeamNG.Drive som inte behöver ytterligare ZIP-filer för att kunna användas:
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

### För anpassade kartor krävs ytterligare konfiguration:
* Titta först i ZIP-kartan och öppna sedan mappen **nivåer**.
* I den här mappen ska det finnas en annan mapp. Kopiera namnet på denna mapp.
* Redigera kartkonfigurationen i avsnittet **"Startup"**. Den ska läsa `/levels/MAPNAME/info.json` med MAPNAME som det namn du just kopierade.

## Att ansluta till din server

Om din server är synlig på serverlistan kan du söka efter namnet i spelet och gå med i den.

Om din server inte är synlig på serverlistan kan du ansluta dig till den genom att:
* Kopiera först den IP-adress som syns på fliken **"Console"** på panelen. (Example `94.130.165.43:25612`)
* Gå sedan till fliken "Direct Connect" i multiplayermenyn och klicka på **"Paste from Clipboard"**.
* Klicka slutligen på "Connect" så kommer du till din server.