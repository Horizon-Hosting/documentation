---
id: tutorial_filezilla_sftp
title: Instalacja i korzystanie z klienta FTP FileZilla
description: Jak pobrać i zainstalować program FileZilla i używać go do przesyłania plików na serwer.
---

## Wprowadzenie
Ten przewodnik szczegółowo opisuje, jak używać SFTP z panelem gier Horizon Hosting. Może to być korzystne, ponieważ SFTP pozwala na **szybszy**, **szybki** transfer plików. Nie jest to jednak tak intuicyjne, jak korzystanie z wbudowanego menedżera plików gamepanelu. W tym przewodniku znajdą Państwo szczegółowe informacje na temat instalacji i konfiguracji **FileZilla**, popularnego klienta SFTP. Na dole tej strony znajdą Państwo również film wideo.

SFTP to wariant **File Transfer Protocol** (FTP), który umożliwia bezpieczny transfer. W dzisiejszych czasach SFTP jest ogólnie preferowany.

## Konfiguracja FileZilla
### Pobieranie i instalacja FileZilla
1. Przejść do strony [FileZilla Client download page](https://filezilla-project.org/download.php).
2. Proszę kliknąć "Pobierz klienta FileZilla"
3. Proszę uruchomić pobrany plik
   - ![Strona pobierania FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Jeśli pojawi się monit, proszę kliknąć "Tak" w oknie Kontrola konta użytkownika.
   - ![Monit Kontroli konta użytkownika, z podświetloną opcją Tak](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Proszę zaakceptować umowę licencyjną
   - ![Strona umowy licencyjnej instalatora FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Proszę odrzucić ofertę opcjonalną
7. Proszę kliknąć przycisk dalej
   - ![Opcjonalna strona oferty z wybraną opcją odrzucenia](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Proszę wybrać, dla kogo ma zostać zainstalowana aplikacja FileZilla.
9. Proszę kliknąć przycisk dalej
   - ![Opcje instalacji](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Proszę wybrać odpowiednie komponenty. Ogólnie rzecz biorąc, domyślny wybór jest w porządku. Jeśli chcą Państwo mieć ikonę FileZilla na pulpicie, proszę wybrać tę opcję.
11. Proszę kliknąć przycisk dalej
    - ![Komponenty FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Proszę wybrać folder do zainstalowania FileZilla. Zmiana tej opcji nie jest konieczna
13. Proszę kliknąć przycisk dalej
    - ![Lokalizacja instalacji](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Proszę kliknąć zainstaluj
    - ![Folder menu Start](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Po zakończeniu instalacji proszę kliknąć Zakończ
    - ![Instalacja zakończona](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla jest teraz zainstalowana.

### Łączenie z Państwa serwerem
1. Proszę przejść do swojego serwera w panelu
   - ![Strona serwerów Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Proszę przejść do ustawień i wyświetlić szczegóły SFTP
   - ![Strona ustawień Gamepanelu](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Proszę skopiować adres serwera i wkleić go w sekcji "Host" w FileZilla.
4. Proszę skopiować nazwę użytkownika i wkleić ją w sekcji "Nazwa użytkownika" w FileZilla.
   - ![Strona serwera z podświetlonymi szczegółami SFTP](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![FileZilla UI, z podświetlonymi sekcjami Host i Nazwa użytkownika](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Proszę wprowadzić hasło - jest to to samo hasło, którego używają Państwo do logowania się do panelu.
6. Port proszę pozostawić pusty - zostanie wypełniony automatycznie.
7. Proszę kliknąć "Quickconnect"

**Powinni Państwo być teraz połączeni ze swoim serwerem. Pliki zdalnego serwera powinny być widoczne po prawej stronie.

Jeśli nie widzisz plików lub widzisz błędy w polu statusu, proszę sprawdzić hasło lub [skontaktuj się z nami](https://hrzn.link/getting_support) w celu uzyskania dalszej pomocy.


## Wideo

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

[Proszę obejrzeć ten film na YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8).