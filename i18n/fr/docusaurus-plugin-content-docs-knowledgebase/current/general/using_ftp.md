---
id: using_ftp
title: Principes de base du transfert de fichiers
description: Répondre à toutes les questions fréquemment posées sur le FTP.
---

## Qu'est-ce que FTP ?

FTP est un protocole couramment utilisé qui vous permet de déplacer des fichiers et des dossiers de votre PC directement vers votre serveur !

Quelques exemples d'utilisation de FTP :

- Transport des dossiers
- Téléchargement de fichiers ZIP
- Édition de fichiers texte et de fichiers de configuration

## Trouver votre hôte FTP et ses informations

Sur la page d'accueil de notre [cPanel](https://hrzn.link/cpanel), il y a une case "Informations générales" sur le côté droit.
L'hôte serait l'IP partagée.
Le port sera toujours 21 pour FTP.
Le nom d'utilisateur et le mot de passe peuvent être créés dans la section Comptes FTP.
Veillez à supprimer le texte dans la case Répertoire, car il limitera votre accès aux fichiers.

Sur la page de notre serveur [Game Panel](https://hrzn.link/panel), il y a un onglet "Paramètres" sur le côté gauche.
Dans la boîte SFTP DETAILS, l'hôte et le port peuvent être trouvés dans la boîte ADRESSE DU SERVEUR et copiés avec un clic gauche.
Le nom de l'utilisateur se trouve simplement dans la case USERNAME et peut être copié en cliquant sur le bouton gauche de la souris.
Le mot de passe est le même que celui de votre compte du panel.

## Connexion à votre serveur FTP

La connexion à un serveur FTP nécessite un certain type de client FTP.

Nous vous recommandons notamment [FileZilla Client](https://filezilla-project.org/download.php?type=client) et [WinSCP Client](https://winscp.net/eng/download.php).

### FileZilla

Pour Filezilla, vous pouvez soit saisir les informations FTP dans la barre de connexion rapide en haut de la fenêtre, soit les enregistrer en tant que "Site" à l'aide du "Site Manager".
Veillez à sélectionner le bon protocole si vous enregistrez en tant que "site".
Laissez le type de connexion normal et entrez les informations, puis sélectionnez connexion.
