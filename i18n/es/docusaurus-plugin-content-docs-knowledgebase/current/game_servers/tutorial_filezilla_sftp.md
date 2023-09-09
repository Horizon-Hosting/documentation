---
id: tutorial_filezilla_sftp
title: Instalación y uso del cliente FTP FileZilla
description: Cómo descargar e instalar FileZilla y utilizarlo para transferir archivos a su servidor.
---

## Introducción
Esta guía detalla cómo utilizar SFTP con el gamepanel de Horizon Hosting. Esto puede ser ventajoso ya que SFTP permite una transferencia de archivos **más rápida** y **más voluminosa**. Sin embargo, no es tan intuitivo como utilizar el gestor de archivos incorporado del gamepanel. Esta guía detalla cómo instalar y configurar **FileZilla**, un popular cliente SFTP. También hay un vídeo disponible al final de esta página.

SFTP es una variante del **Protocolo de transferencia de archivos** (FTP) que permite una transferencia segura. Hoy en día, se suele preferir SFTP.

## Configuración de FileZilla
### Descarga e instalación de FileZilla
1. Navegue hasta la [página de descarga del Cliente FileZilla](https://filezilla-project.org/download.php)
2. Haga clic en "Descargar cliente FileZilla".
3. Ejecute el archivo descargado
   - ![Página de descargas de FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/1FileZilla%20Download.png)
4. Si se le solicita, haga clic en "Sí" en el aviso de Control de cuentas de usuario.
   - ![Indicación de Control de cuentas de usuario, con Sí resaltado](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/2Windows%20Prompt.png)
5. Acepte el acuerdo de licencia
   - ![Página del Acuerdo de licencia del instalador de FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/3Installer%20Accept.png)
6. Rechazar la oferta opcional
7. Pulse siguiente
   - ![Página de oferta opcional, con la opción de rechazo seleccionada](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/4Installer%20Decline%20Offer.png)
8. Seleccione para quién desea instalar FileZilla.
9. Haga clic en siguiente
   - ![Opciones de instalación](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/5Installation%20Options.png)
10. Seleccione los componentes que desee. Por lo general, la selección por defecto está bien. Si desea un icono de FileZilla en su escritorio, seleccione esta opción.
11. Pulse siguiente
    - ![Componentes de FileZilla](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/6Installer%20Components.png)
12. Elija una carpeta en la que instalar FileZilla. No es necesario cambiar esto
13. Pulse siguiente
    - ![Ubicación de la instalación](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/7Installer%20Install%20Location.png)
14. Haga clic en instalar
    - ![Carpeta del menú Inicio](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/8Installer%20Start%20Menu%20Folder.png)
15. Una vez finalizada la instalación, pulse Finalizar
    - ![Instalación completa](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/9Installer%20Completion.png)

**FileZilla ya está instalado.**

### Conectándose a su servidor
1. Navegue hasta su servidor en el panel
   - ![Página de servidores de Gamepanel](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/10Horizon%20Panel%20Servers.png)
2. Vaya a ajustes, y vea los detalles de SFTP
   - ![Página de configuración del panel de juego](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/11Horizon%20Panel%20Server%20Settings.png)
3. Copie la dirección del servidor y péguela en la sección "Host" de FileZilla
4. Copie el nombre de usuario y péguelo en la sección "Nombre de usuario" de FileZilla
   - ![Página del servidor, con los detalles de SFTP resaltados](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/12Horizon%20Panel%20SFTP%20Details.png)
   - ![Interfaz de usuario de FileZilla, con las secciones Host y Nombre de usuario resaltadas](https://archive.horizonnetworks.uk/Resources/Documentation/Using%20SFTP/13FileZilla%20Connection%20Details.png)
5. Introduzca su contraseña - es la misma contraseña que utiliza para acceder al panel
6. Deje el puerto en blanco - se rellenará automáticamente
7. Haga clic en "Conexión rápida".

**Ahora debería estar conectado a su servidor.** Los archivos del servidor remoto deberían aparecer en la parte derecha.

Si no ve los archivos, o ve errores en el cuadro de estado, compruebe su contraseña o [contacte con nosotros](https://hrzn.link/getting_support) para obtener más ayuda.


## Vídeo

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ex3IiPE1Eg8" title="Reproductor de vídeo de YouTube" frameborder="0" allow="acelerómetro; reproducción automática; portapapeles-escritura; medios codificados; giroscopio; imagen en imagen; compartir en la web" allowfullscreen></iframe>

[Vea este vídeo en YouTube](https://www.youtube.com/watch?v=Ex3IiPE1Eg8)