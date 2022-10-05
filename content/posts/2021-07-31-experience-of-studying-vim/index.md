---
title: Experience of studying vim
author: Rui Ying
date: '2021-07-31'
slug: []
categories: [Programming]
tags: [Emacs; Vim]
subtitle: ''
summary: 'The holy war!'
authors: []
lastmod: '2021-07-31T11:23:49+01:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---
# Study vim via vimtutor

I've been curious about vim style of editing for a long time. There is a huge 
group of people using vim and this group is certainly larger than Emacs'. Even in
Emacs community, there's a significant proportion of users using evil keybinding.
I naturally started to wonder how magic this editor can be and why people reckon 
it as the opposite of Emacs. So several days ago, I tried vimtutor, a simple tutor,
and began to study more shortcuts than "jkhl" (I've already known this). 
Here's my experience and thoughts!

# Different style of logics

Vim uses text-object as a unit to operate, e.g., dw to delete (until) word. I found
it very easy to understand and remember, while Emacs's keybinding usually requires
more times of pressing because of prefix keys (e.g., C-c). If someone doesn't change
the default keymap of keyboard, it will be very uncomfortable to press left Ctrl which
locates at the very left-bottom corner. Even I have remap left Ctrl with Caps, it's
still prone to be fatigued after consecutive-hour typing.

# Efficiency

But is vim more efficient than Emacs keybinding? I don't literally think so. I believe
when you are used to one of them, the efficiency should not be significantly different.
For example, how much time you would save if you use "dd" instead of "C-k", or "dw"
instead of "C-d"? Maybe zero, or even negative :(. I have tried evil and I think 
it's slowing down my productivity because I've already familiar with Vanilla Emacs.
It won't be worthwhile to switch it after another long time of studying.

# Philosophy

Emacs users believe in "living in Emacs", while vim users trust "do one thing, and
do it better". For example, Emacs can use terminal emulator (and use vim haha) or 
receive Email within it. It's a difference of "all-in-one" and "division and cooperation". 
To be honest, each one has its limitations and advantages. Emacs certainly has higher extensibility 
but is also more bloated. For instance, my Emacs is shipped with more than 100 packages 
and costs ca. 1s to start up. Even if this is already amazing, this is sadly a result of
high optimization (lazy-load, replace time-costing packages, native compilation etc).
In contrast, a "coarse" configuration may cost 7-8s or even more. Vim won't have such
a concern (according to my limited knowledge) but you can see that vim development is not
as active as Emacs.

# Choose your tool
I am keeping telling myself that tool is just tool. Although I love playing with Emacs,
I also use Sublime Text (with license), Visual Studio Code, and some IDEs like Rstudio, PyCharm.
They all are brilliant tools and have no conflicts with each other. Just choose yours
according to the usage scenarios. For example, I always use Sublime Text as an alternative
of the stupid Notepad on Windows. When I log in remote machines via ssh, I certainly use
Emacs. Each one will be one of my toolbox without any issue!




