---
title: "Studying Transport Matrix Method (TMM)"
subtitle: ""
date: 2025-09-18T16:33:09+01:00
lastmod: 2025-09-18T16:33:09+01:00
draft: true
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
- draft
categories:
- draft

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

# Transport Matrix Method (TMM) Guide

## Overview

The Transport Matrix Method (TMM) is an offline approach for modeling ocean tracers, developed by Khatiwala et al. (2005, Ocean Modelling). TMM creates a sparse matrix from an ocean physical model's advective-convective operator, enabling fast spin-up calculations with comparable model performance due to the efficiency of sparse matrix operations.

## Getting Started

### 1. Download Source Code

Get the TMM source code from: https://doi.org/10.5281/zenodo.17115337

### 2. Environment Setup

Create a conda environment with the required dependencies:

```yaml
name: tmm4py-macos
channels:
  - conda-forge
channel_priority: strict
dependencies:
  - python=3.11
  - mpich
  - petsc
  - petsc4py
  - numpy=2.2
  - cython
  - netcdf4
  - h5py
  - clang
  - c-compiler
  - cxx-compiler
  - fortran-compiler
  - llvm-openmp
  - make
  - pip
  - numba
```

### 3. Build Process

#### Step 1: Build C Library

```bash
mamba activate tmm4py-macos

export PETSC_DIR="${PETSC_DIR:-$CONDA_PREFIX}"
export PETSC_ARCH="${PETSC_ARCH:-}"
export TMM_DIR="${PWD}/TMM"
make -j2
make install PREFIX=$TMM_DIR
```

#### Step 2: Build Python Bindings

```bash
make tmm4py PREFIX=$TMM_DIR
```

Alternative approach:
```bash
cd src/binding/tmm4py && pip install --no-deps .
```

## Testing Your Installation

### Quick Test Setup

1. Download the example files: https://drive.google.com/file/d/1ou1kamcI-ZE6BWHpnAs2LaSmO1uZeXyd/view

2. Set up the test environment:

```bash
export PYTHONPATH="${PYTHONPATH:-}:$TMM_DIR
cd examples/idealage
cp -p ../../models/idealage/code/python/Age.py .
cp -p ../../models/idealage/runscript/* .
```

3. Run the test:

```bash
mpiexec -n 2 python run_model_age_py.py
```

## References

Khatiwala, S., et al. (2005). Accelerated simulation of passive tracers in ocean circulation models. *Ocean Modelling*, 9(1), 51-69.



## How to use
# Here's what happens behind the scenes:

# 1. You write your model functions
class MyBiogeochemicalModel:
    def initialize_model(self, tc, Iter, state, *args, **kwargs):
        print(f"Initializing at time {tc}")
        # Setup code here
        
    def compute_sources(self, tc, Iter, iLoop, state, *args, **kwargs):
        print(f"Computing at time step {iLoop}, time {tc}")
        # Main biogeochemical calculations
        # Example: simple decay
        decay_rate = 0.01
        state.qef[0][:] = -decay_rate * state.c[0][:]  # Exponential decay
        
    def cleanup_model(self, tc, Iter, state, *args, **kwargs):
        print(f"Cleaning up at final time {tc}")

# 2. You register them (create the connections)
model = MyBiogeochemicalModel()
state = TMM.TMMState()
state.create()

# Registration creates internal pointers in the TMM C library
state.setIniExternalForcingFunction(model.initialize_model)
state.setCalcExternalForcingFunction(model.compute_sources)  
state.setFinExternalForcingFunction(model.cleanup_model)

# 3. During time-stepping, TMM automatically calls your functions:
```python
for iLoop in range(1, maxSteps + 1):
    tc = time0 + deltaTClock * (iLoop - 1)
    tf = time0 + deltaTClock * iLoop  
    Iterc = Iter0 + iLoop - 1
    
    TMM.updateTMs(tc)
    
    # This line triggers your registered callbacks:
    state.forcingUpdate(tc, Iterc, iLoop)  # <-- Calls compute_sources()
    
    state.timeStep(tc, Iterc, iLoop)      # <-- Advances the tracers
    state.timeStepPost(tf, Iterc, iLoop)
    state.output(tf, Iterc, iLoop)
```

## Other similar tools
- OCIM (Ocean Circulation Inverse Model) in MATLAB
