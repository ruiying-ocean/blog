---
title: "FixIt File Tree Shortcode"
subtitle: ""
date: 2026-02-05
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

tags:
- Hugo
categories:
- Programming

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

toc:
  enable: true

repost:
  enable: false
  url: ""
---

The recent FixIt theme (v0.4.2+) supports a `file-tree` shortcode for rendering directory structures. Very cool! See the [official documentation](https://fixit.lruihao.cn/documentation/content-management/shortcodes/extended/file-tree/) for more details.

## Hugo blog site structure

{{< file-tree level=-1 >}}
- name: my-site
  type: dir
  children:
    - name: archetypes
      type: dir
    - name: assets
      type: dir
      children:
        - name: images
          type: dir
        - name: lib
          type: dir
    - name: content
      type: dir
      children:
        - name: about
          type: dir
        - name: posts
          type: dir
          children:
            - name: 2026-02-05-fixit-file-tree-shortcode
              type: dir
              children:
                - name: index.md
                  type: file
    - name: data
      type: dir
    - name: hugo.toml
      type: file
    - name: layouts
      type: dir
    - name: netlify.toml
      type: file
    - name: public
      type: dir
    - name: resources
      type: dir
    - name: static
      type: dir
      children:
        - name: images
          type: dir
          children:
            - name: avatar.jpg
              type: file
            - name: fixit.svg
              type: file
    - name: themes
      type: dir
      children:
        - name: FixIt
          type: dir
{{< /file-tree >}}
