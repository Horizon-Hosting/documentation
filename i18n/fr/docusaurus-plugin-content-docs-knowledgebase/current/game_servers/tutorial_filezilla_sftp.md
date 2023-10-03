---
id: tutorial_filezilla_sftp
title: Installation et utilisation du client FTP FileZilla
description: Comment télécharger et installer FileZilla, et l'utiliser pour transférer des fichiers vers votre serveur.
---

## Introduction
Ce guide détaille comment utiliser SFTP avec le gamepanel d'Horizon Hosting. Cela peut être avantageux car SFTP permet un transfert de fichiers **plus rapide** et **en masse**. Cependant, il n'est pas aussi intuitif que l'utilisation du gestionnaire de fichiers intégré au gamepanel. Ce guide explique comment installer et configurer **FileZilla**, un client SFTP populaire. Une vidéo est également disponible au bas de cette page.

SFTP est une variante du **File Transfer Protocol** (FTP) qui permet un transfert sécurisé. De nos jours, le SFTP est généralement préféré.

## FileZilla Setup
### Téléchargement et installation de FileZilla
1. Naviguez jusqu'à la [page de téléchargement du client FileZilla](https://filezilla-project.org/download.php)
2. Cliquez sur "Télécharger le client FileZilla"
3. Exécutez le fichier téléchargé
   - ![Page de téléchargement de FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Si vous y êtes invité, cliquez sur "Oui" à l'invite du Contrôle de compte d'utilisateur.
   - ![Invitation au contrôle de compte d'utilisateur, avec Oui en surbrillance](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Accepter l'accord de licence
   - ![Page d'accord de licence du programme d'installation de FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Refuser l'offre facultative
7. Cliquez sur suivant
   - ![Page d'offre facultative, avec option de refus sélectionnée](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Sélectionnez la personne pour laquelle vous souhaitez que FileZilla soit installé.
9. Cliquez sur suivant
   - ![Options d'installation](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Sélectionnez les composants souhaités. En général, la sélection par défaut est correcte. Si vous souhaitez une icône FileZilla sur votre bureau, sélectionnez cette option.
11. Cliquez sur suivant
    - ![Composants FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Choisissez un dossier dans lequel installer FileZilla. Il n'est pas nécessaire de le modifier
13. Cliquez sur suivant
    - ![Lieu d'installation](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Cliquez sur installer
    - ![Dossier du menu de démarrage](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Une fois l'installation terminée, cliquez sur Terminer
    - ![Installation terminée](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla est maintenant installé.**

### Connexion à votre serveur
1. Naviguez jusqu'à votre serveur sur le tableau de bord
   - ![Page des serveurs Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Allez dans les paramètres et affichez les détails SFTP.
   - ![Page de configuration du Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Copiez l'adresse du serveur et collez-la dans la section "Host" de FileZilla.
4. Copiez le nom d'utilisateur et collez-le dans la section "Nom d'utilisateur" de FileZilla.
   - ![Page du serveur, avec les détails SFTP en surbrillance](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![FileZilla UI, avec les sections Host et Username en surbrillance](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Saisissez votre mot de passe - il s'agit du même mot de passe que celui que vous utilisez pour vous connecter au panneau.
6. Laissez le port en blanc - il sera rempli automatiquement.
7. Cliquez sur "Quickconnect"

**Vous devriez maintenant être connecté à votre serveur.** Les fichiers du serveur distant devraient être affichés sur le côté droit.

Si vous ne voyez pas les fichiers ou si des erreurs apparaissent dans la boîte d'état, veuillez vérifier votre mot de passe ou [contactez-nous](https://hrzn.link/getting_support) pour obtenir de l'aide.


## Vidéo

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube video player" frameborder="0" allow="accelerometer ; autoplay ; clipboard-write ; encrypted-media ; gyroscope ; picture-in-picture ; web-share" allowfullscreen></iframe>

[Regardez cette vidéo sur YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)