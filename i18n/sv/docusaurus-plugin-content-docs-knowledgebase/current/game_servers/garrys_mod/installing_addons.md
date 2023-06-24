---
id: installing_addons
title: Installera tillägg till din Gmod-server
description: Hur man installerar ett tillägg till din Garry's Mod-server.
---

Att installera tillägg är en viktig del av serverutvecklingen och tillför nytt innehåll för att göra din server roligare. Det finns massor av gratis skapelser och tillägg på [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) för att göra din server till sin egen. Premium-tillägg (sådana som kostar pengar) finns också att köpa på webbplatser som [gmodstore](https://gmodstore.com).

## Installera tillägg
### Workshop-tillägg
1. Gå till [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), håll muspekaren över bläddra och välj [samlingar](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). När du kommer till sidan väljer du "Skapa samling".
2. Fyll i sidan "Skapa en samling" med den information som krävs, t.ex. titel och varumärkesbild. När du uppmanas måste du lägga till minst ett addon för att starta samlingen.
3. När din samling har skapats måste du välja alternativet Publicera för att göra den tillgänglig.
4. Ta numret från din URL, detta kommer att identifiera din samling.
5. Gå till [Spelpanelen](https://hrzn.link/panel) och gå till din server.
6. I startsektionen klistrar du in samlingens nummer i rutan "WORKSHOP ID".
7. Starta/omstarta servern och den kommer att ladda ner nya tillägg till servern och ladda dem under uppstart.

### Tillägg för filsystem (Premium/Gmodstore)
1. När du har köpt ditt valda tillägg från Gmodstore eller någon annan webbplats måste du ladda ner det.
2. Nu när du har din nedladdade addon måste du ladda upp filen till servern via SFTP eller panelen.
   - Om du använder FTP kan du också ladda upp mappar. Här är en guide om [hur man använder FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - Om du använder [Game Panel](https://hrzn.link/panel) går du bara till din tjänst och väljer Filer.
5. Härifrån går du till /garrysmod/addons/ och antingen drar och släpper eller väljer upload för att lägga till zip-filen med tillägget på din server.
6. Packa upp/arkivera filen genom att högerklicka och välja "Unarchive" på panelen.
7. Starta/starta om servern så laddas tilläggen under uppstarten.

### Klienter får fel på nya tillägg?
Vissa tillägg kräver att klienten laddar ner visst innehåll för att kunna visa det tillagda innehållet från tillägget. Se den här guiden (kommer snart) för att lära dig hur du får klienter att ladda ner nödvändigt innehåll när de ansluter till din server med FastDL / WorkshopDL.

## Felsökning
* Se till att du har ändrat alla addons namn för att ta bort versaler, mellanslag eller specialtecken är de kan addon från att köra.
* Var försiktig så att du inte ändrar eller tar bort några av kärnspelsfilerna, eftersom det kan innebära att du måste installera om hela Garry's Mod-servern!
* Om du använder [Game Panel](https://hrzn.link/panel), se till att du laddar upp en fil som en .zip, inte en mapp, eftersom det inte stöds av webbläsare.