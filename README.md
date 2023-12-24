# HRZN Hosting Knowledgebase

# Contributing

All contributions are welcome, and we encourage everyone to contribute to the documentation site.

All of the site is written in [markdown](https://commonmark.org/help/), and you are expected to follow the formatting standards, which we have
put in place already throughout the site. This is to make sure all of the content is readable and consistent.

## Knowledgebase

Writing knowledgebase articles can help the HRZN community, allowing them to easily find answers to common questions and problems.

### Article Configuration

There are strict guidlines for the articles configuration, to make sure the site is consistent, and easy to use.

An example of an article configuration is below, it needs to be placed at the start of every article:

```yml
---
id: intro
title: 👋 Introduction
description: What is this?
---
```

`id` is the unique identifier for the article. It is used to link to the article from other pages.
`title` is the title, which the user sees on the page. This should be a short, but descriptive title, correctly capitalised. It should also begin with a relevant
emoji, to make it easier for the user to identify the article, if it is not part of a category.
`description` is a short description of the article, which the user sees on the page. This should be a short, but descriptive description, correctly capitalised.


### Article Content

Articles should be written about setting up, configuring, and using our services. For example, "Setting up Prometheus store", these topics can be interchangeably used for most hosts, however the article should be written according to using our services. This is to make sure the article is easy the user. You may also include screenshots (Which must be uploaded to the imgur service, and not a custom ShareX host) in the article, if you wish, these should be taken using our software (like our panel). If you don't have access to the software, you could let us know in the PR and we could take a screenshot for you, or give you a month's service, so you could do this yourself.


### Article Configuration

There are strict guidlines for the articles configuration, to make sure the site is consistent, and easy to use.

An example of an article configuration is below, it needs to be placed at the start of every article:

```yml
---
slug: welcome
title: Welcome to the blog!
authors: [luca]
tags: [updates, help, intro]
---
```

`slug` is the name of the article, and is used to generate the URL, it should be all lowercase and hyphenated. For example, `making-the-website`.
`title` is the title, which the user sees on the page. This should be a short, but descriptive title, correctly capitalised.
`authors` is a list of authors, who wrote the article. This is used to credit the author of the article. All staff may add their own author to the list in `docs/authors.yml`, to promote consistency. The URL should be your GitHub profile link, and the avatar should be your GitHub avatar.
`tags` is a list of tags, which are used to categorise the article. These help users narrow down results when searching for articles. There must be a minimum of 3 tags, and no more than 5.

### Article Content

Your article can be about any HRZN hosting work, which you are completing for us, or about any other HRZN topic you want to share. Your article should
be engaging, and should be easy to read and understand.