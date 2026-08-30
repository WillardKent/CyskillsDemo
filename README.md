# CySKILLS-AI — Higher Education & Labour Market Intelligence Platform

**CySKILLS-AI** is a comprehensive, multi-role intelligence and decision-support web platform designed for Cyprus higher education institutions (HEIs), students/graduates, and national policymakers (Ministry of Education, Sport and Youth - MESY).

Built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **TanStack Query & Table**, this frontend application delivers rich dashboards, curriculum alignment forecasts, ESCO skill gap analyses, career guidance, and AI-driven recommendations across all modern devices (mobile, tablet, laptop, and desktop).

---

## 🌟 Key Features by Edition

### 🏛️ 1. Government Edition (MESY)
* **National Dashboard**: Aggregated overview of national programme coverage, student counts, employment rates, and supply-demand alignment across Cyprus HEIs.
* **Programme & Domain Analysis**: Deep-dive into supply vs. demand by ISCED field and faculty.
* **ESCO Skill Review**: Interactive European Skills, Competences, Qualifications and Occupations taxonomy alignment matrix.
* **Regional & District Comparison**: Labour market demand and vacancy metrics by Cyprus districts (Nicosia, Limassol, Larnaca, Paphos, Famagusta).
* **Official Policy Indicators & Targets**: Track progress toward EU Skills Agenda 2030, EU Digital Decade, and Cyprus 2035 Strategy with live target calculators.
* **Reporting Centre**: Generate, preview, schedule, and export institutional and national reports.

### 🎓 2. Graduate Edition
* **Graduate Dashboard**: Real-time career readiness score, skill radar, high-priority learning paths, and recommended opportunities.
* **Career Paths**: Multi-year career progression roadmap with skill milestones, salary benchmarks, and demand insights.
* **Skill Improvement**: High-impact skill gap analysis with direct course recommendations (Coursera, Khan Academy, Microsoft Learn).
* **Job Opportunities & Saved Jobs**: Curated job listings matched against graduate skill profile with detailed job descriptions and application workflows.
* **AI Career Assistant**: Conversational AI for interview preparation, CV reviews, and 6-month career path forecasting.

### 🏫 3. HEI Edition (Universities & Academies)
* **Curriculum–Market Alignment**: Multi-year forecast and alignment scoring for undergraduate and postgraduate degrees.
* **Skills Mismatch Map**: Real-time identification of course gaps, emerging skills, and oversupplied competencies.
* **Curriculum Action & Planner**: AI-powered recommendations for course additions, removals, restructuring, and ECTS allocations.
* **Graduate Employability Tracker**: Employment outcome metrics and tracer studies by study program.
* **HEI AI Assistant**: Specialized AI advising for accreditation, course restructuring, and labour market alignment.

---

## 🛠️ Tech Stack & Architecture

* **UI Framework**: React 19.2 (Functional Components & Hooks)
* **Language**: TypeScript 6 (Strict compiler mode with `noUnusedLocals` and `noUnusedParameters`)
* **Styling**: Tailwind CSS v4.3 with `@theme` token configuration and custom gradients
* **Icons**: [Lucide React](https://lucide.dev/)
* **Data Visualization**: Custom SVG Trend Charts, Progress Rings, and Multi-Series Line Graphs
* **Table Engine**: [@tanstack/react-table](https://tanstack.com/table) v8 with pagination, multi-column search, and sortable headers
* **State & Query Management**: [@tanstack/react-query](https://tanstack.com/query) v5 for async server cache and session persistence
* **Build System**: [Vite](https://vitejs.dev/) 8.2 + Rolldown / SWC

---

## 📁 Directory Structure

```
src/
├── assets/             # Brand logos, avatars, icons, and flags
├── auth/               # AuthProvider, useAuth hook, mock user database
├── components/         # Modals, Header, Sidenav, IndicatorDetail
├── config/             # Navigation config, role menus, route definitions
├── context/            # SidebarContext, ToastContext
├── data/               # Centralized domain mock datasets (MESY, Graduate, HEI, AI)
├── elements/           # Reusable UI elements (Buttons, Cards, Modals, Tables, Charts)
│   └── ai/             # AI Chat Assistant widgets (ChatMessage, ChatInput, RecentChats)
├── pages/              # 60+ Role-based application views
│   ├── graduate/       # Graduate Edition pages
│   ├── hei/            # HEI Edition pages & tab subviews
│   └── mesy/           # MESY Government Edition pages & tab subviews
├── services/           # Decoupled API service layer and HTTP client
├── types/              # Unified TypeScript interfaces & domain models
├── App.tsx             # Root role-based page router & layout wrapper
└── main.tsx            # Application entrypoint with providers
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **npm** or **yarn** / **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/ShadowLicht/CyskillsDemo.git
cd CyskillsDemo

# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be accessible at `http://localhost:5173`.

### Production Build & Type Checking

```bash
# Run strict TypeScript check and Vite production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔐 Mock Credentials (Demo Login)

Use the following pre-configured credentials to test all 3 role perspectives:

| Role | Email | Password | Access Level |
| :--- | :--- | :--- | :--- |
| **MESY (Government)** | `mesy@gov.cy` | `password` | National Policy & Higher Education Overview |
| **Graduate / Student** | `andreas@ucy.ac.cy` | `password` | Career Guidance & Skill Intelligence |
| **HEI (University)** | `admin@ucy.ac.cy` | `password` | Curriculum Alignment & Accreditation Metrics |

---

## 📱 Responsive Design Highlights

* **Mobile Drawer Navigation**: Slide-out `Sidenav` drawer with backdrop on `< lg` screens and hamburger toggle in `Header`.
* **Adaptive Grid Layouts**: 1-column on mobile, 2-column on tablet, and 3-to-4-column on desktop.
* **Overflow-Safe Visualizations**: Horizontal scrolling container for SVG charts and complex data tables on narrow viewports.
* **Touch-Friendly Modals**: Constrained max-widths (`w-full max-w-lg md:max-w-2xl`) and vertical auto-scrolling.

---

## 📄 License & Intellectual Property

Proprietary — Ministry of Education, Sport and Youth (MESY) & CySKILLS-AI Consortium.
