---
id: authentication
title: Authentication
description: Authenticating to HRZN infrastructure.
---

**Horizon Hosting has a few methods of authenticating with different services, with this said, we have attempted to streamline the process and make it easy to understand and use.**

## Methods

### Teleport

:::caution

Teleport is not yet implemented, and is currently being trialled!

:::

This authentication method allows you to login to platforms by using the teleport interface, this should be used for SSH and other secure methods, it provides in detail audit logs. It uses either SSO or username and password to access the dashboard.


### SSO

One of the most used forms of authentication is SSO, this usually is in the form of GitHub or your billing account, this means that it will ask for you to login to an account for a different service to be able to access the one you wish to login to.

### Username & Password


:::tip

**All** username and password authentication should be secured with a form of 2FA!

:::

This is one of the least used forms of authentication, it uses a given password and username which grants you access to an account. Most passwords you need will be stored on the company password manager. We urge and require you to store any company passwords on there for security.