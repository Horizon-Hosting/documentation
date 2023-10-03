---
id: gameserver_login_tokens
title: Pobieranie i instalacja tokena serwera gier (tokena GSL)
description: Jak uwierzytelnić swój serwer na liście serwerów za pomocą tokena GSL?
---

Wszystkie serwery Garry's Mod mogą być wyświetlane publicznie za pośrednictwem listy serwerów Garry's Mod, aby to zrobić, GSLT musi być zainstalowany na serwerze.

## Tworzenie i instalacja tokenu logowania do serwera gier
1. Proszę przejść do obszaru [Manage Game Servers](https://steamcommunity.com/dev/managegameservers) na stronie steam i zalogować się.
2. Proszę znaleźć opcję "Utwórz nowe konto na serwerze gry" w dolnej części ekranu.
3. Proszę wpisać App ID dla Garry's Mod (4000), a także notatkę, aby zapamiętać, dla którego serwera jest on przeznaczony. Na przykład "DarkRP Server"
4. Proszę skopiować "Login Token" z listy kont serwerów gier.
5. Przejść do [Panelu gry](https://hrzn.link/panel) i przejść do swojego serwera.
6. W sekcji uruchamiania proszę wkleić token serwera gier w polu "STEAM ACCOUNT TOKEN".
7. Proszę zrestartować/uruchomić serwer i teraz serwer powinien autoryzować się z listą serwerów.

## Rozwiązywanie problemów
* Proszę upewnić się, że używasz jednego tokena na serwer, ponieważ używanie jednego na wielu serwerach spowoduje problemy z uwierzytelnianiem, co doprowadzi do wyrzucenia graczy.
* Jeśli token GSL nie jest używany przez dłuższy czas, wygaśnie i podczas próby uruchomienia serwera pojawi się ten komunikat. `Nie można nawiązać połączenia z serwerami Steam. (Token GSL wygasł)`.
  - Aby to naprawić, należy wrócić do [Manage Game Server](https://steamcommunity.com/dev/managegameservers) i wybrać opcję "Regenerate Token" na tokenie, którego chcą Państwo użyć. Następnie można pobrać nowo wygenerowany token i zainstalować go na serwerze.