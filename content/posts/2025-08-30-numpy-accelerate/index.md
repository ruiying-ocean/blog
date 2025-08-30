---
title: "Accelerating Numpy in MacOS"
subtitle: ""
date: 2025-08-30T12:14:22+01:00
lastmod: 2025-08-30T12:14:22+01:00
draft: true
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment: false
weight: 0

tags:
- 
categories:
- draft

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

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

Numpy uses BLAS, a scientific computing library for FORTRAN. However, in MacOS, it is now possible to use Apple's BLAS implementation, which should have better computing efficiency because of native support.

# Installation
```python
pip install numpy --no-binary numpy
```
