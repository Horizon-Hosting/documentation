---
id: using_mysql
title: Les bases de MySQL
description: Répondre à toutes les questions fréquemment posées sur MySQL.
---

## Qu'est-ce que MySQL ?

MYSQL est une solution de stockage de base de données couramment utilisée, qui peut être utilisée pour stocker les données de vos serveurs de jeux, ou même pour les bots Discord et les sites web !

Quelques exemples d'utilisation de MySQL :

- Les serveurs de jeux utilisent MySQL pour les gamemodes et les plugins afin de stocker les données, ce qui permet également de relier plusieurs serveurs entre eux.
- Les serveurs web utilisent MySQL dans les applications web pour stocker les données en toute sécurité. Par exemple, vos messages sur le forum.
- Sur les bots Discord, MySQL peut être utilisé pour stocker les informations de niveau des utilisateurs.

## Trouver l'hôte et le port de votre base de données

Sur la page d'accueil de notre [cPanel](https://hrzn.link/cpanel), il y a une case "Informations générales" sur le côté droit.
L'hôte serait l'IP partagée

Le port sera toujours `3306`.

:::tip
Si vous installez quelque chose sur votre serveur web lui-même, vous pouvez simplement mettre `localhost` comme hôte !
:::

## Création d'une base de données et d'un utilisateur

Sur notre [cPanel](https://hrzn.link/cpanel), faites défiler vers les bases de données et cliquez sur "MySQL® Database Wizard".

Il vous guidera dans la création d'une base de données et vous indiquera vos références.