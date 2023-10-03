---
id: using_mysql
title: Podstawy MySQL
description: Odpowiedzi na wszystkie najczęściej zadawane pytania dotyczące MySQL.
---

## Czym jest MySQL?

MYSQL to powszechnie używane rozwiązanie do przechowywania baz danych, które może być używane do przechowywania danych serwerów gier, a nawet botów Discord i stron internetowych!

Kilka przykładów zastosowania MySQL:

- Serwery gier używają MySQL dla trybów gry i wtyczek do przechowywania danych, może to również pomóc w połączeniu wielu serwerów.
- Serwery internetowe wykorzystują MySQL w aplikacjach internetowych do bezpiecznego przechowywania danych. Na przykład Państwa posty na forum.
- W przypadku botów Discord, MySQL może być używany do przechowywania informacji o poziomie użytkownika.

## Znalezienie hosta i portu bazy danych

Na naszej stronie głównej [cPanel](https://hrzn.link/cpanel) po prawej stronie znajduje się pole "Informacje ogólne".
Hostem będzie współdzielony adres IP

Portem będzie zawsze `3306`.

:::tip
Jeśli instalują Państwo coś na swoim serwerze internetowym, mogą Państwo po prostu wpisać `localhost` jako host!
:::

## Tworzenie bazy danych i użytkownika

W naszym [cPanel](https://hrzn.link/cpanel) proszę przewinąć w dół do baz danych i kliknąć "Kreator baz danych MySQL®".

To poprowadzi Państwa przez proces tworzenia bazy danych i pokaże Państwa dane uwierzytelniające.