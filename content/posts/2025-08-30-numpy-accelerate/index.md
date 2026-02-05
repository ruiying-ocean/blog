---
title: "Accelerating Numpy in MacOS"
subtitle: ""
date: 2025-08-30T12:14:22+01:00
lastmod: 2025-08-30T12:14:22+01:00
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
- python
categories:
- programming

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

# Optimizing NumPy with Apple's BLAS on macOS

NumPy uses BLAS (Basic Linear Algebra Subprograms), a scientific computing library originally written for FORTRAN. However, on macOS, it's now possible to use Apple's optimized BLAS implementation, which should deliver better computing efficiency thanks to native hardware support and Apple Silicon optimizations.

## Installation

To install NumPy with Apple's BLAS, you (might) need to compile from source rather than using pre-built binaries:

```bash
pip install numpy --no-binary numpy
```

This command forces pip to compile NumPy from source, allowing it to detect and link against Apple's Accelerate framework automatically.

## Verification

After installation, you can verify that NumPy is using Apple's BLAS by checking the configuration:

```python
import numpy as np
print(np.show_config())
```

Look for references to "Accelerate" in the output, which indicates successful linking to Apple's BLAS.

## Performance Comparison

Here's a simple benchmark to demonstrate the performance difference:

```python
import numpy as np
import time

def benchmark_operations():
    sizes = [500, 1000, 2000, 3000]
    results = {}
    
    for size in sizes:
        
        a = np.random.random((size, size))
        b = np.random.random((size, size))
        
        start_time = time.time()
        c = np.dot(a, b)
        dot_time = time.time() - start_time
        print(f"Matrix multiplication: {dot_time:.4f}s")
        
        start_time = time.time()
        eigenvals = np.linalg.eigvals(a)
        eigen_time = time.time() - start_time
        print(f"Eigenvalue computation: {eigen_time:.4f}s")
        
        start_time = time.time()
        svd_result = np.linalg.svd(a)
        svd_time = time.time() - start_time
        print(f"SVD computation: {svd_time:.4f}s")
        
        results[size] = {
            'dot': dot_time,
            'eigen': eigen_time,
            'svd': svd_time
        }
    
    return results
```

## Benchmark Results

Based on real-world testing, here are the performance comparisons between OpenBLAS and Apple BLAS implementations:

| Matrix Size | Operation | OpenBLAS (s) | Apple BLAS (s) | Speedup |
|-------------|-----------|--------------|----------------|---------|
| 500×500 | Matrix Multiplication | 0.0065 | 0.0006 | 10.8× |
| 500×500 | Eigenvalues | 0.1132 | 0.0482 | 2.3× |
| 500×500 | SVD | 0.0608 | 0.0231 | 2.6× |
| 1000×1000 | Matrix Multiplication | 0.0081 | 0.0036 | 2.3× |
| 1000×1000 | Eigenvalues | 0.3277 | 0.2240 | 1.5× |
| 1000×1000 | SVD | 0.2745 | 0.1040 | 2.6× |
| 2000×2000 | Matrix Multiplication | 0.0431 | 0.0270 | 1.6× |
| 2000×2000 | Eigenvalues | 1.4347 | 0.9226 | 1.6× |
| 2000×2000 | SVD | 1.3894 | 0.7522 | 1.8× |
| 3000×3000 | Matrix Multiplication | 0.1235 | 0.0772 | 1.6× |
| 3000×3000 | Eigenvalues | 3.9709 | 2.7926 | 1.4× |
| 3000×3000 | SVD | 5.0373 | 2.9412 | 1.7× |

