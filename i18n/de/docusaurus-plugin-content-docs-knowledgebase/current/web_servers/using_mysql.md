---
id: using_mysql
title: MySQL-Grundlagen
description: Antworten auf alle häufig gestellten Fragen zu MySQL.
---

## Was ist MySQL?

MYSQL ist eine weit verbreitete Datenbanklösung, die zum Speichern von Daten auf Ihren Spielservern oder sogar für Discord-Bots und Websites verwendet werden kann!

Einige Beispiele, wie MySQL verwendet werden kann:

- Spieleserver verwenden MySQL für Spielmodi und Plugins, um Daten zu speichern. Dies kann auch helfen, mehrere Server miteinander zu verbinden.
- Webserver verwenden MySQL in Webanwendungen, um Daten sicher zu speichern. Zum Beispiel Ihre Forenbeiträge.
- Bei Discord-Bots kann MySQL verwendet werden, um die Niveaustufen-Informationen der Benutzer zu speichern.

## Ermitteln des Hosts und des Ports Ihrer Datenbank

Auf unserer [cPanel](https://hrzn.link/cpanel)-Startseite gibt es auf der rechten Seite ein Feld "Allgemeine Informationen".
Der Host wäre die Shared IP

Der Port wird immer `3306` sein.

:::tip
Wenn Sie etwas auf Ihrem Webserver selbst installieren, können Sie einfach `localhost` als Host angeben!
:::

## Erstellen einer Datenbank und eines Benutzers

Scrollen Sie in unserem [cPanel](https://hrzn.link/cpanel) nach unten zu Datenbanken und klicken Sie auf "MySQL® Database Wizard".

Dieser führt Sie durch die Erstellung einer Datenbank und zeigt Ihnen Ihre Berechtigungsnachweise.