---
layout: default
title: PoE Injector Tile
description: Specification for the Genesis Network PoE Injector Tile – power distribution component in the snap-together networking fabric.
license: Creative Commons Attribution 4.0 International (CC BY 4.0)
---

# PoE Injector Tile

The **PoE Injector Tile** is a modular, self-powered power distribution node embedded in the Genesis snap-together ceramic tile system. It sources power from inductive transfer (adjacent networking tiles) or BIPV/piezo layers and injects IEEE 802.3bt (PoE++) compliant power over standard cabling or tile conduits to downstream devices (sensors, edge computers, lights, pumps, robotics). Designed for lights-out operation, it supports the distributed DC microgrid backbone across hubs, pods, and regenerative cities.

**Project Phase**: Phase 1–2 (2027–2032 rollout; full maturity by 2035)

## Components & Dependencies

### Tiles
| Name                                      | Description & Key Features                              | Inputs/Materials                          | Manufacturing Process                     | Cost ($/m²) | Revenue/Value ($/m² or per unit) |
|-------------------------------------------|---------------------------------------------------------|-------------------------------------------|-------------------------------------------|-------------|----------------------------------|
| [Networking Snap Tile](networking-snap-tile.md) | Provides inductive power input (50–100 W) and data bridging | Ceramic + inductive coils + waveguides    | Forming → embedding → firing → QC         | 35–60       | 100–180 (system enabler)         |
| [Compute Server Tile](compute-server-tile.md) | Primary downstream load (5–40 W TDP)                     | Ceramic + RISC-V modules + sockets        | Same + module pocket integration          | 80–150      | 250–500 (high-value compute)     |
| [Roof Glazing Tile](roof-glazing-tile.md) | Supplementary BIPV power source (10–30% transmittance)  | Glass-ceramic + thin-film PV              | Glazing + PV embedding → firing           | 25–45       | 75–125 (primary power gen)       |

### Pods
| Name                                      | Description & Key Features                              | Inputs/Materials                          | Manufacturing Process                     | Cost ($/pod) | Revenue/Value ($/pod) |
|-------------------------------------------|---------------------------------------------------------|-------------------------------------------|-------------------------------------------|--------------|------------------------|
| [Compute & Networking Pod](../pods/compute-networking-pod.md) | Houses racks of compute/networking tiles; integrates PoE fabric | Ceramic shell + conduits + racks          | Pod shell → rack install → tile integration | 1.5–4.0M     | 3.0–7.0M (edge compute hub) |

### Kits
| Name                                      | Description & Key Features                              | Inputs/Materials                          | Manufacturing Process                     | Cost ($/kit) | Revenue/Value ($/kit) |
|-------------------------------------------|---------------------------------------------------------|-------------------------------------------|-------------------------------------------|--------------|------------------------|
| [Smart Infrastructure Interconnect Kit](../kits/smart-infrastructure-interconnect-kit.md) | Includes PoE Injector Tiles + cabling + configuration tools | Ceramic + conductive elements             | Kit assembly from tile factory output     | 0.4–1.0M     | 0.8–2.0M (deployment enabler) |

### Sensors (Relevant Only)
| Name                                      | Description & Key Features                              | Inputs/Materials                          | Manufacturing Process                     | Cost (per unit) | Revenue/Value |
|-------------------------------------------|---------------------------------------------------------|-------------------------------------------|-------------------------------------------|-----------------|---------------|
| [Strain / Vibration Sensor](../../docs/sensors/strain-vibration-sensor.md) | Monitors tile stress & power injection stability        | Piezo elements + ceramic substrate        | Embedded during tile firing               | $5–15           | System reliability |
| [Power Quality Sensor](../../docs/sensors/power-quality-sensor.md) | Voltage/current monitoring for PoE output               | Hall-effect + microcontrollers            | Embedded or modular                       | $8–20           | Grid diagnostics |

### Standards & Compliance
- IEEE 802.3bt (PoE++ up to 90–100 W/port)  
- IEEE 2030 (smart grid interoperability)  
- ISO/TC 268 (sustainable cities & communities)  
- MIL-STD-810 (environmental ruggedness)  
- Matter/Thread/Zigbee (fallback home automation interoperability)

### Related / Supporting LLCs in the Innovation Hub
- [Sustainable Energy LLC](../../innovation-hub/sustainable-energy-llc.md) – DC microgrid & waste heat integration  
- [Battery & Energy Storage LLC](../../innovation-hub/battery-energy-storage-llc.md) – Sodium-ion buffering for PoE stability  
- [Advanced Recycling & Waste Valorization LLC](../../innovation-hub/advanced-recycling-llc.md) – Feedstock supply for ceramic tiles  

## Viability & Integration Notes

The PoE Injector Tile is a low-complexity, high-reliability enabler of the snap-together DC fabric, eliminating most traditional cabling while maintaining 95–98% power transfer efficiency. It integrates seamlessly with the broader networking tile family and supports lights-out operation across all hub types. Production leverages existing tile factory lines (minimal added tooling), with strong margins (60–75%) due to its role as a system multiplier. Deployment begins in Phase 1 (2027–2028) on pilot hubs and reaches full penetration by Phase 3 (2033+), contributing to the network’s overall energy autonomy and resilience goals.

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
© 2025–2026 EarthStar Technologies Conceptual Working Group
