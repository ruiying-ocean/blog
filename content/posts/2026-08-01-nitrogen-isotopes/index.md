---
title: "Nitrogen isotopes"
subtitle: ""
date: 2026-08-01T13:49:13+08:00
lastmod: 2026-08-09T13:49:13+08:00
draft: true
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: "An introduction to stable nitrogen isotopes"
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


## How other nitrogen-cycle processes influence δ¹⁵N

> TLDR: Most incomplete reactions separate the isotopes: the remaining
> substrate becomes heavier and the product is initially lighter. Complete
> conversion preserves the average δ¹⁵N of the source, but coupled reactions
> can obscure this simple pattern.

A useful interpretation starts with three questions: which nitrogen pool was
measured, is it a residual substrate or a product, and how completely was the
substrate consumed? The same process can raise δ¹⁵N in one pool and lower it in
another.

| Process | Typical isotope tendency | Main complication |
| --- | --- | --- |
| Nitrogen fixation | New fixed nitrogen is usually near 0‰ and often lighter than nitrate-supported biomass | Mixing and later recycling can dilute the signal |
| Ammonium assimilation | Residual ammonium becomes heavier; newly formed biomass is lighter | Quantitative uptake transfers the source average to biomass |
| Remineralization | Organic nitrogen is transferred to ammonium with a small bulk effect when recycling is complete | Partial degradation and export can separate the residual and released pools |
| Nitrification | Residual ammonium becomes heavier and the first nitrite product is lighter | Nitrite oxidation has an inverse isotope effect, and complete nitrification limits the net shift |
| Denitrification | Residual nitrate becomes heavier; the nitrogen removed as gas is lighter | The expressed effect differs between the water column and sediments |
| Anammox | Residual ammonium and nitrite can become heavier as lighter nitrogen is removed | Several simultaneous isotope effects and a nitrate coproduct complicate the signal |
| Trophic transfer | Consumers are generally heavier than their diet | The offset varies among tissues, diets, and organisms |

### Nitrogen fixation changes the source value

Nitrogen-fixing organisms, or diazotrophs, convert dissolved
$\mathrm{N_2}$ into ammonium and organic nitrogen. Atmospheric nitrogen is the
0‰ reference, and biological nitrogen fixation usually expresses only a small
fractionation. Newly fixed nitrogen is therefore commonly near, or slightly
below, 0‰.

Adding this nitrogen can lower the δ¹⁵N of surface biomass relative to
production supported by subsurface nitrate. Remineralization and nitrification
can later pass this light signature into the nitrate pool. A low value is not
proof of nitrogen fixation by itself, because mixing with another light source
can produce the same observation.

### Assimilation, remineralization, and nitrification recycle nitrogen

Phytoplankton and microbes also discriminate during ammonium uptake. If
ammonium remains, the residual ammonium becomes enriched in ¹⁵N and the new
biomass is relatively light. If the ammonium is consumed completely, the
integrated biomass approaches the δ¹⁵N of the initial ammonium supply, just as
for complete nitrate consumption.

Remineralization converts organic nitrogen back to ammonium. When an organic
pool is remineralized and recycled nearly completely, its bulk nitrogen-isotope
signature is largely transferred rather than strongly fractionated. Partial
degradation, selective release, and export make the system open, allowing the
remaining particles and released nitrogen to diverge in δ¹⁵N.

Nitrification then oxidizes ammonium through nitrite to nitrate:

$$
\mathrm{NH_4^+ \rightarrow NO_2^- \rightarrow NO_3^-}.
$$

Ammonia oxidation usually consumes ¹⁴N faster, leaving residual ammonium
heavier and producing isotopically light nitrite early in the reaction. The
second step is unusual because nitrite oxidation has an inverse kinetic isotope
effect. Its heavier molecules react faster. The isotope composition of
regenerated nitrate therefore depends on both steps and on their degree of
completion. If all remineralized ammonium is converted to nitrate in a closed
system, mass balance again limits the net change in the final nitrate pool.

### Denitrification and anammox act under low oxygen

Denitrification reduces nitrate through several intermediates to gaseous
nitrogen:

$$
\mathrm{NO_3^- \rightarrow NO_2^- \rightarrow NO \rightarrow N_2O \rightarrow N_2}.
$$

Denitrifiers usually consume ¹⁴N-bearing nitrate faster. Incompletely consumed
nitrate is therefore enriched in ¹⁵N, while the nitrogen removed from the fixed
nitrogen pool is relatively light. This effect is often clear in oxygen-poor
water columns. In sediments, nitrate may be consumed almost completely within
the reaction zone, so little residual nitrate escapes to express the intrinsic
fractionation.

Anammox removes fixed nitrogen by combining ammonium and nitrite to form
$\mathrm{N_2}$, with some nitrate also produced. It preferentially removes light
nitrogen from its substrates, but isotope effects occur in several branches of
the pathway. Anammox can therefore enrich residual ammonium and nitrite while
also producing nitrate with a distinct signature. Bulk δ¹⁵N alone rarely
separates anammox cleanly from co-occurring denitrification.

### Food webs add another fractionation step

Consumers are generally enriched in ¹⁵N relative to their diet because nitrogen
metabolism and excretion preferentially remove lighter nitrogen. This makes
δ¹⁵N useful for estimating trophic position. The enrichment is not a fixed
number, however. It varies with the consumer, diet quality, tissue, growth rate,
and form of nitrogen excretion.

A food-web interpretation therefore needs a local baseline. A predator can
have a high δ¹⁵N because it feeds high in the food web, because the primary
producers at its base used high-δ¹⁵N nitrate, or because both effects occur
together.

The general lesson is to avoid assigning one process to one δ¹⁵N value. First
identify the nitrogen compound or tissue, then account for its sources,
reaction completeness, coupled transformations, and mixing.


## References

- Casciotti, K. L. (2009). [Inverse kinetic isotope fractionation during
  bacterial nitrite oxidation](https://doi.org/10.1016/j.gca.2008.12.022).
- Liu, K.-K. et al. (2013). [Concentration dependent nitrogen isotope
  fractionation during ammonium uptake by
  phytoplankton](https://doi.org/10.1016/j.marchem.2013.10.005).
- Rafter, P. A., DiFiore, P. J., & Sigman, D. M. (2013). [Coupled nitrate
  nitrogen and oxygen isotopes and organic matter
  remineralization](https://doi.org/10.1002/jgrc.20316).
- Sigman, D. M. et al. (2003). [Distinguishing between water-column and
  sedimentary denitrification](https://doi.org/10.1029/2002GC000384).
- Brunner, B. et al. (2013). [Nitrogen isotope effects induced by anammox
  bacteria](https://doi.org/10.1073/pnas.1310488110).
- Hussey, N. E. et al. (2014). [Rescaling the trophic structure of marine food
  webs](https://doi.org/10.1111/ele.12226).
