---
id: gameserver_login_tokens
title: Obtención e instalación de un token de servidor de juegos (Token GSL)
description: Cómo autenticar su servidor en la lista de servidores con un token GSL
---

Todos los servidores de Garry's Mod pueden mostrarse públicamente a través de la lista de servidores de Garry's Mod, para ello es necesario instalar un GSLT en el servidor.

## Creación e instalación de un token de inicio de sesión en el servidor de juegos
1. Vaya al área [Gestionar servidores de juego](https://steamcommunity.com/dev/managegameservers) en el sitio web de steam e inicie sesión.
2. Localice la opción "Crear una nueva cuenta de servidor de juego" cerca de la parte inferior de la pantalla.
3. Introduzca el ID de la aplicación para Garry's Mod (4000) y también una nota para recordar para qué servidor es. Por ejemplo, "Servidor DarkRP".
4. Copie el "Identificador de inicio de sesión" de la lista de cuentas del servidor de juego.
5. Vaya al [Panel de juego](https://hrzn.link/panel) y vaya a su servidor.
6. En la sección de inicio, pegue el token del servidor de juegos en la casilla "STEAM ACCOUNT TOKEN".
7. Reinicie/arranque el servidor y ahora el servidor debería autorizarse con la lista de servidores.

## Solución de problemas
* Por favor, asegúrese de utilizar un token por servidor, ya que utilizar uno para varios servidores causará problemas de autenticación que llevarán a que sus jugadores sean expulsados.
* Si un Token GSL no se utiliza durante un largo periodo de tiempo, caducará y obtendrá este mensaje al intentar ejecutar el servidor. `No se pudo establecer la conexión con los servidores de Steam. (Token GSL caducado)`.
  - Para solucionarlo, tendrá que volver a [Gestionar servidor de juego](https://steamcommunity.com/dev/managegameservers) y elegir "Regenerar token" en el token que desee utilizar. Entonces podrá coger el token recién generado e instalarlo en su servidor.