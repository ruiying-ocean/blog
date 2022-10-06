# Fundemental Bayesian analysis




<div id="basics" class="section level2">
<h2>Basics</h2>
<div id="conditional-probability" class="section level3">
<h3>Conditional probability</h3>
<p>Conditional probability is the probability of an event given something already happened. It is a joint probability divdied by marginal probability.</p>
<p><span class="math display">\[
P(A|B) = \frac{P(AB)}{P(B)}
\]</span></p>
<p>The <code>|</code> means “given” !<a href="#fn1" class="footnote-ref" id="fnref1"><sup>1</sup></a>.</p>
</div>
<div id="law-of-total-probability" class="section level3">
<h3>Law of total probability</h3>
<p><span class="math display">\[
P(Y) = P(X|Y) + P(!X|Y)= \frac{P(XY)}{P(Y)} + \frac{P(!XY)}{P(Y)}
\]</span></p>
</div>
<div id="bayesian-theorem" class="section level3">
<h3>Bayesian theorem</h3>
<p>Clearly <span class="math inline">\(P(A|B)\)</span> has some relationship with <span class="math inline">\(P(B|A)\)</span>, someone called Bayes expressed this and invented his immortal theorem:</p>
<p><span class="math display">\[
P(A|B) = \frac{P(B|A)P(A)}{P(B|A)P(A) + P(B|!A)P(!A)}
\]</span></p>
<p>Bayesian theorem infers two things:</p>
<ul>
<li><p>The relationship between <span class="math inline">\(P(A|B)\)</span> and <span class="math inline">\(P(B|A)\)</span>:
<span class="math display">\[P(B|A)P(A)=P(A|B)P(B)=P(AB)\]</span></p></li>
<li><p>Bayesian inference:
If you are given something, you can find its reverse.</p></li>
</ul>
</div>
</div>
<div id="bayesian-inference-and-science" class="section level2">
<h2>Bayesian inference and science</h2>
<div id="what-is-science" class="section level3">
<h3>What is science?</h3>
<p>Science refers to a system of acquiring knowledge. The scientific method consists of <em>induction</em> and <em>deduction</em> (see the figure below).</p>
<p><img src="images/science.jpg" /></p>
</div>
<div id="bayesian-inference" class="section level3">
<h3>Bayesian inference</h3>
<p>We can slightly change the theorem in case there are more than two hypotheses:</p>
<p><span class="math display">\[
Pr(H_i|data) = \frac{\color{pink}{Pr(data|H_i)}\color{steelblue}Pr(H_i)}{\sum_{j=1}^n \color{pink}{Pr(data|H_i)}\color{steelblue}Pr(H_i)}
\]</span></p>
<p><span class="math inline">\(\color{pink}{Pr(data|H_i)}\)</span> refers to <span class="math inline">\(\color{pink}{likelihood}\)</span>, <span class="math inline">\(\color{steelblue}Pr(H_i)\)</span> refers to <span class="math inline">\(\color{steelblue}{prior}\)</span> probability, <span class="math inline">\(Pr(A|B)\)</span> refers to <em>posterior</em> probability.</p>
<p>If the probability is discrete, we use Pr(); otherwise, we use P() to represent the PDF distribution (and use integration to replace sum).</p>
<p><span class="math display">\[
P(\theta|data) = \frac{\color{pink}{P(data|\theta)}\color{steelblue}P(\theta)}{\int \color{pink}{P(data|\theta)}\color{steelblue}P(\theta)d\theta}
\]</span></p>
<p>The <span class="math inline">\(\theta\)</span> here refers to the single parameter in our PDF distribution. If there are two or more, simply change it.</p>
<p>You might find the former one is regrading to hypothesis test, while the later one refer to parameter estimation. And due to its special feature, Bayesian inference always gives distribution. Thus the point estimation is not existing here and the interval estimation will be so easy to do.</p>
<p>In conclusion, Bayesian inference does work like below:</p>
<blockquote>
<p>Initial belief + New Data = Updated belief</p>
</blockquote>
<p>This is why it is so important and relevant to science today.</p>
</div>
</div>
<div id="do-bayesian-analysis" class="section level1">
<h1>Do Bayesian analysis</h1>
<div id="hypotheses" class="section level3">
<h3>1. Hypotheses</h3>
<p>Hypotheses can be discrete or continuous. For example, we may estimate the <span class="math inline">\(\mu\)</span> (mean) of a normal distribution and assume it spans from 1 to 5 (Let us assume the <span class="math inline">\(\sigma\)</span>, the variance, is known here).</p>
</div>
<div id="parameters-prior-distribution" class="section level3">
<h3>2. (Parameter’s) prior distribution</h3>
<p>The parameter that we want to estimate is a random variable thus has its own distribution (and parameters). The parameter of <span class="math inline">\(\theta\)</span>’s distribution is called <em>hyperparameter</em>. In another word, hyperparameter is the parameters of prior and posterior distribution.</p>
<p>The prior distribution has its name because it is condcuted before our data collection. You may wonder if the selection of prior influences the result, sadly it does. Thus a useful (informative) prior should be better selected. Otherwise, a non-informative prior will be used, e.g., uniform distribution or normal distribution. Here we know nothing and choose uniform distribution.</p>
</div>
<div id="collect-data" class="section level3">
<h3>3. Collect data</h3>
<p>A dataset might contain various dimensions. If they are independent, we can calculate likelihood by multiplication. Assume we have got one data point <span class="math inline">\(x\)</span>.</p>
</div>
<div id="likelihood-profile" class="section level3">
<h3>4. Likelihood Profile</h3>
<p>Likelihood is the conditional probability given data collected. It can be written in <em><span class="math inline">\(\mathcal{L}(x|\theta)\)</span></em>, if we have the data <span class="math inline">\(x\)</span> already collected. Likelihood is different from probability because for the pdf distribution, the probability of one single point is always 0. Probability only refers to the integration area from <span class="math inline">\(a\)</span> to <span class="math inline">\(b\)</span>, while likelihood is the <span class="math inline">\(y\)</span> value.</p>
<p>This step generates likelihood profile that describe the distribution of parameter. It is the <em>weights</em> (权重) of prior distribution and is the one updating our belief.</p>
</div>
<div id="parameterss-posterior-distribution" class="section level3">
<h3>5. (Parameters’s) posterior distribution</h3>
<p>If we are estimating continuos distribution, then we have</p>
<ol style="list-style-type: decimal">
<li><p>prior distribution</p></li>
<li><p>likelihood profile (distribution)</p></li>
</ol>
<p>Then we multiply them and calculate a new distribution: the posterior one! It describe the new proportion (density) of all hypotheses. So far the Bayesian analysis updates two things: (1) the distribution of data; (2) the distribution of parameter (or hypotheses) from prior to posterior.</p>
<p>But, you may notice the denominator of Bayes’s theorem requires integration, which means in most cases we cannot calculate them directly!</p>
</div>
<div id="a-handnote-summary" class="section level3">
<h3>6. A handnote summary!</h3>
<p><img src="images/handnote.PNG" /></p>
</div>
<div id="conjugate-shortcut" class="section level2">
<h2>Conjugate shortcut</h2>
<p>Some statisticians found in some limited cases we are able to calculate posterior distribution very easily and do not need simulation (no proof in this article!). They are:</p>
<ul>
<li>Beta prior + binomial data → beta posterior</li>
<li>Gamma prior + Poisson data → beta posterior</li>
<li>Normal prior + normal data → normal posterior</li>
<li>Dirichlet prior + multinomial data → Dirichlet posterior</li>
</ul>
</div>
<div id="mcmc-to-estimate-posterior-distribution" class="section level2">
<h2>MCMC to estimate posterior distribution</h2>
<p>The integration often prevents us from calculating posterior distribution analytically. Thus we have simulation method - Markov Chain Monte Carlo (MCMC). Markov chain is to trace the state of variable which is relevant with the last one. Monte Carlo is a famous gambling city (and tax heaven and the venue of ATP 1000 Master where Rafa Nadal won his title for 11 times, OK I’m his fan :grin: ). Here we try parameters one by one (i.e. simulation) as a “chain”.</p>
<div id="metropolis-algorithm" class="section level3">
<h3>Metropolis algorithm</h3>
<div id="how-to-do-it" class="section level4">
<h4>How to do it?</h4>
<ul>
<li><p>Choose a parameter value and calculate its likelihood</p></li>
<li><p>Choose another one, do the same, and compare to the likelihood above</p></li>
<li><p>Keep the parameter with smaller likelihood</p></li>
<li><p>Repeat the steps above for as many times as possible</p></li>
<li><p>All accepted values will be the points in (estimated) posterior distribution</p></li>
<li><p>Update the hyperparameters using accepted values’ mean/variance (so called <em>moment matching</em>) like connecting our points by a line.</p></li>
</ul>
</div>
<div id="questions" class="section level4">
<h4>Questions</h4>
<ul>
<li><p>Where should the parameter starts from? (termed as starting point)</p></li>
<li><p>What is the rule of choosing next value? (termed as proposal distribution)</p></li>
</ul>
</div>
<div id="limitations" class="section level4">
<h4>Limitations</h4>
<ul>
<li><p>The proposal distribution must be symmetrical (e.g., normal distribution)</p></li>
<li><p>The distribution should be tuned so that the acceptance rate range between 20-50% (This is the limitation of entire MCMC method, not the algorithm’s fault)</p></li>
</ul>
</div>
</div>
<div id="metropolis-hastings-algorithm" class="section level3">
<h3>Metropolis-Hastings algorithm</h3>
<div id="advantage" class="section level4">
<h4>Advantage</h4>
<p>You can use Metropolis-Hastings algorithm when the proposal distribution is not symmetric. The only difference is the <em>correction factor</em> (the pink part):</p>
<p><span class="math display">\[
p_{move} = min\large(\frac{P(\theta_p|data)*\color{pink}{g(\theta_c|\theta_p)}}{P(\theta_c|data)*\color{pink}{g(\theta_p|\theta_c)}} ,1 \large)
\]</span></p>
<p><span class="math inline">\(p\)</span> refers to “proposed value” and <span class="math inline">\(c\)</span> refers to “current value”.</p>
</div>
<div id="whats-the-meaning-of-correction-factor" class="section level4">
<h4>What’s the meaning of correction factor</h4>
<p>It is the probability density of drawing the current value (<span class="math inline">\(\theta_c\)</span>) from a distribution centering on proposed value (<span class="math inline">\(\theta_p\)</span>) divided its reverse case. When the proposal distribution is symmetric, the factor equals 1:</p>
<p><span class="math display">\[
\frac{\color{pink}{g(\theta_c|\theta_p)}}{\color{pink}{g(\theta_p|\theta_c)}} = 1.0
\]</span></p>
</div>
</div>
<div id="gibbs-sampling-algorithm" class="section level3">
<h3>Gibbs sampling algorithm</h3>
<p>You may already find that our do not estimate the two parameters in our <a href="#do-bayesian-analysis">first example</a>. We will do it in this section! The specialty of Gibbs sampling reflects in its no limitation of the number of estimated parameters. Let’s see it.</p>
<div id="concrete-steps" class="section level4">
<h4>Concrete steps</h4>
<ul>
<li><p>Hypotheses two groups of hypermeters in prior distribution (one group for <span class="math inline">\(\mu\)</span>, the other for <span class="math inline">\(\sigma\)</span>)</p></li>
<li><p>Choose a starting value of <span class="math inline">\(\mu\)</span> or <span class="math inline">\(\sigma\)</span>, let’s choose <span class="math inline">\(\sigma\)</span></p></li>
<li><p>Update hyperparameters of <span class="math inline">\(\mu\)</span> based on known <span class="math inline">\(\sigma\)</span> value and conjugate method</p></li>
<li><p>Now let’s fix <span class="math inline">\(\mu\)</span>, and update hyperparamters of <span class="math inline">\(\sigma\)</span></p></li>
<li><p>Repeat <span class="math inline">\(...\)</span> and get their joint/marginal distribution</p></li>
</ul>
</div>
<div id="gibbs-sampler" class="section level4">
<h4>Gibbs sampler</h4>
<ul>
<li>BUGS (Bayesian inference Using Gibbs Sampling)</li>
<li>JAGS (Just Another Gibbs Sampler)</li>
<li>Stan</li>
</ul>
</div>
</div>
</div>
</div>
<div id="mcmc-diagnostic-approaches" class="section level1">
<h1>MCMC diagnostic approaches</h1>
<div id="number-of-trials" class="section level3">
<h3>Number of trials</h3>
<p>Frequently, MCMC analyses use over 10,000 trials.</p>
</div>
<div id="tuning-parameter-and-acceptance-rate" class="section level3">
<h3>Tuning parameter and acceptance rate</h3>
<p>The acceptance rate cannot be too high or low. High acceptance rate means that most new samples occur just around the current value and not fully explore the parameter space. Low acceptance rate means most value are rejected and the chain does not move at all.</p>
<p>A reasonable acceptance ranges between 20~50%. We need to iteratively tune the proposal distribution to get a rate inside the interval. You can tune the parameter like Fig 14.7 in the reference book.</p>
</div>
<div id="starting-point-and-burn-in" class="section level3">
<h3>Starting point and burn in</h3>
<p>If a starting point is in a low density region of the posterior distribution, it also affects our result (especially in initial trials), although the markov chain will finally reach convergence. So we need to disregard some initial trials (e.g. 1000) before building posterior distribution. They may be too unstable to be used.</p>
</div>
<div id="thinningpruning" class="section level3">
<h3>Thinning/pruning</h3>
<p>Disregard the certain number of trials, for example, every other trial, to avoid the correlation between nearby trials.</p>
</div>
<div id="tiny-number" class="section level3">
<h3>Tiny number?</h3>
<p>The computer store numbers in binary, e.g., 10 in decimal is 1010 in binary. Thus a number like the product of likelihood and prior density can be too small to be stored properly. We often calculate their logs in such cases.</p>
</div>
<div id="how-to-report-mcmc-result" class="section level3">
<h3>How to report MCMC result?</h3>
<p>The credible interval of MCMC analysis is often reported. For example,minimum, maximum, 25/50/75 percentile, mean and variance.</p>
</div>
</div>
<div class="footnotes footnotes-end-of-document">
<hr />
<ol>
<li id="fn1"><p>图像化理解：在B的圈子里，和A重叠的概率<a href="#fnref1" class="footnote-back">↩︎</a></p></li>
</ol>
</div>


---

> Author: Rui Ying  
> URL: /2021-05-12-fundemental-bayesian-analysis/  

