---
title: "Rime input method"
subtitle: ""
date: 2024-05-28T11:42:51+01:00
draft: false
author: ""
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment: false
weight: 0

tags:
- draft
categories:
- draft

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""
resources:
- name: featured-image
  src: featured-image.jpg
- name: featured-image-preview
  src: featured-image-preview.jpg

toc:
  enable: true
math:
  enable: false
lightgallery: false
seo:
  images: []

repost:
  enable: true
  url: ""

# See details front matter: https://fixit.lruihao.cn/theme-documentation-content/#front-matter
---

<!--more-->

## Rime
Rime is a across-platform engine which supports various Chinese input methods. It is best in

1. Free Software
2. No privacy issue (not upload any of your data in some tech company's cloud)

### Installation of rime (MacOS)

``` bash
brew install --cask squirrel
```

### Configuration

Application configuration:  squirrel.yaml and squirrel.custom.yaml (theme etc)

Input Method scheme configuration: default.yaml and default.custom.yaml (global); rime_mint.yaml (local).


### Useful features for me
* Shortcut of typing greek letters (e.g., "/alpha" -> "α", "/a" -> "ā")
* Emacs user friendly (e.g., next page is "C-n"; can be used [in emacs](https://github.com/DogLooksGood/emacs-rime))
* App specific options (e.g., Open terminal and it will automatically be English mode)


### Available configurations/schema

* [rime-ice](https://github.com/iDvel/rime-ice)
* [rime-mint](https://github.com/ayaka14732/awesome-rime)
* [ssnhd-rime](https://github.com/ssnhd/rime)
