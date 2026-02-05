---
title: "Building FABM and GOTM model framework"
subtitle: ""
date: 2025-09-07T19:26:33+01:00
lastmod: 2025-09-07T19:26:33+01:00
draft: false
author: "Rui Ying"
authorLink: ""
authorEmail: ""
description: ""
keywords: ""
license: ""
comment:
  enable: false
weight: 0

tags:
- Programming
categories:
- Biogeochemical Modelling

hiddenFromHomePage: false
hiddenFromSearch: false

summary: ""

toc:
  enable: true
math:
  enable: false
lightgallery: false
seo:
  images: []

repost:
  enable: false
  url: ""

# See details front matter: https://fixit.lruihao.cn/theme-documentation-content/#front-matter
---
# Overview

Marine biogeochemical modeling has become increasingly important for understanding ocean ecosystems and their response to environmental changes. Two powerful tools at the forefront of this field are FABM (Framework for Aquatic Biogeochemical Models) and GOTM (General Ocean Turbulence Model). In this post, I'll walk through the setup process to test both tools.

## What are FABM and GOTM?

**FABM** is a flexible framework that allows researchers to couple different biogeochemical models with various physical host models. It provides a standardized interface that makes it easier to switch between different biogeochemical formulations and compare model results.

**GOTM** is a one-dimensional water column model that simulates the vertical structure of marine and freshwater systems. It's particularly strong at modeling turbulence and mixing processes, making it an excellent host for biogeochemical models.

## Build a 0D box model

First, download source code:
```bash
git clone https://github.com/BoldingBruggeman/fabm.git ~/fabm
git clone --recurse-submodules https://github.com/gotm-model/code.git ~/gotm
```

We next build using `cmake`:
```bash
cd ~/fabm
mkdir -p build

cd build
cmake ../src/drivers/0d -DGOTM_BASE=~/gotm/
cmake --build . --target install
```
This should generate a exe file `fabm0d`. To run the model, we can use the pre-defined namelist and biogeochemical configurations:

```bash
cd testcases/0d
fabm0d -r run.nml -y ../fabm-gotm-npzd.yaml
```

---

## Building a 1D water column model

### Step 1: Getting a Biogeochemical Model

For this example, we'll use the PISCES biogeochemical model, which is a comprehensive marine ecosystem model:

```bash
git clone https://github.com/BoldingBruggeman/fabm-pisces.git
```

PISCES includes multiple plankton functional types, nutrient cycles, and carbonate chemistry - making it suitable for a wide range of marine ecosystem studies.

### Step 2: Building and Installing GOTM

Now we'll set up GOTM with FABM and PISCES integration:

```bash
## This includes FABM as submodule, so no need to clone FABM separately
git clone --recurse-submodules https://github.com/gotm-model/code.git gotm
cd gotm
## S for source, B for build
cmake -S . -B build -DFABM_INSTITUTES=pisces -DFABM_PISCES_BASE=../fabm-pisces
cmake --build build --target install
```

The key configuration options here are:
- `DFABM_INSTITUTES=pisces`: Enables the PISCES biogeochemical model
- `DFABM_PISCES_BASE=../fabm-pisces`: Specifies the location of the PISCES model code

### Step 3: Configuration Setup

Once everything is built, you'll need to create configuration files. GOTM uses YAML files for configuration, and you can generate a complete template:

```bash
gotm --write_yaml gotm_full.yaml --detail full
```

This creates a comprehensive configuration file that includes all possible options (particularly `FABN: True`). You'll need to create a corresponding `fabm.yaml` file to configure your biogeochemical model parameters.

```yaml
fabm:                               # Framework for Aquatic Biogeochemical Models
   use: false                       # enable FABM [default=false]
   yaml_file: fabm.yaml             # FABM configuration file [default=fabm.yaml]
```

### Step 4: Run the simulation

Do something like this:

```
gotm gotm_full.yaml
```

## Other relevant toolkit

### Python Integration

The FABM/GOTM ecosystem includes several Python tools that can enhance your modeling workflow:

- **FABMOS** - A tool for model optimization and sensitivity analysis
- **PyGOTM** - Python bindings for GOTM, allowing you to run simulations directly from Python
- **PyFABM** - Python interface to FABM models, useful for model development and testing

These Python tools open up possibilities for automated parameter tuning, uncertainty quantification, and integration with machine learning workflows.

--- 

## References
- https://github.com/fabm-model/fabm/wiki/
