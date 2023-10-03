---
id: setting_up_minecraft_subdomain
title: Setting up a Minecraft sub-domain
description: How to create and setup a sub-domain for your Minecraft server.
---

Minecraft servers can create and utilise a subdomain, which is much easier to remember than an IP address and port.

## Requirements
- A registered domain.
- A Minecraft server.
- A DNS provider. (ex: [Cloudflare](https://www.cloudflare.com), [Namecheap](https://www.namecheap.com), [Google Cloud DNS](https://cloud.google.com/dns/))

*Note: You cannot use a locally hosted Minecraft server for this tutorial.*

## Creating the sub-domain

### Pre-Prerequisite
1. Navigate to the [Game Panel](https://hrzn.link/panel) and select the server you wish to use.
2. Locate the server IP address and port, this will be on the left hand side of the server terminal.
    - It should look similar to this: `94.130.165.43:00000`.
3. Note down the IP address and port, this will be needed further on.

### Adding the DNS records
1. Navigate to your DNS provider for your domain, ex: [Cloudflare](https://www.cloudflare.com) and login.
2. Select your domain and head to the "DNS" section.
    - Please note that your DNS provider may have this located elsewhere.

#### A Record
1. In the "DNS" section click the a button labeled "Add Record".
2. For the record type, select `A`.
3. For the record name, type what you would like the sub-domain name to be.
    - Ex: Name: `play` points to `play.yourdomain.com`.
4. For the IP address enter the server IP address that you copied earlier.
    - Do not include the server port in this section as it will result in the sub-domain not working properly.
7. It may ask for a proxy status and/or TTL time, leave these values unchanged.

Example:
![A Record Example](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/A_record.png)

#### SRV Record
1. In the "DNS" section click the button labeled "Add Record".
2. For the record type, select `SRV`.
3. For the record service, type `_minecraft`.
4. For the record protocol, type or select `_tcp.`
5. For the record name, type the name of your sub-domain, for example: `play`.
6. For the record target, type the full sub-domain, for example: `play.yourdomain.com`.
7. For the record priority, type `0`.
8. For the record weight, type `5`.
9. For the record port, type the port associated with your server, for example: `25560`.
10. For the record TTL, leave it as default or the lowest possible option.

Example:
![SRV Record Example](https://archive.horizonnetworks.uk/Resources/Documentation/Minecraft%20Subdomain/SRV_record.png)

## Common Issues
#### Not being able to join via the sub-domain
If you are not able to join the server after you have configured everything within your DNS records correctly - Then you will need to give your DNS provider up-to a maximum of 72 hours to fully propagate.