---
layout:  default
title:   "Picoharp Parsing"
permalink: /Picoharp_Parsing/
date: 2023-01-12 00:01:00 +0800
---

# Overview
Single-photon imaging sensors, such as Single Photon Avalanche Diodes (SPADs) and Photon Multiplier Tubes (PMTs), are capable of detecting individual photons with picosecond time resolution. These sensors utilize a Time-Correlated Single Photon Counting (TCSPC) module, such as the [Picoharp](https://www.picoquant.com/dl_manuals/discontinued/PicoHarp300_DLL_Manual.pdf), to measure photon time-of-flight relative to a synchronized pulse train.

Each measurement is recorded as a 32-bit time record and stored as a list in a bin file. The default MATLAB demo provided by PicoQuant processes (or "parses") each record individually, which can be time-consuming. To improve efficiency, I developed a [fast parsing pipeline](https://github.com/tmsultan/Picoharp) in MATLAB that accelerates processing by leveraging binary arithmetic and vectorization that enables the simultaneous processing of multiple records. This approach achieves a speedup of approximately 100x. Interestingly, it does not require significantly more memory, as the MATLAB demo already reads the entire bin file into memory.
