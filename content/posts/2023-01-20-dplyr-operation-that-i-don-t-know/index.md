---
title: dplyr operation that I don't know
author: Package Build
date: '2023-01-20'
slug: []
categories:
  - Programming
tags:
  - R; Data Science
subtitle: 'a summary of some tricky functions'
authorLink: ''
authorEmail: ''
description: ''
keywords: ''
license: ''
comment: no
weight: 0
hiddenFromHomePage: no
hiddenFromSearch: no
summary: ''
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
toc:
  enable: yes
math:
  enable: no
lightgallery: no
seo:
  images: []
repost:
  enable: yes
  url: ''
---

## selection
- X:Y (column X to Y)
- start_with (string)
- end_with (string)
- matches (regex)
- contains (string)

## conditons
- if_else(condition, TRUE_operation, FASLE_operation)

- case_when(condition ~ operation_if_TRUE)

## across and c_aross
`across` is a verb for selected column （i.e., vector)
`c_across` is a verb for row, but must be used with rowwise()

```r
# calculate mean for x and y column vector
df %>% mutate(across(c(x,y), mean))

## Yes, it can't be used in the same functional programming way, how weird!
df %>% rowwise() %>% mutate(m = mean(c_across(c(x,y))))
```

## lambda function (in purrr package)

~ = lambda, .x = argument
```r
## plus 1 for selected column vector, imagine x=x+1, y=y+1
df %>% mutate(across(c(x,y), ~ .x + 1))
```

to be continue ...
