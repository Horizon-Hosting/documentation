---
id: gameserver_login_tokens
title: Ottenere e installare un token del server di gioco (token GSL)
description: Come autenticare il suo server nell'elenco dei server con un token GSL
---

Tutti i server di Garry's Mod possono essere mostrati pubblicamente attraverso l'elenco dei server di Garry's Mod; per farlo, è necessario installare un GSLT nel server.

## Creare e installare un Token di accesso al Gameserver
1. Si rechi nell'area [Gestisci server di gioco](https://steamcommunity.com/dev/managegameservers) sul sito web di Steam ed effettui il login.
2. Individui la voce "Crea un nuovo account server di gioco" nella parte inferiore dello schermo.
3. Inserisca l'ID dell'applicazione per Garry's Mod (4000) e anche un promemoria per ricordare per quale server si tratta. Ad esempio, "Server DarkRP".
4. Copia il "Gettone di accesso" dall'elenco degli account del server di gioco.
5. Vada al [Pannello di gioco](https://hrzn.link/panel) e si rechi sul suo server.
6. Nella sezione di avvio, incolli il token del gameserver nella casella "STEAM ACCOUNT TOKEN".
7. Riavvii il server e ora il server dovrebbe autorizzarsi con l'elenco dei server.

## Risoluzione dei problemi
* Si assicuri di utilizzare un token per ogni server, in quanto utilizzarne uno per più server causerà problemi di autenticazione e i suoi giocatori saranno espulsi.
* Se un gettone GSL non viene utilizzato per un lungo periodo di tempo, scadrà e riceverà questo messaggio quando cercherà di eseguire il server. Impossibile stabilire la connessione ai server Steam. (Token GSL scaduto)`.
  - Per risolvere questo problema, dovrà tornare a [Gestire il server di gioco](https://steamcommunity.com/dev/managegameservers) e scegliere "Rigenera token" sul token che desidera utilizzare. Poi potrà prendere il nuovo token generato e installarlo sul suo server.