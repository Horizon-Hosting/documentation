---
id: using_mysql
title: Grundläggande om MySQL
description: Svar på alla vanliga frågor om MySQL.
---

## Vad är MySQL?

MYSQL är en vanligt förekommande databaslagringslösning som kan användas för att lagra data på dina spelservrar eller till och med för Discord-bots och webbplatser!

Några exempel på hur MySQL kan användas:

- Spelservrar använder MySQL för gamemodes och plugins för att lagra data, detta kan också hjälpa till att länka flera servrar tillsammans.
- Webbservrar använder MySQL i webbappar för att lagra data på ett säkert sätt. Till exempel dina inlägg i forumet.
- På Discord-bots kan MySQL användas för att lagra användarnas levelling-information.

## Hitta databasens värd och port

På vår [cPanel](https://hrzn.link/cpanel) hemsida finns det en "Allmän information"-ruta på höger sida.
Värden skulle vara den delade IP-adressen

Porten kommer alltid att vara `3306`.

:::tip
Om du installerar något på själva webbservern kan du bara ange `localhost` som värd!
:::

## Skapa en databas och användare

På vår [cPanel](https://hrzn.link/cpanel), bläddra ner till databaser och klicka på "MySQL® Database Wizard".

Detta kommer att vägleda dig genom att skapa en databas och visa dig dina referenser.