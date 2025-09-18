---
title: Bayesian analysis in brief
author: Rui Ying
date: '2023-09-03'
slug: []
categories:
  - Statistic
subtitle: ''
description: ''
keywords: ''
comment: no
---

## Likelihood & Probability Density Function

In short, these two are same formula with different variables.

Likelihood is used in statistical inference, $L(\theta|X)$ with X known and estimate $\theta$. 

PDF is $P(X|\theta)$ with $\theta$ known and estimate P(X).

For example, if X ~ B(n, p), we know `n` already, then
$$
P(x|n, p) = \binom{x}{n} p^x (1 - p)^{n - x}\\
L(p|n, x) = \binom{x}{n} p^x (1 - p)^{n - x}
$$
They look idential but be careful because they have different predictor: P(x) and L(p).

## Bayesian inference

Bayesian inference is just the tranformation between P(θ|X), Posterior distribution, and P(X|θ) , Likelihood using Bayesian theorem.
$$
\text{Prior} * P(X|\theta)  \propto P(\theta|X)
$$

```
---
Quick overview

1. get likelihood from collected data

Collect sample data from its PDF: X~B(n,p)

Calculate the likelihood distribution of parameters `p`: L(p|X), which is also binomial

---

2. incorporate the likelihood profile into the prior blief

Prior (assumed) distribution of `p`, e.g., beta distribution p ~ Beta(a0, b0)), a0 and b0 are hyperparameters (Don't try to take another hyperhyperparameter, we need deterministic parameters here, or it's endless).

Posterior distribution `p`: L(p|X) * U(a, b) ~ Beta(a1, b1)), a1 and b1 are updated hyperparameters

---

3. MCMC to overcome the integral problem, get the posterior distribution of p.

---

4. Graph (in "correct" order)

p ~ Beta(a1, b1)
    |
X ~ B(n,p)
    |
x1, x2, .. xi



```

---

## Estimate a linear regression model using PYMC

$$
Y \sim N(\mu, \sigma^2)\\
\mu = \alpha + \beta_1X_1+\beta_2X_2
$$

Unknown: $\alpha, \beta_i, \sigma$; Data: $X_i$ and $Y$.

### Choose prior distribution

$$
\alpha \sim N(0, 100)\\
\beta_i \sim N(0, 100)\\
\sigma \sim |N(0,1)|
$$

### Collecte data

```python
## Code from PYMC documentation
import arviz as az
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

RANDOM_SEED = 8927
rng = np.random.default_rng(RANDOM_SEED)

# True parameter values (to be estimated)
alpha, sigma = 1, 1
beta = [1, 2.5]

# Sampled data X and Y
size = 100
X1 = np.random.randn(size)
X2 = np.random.randn(size) * 0.2
Y = alpha + beta[0] * X1 + beta[1] * X2 + rng.normal(size=size) * sigma

```

### Build model

You don't need to calculate the likelihood by yourself. All are taken by the program.

```python
import pymc as pm
basic_model = pm.Model()

# substitute parameters into the model
with basic_model:
  	## Prior distribution of unknown parameters
    alpha = pm.Normal("alpha", mu=0, sigma=10) # sigma^2 = 100
    beta = pm.Normal("beta", mu=0, sigma=10, shape=2)
    sigma = pm.HalfNormal("sigma", sigma=1)
    mu = alpha + beta[0] * X1 + beta[1] * X2
    
    # Likelihood of data Y
    Y_obs = pm.Normal("Y_obs", mu=mu, sigma=sigma, observed=Y)
    
# Start iteration 
with basic_model:
    # draw 1000 posterior samples
    idata = pm.sample()
    
```

### Posterior analysis

```python
# a tracing plot
az.plot_trace(idata, combined=True)
# a table of statistic
az.summary(idata, round_to=2)
```

## Confidence interval
