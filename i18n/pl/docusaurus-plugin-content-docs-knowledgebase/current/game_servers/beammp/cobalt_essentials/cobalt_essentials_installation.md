---
id: cobalt_essentials_installation
title: Instalacja Cobalt Essentials
description: Czym są Cobalt Essentials i Cobalt Essentials Interface i jak je zainstalować?
---

## Cobalt Essentials (CE)

### Czym jest Cobalt Essentials?

Cobalt Essentials to wtyczka administracyjna oparta na czacie, która dodaje "niezbędne elementy" do Państwa serwera.
Jest to modułowy system uprawnień i zarządzania serwerem, co oznacza, że można uzyskać dodatki rozszerzające jego funkcjonalność!

Został napisany przez [Preston](https://github.com/prestonelam2003) i społeczność open source i jest dostępny do pobrania na [GitHub](https://github.com/prestonelam2003/CobaltEssentials).
Mają oni również [serwer Discord](https://discord.gg/UV74wNXKdz) dla wsparcia i innych zapytań.

### Wymagania
 
 - Serwer BeamMP działający w wersji `3.x.x`

### Instalacja

#### Panel hostingowy HRZN

1. Proszę przejść do swojego serwera BeamMP w naszym [panelu gry](https://hrzn.link/panel).
2. Proszę kliknąć opcję "Modyfikacje" na pasku bocznym.
3. Proszę kliknąć na instalację "Cobalt Essentials". Jeśli nie widzisz tego, proszę [skontaktować się z pomocą techniczną](/knowledgebase/getting_support).
4. Proszę ponownie uruchomić serwer BeamMP w zakładce "Konsola".

#### Podręcznik
1. Proszę pobrać plik [Cobalt Essentials ZIP File](https://github.com/prestonelam2003/CobaltEssentials/archive/refs/heads/master.zip).
2. Proszę przenieść/przesłać pobrany plik ZIP do folderu `Resources/Server`.
3. Proszę rozpakować plik.
4. Proszę ponownie uruchomić serwer.

## Cobalt Essentials Interface (CEI)

### Co to jest CEI?

CEI to interfejs w grze dla CE. Umożliwia on pracownikom administracji serwera korzystanie z prostego interfejsu zamiast listy komend czatu.
Został napisany przez [Stanley Dudek](https://github.com/StanleyDudek) i jest dostępny do pobrania na [GitHub](https://github.com/StanleyDudek/CobaltEssentialsInterface).

### Wymagania

 - Serwer BeamMP działający w wersji `3.x.x`
 - Cobalt Essentials jest już zainstalowany

### Instalacja

#### Panel hostingowy HRZN
1. Proszę przejść do swojego serwera BeamMP w naszym [panelu gry](https://hrzn.link/panel).
2. Proszę kliknąć opcję "Modyfikacje" na pasku bocznym.
3. Proszę kliknąć na instalację "Cobalt Essentials Interface". Jeśli nie widzisz tego, proszę [skontaktować się z pomocą techniczną](/knowledgebase/getting_support).
4. Proszę ponownie uruchomić serwer BeamMP w zakładce "Konsola".

#### Podręcznik

1. [Proszę pobrać CEI](https://github.com/StanleyDudek/CobaltEssentialsInterface/releases) klikając `Cobalt_Essentials_Interface_...zip`.
2. Proszę wgrać plik ZIP do katalogu głównego (`"/"`, gdzie znajduje się plik wykonywalny BeamMP-Server) swojego serwera.
3. Proszę rozpakować plik ZIP.
4. Proszę otworzyć plik `Resources\Server\CobaltEssentials\LoadExtensions.cfg` i dodać `CEI = "CEI"` na dole.
5. Proszę ponownie uruchomić serwer

Aby otworzyć CEI, proszę uruchomić komendę `/CEI` w czacie!