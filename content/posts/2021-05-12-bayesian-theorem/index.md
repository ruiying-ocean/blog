---
title: Bayesian theorem
author: Rui Ying
date: '2021-05-12'
slug: []
categories: [Statistic]
tags: []
subtitle: ''
summary: "A study note of 'Bayesian statistics for beginners'"
---

## Basics

### Conditional probability

Conditional probability is the probability of an event given something already happened. It is a joint probability divdied by marginal probability.

$$
P(A|B) = \frac{P(AB)}{P(B)}
$$

The `|` means "given" [^a].

[^a]: 图像化理解：在B的圈子里，和A重叠的概率

### Law of total probability

$$
P(Y) = P(X|Y) + P(!X|Y)= \frac{P(XY)}{P(Y)} + \frac{P(!XY)}{P(Y)}
$$

### Bayesian theorem

Clearly $P(A|B)$ has some relationship with $P(B|A)$, because they share the common part $P(AB)$.

$$
P(A|B) = \frac{P(AB)}{P(B)}
$$

$$P(B|A) = \frac{P(BA)}{P(A)}
$$

$$ P(BA) = P(AB) = P(B|A)P(A) = P(A|B)P(B)
$$

Therefore,

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B)} \prop P(B|A)P(A)
$$

If we use the total probability for our denominator, it becomes

$$
P(A|B) = \frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|!A)P(!A)}
$$

This euqation is called Bayesian theorem and it means if you are given something like P(A|B), you can find its reverse P(B|A) (i.e., the Bayesian inference, see the next block).


## Bayesian inference

### Hypothesis test

Based on the theorem, if we set B the given event as our collected data, A the thing we want to test (or a hypothesis), we change the equation into:

$$
\color{blue}{Pr(H_i|data)} = \frac{\color{pink}{Pr(data|H_i)}\color{steelblue}Pr(H_i)}{\sum_{j=1}^n \color{pink}{Pr(data|H_i)}\color{steelblue}Pr(H_i)}
$$

$\color{pink}{Pr(data|H_i)}$ is called $\color{pink}{likelihood}$, $\color{steelblue}Pr(H_i)$ the $\color{steelblue}{prior}$ probability, $\color{blue}{Pr(H_i|data)}$ refers to $\color{blue}{posterior}$ probability.


### Parameter estimation

Change the hypotheses to parameters to estimate, the only difference is parameter is continuous. If the probability is discrete, we use Pr(); otherwise, we use P() to represent the PDF distribution (and use integration to replace sum).
 
$$
\color{blue}{P(\theta|data)} = \frac{\color{pink}{P(data|\theta)}\color{steelblue}P(\theta)}{\int \color{pink}{P(data|\theta)}\color{steelblue}P(\theta)d\theta}
$$

The $\theta$ here refers to the single parameter in our PDF distribution. If there are two or more, simply change it.


### What is science?

As you can see, In conclusion, Bayesian inference does work like below: `Initial belief + New Data = Updated belief`. And this is exactly same to the philosophy of science. Science refers to a system of acquiring knowledge and update our cognition. The scientific method consists of *induction* and *deduction* (see the figure below).

![](images/science.jpg)
