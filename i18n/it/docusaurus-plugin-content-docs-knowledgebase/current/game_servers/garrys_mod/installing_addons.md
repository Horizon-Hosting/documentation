---
id: installing_addons
title: Installare i componenti aggiuntivi
description: Come installare un addon sul suo server Garry's Mod.
---

L'installazione di addons è una parte cruciale dello sviluppo del server e aggiunge nuovi contenuti per rendere il suo server più divertente. Ci sono molte creazioni e addon gratuiti su [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) per rendere il suo server personale. Gli addon premium (quelli che costano) sono anche disponibili per l'acquisto su siti web come [gmodstore](https://gmodstore.com).

## Installazione dei componenti aggiuntivi
### Addons per l'officina
1. Vada su [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), passi il mouse su Sfoglia e selezioni [Collezioni](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). Una volta raggiunta la pagina, selezioni "Crea collezione".
2. Compili la pagina "Crea una raccolta" con le informazioni richieste, come il titolo e l'immagine del marchio. Quando le viene richiesto, deve aggiungere almeno un addon per avviare la raccolta.
3. Una volta realizzata la sua raccolta, dovrà selezionare l'opzione di pubblicazione per renderla accessibile.
4. Prenda il numero dal suo URL, che identificherà la sua collezione.
5. Vada al [Pannello di gioco] (https://hrzn.link/panel) e si rechi sul suo server.
6. Nella sezione di avvio, incolli il numero della collezione nella casella "ID WORKSHOP".
7. Avvii/riavvii il server e scaricherà i nuovi addon sul server e li caricherà durante l'avvio.

### Aggiunte al sistema di file (Premium/Gmodstore)
1. Dopo aver acquistato l'addon selezionato da Gmodstore o da qualsiasi altro sito web, dovrà scaricarlo.
2. Ora che ha scaricato il suo addon, dovrà caricare il file sul server tramite SFTP o il pannello.
   - Se utilizza FTP può anche caricare cartelle. Ecco una guida su [come utilizzare FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - Se utilizza il [Pannello di gioco] (https://hrzn.link/panel), vada semplicemente al suo servizio e selezioni File.
5. Da qui, vada a /garrysmod/addons/ e trascini e rilasci o selezioni upload per aggiungere il file zip dell'addon al suo server.
6. Decomprima/Unarchivia il file facendo clic con il pulsante destro del mouse e selezionando "Unarchive" sul pannello.
7. Avvii/riavvii il server e caricherà i componenti aggiuntivi durante l'avvio.

### I clienti ricevono errori sui nuovi addon?
Alcuni addon richiedono che il cliente scarichi alcuni contenuti per poter visualizzare i contenuti aggiunti dall'addon. Consulti questa guida (Prossimamente) per imparare a far sì che i clienti scarichino i contenuti richiesti quando si uniscono al suo server utilizzando FastDL/WorkshopDL.

## Risoluzione dei problemi
* Si assicuri di aver modificato il nome di qualsiasi addon per eliminare le lettere maiuscole, gli spazi o i caratteri speciali, in quanto potrebbero impedire l'esecuzione dell'addon.
* Faccia attenzione a non modificare o cancellare nessuno dei file di gioco principali, perché questo potrebbe comportare la necessità di reinstallare l'intero server Garry's Mod!
* Se utilizza il [Pannello di gioco] (https://hrzn.link/panel) si assicuri di caricare un file come un .zip e non una cartella, in quanto non è supportato dai browser web.