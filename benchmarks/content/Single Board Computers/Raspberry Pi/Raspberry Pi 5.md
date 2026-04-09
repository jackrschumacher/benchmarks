---
title: Raspberry Pi 5 (8 GB)
date: 2026-04-07
tags: "sbc"
---
# Raspberry Pi 5 (8 GB)

## Device information
### Overview
Device information from `fastfetch`
<details>
<summary>View device information</summary>

```
                             ....              jackr@jackr
              .',:clooo:  .:looooo:.           -----------
           .;looooooooc  .oooooooooo'          OS: Ubuntu 24.04.4 LTS (Noble Numbat) aarch64
        .;looooool:,''.  :ooooooooooc          Host: Raspberry Pi 5 Model B Rev 1.0
       ;looool;.         'oooooooooo,          Kernel: Linux 6.8.0-1051-raspi
      ;clool'             .cooooooc.  ,,       Uptime: 1 hour, 43 mins
         ...                ......  .:oo,      Packages: 2933 (dpkg), 20 (snap)
  .;clol:,.                        .loooo'     Shell: bash 5.2.21
 :ooooooooo,                        'ooool     DE: GNOME 46.0
'ooooooooooo.                        loooo.    WM: Mutter (Wayland)
'ooooooooool                         coooo.    WM Theme: Yaru-blue-dark
 ,loooooooc.                        .loooo.    Theme: Yaru-blue-dark [GTK2/3/4]
   .,;;;'.                          ;ooooc     Icons: Yaru-blue [GTK2/3/4]
       ...                         ,ooool.     Font: Cantarell (11pt) [GTK2/3/4]
    .cooooc.              ..',,'.  .cooo.      Cursor: Adwaita (24px)
      ;ooooo:.           ;oooooooc.  :l.       Terminal: /dev/pts/0
       .coooooc,..      coooooooooo.           CPU: BCM2712 (4) @ 2.40 GHz
         .:ooooooolc:. .ooooooooooo'           GPU: Broadcom bcm2712-vc6 [Integrated]
           .':loooooo;  ,oooooooooc            Memory: 1.02 GiB / 7.75 GiB (13%)
               ..';::c'  .;loooo:'             Swap: 0 B / 1024.00 MiB (0%)
                                               Disk (/): 47.13 GiB / 116.62 GiB (40%) - ext4
                                               Local IP (eth0): 146.229.245.131/21
                                               Locale: en_US.UTF-8
```
</details>

### System Topography
Generated with `lstopo`



<details>
<summary>View device topography</summary>
<img src="/images/Pi5-8Topo.png" alt="Raspberry Pi 5 (8GB) Topography" />

</details>

## sbc-bench
### With Armor Lite v5 (Case top off)

Temperature max (with Armor Lite v5 Installed): 61-62C

<details>
<summary>Results</summary>

