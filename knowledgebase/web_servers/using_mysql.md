---
id: using_mysql
title: MySQL Basics
description: Answering all the FAQs surrounding MySQL.
---

## What is MySQL?

MYSQL is a commonly used database storage solution, which can be used to store your game servers data, or even for Discord bots and websites!

Some examples of how MySQL could be used:

- Game servers use MySQL for gamemodes and plugins to store data, this can also help link multiple servers together.
- Web servers use MySQL in web apps to securely store data. For example, your forum posts.
- On Discord bots, MySQL can be used to store user's levelling info.

## Finding your database host and port

On our [cPanel](https://hrzn.link/cpanel) home page, there is a "General Information" box on the right hand side.
The host would be the Shared IP

The port will always be `3306`

:::tip Pro Tip

If you are installing something on your web server itself, you can just put `localhost` as the host!

:::

## Making a database and user

On our [cPanel](https://hrzn.link/cpanel), scroll down to databases and click on "MySQL® Database Wizard".

This will guide you through making a database, and show you your credentials.