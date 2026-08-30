# CySKILLS-AI — Component Library Reference

This document catalogs the primary reusable UI elements, layout components, and modals available across the CySKILLS-AI frontend.

---

## 1. Layout & Shell Components

### `Header` (`src/components/Header.tsx`)
Top navigation bar featuring search, notification bells, language dropdown, and a responsive mobile hamburger toggle.
* **Breakpoints**: Displays hamburger button on `< lg` viewports (`lg:hidden`).
* **Integration**: Consumes `useSidebar` from `src/context/SidebarContext`.

### `Sidenav` (`src/components/Sidenav.tsx`)
Role-based navigation sidebar with expandable submenus, profile status pill, active indicator bars, and logout trigger.
* **Props**:
  * `currentPage: Page` — Active page identifier.
  * `onNavigate: (page: Page) => void` — Page navigation handler.
* **Responsiveness**: Renders as an overlay drawer with backdrop on `< lg`, and as a static `w-64` column on `>= lg`.

---

## 2. Reusable UI Primitives (`src/elements/`)

### `Button` (`src/elements/Button.tsx`)
Core action button with color variants and loading states.
* **Variants**: `blue`, `white`, `red`, `outline`, `ghost`
* **Props**: `text`, `variant`, `icon`, `onClick`, `disabled`, `className`

### `DataTable` (`src/elements/DataTable.tsx`)
Enterprise-grade data table engine powered by TanStack Table v8.
* **Features**:
  * Global text filter and column-level select filters
  * Column sorting (asc/desc)
  * Custom cell renderers (`flexRender`)
  * Pagination controls with ellipsis and page size selectors
  * Horizontal overflow scrolling (`overflow-x-auto`) for mobile safety
* **Props**: `data`, `columns`, `filters`, `isMinimal`, `searchPlaceholder`

### `Modal` (`src/elements/Modal.tsx`)
Accessible dialog wrapper with backdrop blur, customizable header/footer, and auto-scrolling content body.
* **Props**: `isOpen`, `onClose`, `title`, `description`, `icon`, `children`, `footer`, `maxWidth`
* **Default maxWidth**: `w-full max-w-lg md:max-w-2xl`

### `Tag` & `DottedTag` (`src/elements/Tag.tsx`, `src/elements/DottedTag.tsx`)
Status pills and category badges.
* **Variants**: `default`, `info`, `success`, `warning`, `danger`
* **Sizes**: `sm`, `md`, `lg`

### `Indicator` (`src/elements/Indicator.tsx`)
Signal badges with color-coded dot icons for labour market demand classifications.

---

## 3. Data Visualization Elements

### `CurriculumTrendChart` (`src/elements/CurriculumTrendChart.tsx`)
Interactive SVG line chart visualizing historical alignment, forecasts, and confidence intervals across study programs.
* **Features**: Dynamic projection curves, year dividers, custom tooltips, program selector buttons.
* **Props**: `data: AlignmentData[]`, `defaultActive?: string`, `onViewAll?: () => void`

### `TrendChart` (`src/elements/TrendChart.tsx`)
Multi-series line visualizer for national supply, demand, and graduate salary trends.

### `TrendBar` & `BarChart` (`src/elements/TrendBar.tsx`, `src/elements/BarChart.tsx`)
Segmented horizontal and vertical bar charts for salary comparisons and skill distributions.

### `ProgressCard` (`src/elements/ProgressCard.tsx`)
Card displaying a list of gradient progress meters.

---

## 4. Cards & Information Banners

### `HeaderBanner` (`src/elements/HeaderBanner.tsx`)
Standard page banner rendering breadcrumbs, page title, subtitle description, and optional action buttons.

### `StatCard` (`src/elements/StatCard.tsx`)
Key Performance Indicator (KPI) card displaying title, metric value, trend delta, and contextual subtitle.

### `SkillCard` (`src/elements/SkillCard.tsx`)
Skill gap indicator comparing user proficiency against current market demand.

### `JobCard` (`src/elements/JobCard.tsx`)
Job opportunity card with company logo, title, match tag, salary, and responsibilities.

### `CareerCard` (`src/elements/CareerCard.tsx`)
Comprehensive career path card displaying 5-year milestone progression and skill prerequisites.

---

## 5. AI Assistant Components (`src/elements/ai/`)

### `AiAssistant` (`src/elements/ai/AiAssistant.tsx`)
Complete interactive chat interface with message stream, typing indicators, auto-resizing text input, and recent conversation history drawer.
* **Props**: `assistantName`, `initialMessages`, `recentChats`, `onSendMessage`

---

## 6. Modals Catalog (`src/components/`)

| Modal Name | File Path | Usage & Purpose |
| :--- | :--- | :--- |
| `EditProfileModal` | `src/components/EditProfileModal.tsx` | Polymorphic editor for MESY, Graduate, and HEI user profiles |
| `GenerateCurriculumModal` | `src/components/GenerateCurriculumModal.tsx` | Initiate AI curriculum restructuring suggestions |
| `CurriculumActionModal` | `src/components/CurriculumActionModal.tsx` | Accept, reject, or modify specific curriculum recommendations |
| `GenerateReportModal` | `src/components/GenerateReportModal.tsx` | Select report parameters, format, and generate documents |
| `ReportPreviewModal` | `src/components/ReportPreviewModal.tsx` | PDF view & download preview |
| `ReportTemplateModal` | `src/components/ReportTemplateModal.tsx` | Configure recurring report schedules |
| `PolicyTargetModal` | `src/components/PolicyTargetModal.tsx` | Add national policy indicators and goals |
| `InviteMinistryUserModal` | `src/components/InviteMinistryUserModal.tsx`| Send system invitations with role-based access rights |
| `EditMinistryUserModal` | `src/components/EditMinistryUserModal.tsx` | Update ministry user permissions |
| `DeleteMinistryUserModal` | `src/components/DeleteMinistryUserModal.tsx` | Delete user confirmation dialog |