```
# Raspberry Pi 5 Model B Rev 1.0

Tested with sbc-bench v0.9.72 on Tue, 07 Apr 2026 16:58:33 -0500.

### General information:

    Information courtesy of cpufetch:
    
    SoC:                 Broadcom BCM2712
    Technology:          16nm
    Microarchitecture:   Cortex-A76
    Max Frequency:       2.400 GHz
    Cores:               4 cores
    Features:            NEON,SHA1,SHA2,AES,CRC32
    
    BCM2712, Kernel: aarch64, Userland: arm64
    
    CPU sysfs topology (clusters, cpufreq members, clockspeeds)
                     cpufreq   min    max
     CPU    cluster  policy   speed  speed   core type
      0        0        0     1500    2400   Cortex-A76 / r4p1
      1        0        0     1500    2400   Cortex-A76 / r4p1
      2        0        0     1500    2400   Cortex-A76 / r4p1
      3        0        0     1500    2400   Cortex-A76 / r4p1

7937 KB available RAM

### Governors/policies (performance vs. idle consumption):

Original governor settings:

    cpufreq-policy0: ondemand / 1900 MHz (conservative ondemand userspace powersave [1mperformance[0m schedutil / 1500 1600 1700 1800 1900 2000 2100 2200 2300 2400)

Tuned governor settings:

    cpufreq-policy0: performance / 2400 MHz

Status of performance related policies found below /sys:

    /sys/module/pcie_aspm/parameters/policy: default [performance] powersave powersupersave

### Clockspeeds (idle vs. heated up):

Before at 50.7°C:

    cpu0 (Cortex-A76): OPP: 2400, ThreadX: 2400, Measured: 2380 

After at 63.9°C:

    cpu0 (Cortex-A76): OPP: 2400, ThreadX: 2400, Measured: 2390 

### Performance baseline

  * memcpy: 4330.2 MB/s, memchr: 14270.5 MB/s, memset: 8681.8 MB/s
  * 16M latency: 120.7 113.4 117.8 112.7 114.9 115.4 122.3 119.9 
  * 128M latency: 132.0 130.3 127.0 126.4 127.0 128.9 142.7 135.2 
  * 7-zip MIPS (3 consecutive runs): 9683, 9871, 9689 (9750 avg), single-threaded: 3049
  * `aes-256-cbc     553782.05k  1013760.85k  1258445.82k  1334258.69k  1362873.00k  1365431.64k`
  * `aes-256-cbc     554408.30k  1014862.55k  1258438.57k  1335749.97k  1362403.33k  1365628.25k`

### PCIe and storage devices:

  * Raspberry RP1 PCIe 2.0 South Bridge: Speed 5GT/s, Width x4, driver in use: rp1, 
  * 119.1GB "SanDisk SN128" UHS SDR104 SDXC card as /dev/mmcblk0: date 09/2023, manfid/oemid: 0x000003/0x5344, hw/fw rev: 0x8/0x6

### Swap configuration:

  * /swapfile on /dev/mmcblk0p2: 1024.0M (0K used) on ultra slow SD card storage

### Software versions:

  * Ubuntu 24.04.4 LTS (noble)
  * Compiler: /usr/bin/gcc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0 / aarch64-linux-gnu
  * OpenSSL 3.0.13, built on 30 Jan 2024 (Library: OpenSSL 3.0.13 30 Jan 2024)    
  * ThreadX: 26826259 / 2024/09/23 14:02:56 

### Kernel info:

  * `/proc/cmdline: reboot=w coherent_pool=1M 8250.nr_uarts=1 pci=pcie_bus_safe  smsc95xx.macaddr=2C:CF:67:2F:07:A4 vc_mem.mem_base=0x3fc00000 vc_mem.mem_size=0x40000000  zswap.enabled=1 zswap.zpool=z3fold zswap.compressor=zstd multipath=off dwc_otg.lpm_enable=0 console=tty1 root=LABEL=writable rootfstype=ext4 rootwait fixrtc quiet splash`
  * Vulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl
  * Vulnerability Spectre v1:                Mitigation; __user pointer sanitization
  * Vulnerability Spectre v2:                Mitigation; CSV2, BHB
  * Kernel 6.8.0-1051-raspi / CONFIG_HZ=1000

```
</details>

### With Armor Lite v5 (Case top on)

Approximate max temperature: Around 65-67C.
<details>
<summary>Results</summary>

