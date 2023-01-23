---
title: study the Curtis's metabolic model
author: Package Build
date: '2023-01-23'
slug: []
categories:
  - Science
tags:
  - Ecology
subtitle: ''
draft: no
authorLink: ''
authorEmail: ''
description: ''
keywords: ''
license: ''
comment: no
weight: 0
hiddenFromHomePage: no
hiddenFromSearch: no
summary: 'Demand vs Supply, the trade-off is forever in biology'
resources:
  - name: featured-image
    src: featured-image.jpg
  - name: featured-image-preview
    src: featured-image-preview.jpg
toc:
  enable: yes
math:
  enable: yes
lightgallery: no
seo:
  images: []
repost:
  enable: yes
  url: ''
---

## Demand vs Supply of O2

Both are dependent on temperature (T) and biomass (B), and the supply of O2 has one more constrain: the ambient pO2.

- Demand: f(T, B)

- Supply: f(T, B, pO2)

## Definition of temperature sensitivity (Arrhenius function)

$$
\gamma_T(E) = exp((\frac{1}{T} - \frac{1}{T_{ref}}) \frac{-E}{k_B})
$$

where *k*B is the Boltzmann constant. E is the parameter varied in Demand and Supply function.

## Demand function

$$
f(T, B) = \alpha_D \cdot B^{\delta} \cdot \gamma_T(E_d)
$$

*α*D is the <u>rate coefficient</u> has units of O2 per unit body mass per time (μmol O2 g−3/4 h−1)

## Supply function

$$
f(T, B, \ce{pO2}) = \alpha_S \cdot \gamma_T(E_s) \cdot B^{\sigma} \cdot \ce{pO2}
$$

The function *𝛼*̂ s(*𝑇*) represents the efficacy of the O2 supply. It is a rate coefficient (in μmol O2 $g^{−3/4} h^{−1} atm^{−1}$)

## Metabolic index

$$
\Phi = \frac{f(T,B)}{f(T, B, \ce{pO2})}\\
\Phi = \frac{\alpha_S}{\alpha_D} \cdot B^{\delta - \sigma} \cdot \ce{pO2} \cdot\gamma_{T}(E_d - E_s)
$$

Unknown parameters:

- $E_d, E_s$
- $\alpha_D, \alpha_S$
- $\sigma, \delta$ (for S and D respectively)

When $\Phi = 1$, the organism has the minimum O2 balance to survive.

## Derived Physilogical Traits:

$\frac{\alpha_S}{\alpha_D}$: the vulnerability to hypoxia, which is measurable as the lowest O2 pressure (*P*crit) that can sustain resting metabolic demand (*Φ* = 1)

$E_0 = E_d - E_s$: the sensitivity of hypoxia tolerance to temperature

$\epsilon = \sigma - \delta$: the allometric scaling (i.e., related to body size or biomass) of the supply-to-demand ratio

*P*crit: lab-measured hypoxic thresholds

## References

Deutsch, C. *et al.* Climate change tightens a metabolic constraint on marine habitats. *Science* (2015)

Deutsch, C. *et al.* Metabolic trait diversity shapes marine biogeography. *Nature* (2020)

Justin P. and Deutsch C. Avoiding ocean mass extinction from climate warming. *Science* (2022)

Deutsch, C. *et al.* Impact of warming on aquatic body sizes explained by metabolic scaling from microbes to macrofauna. *PNAS* (2022).
