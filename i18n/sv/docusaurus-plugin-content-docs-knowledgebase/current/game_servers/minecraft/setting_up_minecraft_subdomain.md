---
id: setting_up_minecraft_subdomain
title: Skapa en Minecraft-subdomän
description: Hur du skapar och konfigurerar en subdomän för din Minecraft-server.
---

Minecraft-servrar kan skapa och använda en subdomän, vilket är mycket lättare att komma ihåg än en IP-adress och port.

## Krav
- En registrerad domän.
- En Minecraft-server.
- En DNS-leverantör. (t.ex.: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Observera: Du kan inte använda en lokalt hostad Minecraft-server för den här handledningen.

## Skapa underdomänen

### Förkunskapskrav
1. Navigera till [Game Panel] (https://hrzn.link/panel) och välj den server du vill använda.
2. Leta reda på serverns IP-adress och port, dessa finns på vänster sida av serverterminalen.
    - Det bör se ut ungefär så här: `94.130.165.43:00000`.
3. Notera IP-adress och port, detta kommer att behövas längre fram.

### Lägga till DNS-poster
1. Navigera till din DNS-leverantör för din domän, t.ex. [Cloudflare] (https://www.cloudflare.com) och logga in.
2. Välj din domän och gå till avsnittet "DNS".
    - Observera att din DNS-leverantör kan ha placerat denna adress någon annanstans.

#### Ett register
1. I avsnittet "DNS" klickar du på en knapp märkt "Lägg till post".
2. För posttyp, välj `A`.
3. Ange vad du vill att subdomänens namn ska vara för postnamn.
    - Ex: Namn: `play` pekar på `play.dindomän.com`.
4. Som IP-adress anger du serverns IP-adress som du kopierade tidigare.
    - Inkludera inte serverporten i detta avsnitt eftersom det kommer att leda till att subdomänen inte fungerar korrekt.
7. Den kan fråga efter en proxystatus och/eller TTL-tid, lämna dessa värden oförändrade.

Exempel:
![Ett exempel på en inspelning](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### SRV-registrering
1. I avsnittet "DNS" klickar du på knappen "Lägg till post".
2. För posttyp, välj `SRV`.
3. För rekordtjänsten, skriv `_minecraft`.
4. Skriv eller välj `_tcp.` som protokoll för inspelningen.
5. Som postnamn anger du namnet på din underdomän, till exempel: `play`.
6. Ange den fullständiga underdomänen för postens mål, till exempel: `play.dindomän.com`.
7. För rekordprioritet, skriv `0`.
8. För rekordvikt, skriv `5`.
9. Skriv in den port som är kopplad till din server, till exempel: `25560`.
10. För posten TTL, lämna den som standard eller det lägsta möjliga alternativet.

Exempel:
![Exempel på SRV-inspelning](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Gemensamma frågor
#### Att inte kunna ansluta sig via subdomänen
Om du inte kan ansluta till servern efter att du har konfigurerat allt i dina DNS-poster korrekt - Då måste du ge din DNS-leverantör upp till maximalt 72 timmar för att sprida sig helt.