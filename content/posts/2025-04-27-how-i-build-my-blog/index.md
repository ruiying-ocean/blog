---
title: "How I build this blog page"
subtitle: ""
date: 2024-07-01T17:21:01+01:00
draft: false
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment: false
weight: 0

tags:
- Climate
categories:
- Science

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

toc:
  enable: true

repost:
  enable: true
  url: ""
---


I use `hugo`{.verbatim} to build site. As stated in [the official
documentation](https://gohugo.io/getting-started/quick-start/), hugo is
a fast and flexible static site generator written in Golang. It converts
source markup files (e.g., org, markdown, Rmarkdown, quarto) to html
file.

First of all, hugo is free. From writing to deployment, you do not cost
anything. Next, hugo is static html generator. Compared to the dynamic
wordpress. It does not require a server and thus is more affordable.

## Command line

### Download go, hugo, dart sass

``` {.bash org-language="sh"}
brew install hugo-extended

brew install sass/sass/sass

hugo new site blog
```

### A skeleton of website

Below is a copy from the hugo documentation.

    my-site/
    ├── archetypes (templates for new content)
    ├── assets
    ├── content (markup files)
    ├── data (data files (JSON, TOML, YAML, or XML) that augment content, configuration, localization, and navigation)
    ├── hugo.toml (configuration file)
    ├── images
    ├── layouts
    ├── netlify.toml (netlify configuration)
    ├── public (generated after building the site)
    ├── resources
    ├── static
    └── themes (as the name says)

### Build and publish

``` {.bash org-language="sh"}
hugo
```

## Rstudio + blogdown

I used \`blogdown\` for a while and I liked it. In particular, it
supports the page bundle feature very well. That is, each new post has
its own separate folder. However, I give up this solution because
Rstudio is too heavy and slow.

``` {.r org-language="R"}
blogdown::new_site()
blogdown::serve_site() ## build local website
blogdown::new_post() ## new post, usually pops up a UI
```

## Emacs easy-hugo

This is a lightweight but good enough solution. You can type
\`easy-hugo-complete-tags\` to do the auto-completion stuff. However, it
does not support page bundle, but I can tolerate it.

There are also other packages in Emacs like
[ox-hugo](https://ox-hugo.scripter.co/). But it is more for the org-mode
enthusiast.

## Depoly in the cloud

1.  [Github Pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)
2.  [Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/)
