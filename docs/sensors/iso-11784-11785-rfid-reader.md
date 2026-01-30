---
layout: default
title: ISO 11784/11785 RFID Reader Array – Genesis Network Component Specification
description: Detailed specification for the ISO 11784/11785 RFID Reader Array used in livestock, asset, and personnel tracking within the Genesis Network.
license: Creative Commons Attribution 4.0 International (CC BY 4.0)
---

# ISO 11784/11785 RFID Reader Array  
**Genesis Network Component Specification**

**© 2025–2026 EarthStar Technologies Conceptual Working Group**  
Licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

## Executive Overview

The **ISO 11784/11785 RFID Reader Array** provides standardized, low-frequency (134.2 kHz) animal and asset identification across the Genesis Network. It enables precise, automated tracking of livestock (poultry, cattle, goats, sheep, bison, alpaca), breeding cycles, health records, and movement within hubs, affiliate farms, and TerraWell mobile units. Deployed in multi-reader arrays (4–16 antennas per pod/zone), it supports real-time inventory, biosecurity compliance, and blockchain-verified provenance for premium meat/fiber/egg sales.  

**Core Mission** — Ensure full traceability and welfare monitoring in multi-species husbandry with zero manual data entry.  
**Deployment Phase** — Phase 1 (2026–2028) in livestock pods; full network scale by 2030–2035.  
**Revenue Role** — Enables premium branding (+15–35% margins on traceable products), carbon/biodiversity credit verification, and affiliate kit sales; contributes $80–250M/year network-wide (mature).

## Filtered Component Dependencies & Production

### Tiles (Relevant Only)
| Name | Description & Key Features | Inputs/Materials | Manufacturing Process | Cost ($/m²) | Revenue/Value ($/m² or per unit) |
|------|----------------------------|------------------|-----------------------|-------------|----------------------------------|
| [Structural Load-Bearing Tile](components/tiles/structural-load-bearing-tile.md) | Embedded RFID antenna conduits & piezo power for reader arrays | ELFM slag (70%), brownfield materials | Forming → piezo embed → firing (1,200–1,400°C) | 16–28 | 48–75 (internal) |
| [Insulating / Thermal Mass Tile](components/tiles/insulating-thermal-mass-tile.md) | Passive thermal stability for livestock pod reader zones | Bagasse pore-formers, residues | Aerated forming → internal channels → firing | 15–26 | 44–75 (internal) |

### Pods (Relevant Only)
| Name | Description & Key Features | Inputs/Materials | Manufacturing Process | Cost ($/pod) | Revenue/Value ($/pod) |
|------|----------------------------|------------------|-----------------------|--------------|------------------------|
| [Livestock Pod (Large & Specialty)](components/pods/livestock-pod.md) | Multi-species housing with integrated RFID array for tracking/breeding | Ceramic shell, stainless pens | Pod assembly + RFID antenna embed | 0.8–2.2M | 1.5–4.0M (internal/affiliate) |

### Kits (Relevant Only)
| Name | Description & Key Features | Inputs/Materials | Manufacturing Process | Cost ($/kit) | Revenue/Value ($/kit) |
|------|----------------------------|------------------|-----------------------|--------------|------------------------|
| [Livestock Tracking & Welfare Kit](components/kits/livestock-tracking-welfare-kit.md) | ISO 11784/11785 readers, antennas, edge processor, blockchain logger | Ceramic conduits, RFID modules | Kit assembly + sensor integration | 0.12–0.35M | 0.25–0.8M (affiliate sales) |

### Sensors (Relevant Only)
| Name | Description & Key Features | Inputs/Materials | Manufacturing Process | Cost (per unit) | Revenue/Value (per unit) |
|------|----------------------------|------------------|-----------------------|------------------|---------------------------|
| [ISO 11784/11785 RFID Reader Node](docs/sensors/iso-11784-11785-rfid-reader-node.md) | 134.2 kHz HDX/FDX-B compatible, 4–16 antenna array support | Ceramic housing, RFID chipset | SMT + ceramic embed | $45–$120 | $90–$250 (internal/affiliate) |

### Standards & Compliance (Relevant Only)
| Standard | Description | Application in RFID Array | Phase |
|----------|-------------|----------------------------|-------|
| [ISO 11784](docs/standards/iso-11784.md) | RFID frequency & code structure for animal ID | Core protocol for all tags/readers | Phase 1+ |
| [ISO 11785](docs/standards/iso-11785.md) | Technical protocol for HDX/FDX-B transponders | Reader-tag communication standard | Phase 1+ |
| [ISO 11783 (ISOBUS)](docs/standards/iso-11783.md) | Agricultural bus for livestock equipment integration | Links RFID data to robotic milking/feeding | Phase 2+ |

### Related / Supporting LLCs in the Innovation Hub
- [Lights-Out Sustainable Forestry LLC](innovation-hub/lights-out-sustainable-forestry-llc.md) — supplies biochar for livestock bedding/soil  
- [Regenerative Pharmaceuticals LLC](innovation-hub/regenerative-pharmaceuticals-llc.md) — provides traceable health inputs tied to RFID records  
- [Advanced Recycling & Waste Valorization LLC](innovation-hub/advanced-recycling-llc.md) — processes manure/waste with RFID-tracked provenance  

**Viability & Integration Notes**  
The RFID array is a low-risk, high-ROI component: minimal new CAPEX (embedded in existing livestock pods/tiles), strong compliance value (traceability for premium sales/credits), and full integration with data moat for welfare optimization. Deployment begins 2026–2027 in livestock pods; network-wide revenue contribution grows to $80–250M/year by 2035 via traceable product premiums and affiliate kit sales. No major bottlenecks; leverages existing ceramic production and sensor ecosystem.

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).  
© 2025–2026 EarthStar Technologies Conceptual Working Group
