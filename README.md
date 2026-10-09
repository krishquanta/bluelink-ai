# BlueLink AI: Cross-Domain Water Solutions Platform 💧🌾

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg?logo=tailwindcss)](https://tailwindcss.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-3.8_Flash-8e75ff.svg?logo=google)](https://deepmind.google/technologies/gemini/)

> **A Cross-Domain Engineering Transfer Engine enabling climate-resilient water decisions under El Niño uncertainty in India.**

---

## 📌 Executive Summary

Under El Niño conditions, rainfall variability creates an **"Uncertainty Trap"** across India: farmers panic-drill borewells, dam operators hoard or release water sub-optimally, and municipal utilities face acute drinking water emergencies. 

**BlueLink AI** bridges this divide by abstracting proven water resilience mechanisms from one domain (e.g., Cape Town municipal demand hedging, Singapore industrial closed-loop reclamation, APFAMGS community groundwater monitoring) and translating them into actionable, regulation-compliant blueprints for vulnerable farms, urban clusters, and river basins.

---

## 🌟 Key Features

### 1. Dual-Inference AI Engine
* **Google Gemini Cloud AI (`gemini-3.8-flash` & `gemini-3.5-flash-lite`)**: Performs deep contextual cross-domain reasoning, in-context regulatory audits, and multi-audience deliverable synthesis.
* **Offline Neuro-Symbolic Edge Engine v2.4**: Built entirely in TypeScript, executing 7-D vector cosine homology matching and rule-based compliance audits **100% offline in the browser** with zero API key required.

### 2. 7 Core Mathematical Problem Archetypes
Maps unstructured water challenges to fundamental mathematical archetypes:
1. **Dynamic Hedging & Rationing** (Stochastic Dynamic Programming)
2. **Common-Pool Resource Allocation** (Ostrom Governance & Game Theory)
3. **Cascade Micro-Storage & Buffering** (Distributed Reservoir Routing)
4. **Non-Revenue Loss & Pressure Management** (Hydraulic Leakage Dynamics)
5. **Participatory Aquifer Self-Governance** (Darcy Flow & Social Compacts)
6. **Circular Water Reclaim & Cascading Cascades** (Thermodynamic Quality Stepladders)
7. **Multi-Stage Contingency Early Warning** (Probabilistic Bayesian Thresholds)

### 3. Bounded Empirical Training Corpus (50 Case Studies)
Grounded in **50 empirical hydrological interventions** spanning 5 sectors:
* 🌾 **Agriculture & Irrigation**
* 🏙️ **Municipal & Urban Utilities**
* 🏭 **Industrial & Manufacturing**
* 🚰 **Aquifer & Groundwater Systems**
* 🏞️ **River Basin & Reservoir Governance**

### 4. 5 Statutory Indian Manuals Compliance Audit
Every generated blueprint is programmatically verified against Indian hydrological regulatory frameworks:
* **Manual for Drought Management (2016)** – Ministry of Agriculture & Farmers Welfare
* **District Agriculture Contingency Plans (DACP 2021)** – ICAR-CRIDA
* **FAO Irrigation and Drainage Paper 56 (FAO-56)** – Crop Water Requirements
* **Master Plan for Artificial Recharge (2023)** – Central Ground Water Board (CGWB)
* **Integrated Water Resources Management Guidelines (2019)** – Central Water Commission (CWC)

### 5. Tailored Quadruple-Persona Deliverables
Synthesizes customized outputs for every stakeholder from a single problem:
* 👨‍🌾 **Smallholder Farmer:** 3 simple non-technical field actions, low-cost hacks, and vernacular voice advisories.
* 🏛️ **Government / Water Authority:** Executive SOP workflows, phased trigger matrices, block-level budget estimates, and policy mandates.
* 📐 **Hydraulic Engineer:** Mass-balance differential equations, input telemetry variables, error tolerance, and physical telemetry architecture.
* 🔬 **Researcher / Hydrologist:** Theoretical epistemological grounding, comparative elasticity analysis, 95% confidence intervals, and peer-reviewed citations.

### 6. Vernacular Voice Advisory (5 Languages)
Uses the browser's native **Web Speech API** to deliver spoken field advisories in:
* English
* Hindi (हिंदी)
* Tamil (தமிழ்)
* Kannada (ಕನ್ನಡ)
* Telugu (తెలుగు)

### 7. Evidence Vault (Anti-Hallucination Framework)
A peer-reviewed repository with a **Tiered Credibility Grading Architecture (Level 1 to Level 5)**, supporting 1-click **BibTeX** export and direct links to official DOIs and government publications.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18 (`v18.3.1`) |
| **Language** | TypeScript 5.9 (`v5.9.3`) |
| **Build & Dev Tooling** | Vite 5 (`v5.4.21`) |
| **Styling & Theme** | Tailwind CSS 3.4, PostCSS, Autoprefixer |
| **Data Visualizations** | Recharts 3.10 (powered by D3 / Victory) |
| **Icons & Feedback** | Lucide React, Canvas Confetti |
| **Cloud AI Models** | Google Gemini 3.8 Flash, Gemini 3.5 Flash-Lite (REST API) |
| **Local AI Fallback** | Neuro-Symbolic 7-D Vector Cosine Engine (TypeScript) |
| **Voice & Speech** | Web Speech API (`SpeechSynthesis`) |
| **State Management** | React Context API (`PersonaContext`) + LocalStorage |

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18.0 or higher recommended)
* `npm` (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/<your-username>/bluelink-ai.git
   cd bluelink-ai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **(Optional) Configure Gemini API Key:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Add your Google Gemini API key to `.env`:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(Note: You can also enter/test your API key directly in the web UI under **AI Studio > Model & API Settings**, or run completely offline with the built-in Local Edge Engine without any key).*

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── common/               # AudioTranscriptBanner, FloatingAIButton, PersonaBanner
│   │   ├── layout/               # Navbar, Footer
│   │   └── views/                # Screen views:
│   │       ├── HomeView.tsx
│   │       ├── AIEngineStudioView.tsx   # Interactive AI testbench & model selector
│   │       ├── ProblemExplorerView.tsx  # 7 Problem Signatures explorer
│   │       ├── SolutionTransferView.tsx # Deep-dive cross-domain transfer analyzer
│   │       ├── CaseStudyHubView.tsx     # 50-Case empirical catalog
│   │       ├── DroughtDashboardView.tsx # Hydro-informatics & reservoir charts
│   │       ├── EvidenceVaultView.tsx    # Peer-reviewed papers & BibTeX citations
│   │       ├── ContributeView.tsx       # Community case submission portal
│   │       └── AboutMethodologyView.tsx # 7-step mathematical transfer framework
│   ├── context/
│   │   └── PersonaContext.tsx    # Global persona, language & audio speech state
│   ├── data/
│   │   ├── caseStudies.ts        # Detailed cross-sector case studies
│   │   ├── droughtData.ts        # Indian regional drought & reservoir time-series
│   │   ├── evidenceSources.ts    # Scientific literature records (Levels 1–5)
│   │   ├── patterns.ts           # 7 Mathematical Archetype definitions
│   │   ├── trainingCorpus.ts     # 50 Bounded Training Cases & 5 Statutory Manuals
│   │   ├── transfers.ts          # Cross-domain blueprint mappings
│   │   └── translations.ts       # Multilingual dictionaries (EN, HI, TA, KN, TE)
│   ├── services/
│   │   ├── aiEngine.ts           # 7-D Vector Cosine & Neuro-Symbolic Engine
│   │   └── geminiService.ts      # Google Gemini REST API client & validation
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces and domain models
│   ├── App.tsx                   # Main application router
│   ├── index.css                 # Global styles & Tailwind directives
│   └── main.tsx                  # React DOM entry point
├── .env.example                  # Template for environment variables
├── .gitignore                    # Git ignore file for node_modules, build & env files
├── package.json                  # Dependencies and build scripts
├── tailwind.config.js            # Hydrology theme extensions
├── tsconfig.json                 # TypeScript compiler options
└── vite.config.ts                # Vite bundler configuration
```

---

## 📜 Regulatory Grounding & Indian Standards

All generated blueprints adhere strictly to the following official Indian standards:
* **Manual for Drought Management (2016)** – Enforcing priority drinking water ladders under the Disaster Management Act 2005.
* **ICAR-CRIDA DACP Guidelines (2021)** – Zero deficit throttling during critical anthesis (flowering) phases.
* **FAO-56 Irrigation Standard** – Soil moisture depletion fraction ($p < 0.65$) protection.
* **CGWB Master Plan (2023)** – Positive hydraulic barrier maintenance (+1.5m) preventing coastal salinity ingress.
* **CWC IWRM Guidelines (2019)** – Stepped hedging bands to prevent catastrophic dead-storage collapse.

---

## 📄 License
This project is licensed under the [MIT License](LICENSE).
