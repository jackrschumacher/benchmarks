---
title: Libre Sweet Potato (AML-S905X-CC)
date: 2026-04-07
tags: "sbc"
---
# Libre Sweet Potato (AML-S905X-CC)

## Device information
Device information from `fastfetch`
<details>
<summary>View device information</summary>

```
                             ....              ubuntu@ubuntu-22
              .',:clooo:  .:looooo:.           ----------------
           .;looooooooc  .oooooooooo'          OS: Ubuntu 22.04.5 LTS (Jammy Jellyfish) aarch64
        .;looooool:,''.  :ooooooooooc          Host: Libre Computer AML-S905X-CC V2
       ;looool;.         'oooooooooo,          Kernel: Linux 6.12.73-g6b2d05eda916
      ;clool'             .cooooooc.  ,,       Uptime: 31 mins
         ...                ......  .:oo,      Packages: 1419 (dpkg), 8 (snap)
  .;clol:,.                        .loooo'     Shell: bash 5.1.16
 :ooooooooo,                        'ooool     Display (Unknown-1): 720x576 in 10", 60 Hz
'ooooooooooo.                        loooo.    Terminal: /dev/pts/1
'ooooooooool                         coooo.    CPU: meson-gxl (4) @ 1.42 GHz
 ,loooooooc.                        .loooo.    GPU: Amlogic meson-gxl-mali [Integrated]
   .,;;;'.                          ;ooooc     Memory: 327.74 MiB / 1.90 GiB (17%)
       ...                         ,ooool.     Swap: 0 B / 1024.00 MiB (0%)
    .cooooc.              ..',,'.  .cooo.      Disk (/): 5.05 GiB / 58.00 GiB (9%) - btrfs
      ;ooooo:.           ;oooooooc.  :l.       Local IP (eth0): 146.229.244.24/21
       .coooooc,..      coooooooooo.           Locale: C.UTF-8
         .:ooooooolc:. .ooooooooooo'
           .':loooooo;  ,oooooooooc
               ..';::c'  .;loooo:'

```
</details>



## sbc-bench

<details>
<summary>Results</summary>

```
# Libre Computer AML-S905X-CC V2

Tested with sbc-bench v0.9.72 on Tue, 07 Apr 2026 20:51:16 -0500.

### General information:

    Information courtesy of cpufetch:

    SoC:                 Amlogic S905X
    Technology:          28nm
    Microarchitecture:   Cortex-A53
    Max Frequency:       1.416 GHz
    Cores:               4 cores
    Features:            NEON,SHA1,SHA2,AES,CRC32

    Amlogic Meson GXL (S905X) rev 21:d - 84:2, Amlogic Meson GXL (S905X) Revision 21:d (84:2), Kernel: aarch64, Userland: arm6                                                                                                               4

    CPU sysfs topology (clusters, cpufreq members, clockspeeds)
                     cpufreq   min    max
     CPU    cluster  policy   speed  speed   core type
      0        0        0      100    1416   Cortex-A53 / r0p4
      1        0        0      100    1416   Cortex-A53 / r0p4
      2        0        0      100    1416   Cortex-A53 / r0p4
      3        0        0      100    1416   Cortex-A53 / r0p4

1947 KB available RAM

### Governors/policies (performance vs. idle consumption):

Original governor settings:

    cpufreq-policy0: schedutil / 1200 MHz (ondemand userspace performance schedutil / 100 250 500 667 1000 1200 1416)
    d00c0000.gpu: simple_ondemand / 125 MHz (powersave performance simple_ondemand / 125 250 286 400 500 667 744)

Tuned governor settings:

    cpufreq-policy0: performance / 1416 MHz
    d00c0000.gpu: performance / 744 MHz

### Clockspeeds (idle vs. heated up):

Before at 46.0°C:

    cpu0 (Cortex-A53): OPP: 1416, Measured: 1412

After at 47.0°C:

    cpu0 (Cortex-A53): OPP: 1416, Measured: 1412

### Performance baseline

  * memcpy: 1922.0 MB/s, memchr: 1705.9 MB/s, memset: 5781.3 MB/s
  * 16M latency: 190.7 153.1 184.9 151.0 190.8 152.9 194.0 390.5
  * 128M latency: 214.9 214.8 221.6 214.1 214.8 216.5 221.4 455.2
  * 7-zip MIPS (3 consecutive runs): 3641, 3640, 3654 (3640 avg), single-threaded: 1024
  * `aes-256-cbc      97476.82k   271088.79k   479673.60k   605792.60k   655919.79k   659095.55k`
  * `aes-256-cbc      97374.60k   269545.43k   478169.43k   604101.97k   653473.11k   656659.80k`

### Storage devices:

  * 58.3GB "SDABC" UHS SDR104 SDXC card as /dev/mmcblk1: date 09/2023, manfid/oemid: 0x00006f/0x0303, hw/fw rev: 0x1/0x0
  * Gigadevice GD25LQ128D 16MB SPI NOR flash, drivers in use: spi-nor/meson-spifc/simple-pm-bus/simple-pm-bus

### Swap configuration:

  * /swapfile on /dev/mmcblk1p2: 1024.0M (512K used) on ultra slow SD card storage

### Software versions:

  * Ubuntu 22.04.5 LTS (jammy)
  * Compiler: /usr/bin/gcc (Ubuntu 11.4.0-1ubuntu1~22.04.3) 11.4.0 / aarch64-linux-gnu
  * OpenSSL 3.0.2, built on 15 Mar 2022 (Library: OpenSSL 3.0.2 15 Mar 2022)

### Kernel info:

  * `/proc/cmdline: BOOT_IMAGE=/boot/vmlinuz-6.12.73-g6b2d05eda916 root=UUID=29d512f7-4728-44f2-9070-cc9e4c3592bd ro noquiet s                                                                                                               plash vt.handoff=7`
  * Vulnerability Spectre v1:                Mitigation; __user pointer sanitization
  * Kernel 6.12.73-g6b2d05eda916 / CONFIG_HZ=300
```
</details>

## Geekbench 6
> [!WARNING]
>
> Test failed to complete (timeout)
