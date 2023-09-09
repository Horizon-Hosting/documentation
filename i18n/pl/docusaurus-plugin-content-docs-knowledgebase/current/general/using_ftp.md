---
id: using_ftp
title: Podstawy transferu plików
description: Odpowiedzi na wszystkie najczęściej zadawane pytania dotyczące FTP.
---

## Co to jest FTP?

FTP to powszechnie używany protokół, który umożliwia przenoszenie plików i folderów z komputera bezpośrednio na serwer!

Kilka przykładów zastosowania protokołu FTP:

- Transportowanie folderów
- Przesyłanie plików ZIP
- Edycja plików tekstowych i konfiguracyjnych

## Znajdowanie hosta FTP i informacji o nim

Na naszej stronie głównej [cPanel](https://hrzn.link/cpanel) po prawej stronie znajduje się pole "Informacje ogólne".
Hostem będzie współdzielony adres IP.
Portem dla FTP będzie zawsze 21.
Nazwę użytkownika i hasło można utworzyć w sekcji Konta FTP.
Proszę upewnić się, że tekst w polu Katalog został usunięty, ponieważ ograniczy to dostęp do plików.

Na stronie serwera [Panel gry](https://hrzn.link/panel), po lewej stronie znajduje się zakładka "Ustawienia".
W polu SFTP DETAILS, host i port można znaleźć w polu SERVER ADDRESS i skopiować lewym przyciskiem myszy.
Nazwa użytkownika znajduje się podobnie w polu USERNAME i można ją skopiować lewym przyciskiem myszy.
Hasło jest takie samo jak hasło do Państwa konta w panelu.

## Połączenie z Państwa serwerem FTP

Połączenie z serwerem FTP wymaga jakiegoś klienta FTP.

Kilka, które polecamy to [FileZilla Client](https://filezilla-project.org/download.php?type=client) i [WinSCP Client](https://winscp.net/eng/download.php).

### FileZilla

W przypadku Filezilli można wprowadzić informacje FTP do paska szybkiego połączenia w górnej części okna lub zapisać je jako "Witrynę" za pomocą "Menedżera witryn".
Proszę upewnić się, że wybrano prawidłowy protokół w przypadku zapisywania jako "Witryna".
Proszę pozostawić typ logowania jako normalny i wprowadzić informacje, a następnie wybrać połącz.
