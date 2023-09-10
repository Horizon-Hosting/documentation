---
id: setting_up_minecraft_subdomain
title: Einrichten einer Minecraft-Subdomain
description: Wie Sie eine Sub-Domain für Ihren Minecraft-Server erstellen und einrichten.
---

Minecraft-Server können eine Subdomain erstellen und verwenden, die viel einfacher zu merken ist als eine IP-Adresse und ein Port.

## Anforderungen
- Eine registrierte Domain.
- Ein Minecraft-Server.
- Ein DNS-Anbieter. (Beispiel: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Hinweis: Sie können für dieses Tutorial keinen lokal gehosteten Minecraft-Server verwenden.

## Erstellen der Sub-Domain

### Vorbedingung
1. Navigieren Sie zur [Spielkonsole](https://hrzn.link/panel) und wählen Sie den Server, den Sie verwenden möchten.
2. Suchen Sie die IP-Adresse und den Port des Servers, die sich auf der linken Seite des Server-Terminals befinden.
    - Sie sollte in etwa so aussehen: `94.130.165.43:00000`.
3. Notieren Sie sich die IP-Adresse und den Port, die Sie später noch benötigen.

### Hinzufügen der DNS-Einträge
1. Navigieren Sie zu Ihrem DNS-Anbieter für Ihre Domain, z.B. [Cloudflare](https://www.cloudflare.com), und melden Sie sich an.
2. Wählen Sie Ihre Domain und gehen Sie zum Abschnitt "DNS".
    - Bitte beachten Sie, dass Ihr DNS-Anbieter dies möglicherweise an anderer Stelle gespeichert hat.

#### Ein Rekord
1. Klicken Sie im Abschnitt "DNS" auf die Schaltfläche "Eintrag hinzufügen".
2. Wählen Sie für den Aufzeichnungstyp "A".
3. Geben Sie für den Datensatznamen ein, wie der Name der Sub-Domain lauten soll.
    - Beispiel: Name: `play` zeigt auf `play.ihredomain.com`.
4. Geben Sie als IP-Adresse die IP-Adresse des Servers ein, die Sie zuvor kopiert haben.
    - Geben Sie in diesem Abschnitt nicht den Server-Port an, da dies dazu führt, dass die Subdomain nicht richtig funktioniert.
7. Es kann nach dem Proxy-Status und/oder der TTL-Zeit fragen, lassen Sie diese Werte unverändert.

Beispiel:
![Ein Rekordbeispiel](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### SRV-Eintrag
1. Klicken Sie im Abschnitt "DNS" auf die Schaltfläche "Eintrag hinzufügen".
2. Wählen Sie als Datensatztyp `SRV`.
3. Geben Sie für den Aufzeichnungsdienst `_minecraft` ein.
4. Für das Aufzeichnungsprotokoll geben Sie ein oder wählen Sie `_tcp.`
5. Geben Sie als Datensatznamen den Namen Ihrer Subdomain ein, zum Beispiel: `play`.
6. Geben Sie als Ziel des Datensatzes die vollständige Subdomäne ein, z.B.: `play.ihredomain.com`.
7. Für die Aufnahmepriorität geben Sie `0` ein.
8. Für das Rekordgewicht geben Sie `5` ein.
9. Geben Sie für den Datensatz-Port den Port ein, der mit Ihrem Server verbunden ist, zum Beispiel: "25560".
10. Belassen Sie die TTL für die Aufzeichnung auf der Standardeinstellung oder der niedrigstmöglichen Option.

Beispiel:
![SRV-Eintrag Beispiel](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Gemeinsame Probleme
#### Kein Beitritt über die Sub-Domäne möglich
Wenn Sie nicht in der Lage sind, dem Server beizutreten, nachdem Sie alles in Ihren DNS-Einträgen korrekt konfiguriert haben, müssen Sie Ihrem DNS-Anbieter bis zu 72 Stunden Zeit geben, um die Daten vollständig zu übertragen.