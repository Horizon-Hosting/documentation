---
id: tutorial_filezilla_sftp
title: Installazione e utilizzo del client FTP FileZilla
description: Come scaricare e installare FileZilla e utilizzarlo per trasferire i file sul suo server.
---

## Introduzione
Questa guida spiega come utilizzare SFTP con il gamepanel di Horizon Hosting. Questo può essere vantaggioso, in quanto SFTP consente un trasferimento di file **più veloce**, **a tappeto**. Tuttavia, non è così intuitivo come l'utilizzo del file manager integrato nel gamepanel. Questa guida spiega come installare e configurare **FileZilla**, un popolare client SFTP. C'è anche un video disponibile in fondo a questa pagina.

SFTP è una variante del **File Transfer Protocol** (FTP) che consente un trasferimento sicuro. Al giorno d'oggi, SFTP è generalmente preferito.

## Configurazione di FileZilla
### Scaricare e installare FileZilla
1. Si rechi alla pagina di download di [FileZilla Client] (https://filezilla-project.org/download.php).
2. Clicchi su "Scarica il client FileZilla".
3. Esegua il file scaricato
   - ![Pagina dei download di FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Se richiesto, faccia clic su "Sì" alla richiesta di Controllo dell'account utente.
   - ![Il prompt del Controllo dell'account utente, con l'evidenziazione di Sì](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Accettare il contratto di licenza
   - ![Pagina del Contratto di licenza del programma di installazione di FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Rifiutare l'offerta opzionale
7. Clicchi su Avanti
   - ![Pagina dell'offerta opzionale, con l'opzione di rifiuto selezionata](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Selezioni per chi desidera che FileZilla venga installato.
9. Clicchi su Avanti
   - ![Opzioni di installazione](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Selezioni i componenti che desidera. In generale, la selezione predefinita va bene. Se desidera un'icona di FileZilla sul desktop, selezioni questa opzione.
11. Clicchi su Avanti
    - ![Componenti di FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Scelga una cartella in cui installare FileZilla. Non è necessario modificarla
13. Clicchi su Avanti
    - ![Posizione di installazione](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Clicchi su installa
    - ![Cartella del menu di avvio](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Una volta completata l'installazione, clicchi su Fine
    - ![Installazione completa](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla è ora installato.**

### Connessione al suo server
1. Si colleghi al suo server sul pannello
   - ![Pagina dei server Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Vada alle impostazioni e visualizzi i dettagli SFTP.
   - ![Pagina delle impostazioni del Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Copi l'indirizzo del server e lo incolli nella sezione "Host" di FileZilla.
4. Copi il nome utente e lo incolli nella sezione "Nome utente" di FileZilla.
   - ![Pagina del server, con i dettagli SFTP evidenziati](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![L'interfaccia utente di FileZilla, con le sezioni Host e Nome utente evidenziate](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Inserisca la sua password - questa è la stessa password che utilizza per accedere al pannello.
6. Lasci la porta in bianco - verrà compilata automaticamente.
7. Clicchi su "Connessione rapida".

**I file del server remoto dovrebbero essere visualizzati sul lato destro.

Se non vede i file o vede degli errori nella casella di stato, controlli la sua password o [ci contatti](https://hrzn.link/getting_support) per ulteriore assistenza.


## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube video player" frameborder="0" allow="accelerometro; autoplay; clipboard-write; encrypted-media; giroscopio; picture-in-picture; web-share" allowfullscreen></iframe>.

[Guardi questo video su YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)