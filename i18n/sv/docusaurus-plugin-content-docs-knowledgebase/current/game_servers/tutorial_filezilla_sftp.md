---
id: tutorial_filezilla_sftp
title: Installera och använda FTP-klienten FileZilla
description: Ladda ner och installera FileZilla och använd det för att överföra filer till din server.
---

## Introduktion
Den här guiden beskriver hur du använder SFTP med Horizon Hosting gamepanel. Detta kan vara fördelaktigt eftersom SFTP möjliggör **snabbare**, **bulk** filöverföring. Det är dock inte lika intuitivt som att använda gamepanelens inbyggda filhanterare. Den här guiden beskriver hur man installerar och ställer in **FileZilla**, en populär SFTP-klient. Det finns även en video tillgänglig längst ner på denna sida.

SFTP är en variant av **File Transfer Protocol** (FTP) som möjliggör säker överföring. Idag är SFTP generellt att föredra.

## Installation av FileZilla
### Ladda ner och installera FileZilla
1. Navigera till [FileZilla Client download page] (https://filezilla-project.org/download.php)
2. Klicka på "Ladda ner FileZilla Client"
3. Kör den nedladdade filen
   - ![FileZilla nedladdningssida](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Om du uppmanas att göra det klickar du på "Ja" på skärmen för kontroll av användarkonto.
   - ![Fråga om kontroll av användarkonto, med Ja markerat](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Godkänna licensavtalet
   - ![Licensavtalssidan i installationsprogrammet för FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Avböja det frivilliga erbjudandet
7. Klicka på Nästa
   - ![Valfri erbjudandesida, med alternativet för avslag valt](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Välj vem du vill att FileZilla ska installeras för.
9. Klicka på Nästa
   - ![Alternativ för installation](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Välj vilka komponenter du vill ha. Gernally, standardvalet är okej. Om du vill ha en FileZilla-ikon på skrivbordet väljer du det här alternativet.
11. Klicka på Nästa
    - ![Komponenter till FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Välj en mapp att installera FileZilla i. Det är inte nödvändigt att ändra detta
13. Klicka på Nästa
    - ![Plats för installation](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Klicka på Installera
    - ![Startmeny-mapp](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. När installationen är klar klickar du på Slutför
    - ![Installationen slutförd](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla är nu installerat.**

### Anslutning till din server
1. Navigera till din server på panelen
   - ![Gamepanel servrar sida](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Gå till inställningar och visa SFTP-detaljer
   - ![Inställningssida för spelpanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Kopiera serveradressen och klistra in den i avsnittet "Host" på FileZilla
4. Kopiera användarnamnet och klistra in det i avsnittet "Användarnamn" på FileZilla
   - ![Server-sida, med SFTP-detaljer markerade](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![FileZilla UI, med Host och Username sektionerna markerade](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Ange ditt lösenord - detta är samma lösenord som du använder för att logga in på panelen
6. Lämna hamnen tom - den kommer att fyllas i automatiskt
7. Klicka på "Snabbanslutning"

**Du bör nu vara ansluten till din server.** Fjärrserverns filer bör visas på höger sida.

Om du inte ser filerna eller ser fel i statusrutan, kontrollera ditt lösenord eller [kontakta oss](https://hrzn.link/getting_support) för ytterligare support.


## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube videospelare" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Se denna video på YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)