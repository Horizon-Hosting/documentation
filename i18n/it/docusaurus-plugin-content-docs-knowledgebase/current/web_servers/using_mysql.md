---
id: using_mysql
title: Nozioni di base di MySQL
description: Risponde a tutte le domande frequenti su MySQL.
---

## Che cos'è MySQL?

MYSQL è una soluzione di archiviazione di database comunemente usata, che può essere utilizzata per archiviare i dati dei suoi server di gioco, o anche per i bot di Discord e i siti web!

Alcuni esempi di utilizzo di MySQL:

- I server di gioco utilizzano MySQL per le gamemode e i plugin per archiviare i dati, questo può anche aiutare a collegare più server tra loro.
- I server web utilizzano MySQL nelle applicazioni web per archiviare i dati in modo sicuro. Ad esempio, i post del suo forum.
- Sui bot Discord, MySQL può essere utilizzato per memorizzare le informazioni sul livellamento degli utenti.

## Trovare l'host e la porta del database

Sulla nostra pagina iniziale [cPanel](https://hrzn.link/cpanel), c'è una casella "Informazioni generali" sul lato destro.
L'host sarebbe l'IP condiviso

La porta sarà sempre `3306`.

:::tip
Se sta installando qualcosa sul suo server web, può semplicemente inserire `localhost` come host!
:::

## Creare un database e un utente

Sul nostro [cPanel](https://hrzn.link/cpanel), scorra in basso fino ai database e clicchi su "MySQL® Database Wizard".

Questo la guiderà nella creazione di un database e le mostrerà le sue credenziali.