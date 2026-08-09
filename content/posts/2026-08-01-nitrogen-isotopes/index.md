---
title: "Nitrogen isotopes"
subtitle: ""
date: 2026-08-01T13:49:13+08:00
lastmod: 2026-08-01T13:49:13+08:00
draft: false
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: "A introduction to nitrogen stable isotopes"
keywords:
- nitrogen isotopes
- nitrogen cycle
- isotope fractionation
- ocean biogeochemistry
license: ""
comment:
  enable: false
weight: 0

tags:
- Nitrogen cycle
- Stable isotopes
- Oceanography
categories:
- Science

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

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

Nitrogen has two stable isotopes: the abundant $^{14}\mathrm{N}$ and the rarer
$^{15}\mathrm{N}$. Their chemistry is nearly identical, but not perfectly so.
Small differences in reaction rate allow biological and chemical processes to
sort the two isotopes. Those differences turn nitrogen isotopes into tracers of
nutrient use, nitrogen fixation, nitrogen loss, food webs, and past ocean
conditions.

The difficult part is that a $\delta^{15}\mathrm{N}$ value is not a unique
fingerprint. It records the combined effects of source, transformation, mixing,
and preservation. This post develops a simple framework for reading that signal.

<!--more-->

## What does δ¹⁵N mean?

> TLDR: δ¹⁵N measures the heaviness of nitrogen elements

First define the isotope ratio

$$
R = \frac{^{15}\mathrm{N}}{^{14}\mathrm{N}}.
$$

Rather than report this small ratio directly, chemists normalise it
with the ratio in atmospheric nitrogen gas (AIR):

$$
\delta^{15}\mathrm{N}
= \left(\frac{R_{\mathrm{sample}}}{R_{\mathrm{AIR}}}-1\right)
\times 1000.
$$

The result is reported in per mil (‰). AIR is assigned a value of 0‰. A sample
at +5‰ has an
$^{15}\mathrm{N}/^{14}\mathrm{N}$ ratio 0.5% higher than AIR; a sample at
−2‰ has a ratio 0.2% lower. Positive and negative values therefore
mean *isotopically heavier* and *lighter relative to AIR*. They do not describe
the mass of an individual atom or imply that $^{15}\mathrm{N}$ is abundant in
the sample.


## What δ¹⁵N reflects during phytoplankton consumption

Phytoplankton preferentially take up ¹⁴N from nitrate. What δ¹⁵N records
therefore depends on whether some nitrate remains or the nitrate is completely
consumed.

### Incomplete nitrate consumption

When some nitrate remains, phytoplankton leave that nitrate enriched in ¹⁵N.
Biomass produced early is relatively light, whereas biomass produced later is
heavier because the remaining nitrate has become heavier.

The δ¹⁵N of nitrate and phytoplankton biomass therefore reflects both the
starting nitrate value and the fraction consumed. Where nitrate remains,
δ¹⁵N can provide information about the degree of nitrate utilization.

### Complete nitrate consumption

When phytoplankton consume all available nitrate, the integrated biomass must
have the same δ¹⁵N as the initial nitrate supply in a closed system. The light
biomass produced early is balanced by the heavier biomass produced later.

The δ¹⁵N of the total biomass then mainly reflects the nitrate source rather
than the degree of consumption. Mixing, recycling, and export can blur this
simple distinction in the ocean.
