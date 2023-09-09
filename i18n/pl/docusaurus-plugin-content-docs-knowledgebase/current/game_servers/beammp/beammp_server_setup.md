---
id: beammp_server_setup
title: Konfiguracja serwera
description: Konfiguracja serwera gier BeamMP
---

## Wprowadzenie
W tym przewodniku szczegółowo opisano, jak skonfigurować nowy serwer gier Horizon Hosting BeamMP, aby był widoczny na liście serwerów.

## Uzyskanie klucza serwera
* Proszę zacząć od zalogowania się na **[BeamMP Keymaster](https://beammp.com/k/keys)** za pomocą swojego konta Discord.
* Proszę kliknąć niebieski tekst "tutaj", aby utworzyć nowy klucz.
* Proszę wpisać nazwę serwera i adres IP. Proszę zauważyć, że pole IP nic nie robi i może być pozostawione jako `0.0.0.0`.
* Państwa nowo wygenerowany klucz zostanie wyświetlony.

**Proszę nie udostępniać tego klucza. Ten klucz jest unikalny dla Państwa.

Aby Państwa serwer pojawił się na liście serwerów, wymagany jest 1 klucz na serwer. Jeśli potrzebują Państwo więcej kluczy do serwerów, można to zrobić przekazując darowiznę na [BeamMP Patreon](https://patreon.com/BeamMP).

## Konfiguracja startowa
Opcje konfiguracyjne dla Państwa serwera będą widoczne w zakładce **"Startup "** w [Panelu Hostingowym HRZN](https://hrzn.link/panel). Dostępne będą następujące pola:

|Nazwa | Opis | Przykład |
|-----|-------------|---------|
| Klucz uwierzytelniania | Państwa klucz od [BeamMP Keymaster](https://beammp.com/k/keys). Jest to wymagane, aby Państwa serwer BeamMP był widoczny na liście serwerów. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Nazwa | Nazwa Państwa serwera, która będzie widoczna na liście serwerów | `Horizon Networks BeamMP Server` |
| Samochody | Liczba samochodów, które użytkownik może odrodzić | `3` |
| Mapa | Mapa, która będzie używana przez serwer. | `/levels/gridmap_v2/info.json`
| Opis | Opis Państwa serwera, który będzie widoczny na liście serwerów | `Horizon Networks BeamMP Server` |
| Maksymalna liczba graczy | Maksymalna liczba graczy, którzy mogą być na twoim serwerze, proszę skontaktować się z pomocą techniczną za pośrednictwem [naszego Discorda](https://hrzn.link/discord) lub zmienić pakiet, aby to edytować. | `20` |
| Prywatny | Czy Państwa serwer powinien być wyświetlany na liście serwerów, czy nie. Jeśli jest to prawda, nie będzie **pokazywany**. | `true` lub `false` |

## Dodawanie modów klienta do serwera
Dodawanie modów do serwera można wykonać za pomocą **"Menedżera plików "** lub **klienta SFTP**.  
* Proszę najpierw przejść do folderu `Resources`, a następnie do folderu `Client`.
* Następnie proszę przesłać pliki ZIP modów do tego folderu.
* Na koniec proszę wrócić do zakładki **"Konsola" ** w panelu. Proszę kliknąć restart, aby ponownie uruchomić serwer i zastosować zmiany.

Modyfikacje i mapy klienta zostaną automatycznie pobrane przez wszystkich klientów po dołączeniu.

## Zmiana mapy na Państwa serwerze
Zmianę mapy można wykonać poprzez zmianę pola `Map` w zakładce **"Startup "** w Panelu. Poniżej przedstawiono domyślne mapy BeamNG.Drive, które nie wymagają dodatkowych ZIP-ów klienta:
* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industrial/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### W przypadku map niestandardowych wymagana jest dodatkowa konfiguracja:
* Najpierw proszę zajrzeć do pliku ZIP z mapą, a następnie otworzyć folder **levels**.
* Wewnątrz tego folderu powinien znajdować się kolejny folder. Proszę skopiować nazwę tego folderu.
* Proszę edytować konfigurację mapy w sekcji **"Startup". Powinna ona brzmieć `/levels/MAPNAME/info.json` z MAPNAME będącą nazwą, którą właśnie skopiowałeś.

## Dołączenie do Państwa serwera

Jeśli Państwa serwer jest widoczny na liście serwerów, można wyszukać jego nazwę w grze i dołączyć do niego.

Alternatywnie, jeśli Państwa serwer nie jest widoczny na liście serwerów, można do niego dołączyć:
* Najpierw proszę skopiować adres IP widoczny w zakładce **"Console "** w panelu. (Example `94.130.165.43:25612`)
* Następnie proszę przejść do zakładki "Direct Connect" w menu multiplayer i kliknąć **"Paste from Clipboard "**.
* Na koniec proszę kliknąć "Połącz" i znajdą się Państwo na swoim serwerze.