---
id: using_ftp
title: Conceptos básicos de la transferencia de archivos
description: Respuesta a todas las preguntas frecuentes en torno al FTP.
---

## ¿Qué es el FTP?

FTP es un protocolo de uso común que le permite mover archivos y carpetas desde su PC directamente a su servidor.

Algunos ejemplos de cómo podría utilizarse el FTP:

- Transporte de carpetas
- Carga de archivos ZIP
- Edición de archivos de texto y de configuración

## Encontrar su host FTP e información

En nuestra página de inicio [cPanel](https://hrzn.link/cpanel), hay un cuadro de "Información general" a la derecha.
El host sería la IP compartida.
El puerto siempre será el 21 para FTP.
El nombre de usuario y la contraseña se pueden crear en la sección de cuentas FTP.
Asegúrese de eliminar el texto de la casilla Directorio, ya que limitará su acceso a los archivos.

En la página de nuestro servidor [Panel de juego](https://hrzn.link/panel), hay una pestaña "Configuración" en la parte izquierda.
En el cuadro DETALLES SFTP, puede encontrar el host y el puerto en el cuadro DIRECCIÓN DEL SERVIDOR y copiarlos haciendo clic con el botón izquierdo.
El nombre de usuario se encuentra simularmente en la casilla USERNAME y puede copiarse con un clic izquierdo.
La contraseña es la misma que la de su cuenta del panel.

## Conectándose a su servidor FTP

La conexión a un servidor FTP requiere algún tipo de cliente FTP.

Algunos que recomendamos son [Cliente FileZilla](https://filezilla-project.org/download.php?type=client) y [Cliente WinSCP](https://winscp.net/eng/download.php)

### FileZilla

En el caso de Filezilla, puede introducir la información FTP en la barra de conexión rápida de la parte superior de la ventana o guardarla como "Sitio" utilizando el "Gestor de sitios".
Asegúrese de seleccionar el protocolo correcto si lo guarda como "Sitio".
Deje el tipo de inicio de sesión como normal e introduzca la información y luego seleccione conectar.