```

# Raspberry Pi 5 Model B Rev 1.0

Tested with sbc-bench v0.9.72 on Tue, 07 Apr 2026 10:27:29 -0500.

### General information:

    Information courtesy of cpufetch:
    
    SoC:                 Broadcom BCM2712
    Technology:          16nm
    Microarchitecture:   Cortex-A76
    Max Frequency:       2.400 GHz
    Cores:               4 cores
    Features:            NEON,SHA1,SHA2,AES,CRC32
    
    BCM2712, Kernel: aarch64, Userland: arm64
    
    CPU sysfs topology (clusters, cpufreq members, clockspeeds)
                     cpufreq   min    max
     CPU    cluster  policy   speed  speed   core type
      0        0        0     1500    2400   Cortex-A76 / r4p1
      1        0        0     1500    2400   Cortex-A76 / r4p1
      2        0        0     1500    2400   Cortex-A76 / r4p1
      3        0        0     1500    2400   Cortex-A76 / r4p1

7937 KB available RAM

### Governors/policies (performance vs. idle consumption):

Original governor settings:

    cpufreq-policy0: performance / 2400 MHz (conservative ondemand userspace powersave performance schedutil / 1500 1600 1700 1800 1900 2000 2100 2200 2300 2400)

Tuned governor settings:

    cpufreq-policy0: performance / 2400 MHz

Status of performance related policies found below /sys:

    /sys/module/pcie_aspm/parameters/policy: default [performance] powersave powersupersave

### Clockspeeds (idle vs. heated up):

Before at 56.8°C:

    cpu0 (Cortex-A76): OPP: 2400, ThreadX: 2400, Measured: 2391 

After at 68.8°C:

    cpu0 (Cortex-A76): OPP: 2400, ThreadX: 2400, Measured: 2394 

### Performance baseline

  * memcpy: 4809.9 MB/s, memchr: 14302.1 MB/s, memset: 9720.1 MB/s
  * 16M latency: 122.7 112.6 126.7 114.6 123.3 121.5 124.0 126.7 
  * 128M latency: 125.0 125.7 125.6 126.0 125.0 126.1 133.4 146.3 
  * 7-zip MIPS (3 consecutive runs): 10085, 10131, 10247 (10150 avg), single-threaded: 3072
  * `aes-256-cbc     554007.15k  1012866.26k  1258518.61k  1332617.22k  1362793.81k  1365535.40k`
  * `aes-256-cbc     550393.74k  1004321.88k  1250856.19k  1317590.36k  1347655.00k  1351680.00k`

### PCIe and storage devices:

  * Raspberry RP1 PCIe 2.0 South Bridge: Speed 5GT/s, Width x4, driver in use: rp1, 
  * 119.1GB "SanDisk SN128" UHS SDR104 SDXC card as /dev/mmcblk0: date 09/2023, manfid/oemid: 0x000003/0x5344, hw/fw rev: 0x8/0x6

### Swap configuration:

  * /swapfile on /dev/mmcblk0p2: 1024.0M (0K used) on ultra slow SD card storage

### Software versions:

  * Ubuntu 24.04.4 LTS (noble)
  * Compiler: /usr/bin/gcc (Ubuntu 13.3.0-6ubuntu2~24.04.1) 13.3.0 / aarch64-linux-gnu
  * OpenSSL 3.0.13, built on 30 Jan 2024 (Library: OpenSSL 3.0.13 30 Jan 2024)    
  * ThreadX: 26826259 / 2024/09/23 14:02:56 

### Kernel info:

  * `/proc/cmdline: reboot=w coherent_pool=1M 8250.nr_uarts=1 pci=pcie_bus_safe  smsc95xx.macaddr=2C:CF:67:2F:07:A4 vc_mem.mem_base=0x3fc00000 vc_mem.mem_size=0x40000000  zswap.enabled=1 zswap.zpool=z3fold zswap.compressor=zstd multipath=off dwc_otg.lpm_enable=0 console=tty1 root=LABEL=writable rootfstype=ext4 rootwait fixrtc quiet splash`
  * Vulnerability Spec store bypass:         Mitigation; Speculative Store Bypass disabled via prctl
  * Vulnerability Spectre v1:                Mitigation; __user pointer sanitization
  * Vulnerability Spectre v2:                Mitigation; CSV2, BHB
  * Kernel 6.8.0-1051-raspi / CONFIG_HZ=1000

```
</details>

## Geekbench 6

Using Geekbench version `6.5.0`

| Single Core | Multi-Core |
| :---------: | :--------: |
|     778     |    1521    |

[Geekbench result link](https://browser.geekbench.com/v6/cpu/17518997)