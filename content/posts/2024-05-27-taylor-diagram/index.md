---
title: "An introduction of Taylor diagram"
subtitle: ""
date: 2024-05-27T18:23:35+01:00
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
- visualisation
categories:
- Science

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""
# resources:
# - name: featured-image
#   src: featured-image.jpg

toc:
  enable: true
math:
  enable: true
lightgallery: false
seo:
  images: []

repost:
  enable: false
  url: ""

# See details front matter: https://fixit.lruihao.cn/theme-documentation-content/#front-matter
---

<!--more-->
## What is Taylor diagram?
Taylor diagram is invented by Karl E. Taylor for the comparison between model and observational data (Taylor, 2001). Essentially, it includes *three metrics and their visualisation in a polar coordinate system*.

### Theoretical basis

1. Pearson's coefficient
2. Standard Deviation (SD)
3. centred RMSE (cRMSE)

These three metrics are related using a cosine rule:
$$
c^2 = a^2 + b^2 + 2ab \cos(\theta)\\
$$

$$
\text{cRMSE}^2 = \sigma_{\text{model}}^2 + \sigma_{\text{data}}^2 - 2 \sigma_{\text{model}} \sigma_{\text{data}} \cdot \rho
$$

As definition, $\rho = \cos(\theta)$ and $\theta = \arccos(\rho)$

### Visualisation in a polar coordinate system

When we get the angle ($\theta$) and the radius ($\sigma$), we can plot a point in a polar coordinate system. In a more complex figure, we add the reference information such as its SD. Then the cRMSE that measures the model-data distance can be calculated.

![An example of taylor diagram created by `cgeniepy` package. The blue solid lines depict the core  metrics and their relationship. Gold line is the cRMSE contour. Blue dashed line is the observational standard deviation. The correlation coefficient labels are the values of $\cos(\theta)$.](images/taylor_diagram.jpg "A example of Taylor diagram")


### Interpretation of Taylor diagram

Clearly, cRMSE is the metric to focus on. A model with smaller cRMSE has better performance.

## References
Taylor, K.E. (2001). Summarizing multiple aspects of model performance in a single diagram. J. Geophys. Res. 106: 7183–7192. 
