---
id: setting_up_prometheus
title: Setting Up Prometheus
description: Setting up Prometheus for new nodes.
---

:::caution

This is a **Horizon Hosting Specific** document! It can be used by others as a guide, but is only intended for internal use.

:::

### Create User
```sh
cd /
sudo useradd --system --shell /bin/false node_exporter
```
### Download Files
```sh
curl -fsSL https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz \
  | sudo tar -zxvf - -C /usr/local/bin --strip-components=1 node_exporter-1.3.1.linux-amd64/node_exporter \
  && sudo chown node_exporter:node_exporter /usr/local/bin/node_exporter
```
### Configure Systemd
Create a file called `node_exporter.service` in `/etc/systemd/system/` with the contents below
```sh
# Node Exporter
# ----------------------------------

[Unit]
Description=Node Exporter

[Service]
User=node_exporter
Group=node_exporter
EnvironmentFile=-/etc/sysconfig/node_exporter
ExecStart=/usr/local/bin/node_exporter $OPTIONS

[Install]
WantedBy=multi-user.target
```
## Start, Test and Enable Service
#### ℹ If the `sudo systemctl status node_exporter` command shows `Active: failed...` then please report the logs to the development team.
```sh
sudo systemctl daemon-reload && \
sudo systemctl start node_exporter && \
sudo systemctl status node_exporter && \
sudo systemctl enable node_exporter
```
#### Adding to Prometheus
This is a **stub**!

