---
id: installing_addons
title: Installation des modules complémentaires
description: Comment installer un addon sur votre serveur Garry's Mod.
---

L'installation d'addons est une partie cruciale du développement d'un serveur et permet d'ajouter du nouveau contenu pour rendre votre serveur plus amusant. Il existe de nombreuses créations et modules complémentaires gratuits sur le [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) pour rendre votre serveur unique. Des addons premium (payants) sont également disponibles à l'achat sur des sites web tels que [gmodstore](https://gmodstore.com).

## Installation des modules complémentaires
### Les modules d'extension de l'atelier
1. Allez sur le [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), survolez browse et sélectionnez [collections](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). Lorsque vous arrivez sur la page, sélectionnez "Créer une collection".
2. Remplissez la page "Créer une collection" avec les informations requises telles que le titre et l'image de marque. Lorsque vous y êtes invité, vous devez ajouter au moins un module complémentaire pour lancer la collection.
3. Une fois votre collection réalisée, vous devrez sélectionner l'option de publication pour la rendre accessible.
4. Saisissez le numéro de votre URL, il permettra d'identifier votre collection.
5. Allez dans le [Game Panel](https://hrzn.link/panel) et allez sur votre serveur.
6. Dans la section de démarrage, collez le numéro de la collection dans la case "WORKSHOP ID".
7. Démarrez/redémarrez le serveur et il téléchargera les nouveaux addons sur le serveur et les chargera au démarrage.

### Additions au système de fichiers (Premium/Gmodstore)
1. Une fois que vous avez acheté l'addon de votre choix sur Gmodstore ou tout autre site web, vous devez le télécharger.
2. Maintenant que vous avez téléchargé votre addon, vous devez télécharger le fichier sur le serveur via SFTP ou le panel.
   - Si vous utilisez le FTP, vous pouvez également télécharger des dossiers. Voici un guide sur [l'utilisation du FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - Si vous utilisez le [Game Panel](https://hrzn.link/panel), accédez simplement à votre service et sélectionnez Fichiers.
5. A partir de là, allez dans /garrysmod/addons/ et faites un glisser-déposer ou sélectionnez upload pour ajouter le fichier zip de l'addon à votre serveur.
6. Décompressez/décompressez le fichier en cliquant avec le bouton droit de la souris et en sélectionnant "Décompresser" dans le panneau.
7. Démarrez/redémarrez le serveur et il chargera les addons pendant le démarrage.

### Les clients obtiennent des erreurs sur les nouveaux addons ?
Certains addons requièrent que le client télécharge un certain contenu pour pouvoir visualiser le contenu ajouté de l'addon. Veuillez consulter ce guide (bientôt disponible) pour apprendre comment obliger les clients à télécharger le contenu requis lorsqu'ils rejoignent votre serveur à l'aide de FastDL/WorkshopDL.

## Dépannage
* Veuillez vous assurer que vous avez modifié le nom de tout addon afin de supprimer les majuscules, les espaces ou les caractères spéciaux, car ils peuvent empêcher l'addon de fonctionner.
* Veillez à ne pas modifier ou supprimer les fichiers de base du jeu, car cela pourrait vous obliger à réinstaller l'ensemble de votre serveur Garry's Mod !
* Si vous utilisez le [Game Panel](https://hrzn.link/panel), assurez-vous que vous téléchargez un fichier tel qu'un .zip et non un dossier, car ce type de fichier n'est pas pris en charge par les navigateurs web.