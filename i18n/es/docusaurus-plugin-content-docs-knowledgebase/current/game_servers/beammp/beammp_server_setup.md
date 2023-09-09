---
id: beammp_server_setup
title: Configuración del servidor
description: Configuración de su servidor de juegos BeamMP
---

## Introducción
Esta guía detalla cómo configurar su nuevo servidor de juegos BeamMP de Horizon Hosting para que aparezca en la lista de servidores.

## Obtención de una clave de servidor
* Comience iniciando sesión en **[BeamMP Keymaster](https://beammp.com/k/keys)** con su cuenta de Discord.
* Haga clic en el texto azul "aquí" para crear una nueva clave.
* Rellene el nombre del servidor y la IP. Tenga en cuenta que el campo IP no hace *nada* y puede dejarse como `0.0.0.0`.
* A continuación se mostrará su clave recién generada.

**Por favor, asegúrese de no compartir esta clave. Esta clave es única para usted.**

Se requiere 1 clave por servidor para que su servidor aparezca en la lista de servidores. Si necesita más claves de servidor, puede hacerlo donando en el [BeamMP Patreon](https://patreon.com/BeamMP)

## Configuración de inicio
Las opciones de configuración de su servidor se mostrarán en la pestaña **"Inicio "** del [Panel de Hosting HRZN](https://hrzn.link/panel). Estarán presentes los siguientes campos:

|Nombre | Descripción | Ejemplo
|-----|-------------|---------|
| Clave de autenticación | Su clave del [BeamMP Keymaster](https://beammp.com/k/keys). Es necesaria para que su servidor BeamMP aparezca en la lista de servidores. | `aid693aa-l5c2-5883-b498-z196873fc578` |
| Nombre | El nombre de su servidor, que se mostrará en la lista de servidores | `Servidor BeamMP de Horizon Networks` | Nombre de su servidor, que se mostrará en la lista de servidores | Servidor BeamMP de Horizon Networks
| Coches | El número de coches que un usuario puede engendrar | `3` |
| Mapa | El mapa que utilizará el servidor. | `/levels/gridmap_v2/info.json`
| Descripción | La descripción de su servidor, que se mostrará en la lista de servidores | `Servidor BeamMP de Horizon Networks` | Descripción
| Max Jugadores | El número máximo de jugadores que puede haber en su servidor, por favor contacte con soporte a través de [nuestro Discord](https://hrzn.link/discord) o cambie su paquete para editar esto. | `20` |
| Privado | Si su servidor debe mostrarse en la lista de servidores o no. Si es verdadero, **no** se mostrará. | `true` or `false` |

## Añadir mods cliente a su servidor
Puede añadir mods a su servidor utilizando la pestaña en línea **"Gestor de archivos "** o un **Cliente SFTP**.  
* En primer lugar, navegue hasta la carpeta `Resources` y, a continuación, hasta la carpeta `Client`.
* A continuación, suba los ZIPs de sus mods a esta carpeta.
* Por último, vuelva a la pestaña **"Consola "** del panel. Aquí, haga clic en reiniciar para reiniciar su servidor y aplicar los cambios.

Los mods y mapas de los clientes serán descargados automáticamente por todos los clientes al unirse.

## Cambiar el mapa en su servidor
Puede cambiar el mapa modificando el campo `Mapa` en la pestaña **"Inicio "** del Panel. A continuación se muestran los mapas predeterminados de BeamNG.Drive que no necesitan ZIP de cliente adicionales para ser utilizados:
* `/levels/gridmap_v2/info.json`
* `/levels/automation_test_track/info.json`
* `/levels/east_coast_usa/info.json`
* `/levels/hirochi_raceway/info.json`
* `/levels/italy/info.json`
* `/levels/jungle_rock_island/info.json`
* `/levels/industrial/info.json`
* `/levels/small_island/info.json`
* `/levels/smallgrid/info.json`
* `/levels/utah/info.json`
* `/levels/west_coast_usa/info.json`
* `/levels/driver_training/info.json`
* `/levels/derby/info.json`

### Para los mapas personalizados, se requiere una configuración adicional:
* Primero, mire dentro del ZIP del mapa y luego abra la carpeta **levels**.
* Dentro de esta carpeta, debería haber otra carpeta. Copie el nombre de esta carpeta.
* Edite la configuración del mapa en la sección **"Inicio "**. Debe decir `/levels/MAPNAME/info.json` siendo el MAPNAME el nombre que acaba de copiar.

## Unirse a su servidor

Si su servidor está visible en la lista de servidores, puede buscar el nombre en el juego y unirse a él.

Alternativamente, si su servidor no está visible en la lista de servidores, puede unirse a él mediante:
* Primero copiando la dirección IP visible en la pestaña **"Consola "** del panel. (Example `94.130.165.43:25612`)
* A continuación, vaya a la pestaña "Conexión directa" del menú multijugador y haga clic en **"Pegar desde el portapapeles "**.
* Por último, haga clic en "Conectar" y estará en su servidor.