---
id: cobalt_essentials_installation
title: Installazione di Cobalt Essentials
description: Cosa sono Cobalt Essentials e Cobalt Essentials Interface e come si installano?
---

## Cobalto Essenziale (CE)

### Che cos'è Cobalto Essentials?

Cobalt Essentials è un plugin di amministrazione basato sulla chat, che aggiunge "elementi essenziali" al suo server.
Si tratta di un sistema modulare di gestione dei permessi e del server, il che significa che può ottenere dei componenti aggiuntivi per estendere le sue funzionalità!

È stato scritto da [Preston](https://github.com/prestonelam2003) e dalla comunità open source, ed è disponibile per il download su [GitHub](https://github.com/prestonelam2003/CobaltEssentials).
Hanno anche un [server Discord](https://discord.gg/UV74wNXKdz) per l'assistenza e altre richieste.

### Requisiti
 
 - Un server BeamMP con la versione `3.x.x`.

### Installazione

#### Pannello di hosting HRZN

1. Vada al suo server BeamMP sul nostro [pannello di gioco] (https://hrzn.link/panel).
2. Clicchi sull'opzione "Mods" della barra laterale.
3. Clicchi su installa per "Cobalt Essentials". Se non lo vede, la preghiamo di [contattare l'assistenza] (/knowledgebase/getting_support).
4. Riavvii il suo server BeamMP nella scheda "Console".

Manuale ####
1. Scarichi il [File ZIP Cobalt Essentials](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip).
2. Sposti/carichi lo ZIP scaricato nella sua cartella `Resources/Server`.
3. Decomprima il file lì.
4. Riavvii il suo server.

## Interfaccia Cobalto Essentials (CEI)

### Che cos'è la CEI?

CEI è un'interfaccia di gioco per CE. Consente al personale di amministrazione del server di utilizzare un'interfaccia semplice, anziché l'elenco dei comandi della chat.
È stato scritto da [Stanley Dudek](https://github.com/StanleyDudek) ed è disponibile per il download su [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Requisiti

 - Un server BeamMP con la versione `3.x.x`.
 - Cobalt Essentials già installato

### Installazione

#### Pannello di hosting HRZN
1. Vada al suo server BeamMP sul nostro [pannello di gioco] (https://hrzn.link/panel).
2. Clicchi sull'opzione "Mods" della barra laterale.
3. Clicchi su installa per "Interfaccia Cobalt Essentials". Se non la vede, la preghiamo di [contattare l'assistenza] (/knowledgebase/getting_support).
4. Riavvii il suo server BeamMP nella scheda "Console".

Manuale ####

1. [Scarica CEI] (https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) cliccando su `Cobalt_Essentials_Interface_...zip`.
2. Carichi lo ZIP nella root (`"/"`, dove si trova l'eseguibile di BeamMP-Server) del suo server.
3. Disarchivi il file ZIP.
4. Apra il file `Resources\Server\CobaltEssentials\LoadExtensions.cfg` e aggiunga `CEI = "CEI"` in fondo.
5. Riavvii il suo server

Per aprire la CEI, esegua il comando `/CEI` in chat!