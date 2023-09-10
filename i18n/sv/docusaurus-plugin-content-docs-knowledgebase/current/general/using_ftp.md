---
id: using_ftp
title: Grundläggande om filöverföring
description: Svar på alla vanliga frågor om FTP.
---

## Vad är FTP?

FTP är ett vanligt protokoll som gör att du kan flytta filer och mappar från din dator direkt till din server!

Några exempel på hur FTP kan användas:

- Transport av mappar
- Uppladdning av ZIP-filer
- Redigera text- och konfigurationsfiler

## Hitta FTP-värd och information

På vår [cPanel](https://hrzn.link/cpanel) hemsida finns det en "Allmän information"-ruta på höger sida.
Värden skulle vara den delade IP-adressen.
Porten kommer alltid att vara 21 för FTP.
Användarnamn och lösenord kan skapas i avsnittet FTP-konton.
Se till att ta bort texten i rutan Directory eftersom den begränsar din åtkomst till filerna.

På vår [Game Panel](https://hrzn.link/panel) serversida finns fliken "Inställningar" på vänster sida.
I rutan SFTP DETAILS kan värd och port hittas i rutan SERVER ADDRESS och kopieras med ett vänsterklick.
Användarnamnet finns på samma sätt i rutan USERNAME och kan kopieras med ett vänsterklick.
Lösenordet är detsamma som lösenordet för ditt panelkonto.

## Anslut till din FTP-server

För att ansluta till en FTP-server krävs någon form av FTP-klient.

Några som vi rekommenderar är [FileZilla Client](https://filezilla-project.org/download.php?type=client) och [WinSCP Client](https://winscp.net/eng/download.php)

### FileZilla

För Filezilla kan du antingen ange FTP-informationen i snabbkopplingsfältet högst upp i fönstret eller spara den som en "webbplats" med hjälp av "webbplatshanteraren".
Se till att du väljer rätt protokoll om du sparar som en "Site".
Låt inloggningstypen vara som vanligt och ange informationen och välj sedan anslut.
