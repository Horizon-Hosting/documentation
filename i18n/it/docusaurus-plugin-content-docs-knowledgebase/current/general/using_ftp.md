---
id: using_ftp
title: Nozioni di base sul trasferimento di file
description: Rispondere a tutte le domande frequenti sull'FTP.
---

## Che cos'è l'FTP?

L'FTP è un protocollo comunemente usato che le permette di spostare file e cartelle dal suo PC direttamente al suo server!

Alcuni esempi di utilizzo dell'FTP:

- Trasporto di cartelle
- Caricamento di file ZIP
- Modifica di file di testo e di configurazione

## Trovare il suo host FTP e le sue informazioni

Sulla nostra pagina iniziale [cPanel](https://hrzn.link/cpanel), c'è una casella "Informazioni generali" sul lato destro.
L'host sarebbe l'IP condiviso.
La porta sarà sempre 21 per l'FTP.
Il nome utente e la password possono essere creati nella sezione Account FTP.
Si assicuri di rimuovere il testo nella casella Directory, in quanto limiterà il suo accesso ai file.

Nella pagina del nostro server [Pannello di gioco](https://hrzn.link/panel), c'è la scheda "Impostazioni" sul lato sinistro.
Nel riquadro DETTAGLI SFTP, l'host e la porta si trovano nel riquadro INDIRIZZO SERVER e possono essere copiati con un clic sinistro.
Il nome utente si trova similmente nella casella USERNAME e può essere copiato con un clic sinistro.
La password è la stessa del suo account del pannello.

## Connessione al suo server FTP

La connessione a un server FTP richiede un qualche tipo di client FTP.

Alcuni di quelli che consigliamo sono [Client FileZilla](https://filezilla-project.org/download.php?type=client) e [Client WinSCP](https://winscp.net/eng/download.php).

### FileZilla

Per Filezilla, può inserire le informazioni FTP nella barra di connessione rapida nella parte superiore della finestra o salvarle come "Sito" utilizzando il "Gestore siti".
Si assicuri di selezionare il protocollo corretto se salva come "Sito".
Lasci il tipo di accesso normale e inserisca le informazioni, quindi selezioni connessione.
