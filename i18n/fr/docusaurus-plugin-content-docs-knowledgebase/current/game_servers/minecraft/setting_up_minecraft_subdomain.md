---
id: setting_up_minecraft_subdomain
title: Mise en place d'un sous-domaine Minecraft
description: Comment créer et configurer un sous-domaine pour votre serveur Minecraft.
---

Les serveurs Minecraft peuvent créer et utiliser un sous-domaine, qui est beaucoup plus facile à retenir qu'une adresse IP et un port.

## Exigences
- Un domaine enregistré.
- Un serveur Minecraft.
- Un fournisseur de DNS. (ex : [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Note : Vous ne pouvez pas utiliser un serveur Minecraft hébergé localement pour ce tutoriel.

## Création du sous-domaine

### Pré-requis
1. Naviguez jusqu'au [Game Panel](https://hrzn.link/panel) et sélectionnez le serveur que vous souhaitez utiliser.
2. Localisez l'adresse IP et le port du serveur, qui se trouvent sur le côté gauche du terminal du serveur.
    - Il devrait ressembler à ceci : `94.130.165.43:00000`.
3. Notez l'adresse IP et le port, vous en aurez besoin plus tard.

### Ajout des enregistrements DNS
1. Naviguez vers votre fournisseur de DNS pour votre domaine, ex : [Cloudflare](https://www.cloudflare.com) et connectez-vous.
2. Sélectionnez votre domaine et allez dans la section "DNS".
    - Veuillez noter que votre fournisseur de DNS peut situer cette adresse à un autre endroit.

#### Un record
1. Dans la section "DNS", cliquez sur le bouton "Ajouter un enregistrement".
2. Pour le type d'enregistrement, sélectionnez "A".
3. Pour le nom de l'enregistrement, tapez le nom du sous-domaine que vous souhaitez.
    - Ex : Name : `play` pointe sur `play.yourdomain.com`.
4. Pour l'adresse IP, entrez l'adresse IP du serveur que vous avez copiée précédemment.
    - N'incluez pas le port du serveur dans cette section, car le sous-domaine ne fonctionnerait pas correctement.
7. Il peut demander un statut de proxy et/ou une durée de TTL, laissez ces valeurs inchangées.

Exemple :
![Un exemple d'enregistrement](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### Enregistrement SRV
1. Dans la section "DNS", cliquez sur le bouton "Ajouter un enregistrement".
2. Pour le type d'enregistrement, sélectionnez `SRV`.
3. Pour le service d'enregistrement, tapez `_minecraft`.
4. Pour le protocole d'enregistrement, tapez ou sélectionnez `_tcp.`
5. Pour le nom de l'enregistrement, tapez le nom de votre sous-domaine, par exemple : `play`.
6. Pour la cible de l'enregistrement, tapez le sous-domaine complet, par exemple : `play.yourdomain.com`.
7. Pour la priorité d'enregistrement, tapez `0`.
8. Pour le poids record, tapez `5`.
9. Pour le port d'enregistrement, tapez le port associé à votre serveur, par exemple : `25560`.
10. Pour le TTL de l'enregistrement, laissez la valeur par défaut ou l'option la plus basse possible.

Exemple :
![Exemple d'enregistrement SRV](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Problèmes communs
#### Impossibilité d'adhérer via le sous-domaine
Si vous ne parvenez pas à joindre le serveur après avoir configuré correctement tous vos enregistrements DNS, vous devrez accorder à votre fournisseur DNS un délai maximum de 72 heures pour la propagation complète.