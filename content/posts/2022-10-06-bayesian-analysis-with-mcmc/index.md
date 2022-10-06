---
title: Bayesian analysis with MCMC
author: Rui Ying
date: '2022-10-06'
slug: []
categories:
  - Statistic
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
# Unsolved Problem: Integral

We skipped a big problem, integral. This can be trick because there're can be multiple integral for multiple parameters. So we usually use simulation method to do this.


## MCMC to estimate posterior distribution

The integral often prevents us from calculating posterior distribution analytically. Thus we have simulation method - Markov Chain Monte Carlo (MCMC). Markov chain is to trace the state of variable which is relevant with the last one. Monte Carlo stands for a random number generator for simulation. Here we try parameters one by one (i.e. simulation) as a "chain".

### Metropolis sampling algorithm

#### How to do it?

- Choose a parameter value and calculate its likelihood

- Choose another one, do the same, and compare to the likelihood above

- Keep the parameter with smaller likelihood

- Repeat the steps above for as many times as possible

- All accepted values will be the points in (estimated) posterior distribution

- Update the hyperparameters using accepted values' mean/variance (so called *moment matching*) like connecting our points by a line.

#### Questions

- Where should the parameter starts from? (termed as starting point)

- What is the rule of choosing next value? (termed as proposal distribution)

#### Limitations

- The proposal distribution must be symmetrical (e.g., normal distribution)

- The distribution should be tuned so that the acceptance rate range between 20-50% (This is the limitation of entire MCMC method, not the algorithm's fault)

### Metropolis-Hastings sampling algorithm

#### Advantage
You can use Metropolis-Hastings algorithm when the proposal distribution is not symmetric. The only difference is the *correction factor* (the pink part):

$$
p_{move} = min\large(\frac{P(\theta_p|data)* \color{pink}{g(\theta_c|\theta_p)}}{P(\theta_c|data)* \color{pink}{g(\theta_p|\theta_c)}} ,1 \large)
$$

$p$ refers to "proposed value" and $c$ refers to "current value".

#### What's the meaning of correction factor

It is the probability density of drawing the current value ($\theta_c$) from a distribution centering on proposed value ($\theta_p$) divided its reverse case. When the proposal distribution is symmetric, the factor equals 1:

$$
\frac{\color{pink}{g(\theta_c|\theta_p)}}{\color{pink}{g(\theta_p|\theta_c)}} = 1.0
$$

### Gibbs sampling algorithm

#### Advantage

The specialty of Gibbs sampling reflects in its no limitation of the number of estimated parameters. Let's see it.

#### Concrete steps

- Hypotheses two groups of hypermeters in prior distribution (one group for $\mu$, the other for $\sigma$)

- Choose a starting value of $\mu$ or $\sigma$, let's choose $\sigma$

- Update hyperparameters of $\mu$ based on known $\sigma$ value and conjugate method

- Now let's fix $\mu$, and update hyperparamters of $\sigma$

- Repeat $...$ and get their joint/marginal distribution


#### Gibbs sampler

- BUGS (Bayesian inference Using Gibbs Sampling)
- JAGS (Just Another Gibbs Sampler)
- Stan

## MCMC diagnostic approaches

### Number of trials

Frequently, MCMC analyses use over 10,000 trials.

### Tuning parameter and acceptance rate

The acceptance rate cannot be too high or low. High acceptance rate means that most new samples occur just around the current value and not fully explore the parameter space. Low acceptance rate means most value are rejected and the chain does not move at all.

A reasonable acceptance ranges between 20~50%. We need to iteratively tune the proposal distribution to get a rate inside the interval. You can tune the parameter like Fig 14.7 in the reference book.

### Starting point and burn in

If a starting point is in a low density region of the posterior distribution, it also affects our result (especially in initial trials), although the markov chain will finally reach convergence. So we need to disregard some initial trials (e.g. 1000) before building posterior distribution. They may be too unstable to be used.

### Thinning/pruning

Disregard the certain number of trials, for example, every other trial, to avoid the correlation between nearby trials.

### Tiny number?

The computer store numbers in binary, e.g., 10 in decimal is 1010 in binary. Thus a number like the product of likelihood and prior density can be too small to be stored properly. We often calculate their logs in such cases.

### How to report MCMC result?

The credible interval of MCMC analysis is often reported. For example,minimum, maximum, 25/50/75 percentile, mean and variance.

## Special case: Conjugate shortcut

Some statisticians found in some limited cases we are able to calculate posterior distribution very easily and do not need simulation (no proof in this article!). They are:

- Beta prior + binomial data &rarr; beta posterior
- Gamma prior + Poisson data &rarr; beta posterior
- Normal prior + normal data &rarr; normal posterior
- Dirichlet prior + multinomial data &rarr; Dirichlet posterior
