---
id: setting_up_minecraft_subdomain
title: Impostazione di un sottodominio Minecraft
description: Come creare e impostare un sottodominio per il suo server Minecraft.
---

I server Minecraft possono creare e utilizzare un sottodominio, che è molto più facile da ricordare rispetto all'indirizzo IP e alla porta.

## Requisiti
- Un dominio registrato.
- Un server Minecraft.
- Un provider DNS. (es: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Nota: non può utilizzare un server Minecraft ospitato localmente per questo tutorial.*

## Creare il sottodominio

### Pre-requisito
1. Si rechi nel [Pannello di gioco] (https://hrzn.link/panel) e selezioni il server che desidera utilizzare.
2. Individui l'indirizzo IP e la porta del server, che si troverà sul lato sinistro del terminale del server.
    - Dovrebbe essere simile a questo: `94.130.165.43:00000`.
3. Annoti l'indirizzo IP e la porta, che saranno necessari più avanti.

### Aggiunta dei record DNS
1. Si colleghi al suo provider DNS per il suo dominio, ad esempio: [Cloudflare](https://www.cloudflare.com) e acceda.
2. Selezioni il suo dominio e si rechi nella sezione "DNS".
    - Tenga presente che il suo provider DNS potrebbe avere questa posizione altrove.

#### A Record
1. Nella sezione "DNS" clicchi sul pulsante "Aggiungi record".
2. Per il tipo di record, selezioni `A`.
3. Per il nome del record, digiti il nome del sottodominio che desidera.
    - Es: Il nome: `play` punta a `play.yourdomain.com`.
4. Per l'indirizzo IP inserisca l'indirizzo IP del server che ha copiato in precedenza.
    - Non includa la porta del server in questa sezione, perché il sottodominio non funzionerà correttamente.
7. Potrebbe richiedere lo stato del proxy e/o il tempo TTL; lasci questi valori invariati.

Esempio:
![Un esempio di record](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### Record SRV
1. Nella sezione "DNS" clicchi sul pulsante "Aggiungi record".
2. Per il tipo di record, selezioni `SRV`.
3. Per il servizio record, digiti `_minecraft`.
4. Per il protocollo di registrazione, digiti o selezioni `_tcp.`.
5. Per il nome del record, digiti il nome del suo sottodominio, ad esempio: `play`.
6. Per la destinazione del record, digiti il sottodominio completo, ad esempio: `play.yourdomain.com`.
7. Per la priorità del record, digiti `0`.
8. Per il peso record, digiti `5`.
9. Per la porta di registrazione, digiti la porta associata al suo server, ad esempio: `25560`.
10. Per il TTL del record, lo lasci come predefinito o come l'opzione più bassa possibile.

Esempio:
![Esempio di record SRV](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Problemi comuni
#### Non è possibile iscriversi attraverso il sottodominio
Se non è in grado di unirsi al server dopo aver configurato correttamente tutti i record DNS, dovrà concedere al suo provider DNS un massimo di 72 ore per la propagazione completa.