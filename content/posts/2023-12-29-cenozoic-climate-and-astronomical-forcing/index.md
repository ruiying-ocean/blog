---
title: Astronomical forcing and the glacial-interglacial climate
author: Rui Ying
date: '2023-12-29'
slug: []
categories:
  - Science
tags:
  - Climate change
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

## 时间和天文学原理
* 地球自转：日夜
* 地球公转：年
* 黄赤交角（地球南北极连线不是垂直于轨道面）：季节性和南北差异（太阳入射角）
* 月球公转：月（注意因为潮汐锁定，月球公转和自传周期一样）

> 黄道面：地球绕太阳旋转的轨道平面; 赤道面：赤道所在的平面。

## 天文轨道参数
* Eccentricity (400, 100 ka)：公转参数, 直接影响地球接收太阳辐射的总量（年度或季度），同时也影响岁差的幅度。突出低纬过程，主要是季风和水汽运输，包括Walker环流（ENSO的核心概念）和ITCZ。
* Obliquity (41 ka)：影响季节性和纬度差异，因此突出高纬度的过程，主要是冰盖的消长；
* Precession (23 ka)：地轴本身也会旋转（名为进动），影响黄赤交角，导致岁差，即恒星年和回归年的时间差。恒星年指的是地球公转的周期，回归年指的是阳光直射点在南北回归线之间的周期，后者显然和地轴的位置有关。

> Whereas eccentricity affects climate by modulating the amplitude of precession and thus influencing the total annual/seasonal solar energy budget, obliquity changes the latitudinal distribution of insolation (Zachos et al. 2001)

> The Intertropical Convergence Zone, or ITCZ, is a band of low pressure around the Earth which generally lies near to the equator. The trade winds of the northern and southern hemispheres come together here, which leads to the development of frequent thunderstorms and heavy rain. These thunderstorms can reach, and sometimes exceed, 16 kilometres, 55,000 feet or 10 miles in height above the surface. (Metoffice)

Fast Fourier Transform (time-frequency plot) is often used to decompose these three periodic drivers.

![](https://i0.wp.com/geologyscience.com/wp-content/uploads/2023/11/Precession-as-a-Milankovitch-Cycle-jpg)

## 冰期-间冰期旋回

Milankovitch认为，北纬夏季65度日照量影响冰盖积累、日积月累导致了冰期-间冰期的变化。但其实简单的积累是不够的，这其中还涉及许多复杂的反馈机制，包括但不限于：

1. 冰盖反射阳光辐射，这是个正反馈调节; 海冰也将阻止海气交换和碳释放。
2. Carbon-climate feedback: （1）增加$\ce{CO2}$在海水中的溶解度，导致深海碳储存上升；（2）温度减少有机碳分解，导致碳释放减少。温室气体的减少，加剧了降温。
3. 洋流模式：AMOC的热和水汽输送无法有效到达极地、减少冰盖的形成。
4. 干旱导致的粉尘和铁元素输送、增加海洋生物泵效率
5. 风力强度影响上升流和生物生产力

这些机制反映了各种气候系统之间的复杂交互作用， 最常研究的包括水循环和碳循环，分别以$\delta^{18}$O和$\delta^{13}$C指示。接下来的新生代气候演化研究就主要基于这两个proxy的数据。

> 温室气体原理: 太阳短波辐射是地球气候系统的能量来源，地球发射长波辐射以维持能量平衡。大气包括水蒸汽、二氧化碳、甲烷、云层对长波辐射的吸收力较强，对短波辐射的吸收力比较弱。


### References
Zachos, J., Pagani, M., Sloan, L., Thomas, E. & Billups, K. Trends, Rhythms, and Aberrations in Global Climate 65 Ma to Present. Science 292, 686–693 (2001).

Westerhold, T. et al. An astronomically dated record of Earth’s climate and its predictability over the last 66 million years. Science 369, 1383–1387 (2020).

The Cenozoic CO2 Proxy Integration Project (CenCO2PIP) Consortium,Toward a Cenozoic history of atmospheric CO2. Science, eadi5177 (2023)

徐建，刘臖，陈漪馨，孙金梁, 2020, 浅述低纬过程在全球气候变化中的重要性, 第四纪研究, 40 (3):595-604

http://blog.sciencenet.cn/u/Brother8

https://www.metoffice.gov.uk/weather/climate/climate-explained/what-is-climate
