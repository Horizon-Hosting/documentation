---
id: cobalt_essentials_installation
title: Installation de Cobalt Essentials
description: Que sont Cobalt Essentials et Cobalt Essentials Interface et comment les installer ?
---

## Cobalt Essentials (CE)

### Qu'est-ce que Cobalt Essentials ?

Cobalt Essentials est un plugin d'administration basé sur le chat, qui ajoute des "essentiels" à votre serveur.
Il s'agit d'un système modulaire de gestion des permissions et des serveurs, ce qui signifie que vous pouvez obtenir des modules complémentaires pour étendre ses fonctionnalités !

Il a été écrit par [Preston](https://github.com/prestonelam2003) et la communauté open source, et peut être téléchargé sur [GitHub](https://github.com/prestonelam2003/CobaltEssentials).
Ils disposent également d'un [serveur Discord](https://discord.gg/UV74wNXKdz) pour l'assistance et d'autres questions.

### Exigences
 
 - Un serveur BeamMP fonctionnant avec la version `3.x.x`.

### Installation

#### HRZN Hosting Panel

1. Allez sur votre serveur BeamMP sur notre [game panel](https://hrzn.link/panel).
2. Cliquez sur l'option "Mods" de la barre latérale.
3. Cliquez sur l'installation de "Cobalt Essentials". Si vous ne voyez pas cela, veuillez [contacter le support](/knowledgebase/getting_support).
4. Redémarrez votre serveur BeamMP dans l'onglet "Console".

#### Manuel
1. Téléchargez le [fichier ZIP Cobalt Essentials](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip).
2. Déplacez/téléchargez le fichier ZIP téléchargé dans votre dossier `Resources/Server`.
3. Décompressez le fichier à cet endroit.
4. Redémarrez votre serveur.

## Cobalt Essentials Interface (CEI)

### Qu'est-ce que la CEI ?

CEI est une interface de jeu pour CE. Elle permet au personnel chargé de l'administration du serveur d'utiliser une interface simple, plutôt que la liste des commandes de chat.
Il a été écrit par [Stanley Dudek](https://github.com/StanleyDudek), et peut être téléchargé sur [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Exigences

 - Un serveur BeamMP fonctionnant avec la version `3.x.x`.
 - Cobalt Essentials déjà installé

### Installation

#### HRZN Hosting Panel
1. Allez sur votre serveur BeamMP sur notre [game panel](https://hrzn.link/panel).
2. Cliquez sur l'option "Mods" de la barre latérale.
3. Cliquez sur l'installation de "Cobalt Essentials Interface". Si vous ne voyez pas cela, veuillez [contacter le support](/knowledgebase/getting_support).
4. Redémarrez votre serveur BeamMP dans l'onglet "Console".

#### Manuel

1. [Téléchargez CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) en cliquant sur le lien "Cobalt_Essentials_Interface_...zip".
2. Téléchargez le ZIP à la racine (`"/"`, où se trouve l'exécutable BeamMP-Server) de votre serveur.
3. Désarchivez le fichier ZIP.
4. Ouvrez le fichier `Resources\Server\CobaltEssentials\LoadExtensions.cfg` et ajoutez `CEI = "CEI"` en bas.
5. Redémarrez votre serveur

Pour ouvrir la CEI, lancez la commande `/CEI` dans le chat !