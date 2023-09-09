---
id: setting_up_minecraft_subdomain
title: Configurar un subdominio de Minecraft
description: Cómo crear y configurar un subdominio para su servidor Minecraft.
---

Los servidores de Minecraft pueden crear y utilizar un subdominio, que es mucho más fácil de recordar que una dirección IP y un puerto.

## Requisitos
- Un dominio registrado.
- Un servidor de Minecraft.
- Un proveedor de DNS. (ex: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Nota: No se puede utilizar un servidor Minecraft alojado localmente para este tutorial.*

## Creación del subdominio

### Prerrequisito
1. Navegue hasta el [Panel de Juego](https://hrzn.link/panel) y seleccione el servidor que desea utilizar.
2. Localice la dirección IP y el puerto del servidor, estarán en la parte izquierda del terminal del servidor.
    - Debería tener un aspecto similar al siguiente `94.130.165.43:00000`.
3. Anote la dirección IP y el puerto, lo necesitará más adelante.

### Añadir los registros DNS
1. Navegue hasta su proveedor de DNS para su dominio, por ejemplo: [Cloudflare](https://www.cloudflare.com) e inicie sesión.
2. Seleccione su dominio y diríjase a la sección "DNS".
    - Tenga en cuenta que su proveedor de DNS puede tenerlo ubicado en otro lugar.

#### Un récord
1. En la sección "DNS" pulse el botón "Añadir registro".
2. Para el tipo de registro, seleccione `A`.
3. Para el nombre del registro, escriba el que desee que sea el nombre del subdominio.
    - Ej: Nombre: `play` apunta a `play.sudominio.com`.
4. Para la dirección IP introduzca la dirección IP del servidor que copió anteriormente.
    - No incluya el puerto del servidor en esta sección ya que provocará que el subdominio no funcione correctamente.
7. Puede pedir el estado del proxy y/o el tiempo TTL, deje estos valores sin modificar.

Ejemplo:
![Un ejemplo de registro](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### Registro SRV
1. En la sección "DNS" pulse el botón "Añadir registro".
2. Para el tipo de registro, seleccione `SRV`.
3. Para el servicio de registro, escriba `_minecraft`.
4. Para el protocolo de registro, escriba o seleccione `_tcp.`.
5. Para el nombre del registro, escriba el nombre de su subdominio, por ejemplo: `play`.
6. Para el destino del registro, escriba el subdominio completo, por ejemplo: `play.sudominio.com`.
7. Para la prioridad de registro, escriba `0`.
8. Para el peso récord, escriba `5`.
9. Para el puerto de registro, escriba el puerto asociado a su servidor, por ejemplo: `25560`.
10. Para el TTL de registro, déjelo por defecto o como la opción más baja posible.

Ejemplo:
![Ejemplo de registro SRV](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Problemas comunes
#### No poder unirse a través del subdominio
Si usted no es capaz de unirse al servidor después de haber configurado todo dentro de sus registros DNS correctamente - Entonces usted tendrá que dar a su proveedor de DNS hasta un máximo de 72 horas para propagar completamente.