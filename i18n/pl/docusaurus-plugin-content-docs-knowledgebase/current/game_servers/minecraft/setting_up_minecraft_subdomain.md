---
id: setting_up_minecraft_subdomain
title: Konfiguracja subdomeny Minecraft
description: Jak utworzyć i skonfigurować subdomenę dla serwera Minecraft.
---

Serwery Minecraft mogą tworzyć i wykorzystywać subdomenę, która jest znacznie łatwiejsza do zapamiętania niż adres IP i port.

## Wymagania
- Zarejestrowana domena.
- Serwer Minecraft.
- Dostawca DNS. (na przykład: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/)).

*Uwaga: W tym samouczku nie można używać lokalnie hostowanego serwera Minecraft.

## Tworzenie subdomeny

### Wymagania wstępne
1. Przejść do [Panelu gry](https://hrzn.link/panel) i wybrać serwer, z którego chce się korzystać.
2. Proszę zlokalizować adres IP serwera i port, które znajdują się po lewej stronie terminala serwera.
    - Powinien wyglądać podobnie do tego: `94.130.165.43:00000`.
3. Proszę zanotować adres IP i port, będą one potrzebne w dalszej części instrukcji.

### Dodawanie rekordów DNS
1. Przejść do dostawcy DNS dla Państwa domeny, np. [Cloudflare](https://www.cloudflare.com) i zalogować się.
2. Proszę wybrać domenę i przejść do sekcji "DNS".
    - Proszę pamiętać, że dostawca DNS może mieć tę lokalizację w innym miejscu.

#### A Record
1. W sekcji "DNS" proszę kliknąć przycisk "Dodaj rekord".
2. Jako typ rekordu proszę wybrać `A`.
3. Jako nazwę rekordu proszę wpisać nazwę subdomeny.
    - Na przykład: Nazwa: `play` wskazuje na `play.yourdomain.com`.
4. Jako adres IP proszę wprowadzić adres IP serwera, który został skopiowany wcześniej.
    - Proszę nie podawać portu serwera w tej sekcji, ponieważ spowoduje to nieprawidłowe działanie subdomeny.
7. Może poprosić o status proxy i/lub czas TTL, proszę pozostawić te wartości bez zmian.

Przykład:
![Przykład rekordu](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### Rekord SRV
1. W sekcji "DNS" proszę kliknąć przycisk "Dodaj rekord".
2. Jako typ rekordu proszę wybrać `SRV`.
3. Dla usługi rekordu proszę wpisać `_minecraft`.
4. Jako protokół zapisu proszę wpisać lub wybrać `_tcp.`.
5. Jako nazwę rekordu proszę wpisać nazwę subdomeny, na przykład: `play`.
6. Jako cel rekordu proszę wpisać pełną subdomenę, na przykład: `play.yourdomain.com`.
7. Dla priorytetu rekordu proszę wpisać `0`.
8. Dla rekordowej wagi proszę wpisać `5`.
9. Dla portu zapisu proszę wpisać port powiązany z Państwa serwerem, na przykład: `25560`.
10. W przypadku TTL rekordu proszę pozostawić wartość domyślną lub najniższą możliwą opcję.

Przykład:
![Przykład rekordu SRV](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Najczęstsze problemy
#### Brak możliwości dołączenia przez subdomenę
Jeśli nie są Państwo w stanie dołączyć do serwera po prawidłowym skonfigurowaniu wszystkich rekordów DNS, należy dać swojemu dostawcy DNS maksymalnie 72 godziny na pełną propagację.