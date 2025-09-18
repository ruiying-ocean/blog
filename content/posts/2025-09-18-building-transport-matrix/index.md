---
title: "Building Transport Matrix Method (TMM)"
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
comment: false
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

# Building Transport Matrix Method 

## The Transport Matrix Method
The Transport Matrix Method (TMM) is an off-line approach (Khatiwala et al. 2005, Ocean Modelling) to modelling ocean tracers. Its core idea is to create sparse matrix from ocean physical model's advective-convective operator. Because sparse matrix is easy to store and calculate, TMM is characterised with fast spin up with comparable model performance.


## Creating TMM (TBD)


## To use TMM 
Download source code 
https://doi.org/10.5281/zenodo.17115337


### Prerequisite

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



Build C library

```bash
export PETSC_DIR="${PETSC_DIR:-$CONDA_PREFIX}"
export PETSC_ARCH="${PETSC_ARCH:-}"
export TMM_DIR="${PWD}/TMM"

make -j2
make install PREFIX=$TMM_DIR
```


Build PYTHON

```bash
make tmm4py PREFIX=$TMM_DIR

## or
cd src/binding/tmm4py && pip install --no-deps .
```

A quick test

Download example
https://drive.google.com/file/d/1ou1kamcI-ZE6BWHpnAs2LaSmO1uZeXyd/view?usp=sharing
 
 
```bash
export PYTHONPATH="${PYTHONPATH:-}:$TMM_DIR"

cd examples/idealage
cp -p ../../models/idealage/code/python/Age.py .
cp -p ../../models/idealage/runscript/* .

mpiexec -n 2 python run_model_age_py.py
```
