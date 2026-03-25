---
title: "Rime input method (MacOS)"
subtitle: ""
date: 2024-05-28T11:42:51+01:00
draft: false
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment:
  enable: false
weight: 0

categories:
- Programming

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
  enable: false
  url: ""

# See details front matter: https://fixit.lruihao.cn/theme-documentation-content/#front-matter
---

<!--more-->

Rime is a cross-platform engine which supports various Chinese input methods. Why I use it:

1. Free and open-source software
2. No privacy concerns — nothing is uploaded to any cloud
3. Highly customisable — every aspect of the input method can be tweaked

## Installation (macOS)

``` bash
brew install --cask squirrel
```

Then add the input method at `Settings -> Keyboard -> Text Input -> Chinese -> Squirrel`.

## The dictionary matters most

Rime itself is just an engine. Out of the box it ships with a minimal dictionary that produces poor candidate rankings — you'll constantly be picking the wrong character from the list. The single most important thing is to use a well-maintained dictionary with properly tuned word frequencies.

The main community dictionary projects:

- [rime-ice](https://github.com/iDvel/rime-ice) (雾凇拼音) — the de facto standard community dictionary. Massive vocabulary, regularly updated word frequencies sourced from modern corpus data.
- [rime-frost](https://github.com/gaboolic/rime-frost) (白霜拼音) — built on top of rime-ice with further frequency tuning. The author uses large-scale corpus analysis to improve candidate ordering, so common words rank higher. This is what I use.
- [oh-my-rime](https://github.com/Mintimate/oh-my-rime) (薄荷输入法) — also based on rime-ice, with a more beginner-friendly setup and extra schemas (Wubi, Terra Pinyin, etc.). What I used previously.

## Configuration

The configuration files live at `~/Library/Rime`. Rime uses a layered override system:

- `*.yaml` — upstream/base config
- `*.custom.yaml` — your personal patches, applied on top at deploy time

| File | Purpose |
|---|---|
| `default.yaml` / `default.custom.yaml` | Global settings: schema list, page size, hotkeys |
| `squirrel.yaml` / `squirrel.custom.yaml` | macOS Squirrel appearance: colour schemes, layout, app-specific options |
| `<schema_id>.schema.yaml` / `<schema_id>.custom.yaml` | Per-schema settings: switches, symbols, etc. |
| `custom_phrase.txt` | Custom pinned phrases with high priority |

The key insight: fork the community config, keep all upstream files untouched, and put personal customisations only in `*.custom.yaml` files. This way `git pull upstream` merges cleanly.

## Deploy

You need to deploy for changes to take effect: click the Squirrel icon in the menu bar and select "Deploy", or press `Ctrl+Option+~`.

## Useful features

- Greek letters and math symbols via `/` shortcuts (e.g., `/alpha` → α, `/deg` → °C)
- `v` mode for browsing symbol categories (e.g., `vxl` for all Greek letters, `vfh` for misc symbols)
- Emacs-friendly keybindings (e.g., `C-n` for next page; works with [emacs-rime](https://github.com/DogLooksGood/emacs-rime))
- App-specific options (e.g., terminals automatically switch to English mode)

## Links

- [rime-frost](https://github.com/gaboolic/rime-frost) — the config I use
- [rime-ice](https://github.com/iDvel/rime-ice) — the upstream dictionary project
- [oh-my-rime](https://github.com/Mintimate/oh-my-rime) — another popular config
- [Rime wiki](https://github.com/rime/home/wiki/)
