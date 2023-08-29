---
title: study the metabolic index model
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



The demand and supply of oxygen are both dependent on temperature (T) and biomass (B), and the supply of O2 has one more constrain: the ambient pO2.

- Demand: f(T, B)
- Supply: f(T, B, pO2)

## Demand function

$$
f(T, B) = \alpha_D \cdot B^{\delta} \cdot \gamma(-E_d, T)
$$

$\alpha_D$ is gas transfer rate per mass.

## Supply function

$$
f(T, B, \ce{pO2}) = \alpha_S \cdot B^{\sigma} \cdot \gamma(-E_s, T)\cdot \ce{pO2}
$$

The function $\alpha_S$ represents the rate per unit of O2 pressure.

## Metabolic index (Supply/Demand ratio)

$$
\Phi = \frac{f(T,B)}{f(T, B, \ce{pO2})} = \frac{\alpha_S}{\alpha_D} \cdot B^{\delta - \sigma} \cdot \ce{pO2} \cdot \frac{\gamma{(-E_s,T)}}{\gamma{(-E_d,T)}}\\
$$

Temperature dependency is an Arrhenius function:
$$
\gamma(-E, T) = exp((\frac{1}{T} - \frac{1}{T_{ref}}) \frac{-E}{k_B})\\
\frac{\gamma{(-E_s,T)}}{\gamma{(-E_d,T)}} = exp((\frac{1}{T} - \frac{1}{T_{ref}}) \frac{-(E_s - E_d)}{k_B})\\
$$
Note $k_B$ is the Boltzmann constant.  Set $E_0 = E_d - E_s$, then
$$
\Phi = A_0 \cdot B^n \cdot pO_2 \cdot \gamma(E_0, T)\\
$$
or
$$
\Phi = A_0 \cdot B^n \cdot pO_2 / \gamma(-E_0, T)\\
$$
In this model, we have 3 unknown variables:

- $A_0 = \alpha_S/\alpha_D$ (rate coefficients of oxygen demand and supply)
- $E_0$ (temperature sensitivity)
- *n* = δ − ε (allometric parameter, empirically almost 0)

$$
\Phi = A_0 \cdot pO_2 / \gamma(-E_0, T)\\
$$

## Transformation of the metabolic model

When $\Phi = 1$, the pO2 is the critical minimum, take the log of both sides:
$$
ln(\ce{pO2}) + ln(A_0)  = \frac{-E_0}{k_B}(\frac{1}{T} - \frac{1}{T_{ref}})
$$
The linear model $ln(pO2) \sim 1/k_BT$

$-E_0$: the slope

$A_0$: the intercept of $ln(pO2)$ when $T=T_{ref}$ (i.e., the inverse of pO2)

## Required emprical data to fit the model

Body mass, temperature, life stage, and hypoxia tolerance.

Hypoxia tolerance is the oxygen at anaerobic metabolism or mortality. O2 concentrations can be converted to pO2 (pressure) with certain temperature and salinity.

## Related Traits

- 1/A0, the critical minimum of oxygen, or hypoxia tolerance
- Critical $\Phi$: bring A0, E0 back to the model with biogeographical T, pO2

## References

Deutsch, C. *et al.* Climate change tightens a metabolic constraint on marine habitats. *Science* (2015)

Justin L. Penn et al. Temperature-dependent hypoxia explains biogeography and severity of end-Permian marine mass extinction. Science. 2018.

Deutsch, C. *et al.* Metabolic trait diversity shapes marine biogeography. *Nature* (2020)

Justin P. and Deutsch C. Avoiding ocean mass extinction from climate warming. *Science* (2022)

Deutsch, C. *et al.* Impact of warming on aquatic body sizes explained by metabolic scaling from microbes to macrofauna. *PNAS* (2022).
