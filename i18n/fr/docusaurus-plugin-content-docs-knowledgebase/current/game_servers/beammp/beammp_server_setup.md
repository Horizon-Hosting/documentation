---
id: beammp_server_setup
title: Configuration du serveur
description: Mise en place de votre serveur de jeux BeamMP
---

## Introduction
Ce guide détaille comment configurer votre nouveau serveur de jeux Horizon Hosting BeamMP pour qu'il apparaisse sur la liste des serveurs.

## Obtention d'une clé de serveur
* Commencez par vous connecter au **[BeamMP Keymaster](https://beammp.com/k/keys)** avec votre compte Discord.
* Cliquez sur le texte bleu "ici" pour créer une nouvelle clé.
* Remplissez le nom du serveur et l'IP. Veuillez noter que le champ IP ne fait *rien* et peut être laissé à `0.0.0.0`.
* Votre clé nouvellement générée s'affichera alors.

**Veillez à ne pas partager cette clé. Cette clé est unique pour vous**.

1 clé par serveur est nécessaire pour que votre serveur apparaisse sur la liste des serveurs. Si vous avez besoin de plus de clés de serveur, vous pouvez le faire en faisant un don sur le [BeamMP Patreon](https://patreon.com/BeamMP)

## Configuration de démarrage
Les options de configuration de votre serveur apparaîtront dans l'onglet **"Startup "** du [HRZN Hosting Panel](https://hrzn.link/panel). Les champs suivants seront présents :

|Le nom et la description de l'appareil sont des éléments essentiels de la gestion de l'information.
|-----|-------------|---------|
| Clé d'authentification | Votre clé fournie par le [BeamMP Keymaster](https://beammp.com/k/keys). Elle est nécessaire pour que votre serveur BeamMP apparaisse sur la liste des serveurs. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Nom | Le nom de votre serveur, qui apparaîtra dans la liste des serveurs | `Horizon Networks BeamMP Server` |
| Le nombre de voitures qu'un utilisateur peut faire naître | `3` |
| La carte que le serveur utilisera. | `/levels/gridmap_v2/info.json`
| Description | La description de votre serveur, qui apparaîtra sur la liste des serveurs | `Horizon Networks BeamMP Server` |
| Max Players | Le nombre maximum de joueurs qui peuvent être sur votre serveur, veuillez contacter le support via [notre Discord](https://hrzn.link/discord) ou changez votre paquet pour éditer ceci. | `20` |
| Private | Indique si votre serveur doit être affiché sur la liste des serveurs ou non. Si c'est vrai, il ne sera **pas** affiché. | Si c'est vrai, il ne s'affichera pas.

## Ajouter des mods clients à votre serveur
L'ajout de mods à votre serveur peut se faire en utilisant l'onglet **"Gestionnaire de fichiers" en ligne** ou un **Client SFTP**.  
* Tout d'abord, naviguez vers le dossier `Resources`, puis vers le dossier `Client`.
* Ensuite, téléchargez vos ZIPs de mods dans ce dossier.
* Enfin, retournez à l'onglet **"Console "** du tableau de bord. Cliquez ici sur redémarrer pour redémarrer votre serveur et appliquer les changements.

Les mods et les cartes des clients seront automatiquement téléchargés par tous les clients lors de leur inscription.

## Changer la carte sur votre serveur
Vous pouvez modifier la carte en changeant le champ `Map` dans l'onglet **"Startup "** du Panel. Vous trouverez ci-dessous les cartes BeamNG.Drive par défaut qui n'ont pas besoin de ZIP client supplémentaires pour être utilisées :
* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industriel/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### Pour les cartes personnalisées, une configuration supplémentaire est nécessaire :
* Tout d'abord, regardez dans le ZIP de la carte et ouvrez le dossier **niveaux**.
* A l'intérieur de ce dossier, il devrait y avoir un autre dossier. Copiez le nom de ce dossier.
* Editez la configuration de la carte dans la section **"Startup "**. Elle devrait contenir `/levels/MAPNAME/info.json` avec MAPNAME étant le nom que vous venez de copier.

## Rejoindre votre serveur

Si votre serveur est visible sur la liste des serveurs, vous pouvez rechercher son nom dans le jeu et le rejoindre.

Alternativement, si votre serveur n'est pas visible sur la liste des serveurs, vous pouvez le rejoindre en :
* Copiez d'abord l'adresse IP visible dans l'onglet **"Console "** du tableau de bord. (Example `94.130.165.43:25612`)
* Ensuite, allez dans l'onglet "Connexion directe" du menu multijoueur et cliquez sur **"Coller à partir du presse-papiers "**.
* Enfin, cliquez sur "Connect" et vous serez sur votre serveur.