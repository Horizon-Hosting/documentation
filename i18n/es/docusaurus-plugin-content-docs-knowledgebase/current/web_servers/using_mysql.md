---
id: using_mysql
title: Conceptos básicos de MySQL
description: Respuesta a todas las preguntas frecuentes sobre MySQL.
---

## ¿Qué es MySQL?

MYSQL es una solución de almacenamiento de bases de datos de uso común, que puede utilizarse para almacenar los datos de sus servidores de juegos, ¡o incluso para bots de Discord y sitios web!

Algunos ejemplos de utilización de MySQL:

- Los servidores de juegos utilizan MySQL para los modos de juego y los plugins para almacenar datos, esto también puede ayudar a enlazar varios servidores entre sí.
- Los servidores web utilizan MySQL en las aplicaciones web para almacenar datos de forma segura. Por ejemplo, sus mensajes del foro.
- En los bots de Discord, se puede utilizar MySQL para almacenar la información de nivelación de los usuarios.

## Encontrar el host y el puerto de su base de datos

En nuestra página de inicio [cPanel](https://hrzn.link/cpanel), hay un cuadro de "Información general" a la derecha.
El host sería la IP compartida

El puerto será siempre `3306`.

:::tip
Si está instalando algo en su propio servidor web, ¡puede poner simplemente `localhost` como host!
:::

## Crear una base de datos y un usuario

En nuestro [cPanel](https://hrzn.link/cpanel), desplácese hasta bases de datos y haga clic en "Asistente para bases de datos MySQL®".

Esto le guiará para crear una base de datos y le mostrará sus credenciales.