---
id: gameserver_login_tokens
title: Hämta och installera en gameserver-token (GSL-token)
description: Hur du autentiserar din server till serverlistan med en GSL Token
---

Alla Garry's Mod-servrar kan visas offentligt via Garry's Mod-serverlistan, för att göra detta måste en GSLT installeras på servern.

## Skapa och installera ett inloggningstoken för Gameserver
1. Gå till området [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) på Steam-webbplatsen och logga in.
2. Leta reda på "Create a new game server account" längst ned på skärmen.
3. Ange App-ID för Garry's Mod (4000) och även ett memo för att komma ihåg vilken server det är för. Till exempel "DarkRP Server"
4. Kopiera "Login Token" från listan över spelserverkonton.
5. Gå till [Game Panel](https://hrzn.link/panel) och gå till din server.
6. I startavsnittet klistrar du in spelservertoken i rutan "STEAM ACCOUNT TOKEN".
7. Starta om/starta servern och nu bör servern godkännas med serverlistan.

## Felsökning
* Se till att du använder en token per server eftersom användning av en token för flera servrar kommer att orsaka autentiseringsproblem som leder till att dina spelare sparkas.
* Om en GSL-token inte används under en längre tidsperiod kommer den att förfalla och du kommer att få detta meddelande när du försöker köra servern. `Could not establish connection to Steam servers. (GSL token expired)`. 
  - För att åtgärda detta måste du gå tillbaka till [Hantera spelserver](https://steamcommunity.com/dev/managegameservers) och välja "Regenerate Token" på den token du vill använda. Sedan kan du ta den nyligen genererade token och installera den på din server.