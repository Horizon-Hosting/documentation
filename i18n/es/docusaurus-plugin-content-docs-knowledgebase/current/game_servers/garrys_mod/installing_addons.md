---
id: installing_addons
title: Instalación de complementos
description: Cómo instalar un addon en su servidor de Garry's Mod.
---

Instalar addons es una parte crucial del desarrollo del servidor y añade nuevos contenidos para hacer su servidor más divertido. Hay montones de creaciones y addons gratuitos en [Steam Workshop](https://steamcommunity.com/app/4000/workshop/) para hacer que su servidor sea el suyo propio. Los addons premium (los que cuestan dinero) también están disponibles para comprar en sitios web como [gmodstore](https://gmodstore.com).

## Instalación de complementos
### Taller de complementos
1. Vaya a [Steam Workshop](https://steamcommunity.com/app/4000/workshop/), pase el ratón por encima de examinar y seleccione [colecciones](https://steamcommunity.com/workshop/browse/?appid=4000&browsesort=trend&section=collections). 2. Cuando llegue a la página, seleccione "Crear colección".
2. Rellene la página "Crear una colección" con la información necesaria, como el título y la imagen de marca. Cuando se le solicite, deberá añadir al menos un complemento para iniciar la colección.
3. Una vez realizada su recopilación, deberá seleccionar la opción de publicar para que sea accesible.
4. Coja el número de su URL, esto identificará su colección.
5. Vaya al [Panel de juego](https://hrzn.link/panel) y vaya a su servidor.
6. En la sección de inicio, pegue el número de recogida en la casilla "ID TALLER".
7. Inicie/Reinicie el servidor y éste descargará los nuevos complementos en el servidor y los cargará durante el arranque.

### Filesystem addons (Premium/Gmodstore)
1. Una vez que haya adquirido el addon seleccionado en Gmodstore o en cualquier otro sitio web, deberá descargarlo.
2. Ahora que ya tiene su addon descargado tendrá que subir el archivo al servidor a través de SFTP o del panel.
   - Si utiliza FTP también puede cargar carpetas. Aquí tiene una guía sobre [cómo utilizar FTP](https://docs.hrznhosting.com/knowledgebase/general/using_ftp)
   - Si utiliza el [Panel de Juego](https://hrzn.link/panel) simplemente vaya a su servicio y seleccione Archivos.
5. Desde aquí, vaya a /garrysmod/addons/ y arrastre y suelte o seleccione subir para añadir el archivo zip del addon a su servidor.
6. Descomprima/descomprima el archivo haciendo clic con el botón derecho y seleccionando "Descomprimir" en el panel.
7. Inicie/reinicie el servidor y cargará los complementos durante el arranque.

### ¿Los clientes obtienen errores en los nuevos complementos?
Algunos addons requieren que el cliente descargue algún contenido para poder ver el contenido añadido desde el addon. Por favor, vea esta guía (Próximamente) para aprender cómo hacer que los clientes descarguen el contenido requerido cuando se unan a su servidor utilizando FastDL/WorkshopDL.

## Solución de problemas
* Por favor, asegúrese de que ha cambiado el nombre de cualquier addon para eliminar mayúsculas, espacios o caracteres especiales ya que pueden impedir que el addon funcione.
* ¡Tenga cuidado de no modificar ni borrar ninguno de los archivos principales del juego, ya que esto puede significar que tendrá que reinstalar todo su servidor de Garry's Mod!
* Si utiliza el [Panel de Juego](https://hrzn.link/panel) asegúrese de que está subiendo un archivo como un .zip no una carpeta ya que eso no es soportado por los navegadores web.