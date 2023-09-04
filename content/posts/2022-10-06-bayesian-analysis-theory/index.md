---
title: Bayesian analysis theory
author: Rui Ying
date: '2022-10-06'
slug: []
categories:
  - Statistic
subtitle: ''
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
  enable: yes
lightgallery: no
seo:
  images: []
repost:
  enable: yes
  url: ''
---

<!--more-->


## A case study

Let's use a classic binomial distribution[^1] to show this. In a n-time coin tosses, the head chance is `p` and tail chance `(1 - p)`. The likelihood of head happen to count `k` times is

$$L(k|n,p) = \binom{n}{k} p^y (1-p)^{n-k}
$$

[^1]: A unrelated tip, Bernoulli distribution or 0-1 distribution is a special form of binomial.

Assume we have done some experiments and got the data of `k` and `n` in order to estimate `p`.

To make it concerete, let's set `n=10` and `k=3`. We don't know `p` but we can test one and get its likelihood, e.g., `p=0.2`.

$$
L(k=3|n=10,p=0.2) = \binom{10}{3} 0.2^3 0.8^7\approx0.20
$$

OK, let's try `0.3`

$$
L(k=3|n=10,p=0.3) = \binom{10}{3} 0.3^3 0.7^7 \approx0.27
$$

Surely there's higher probability for `p=0.3` than `p=0.2`.

But `p` is a continous random variable with its own distribution. We need to test each `p` and get each likihood `L` to plot a conditional PDF using the Bayes theorem.

$$
{P(p|data)} = \frac{L(p)P(p)} {\int {P(data|p)} P(p)dp}
$$


Forget about the intergation ([Related blog](ruiying.online/2022-10-06-bayesian-analysis-with-mcmc)), the question is what's the `P(p)`? Because we don't know whether L(p=0.3) is same as L(p=0.3). This is what's called prior distribution and we need to set by ourselves. But in any way, the workflow is basically clear as following block.

## General workflow step by step

### 1. Hypotheses

Hypotheses can be discrete or continuous. For example, we may estimate the $\mu$ (mean) of a normal distribution and assume it spans from 1 to 5 (Let us assume the $\sigma$, the variance, is known here).

### 2. (Parameter's) prior distribution

The parameter that we want to estimate is a random variable thus has its own distribution (and parameters). The parameter of $\theta$'s distribution is called *hyperparameter*. In another word, hyperparameter is the parameters of prior and posterior distribution.

The prior distribution has its name because it is condcuted before our data collection. You may wonder if the selection of prior influences the result, sadly it does. Thus a useful (informative) prior should be better selected. Otherwise, a non-informative prior will be used, e.g., uniform distribution or normal distribution. Here we know nothing and choose uniform distribution.

### 3. Collect data

A dataset might contain various dimensions. If they are independent, we can calculate likelihood by multiplication. Assume we have got one data point $x$.

### 4. Likelihood Profile

Likelihood is the conditional probability given data collected. It can be written in *$\mathcal{L}(x|\theta)$*, if we have the data $x$ already collected. Likelihood is different from probability because for the pdf distribution, the probability of one single point is always 0. Probability only refers to the integration area from $a$ to $b$, while likelihood is the $y$ value.

This step generates likelihood profile that describe the distribution of parameter. It is the *weights* (权重) of prior distribution and is the one updating our belief.

### 5. (Parameters's) posterior distribution

If we are estimating continuos distribution, then we have

1. prior distribution

2. likelihood profile (distribution)

Then we multiply them and calculate a new distribution: the posterior one! It describe the new proportion (density) of all hypotheses. So far the Bayesian analysis updates two things: (1) the distribution of data; (2) the distribution of parameter (or hypotheses) from prior to posterior.

But, you may notice the denominator of Bayes's theorem requires integration, which means in most cases we cannot calculate them directly!

### 6. A handnote summary!

![](images/handnote.PNG)
