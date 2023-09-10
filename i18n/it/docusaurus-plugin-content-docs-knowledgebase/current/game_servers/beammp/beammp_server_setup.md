---
id: beammp_server_setup
title: Impostazione del server
description: Impostazione del server di giochi BeamMP
---

## Introduzione
Questa guida spiega come configurare il suo nuovo Horizon Hosting BeamMP Gameserver in modo che venga visualizzato nella lista dei server.

## Ottenere una chiave del server
* Iniziare accedendo al **[BeamMP Keymaster](https://beammp.com/k/keys)** con il suo account Discord.
* Clicchi sul testo blu 'qui' per creare una nuova chiave.
* Compilare il nome del server e l'IP. Si noti che il campo IP non serve a nulla e può essere lasciato come `0.0.0.0`.
* Verrà quindi mostrata la chiave appena generata.

**Si assicuri di non condividere questa chiave. Questa chiave è unica per lei.**

È necessaria 1 chiave per server affinché il suo server compaia nella lista dei server. Se desidera più chiavi per il server, può farlo con una donazione su [BeamMP Patreon](https://patreon.com/BeamMP).

## Configurazione di avvio
Le opzioni di configurazione del suo server saranno visualizzate nella scheda **"Avvio "** del [Pannello di hosting HRZN](https://hrzn.link/panel). Saranno presenti i seguenti campi:

|Nome | Descrizione | Esempio |
|-----|-------------|---------|
| Chiave di autenticazione | La sua chiave dal [BeamMP Keymaster](https://beammp.com/k/keys). Questa è necessaria per far apparire il suo server BeamMP nell'elenco dei server. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Nome | Il nome del suo server, che apparirà nell'elenco dei server | `Horizon Networks BeamMP Server` |
| Auto | Il numero di auto che un utente può generare | `3` |
| Mappa | La mappa che il server utilizzerà. | `/livelli/gridmap_v2/info.json`
| Descrizione | La descrizione del suo server, che apparirà nell'elenco dei server | `Horizon Networks BeamMP Server` |
| Giocatori massimi | Il numero massimo di giocatori che possono essere presenti sul suo server, contatti l'assistenza tramite [il nostro Discord](https://hrzn.link/discord) o modifichi il suo pacchetto per modificarlo. | `20` |
| Privato | Se il suo server deve apparire o meno nell'elenco dei server. Se è vero, non verrà mostrato. | Vero o Falso.

## Aggiunta di mod client al suo server
L'aggiunta di mod al suo server può essere effettuata utilizzando la scheda online **"File Manager "** o un **Client SFTP**.  
* Prima di tutto, navighi nella cartella `Resources` e poi nella cartella `Client`.
* Poi, carichi gli ZIP delle sue mod in questa cartella.
* Infine, torni alla scheda **"Console "** del pannello. Qui, clicchi su riavvia per riavviare il server e applicare le modifiche.

Le mod e le mappe dei clienti saranno scaricate automaticamente da tutti i clienti al momento dell'iscrizione.

## Cambiare la mappa sul suo server
La modifica della mappa può essere effettuata cambiando il campo `Map` nella scheda **"Avvio "** del Pannello. Di seguito sono riportate le mappe predefinite di BeamNG.Drive che non necessitano di ZIP client aggiuntivi per essere utilizzate:
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

### Per le mappe personalizzate, è necessaria una configurazione aggiuntiva:
* Prima di tutto, guardi all'interno dello ZIP della mappa e poi apra la cartella **levels**.
* All'interno di questa cartella, dovrebbe esserci un'altra cartella. Copi il nome di questa cartella.
* Modifichi la configurazione della mappa nella sezione **"Avvio "**. Dovrebbe leggere `/levels/MAPNAME/info.json` con il MAPNAME che è il nome appena copiato.

## Unirsi al suo server

Se il suo server è visibile nella lista dei server, può cercare il nome nel gioco e unirsi ad esso.

In alternativa, se il suo server non è visibile nella lista dei server, può unirsi ad esso:
* Prima di tutto copiando l'indirizzo IP visibile nella scheda **"Console "** del pannello. (Example `94.130.165.43:25612`)
* Quindi, vada alla scheda "Connessione diretta" nel menu multigiocatore e clicchi su **"Incolla dagli appunti "**.
* Infine, clicchi su "Connetti" e si troverà sul suo server.