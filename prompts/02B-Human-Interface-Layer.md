---
layout: default
title: Genesis Network – Prompt 02B – Dense Sensor Net & Basic Human Interface Layer (HIL)
description: Specification for the minimal viable Human Interface Layer using RTK GNSS tiles, public WiFi tiles, and basic Communicator Badge for positioning, connectivity, and early adoption (replaces original HIL, badge, RTK, WiFi, and related prompts) (February 2026 baseline).
license: Creative Commons Attribution 4.0 International (CC BY 4.0)
---

# Prompt 02B – Dense Sensor Net & Basic Human Interface Layer (HIL)  
**February 2026 Baseline – Pruned & Execution-Focused**

**© 2025–2026 EarthStar Technologies** – Licensed under CC BY 4.0  
https://creativecommons.org/licenses/by/4.0/

## 1. Objective & Scope

Provide the **minimum viable interface** between people and the Genesis Network infrastructure through three tightly integrated components:

- **RTK GNSS Tiles** — centimeter-accurate spatial truth grid  
- **Public WiFi Tiles** — free, trusted rural/urban connectivity  
- **Basic Communicator Badge** — personal voice + biosensing + positioning node  

This **Basic HIL v1** focuses on:

- Early adoption flywheel (rural internet + positioning perks for affiliates)  
- Compliance & precision data (brownfield/landfill remediation tracking, ag optimization)  
- Privacy-first positioning and communication  
- Self-funding via connectivity fees, data services, and affiliate uptake  

**Deferred to v2 (2032+)**: smart display walls, full payments, clothing clones, advanced document wallet.

This prompt **replaces** the following original prompts (or major parts thereof):

- Prompt 02I (full Human Interface Layer)  
- Prompt 02E (Communicator Badge full spec)  
- Parts of Prompt 02B (RTK GNSS / networking tiles)  
- Parts of Prompt 02G (dense sensor net elements)  
- Scattered RTK/WiFi references in city planning, resilience, off-world, etc.

## 2. Component Specifications

### 2.1 RTK GNSS Tiles (Spatial Truth Backbone)

**Purpose**: Deliver sovereign, always-on, cm-level positioning across hubs, farms, brownfields, and community complexes.

**Physical Specs**  
- Size: 600 × 600 mm (standard tile form factor)  
- Thickness: 20–35 mm  
- Material: Toughened ceramic composite with embedded antenna  
- Power: BIPV edge + piezo (self-powered)  

**Performance**  
- Accuracy: 1–3 cm (in-network), 5–20 cm (PPP-RTK global fallback)  
- Multi-constellation: GPS, Galileo, GLONASS, BeiDou (L1/L5)  
- Correction broadcast: Tile mesh primary, public WiFi secondary, cellular tertiary  

**Functions**  
- Anchor for badge positioning  
- Precision agriculture (machinery guidance, yield mapping)  
- Remediation compliance (landfill/brownfield monitoring)  
- Emergency responder location  
- Construction layout & robotics  

**Cost & Revenue**  
- Production cost: $38–85/m²  
- Selling price: $250–450/m² (affiliate/infrastructure)  
- Revenue model: Embedded in all hubs; external sales to precision ag/construction

### 2.2 Public WiFi Tiles (Universal Connectivity Layer)

**Purpose**: Provide free, trusted rural/urban internet while serving as adoption vector.

**Physical Specs**  
- Size: 300 × 300 mm snap-in tile  
- WiFi: 6/6E (100–500 Mbps aggregate per cluster)  
- Power: BIPV + piezo (zero-grid)  
- Backhaul: Fiber where available; tile mesh relay otherwise  

**Access Model**  
- Free in TerraWell centers, hubs, affiliate farms  
- Priority QoS for badge holders  
- Captive portal for non-members (time/session limits)  

**Security**  
- WPA3-Enterprise  
- Isolated guest network  
- No MAC/ad-tech tracking  

**Cost & Revenue**  
- Production cost: $40–90/unit  
- Selling price: $150–350/unit  
- Revenue model: Connectivity fees (affiliates), data services, premium roaming

### 2.3 Basic Communicator Badge v1 (Personal Node)

**Purpose**: Simple, privacy-first personal interface for positioning, voice, and basic biosensing.

**Physical Specs**  
- Size: 40–55 mm diameter × 10–14 mm thick; 22–38 g  
- Shell: Matte ceramic (waste-derived)  
- Power: Piezo + micro-BIPV + 80–150 mAh solid-state battery (7–14 days standby)  

**Core Capabilities**  
- Voice activation (“Genesis” / “Terra” wake word)  
- On-device small LLM (quantized, basic queries)  
- Biosensing: HR/HRV (PPG), motion/fall (IMU)  
- RTK GNSS positioning (tile mesh primary)  
- Bone-conduction audio + haptic feedback  
- Basic digital identity presentation (pseudonymous capability tokens)  

**Networking**  
1. Tile mesh (mmWave/inductive, ultra-low power)  
2. Public WiFi tiles  
3. Cellular fallback  

**Privacy**  
- No continuous tracking  
- Raw biosensor/location data local-only  
- Presence shared as ephemeral tokens only  

**Cost & Revenue**  
- Production cost: $28–68/unit  
- Retail price: $89–149 (Core v1)  
- Revenue model: Affiliate/resident adoption, premium upgrades (future wallet/payments)

## 3. Integrated Basic HIL Flow

1. RTK tiles broadcast corrections → badge locks to cm-level position  
2. Badge connects via tile mesh or WiFi tile → low-power, sovereign link  
3. User speaks wake word → badge responds locally (basic queries)  
4. Presence detected anonymously by nearby smart airlocks/walls (if present)  
5. Data (position, vitals) stays on-device unless user consents to share  

## 4. Deployment & Revenue Strategy

**Rollout Sequence**  
1. RTK GNSS tiles embedded in all hubs/roads (spatial grid)  
2. Public WiFi tiles snapped into high-traffic areas (connectivity)  
3. Basic badges distributed to affiliates/residents (human adoption)  

**Early Revenue**  
- Affiliate perk: Free badges + WiFi → faster onboarding  
- Data services: Remediation compliance, precision ag mapping ($50–200M/year early)  
- Connectivity fees: Premium roaming for non-residents ($20–100M/year)  

**Network-Wide Potential (2035)**  
- 400–1,000 hubs + 8,000–25,000 affiliates  
- Annual HIL revenue: $100–400M (early) → $1–4B (mature)  

## 5. Viability & Strategic Notes

This **Basic HIL v1** is deliberately minimal: it delivers the **highest early value** (positioning + connectivity + trust) with the **lowest complexity**. It creates immediate affiliate/resident perks (rural internet, precise ag tools), generates compliance/data revenue, and sets the foundation for future HIL v2 (walls, payments, advanced identity). By pruning advanced features, we reduce execution risk and accelerate adoption — critical for self-funding momentum.

Ready for Phase 1–2 deployment.

**CC-BY-4.0**  
Share & adapt freely with attribution to “Genesis Network concept – EarthStar Technologies” + source link.
