---
id: gameserver_login_tokens
title: Obtenir et installer un jeton de serveur de jeux (jeton GSL)
description: Comment authentifier votre serveur dans la liste des serveurs à l'aide d'un jeton GSL ?
---

Tous les serveurs Garry's Mod peuvent être affichés publiquement dans la liste des serveurs Garry's Mod. Pour ce faire, un GSLT doit être installé sur le serveur.

## Création et installation d'un jeton de connexion au serveur de jeux
1. Allez dans la zone [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) sur le site Web de steam et connectez-vous.
2. Localisez l'option "Créer un nouveau compte de serveur de jeu" en bas de l'écran.
3. Saisissez l'App ID pour Garry's Mod (4000) ainsi qu'un mémo pour vous souvenir du serveur auquel il est destiné. Par exemple, "DarkRP Server"
4. Copiez le "Login Token" dans la liste des comptes de serveur de jeu.
5. Allez dans le [Game Panel](https://hrzn.link/panel) et allez sur votre serveur.
6. Dans la section de démarrage, collez le jeton du serveur de jeux dans la case "STEAM ACCOUNT TOKEN".
7. Redémarrez le serveur et le serveur devrait maintenant s'autoriser avec la liste des serveurs.

## Dépannage
* Veillez à utiliser un jeton par serveur, car l'utilisation d'un jeton pour plusieurs serveurs entraînera des problèmes d'authentification qui conduiront à l'exclusion de vos joueurs.
* Si un Token GSL n'est pas utilisé pendant une longue période, il expirera et vous obtiendrez ce message lorsque vous essayerez de lancer le serveur. Impossible d'établir une connexion avec les serveurs Steam. (jeton GSL expiré)`.
  - Pour résoudre ce problème, vous devez retourner sur [Manage Game Server](https://steamcommunity.com/dev/managegameservers) et choisir "Regenerate Token" sur le token que vous souhaitez utiliser. Ensuite, vous pouvez prendre le nouveau jeton généré et l'installer sur votre serveur.