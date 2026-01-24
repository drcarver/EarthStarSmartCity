---
layout: default
title: Saltwater Pilot Pod – Genesis Network Component Specification
description: Detailed specification for the Saltwater Pilot Pod variant in the Genesis Network, including species, outputs, design, and integration.
license: Creative Commons Attribution 4.0 International (CC BY 4.0)
theme: minimal
---

# Saltwater Pilot Pod  
**Genesis Network Component Specification**

The **Saltwater Pilot Pod** is a specialized coastal variant of the **[enhanced aquaponics pod](aquaponics-multi-trophic.md)** designed to test and demonstrate marine/brackish multi-trophic systems. It enables premium seafood production while contributing to coastal restoration, nutrient cycling, and future space-relevant closed-loop adaptations (e.g., high-salinity ISRU water systems).

## 1. Core Design & Purpose

- **Base Unit**: 40 ft high-cube ISO container (~300 m² effective volume with vertical racking)  
- **Shell**: Recycled steel early → 95–100% **[toughened ceramics](../tiles-catalog.md)** (waste-derived, corrosion-resistant)  
- **Amphibious Design**: Watertight ceramic lining, flotation modules, autonomous relocation platform for tidal/coastal mobility  
- **Power**: 5–20 kW (BIPV glazing 10–30% + biogas microturbine + piezo floors)  
- **Water**: 95–99% recirculation with salinity control (RO + AWG + digestate recovery); 100–400 L/day makeup  
- **Biosecurity**: Dual smart airlocks with mmWave/multispectral scanning  
- **Automation**: Lights-out robotics for feeding/harvesting/monitoring; edge RISC-V compute  
- **Monitoring**: Hyper-dense sensors (3–5× redundancy: salinity, pH, DO, ammonia, VOC, multispectral)  

**Primary Goal**: Prove commercial viability of saltwater/brackish aquaculture in a closed-loop pod; generate data for **[NASA/ISS integration](../../roadmaps/nasa-iss-integration.md)** (e.g., brine-derived O₂ production, marine microbial resilience).

## 2. Multi-Trophic Species & Outputs

| Layer                              | Primary Species                          | Density / Setup                          | Annual Output (mature pod) | Role / Benefits |
|------------------------------------|------------------------------------------|------------------------------------------|----------------------------|-----------------|
| **Fish (Primary Protein)**         | Barramundi (Lates calcarifer), Red Drum (Sciaenops ocellatus) | 500–2,000 fish/cluster; staggered stocking | 6–15 tons edible seafood   | High-value premium protein; fast growth |
| **Crustaceans**                    | Marine shrimp (Litopenaeus vannamei) or blue crab (Callinectes sapidus) | 10–30 juveniles/m²; hides & flow-through | 1–3 tons                   | Detritus/algae cleaning; premium export |
| **Mollusks / Filter Feeders**      | Oysters (Crassostrea virginica) or mussels (Mytilus edulis) | High-density in grow beds                | 0.5–2 tons (optional edible) | Nutrient stripping; water polishing |
| **Macroalgae / Halophytes**        | Kelp (Saccharina latissima), Salicornia (Salicornia bigelovii) | Vertical rafts + flooded trays           | 2–5 tons biomass           | CO₂ uptake; biofilter; edible/fertilizer |
| **Insects (Waste Conversion)**     | Black Soldier Fly Larvae (BSFL)          | Bins fed from sludge/trimmings           | 0.5–1 ton protein feed     | Waste → fish feed; methane reduction |

**Total Annual Output**: 6–18 tons edible seafood + 2–5 tons biomass + feed/insect protein  
**Revenue Range**: $500K–$1.5M/year per pod (premium coastal markets + sequestration credits)

## 3. Salinity Control & Coastal Adaptations

- **Salinity Management**: Automated RO + brine recirculation; sensors monitor 15–35 ppt range; drip irrigation for halophytes from condensate  
- **Airflow & Methane Recapture**: Screened intake tubes with methane scrubbers (anaerobic digester vents); CO₂ enrichment for algae  
- **Heat Harvest**: Waste heat exchangers from biogas → canopy heating → 5–15% energy savings  
- **Water Closure**: 95–99% via AWG, digestate recovery, and halophyte transpiration  

## 4. Integration with Silvopasture & Other Pods

- **Linkage**: Manure slurry from **[livestock pods](livestock.md)** → BSFL → insect protein back to fish  
- **Canopy Synergy**: Transparent tiles over grazing zones → heat/water harvest → drip to halophytes  
- **Bee Hives**: Optional **[beehive pods](beehive.md)** with screened tubes to canopy flowers for pollination  
- **Space Relevance**: Soil beds + salinity tolerance trials → Mars brine ISRU analogs; **[data moat](../../docs/data-moat.md)** refines ECLSS* for extreme environments  

## 5. Sensor Table for Saltwater Pilot Pod

| Sensor Type                        | Applications                                 | Specs                              | Standards Compliance                  | Cost ($/unit) |
|------------------------------------|----------------------------------------------|------------------------------------|---------------------------------------|---------------|
| **Salinity / Conductivity**        | Brine management, species health             | 0–200 mS/cm; ±0.5% accuracy        | IEEE 1451                             | 15–30        |
| **Dissolved Oxygen (DO)**          | Aeration control, fish stress detection      | 0–20 mg/L; ±0.1 mg/L               | OGC SWE                               | 20–40        |
| **pH & Ammonia**                   | Water quality, waste conversion              | pH 0–14; NH₃ 0–100 ppm             | NASA-STD-3001                         | 10–25        |
| **VOC / Methane**                  | Recapture tube monitoring, emissions         | 1–10 ppm sensitivity               | ITU-T Y.4900                          | 25–50        |
| **Multispectral Imaging**          | Algae/kelp health, disease early warning     | 5–20 bands                         | MIL-STD-810                           | 30–60        |
| **Flow & Pressure**                | Drip irrigation, brine recirculation         | 0.1–100 L/min; ±1%                 | ISO/TC 268                            | 12–25        |

## 6. Timeline & Financial Impact

- **Deployment**: Coastal hubs from 2028–2030 (amphibious pilots)  
- **Timeline Effect**: +1–2 years faster coastal revenue vs. freshwater-only; space trials accelerate by 2–3 years  
- **Financial Effect (Mature Pod)**:  
  - CAPEX: $150–300K (amphibious + salinity controls)  
  - Revenue: $500K–$1.5M/year  
  - Net Uplift: +$200–600K/year per pod  
  - Network-wide: +$5–15B/year by 2035 (coastal hubs)  

See also: **[50-Year Roadmap](../../roadmaps/50-year-roadmap.md)** for space feedback integration.

---

This work is licensed under a [Creative Commons Attribution 4.0 International License (CC BY 4.0)](../../LICENSE.md).  

© 2025 Earth-Star Industries
