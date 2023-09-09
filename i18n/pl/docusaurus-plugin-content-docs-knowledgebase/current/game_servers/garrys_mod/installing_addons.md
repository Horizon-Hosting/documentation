---
id: installing_addons
title: Instalowanie dodatków
description: Jak zainstalować dodatek na serwerze Garry's Mod.
---

Instalowanie dodatków jest kluczową częścią rozwoju serwera i dodaje nową zawartość, aby uczynić serwer bardziej zabawnym. W [Warsztacie Steam](https://steamcommunity.com/app/4000/workshop/) dostępnych jest wiele darmowych kreacji i dodatków, dzięki którym Państwa serwer nabierze własnego charakteru. Dodatki premium (te, które kosztują) są również dostępne do kupienia na stronach takich jak [gmodstore](https://gmodstore.com).

## Instalowanie dodatków
### Dodatki warsztatowe
1. Proszę przejść do [Warsztatu Steam](https://steamcommunity.com/app/4000/workshop/), najechać kursorem na przeglądanie i wybrać [kolekcje](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). Po przejściu do strony proszę wybrać "Utwórz kolekcję".
2. Proszę wypełnić stronę "Create a Collection" (Utwórz kolekcję), podając wymagane informacje, takie jak tytuł i obraz brandingowy. Po wyświetleniu monitu należy dodać co najmniej jeden dodatek, aby uruchomić kolekcję.
3. Po utworzeniu kolekcji należy wybrać opcję publikacji, aby ją udostępnić.
4. Proszę pobrać numer z adresu URL, który będzie identyfikował Państwa kolekcję.
5. Przejść do [Panelu gry](https://hrzn.link/panel) i przejść do swojego serwera.
6. W sekcji startowej proszę wkleić numer kolekcji w polu "WORKSHOP ID".
7. Proszę uruchomić/ponownie uruchomić serwer, a pobierze on nowe dodatki na serwer i załaduje je podczas uruchamiania.

### Dodatki do systemu plików (Premium/Gmodstore)
1. Po zakupie wybranego dodatku z Gmodstore lub innej strony internetowej należy go pobrać.
2. Teraz, gdy mają już Państwo pobrany dodatek, należy przesłać plik na serwer za pośrednictwem SFTP lub panelu.
   - W przypadku korzystania z FTP można również przesyłać foldery. Tutaj znajdą Państwo poradnik [jak korzystać z FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp).
   - W przypadku korzystania z [Panelu gier](https://hrzn.link/panel) wystarczy przejść do usługi i wybrać Pliki.
5. Następnie proszę przejść do /garrysmod/addons/ i przeciągnąć i upuścić lub wybrać opcję upload, aby dodać plik zip z dodatkiem do swojego serwera.
6. Proszę rozpakować/rozpakować plik, klikając prawym przyciskiem myszy i wybierając "Unarchive" w panelu.
7. Proszę uruchomić/ponownie uruchomić serwer, a dodatki zostaną załadowane podczas uruchamiania.

### Klienci otrzymujący błędy przy nowych dodatkach?
Niektóre dodatki wymagają, aby klient pobrał pewną zawartość, aby móc wyświetlić dodaną zawartość z dodatku. Proszę zapoznać się z tym przewodnikiem (wkrótce), aby dowiedzieć się, jak zmusić klientów do pobrania wymaganej zawartości podczas dołączania do serwera za pomocą FastDL/WorkshopDL.

## Rozwiązywanie problemów
* Proszę upewnić się, że zmieniłeś nazwę dodatku, aby usunąć wielkie litery, spacje lub znaki specjalne, ponieważ mogą one uniemożliwić uruchomienie dodatku.
* Proszę uważać, aby nie modyfikować ani nie usuwać żadnych podstawowych plików gry, ponieważ może to oznaczać konieczność ponownej instalacji całego serwera Garry's Mod!
* W przypadku korzystania z [Panelu gry](https://hrzn.link/panel) proszę upewnić się, że przesyłany jest plik .zip, a nie folder, ponieważ nie jest on obsługiwany przez przeglądarki internetowe.