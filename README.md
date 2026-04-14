# Random Data Generator · Industrial Edition

<!--
  BANNER PLACEHOLDER — Replace with your own hero image.
  Suggested: a full-width screenshot or product render (16:5 aspect ratio).
  Example:  -->
<!-- ![Hero Banner](./docs/assets/hero.png) -->

<p align="center">
  <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=FFD53D" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/License-MIT-6AD37E?style=for-the-badge" alt="MIT License" />
</p>

> ⚠️ **Project Status**: This is a **client-only** version of the Random Data Generator.
> A backend server is planned — see the [Future Scope & Roadmap](#-future-scope--roadmap) section.

---

<div align="center">

**[Live Demo](https://random-data-generator-one.vercel.app/)** · **[Report Bug](https://github.com/NipunKachwaha/random-data-generator/issues)** · **[Request Feature](https://github.com/NipunKachwaha/random-data-generator/issues)**

</div>

---

## 📌 Table of Contents

- [Overview](#overview)
- [Visual Demo](#-visual-demo)
- [System Design & Architecture](#-system-design--architecture)
- [Tech Stack](#-tech-stack)
- [How It Works (Under the Hood)](#-how-it-works-under-the-hood)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Folder Structure](#-folder-structure)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

**Random Data Generator · Industrial Edition** is a sleek, industrial-aesthetic web tool for generating realistic mock data on the fly. Built with React and Tailwind CSS, it lets you select from 24+ data field types across five categories — Person, Location, Tech & IDs, Date & Time, and Text — configure a quantity (1–100 rows), and export the result as a formatted table, JSON, or CSV file.

The app ships with a **fully client-side data engine**, meaning all generation happens in the browser with zero network requests for data. A Node.js/Express backend is planned for server-side generation, multi-format export presets, and API access.

---

## 🎨 Visual Demo

<!--
  SCREENSHOT PLACEHOLDERS — Replace with actual screenshots of the app.
  Suggested names: docs/assets/screenshot-main.png, docs/assets/screenshot-output.png
-->

| Main Interface | Data Output |
|:---:|:---:|
| ![Main Interface](./docs/assets/screenshot-main.png) | ![Data Output](./docs/assets/screenshot-output.png) |
| **Control Panel** | **Table / JSON / CSV Export** |

<!--
  Optional: Add a GIF walkthrough
  ![Walkthrough](./docs/assets/walkthrough.gif)
-->

---

## 🔧 System Design & Architecture

### High-Level Overview

The application follows a straightforward **client-heavy** architecture in its current state. All data generation logic lives in the browser — no API calls are made to fetch mock data.

```text
┌──────────────────────────────────────────────────────────────┐
│                        Client (Browser)                       │
│  ┌──────────────┐   ┌──────────────────┐   ┌─────────────┐   │
│  │  React App   │ → │  Data Generators │ → │  UI Output  │   │
│  │  (App.jsx)   │   │  (generators.js) │   │  (Table/    │   │
│  │              │   │                  │   │   JSON/CSV)  │   │
│  └──────────────┘   └──────────────────┘   └─────────────┘   │
│         ↕                    ↕                                │
│  ┌──────────────────────────────────────────────────────────┐│
│  │              Tailwind CSS · Neumorphic UI                  ││
│  └──────────────────────────────────────────────────────────┘│
└──────────────────────────────────────────────────────────────┘
```

### Architecture Diagram (Current vs. Planned)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#ff4757', 'primaryTextColor': '#fff', 'primaryBorderColor': '#babecc', 'lineColor': '#4a5568', 'secondaryColor': '#38B2AC', 'tertiaryColor': '#f0f2f5' }}}%%
flowchart LR
    subgraph CLIENT["<b>Client</b> — React + Vite + Tailwind"]
        A["App.jsx<br/>(State & UI)"] --> B["generators.js<br/>(Data Logic)"]
        B --> C["Table / JSON / CSV<br/>(Output Renderer)"]
    end

    %% Planned backend path (dashed)
    A -.->|"[Planned REST API]"| D["Express Server<br/>:3001"]

    subgraph PLANNED["<b>Future Backend</b> — Node.js + Express"]
        D --> E["REST API Routes<br/>/api/v1/generate"]
        E --> F[("MongoDB / PostgreSQL<br/>Database")]
    end

    style PLANNED stroke-dasharray: 5 5, opacity: 0.6
    style CLIENT fill:#e0e5ec,stroke:#babecc,stroke-width:2px
```

### Planned Architecture (Full-Stack)

```mermaid
sequenceDiagram
    participant U as User
    participant C as React App
    participant G as Data Generator<br/>(Client)
    participant A as Express API<br/>(Future)
    participant DB as Database

    Note over U,C: Current: Client-side generation
    U->>C: Select fields & quantity
    C->>G: Run generators
    G-->>C: Mock data rows
    C-->>U: Display table/JSON/CSV

    Note over U,DB: Future: Server-side generation via API
    U->>C: Select fields & quantity
    C->>A: POST /api/v1/generate
    A->>DB: Fetch seed data / templates
    DB-->>A: Seed records
    A-->>C: Generated data JSON
    C-->>U: Display results
```

---

## 🛠 Tech Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| ![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&style=flat-square) | 18.3.1 | UI framework |
| ![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&style=flat-square) | 5.4.10 | Build tool & dev server |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css&style=flat-square) | 3.4.14 | Utility-first styling |
| ![Lucide React](https://img.shields.io/badge/Lucide-0.460-FF4757?logo=laravel&style=flat-square) | 0.460.0 | Icon library |

### Backend *(Planned — not yet implemented)*

| Technology | Version | Purpose |
|---|---|---|
| ![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?logo=node.js&style=flat-square) | 20.x | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-5.x-000000?logo=express&style=flat-square) | 5.x | REST API framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&style=flat-square) | — | NoSQL data store (planned) |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&style=flat-square) | — | SQL data store (planned) |

---

## ⚙️ How It Works (Under the Hood)

### Data Generation Flow

```
User Interaction
      │
      ▼
┌─────────────────┐
│  toggleType()   │  ← Chip click → add/remove field from selected Set
│  setQuantity()   │  ← Slider drag → update row count (1–100)
└────────┬────────┘
         │ selected Set + quantity
         ▼
┌─────────────────┐
│  generate()     │  ← Called on button click
│  useCallback    │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│  Array.from({ length: quantity })       │
│       ↓                                 │
│  For each row:                          │
│    For each selected type:               │
│      generators[type.id]() → string     │
│       ↓                                 │
│  setData(rows) → re-render              │
└─────────────────────────────────────────┘
```

### Output Format Logic

| Format | Generator Function | MIME Type |
|---|---|---|
| `table` | Renders `<table>` with sticky header | — (DOM) |
| `json` | `JSON.stringify(data, null, 2)` | `application/json` |
| `csv` | Manual header + quoted-value join | `text/csv` |

### Export Pipeline

```
toJSON() / toCSV()
      │
      ▼
new Blob([content], { type: mime })
      │
      ▼
URL.createObjectURL(blob)
      │
      ▼
<a href={url} download="random-data.{json|csv}"> → click → revokeObjectURL()
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Minimum Version | Install |
|---|---|---|
| **Node.js** | ≥ 18.x | [nodejs.org](https://nodejs.org) |
| **npm** | ≥ 9.x | Comes with Node.js |
| **Git** | Any recent | [git-scm.com](https://git-scm.com) |

> **Backend prerequisites** (future): MongoDB or PostgreSQL instance, connection string in `.env`.

---

### Frontend Setup

```bash
# 1. Navigate to the project root
cd random-data-generator-main

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**.

#### Frontend `.env` Variables *(currently none required — client-side only)*

```env
# No environment variables are required for the frontend in its current state.
# Future variables will include:
VITE_API_BASE_URL=http://localhost:3001/api/v1
```

---

### Backend Setup *(Planned — not yet implemented)*

> ⚠️ **Note**: The `server/` directory does not yet exist. The instructions below describe the planned backend setup.

```bash
# 1. Create the server directory
mkdir -p server

# 2. Initialize the server project
cd server
npm init -y

# 3. Install server dependencies
npm install express cors helmet dotenv mongoose pg

# 4. Create .env file
cat > .env << 'EOF'
PORT=3001
NODE_ENV=development

# MongoDB (choose one)
MONGODB_URI=mongodb://localhost:27017/random_data_gen

# PostgreSQL (choose one)
DATABASE_URL=postgresql://user:password@localhost:5432/random_data_gen
EOF

# 5. Start the server
npm run dev
```

#### Server `.env` Variables

```env
# Server Configuration
PORT=3001                    # Port the Express server listens on
NODE_ENV=development         # development | production

# Database — choose one depending on your setup
MONGODB_URI=mongodb://localhost:27017/random_data_gen
DATABASE_URL=postgresql://user:password@localhost:5432/random_data_gen

# CORS
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Optional: API Rate Limiting
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=900000
```

---

## 📁 Folder Structure

```
random-data-generator-main/
│
├── docs/                        # Documentation assets
│   └── assets/                  # Screenshots, GIFs, diagrams
│       ├── screenshot-main.png   # ← Replace with actual screenshot
│       └── screenshot-output.png # ← Replace with actual screenshot
│
├── src/                         # Frontend source
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Main app component & UI logic
│   ├── index.css                # Global styles, CSS variables, neumorphic design tokens
│   └── utils/
│       └── generators.js         # All data generation functions (the data engine)
│
├── server/                      # Backend source (PLANNED — not yet created)
│   ├── index.js                 # Express app entry point
│   ├── routes/
│   │   └── api/
│   │       └── v1/
│   │           └── generate.js  # Data generation REST endpoints
│   ├── models/                  # Database schemas (Mongoose / Sequelize)
│   ├── controllers/
│   │   └── generateController.js
│   ├── services/
│   │   └── dataService.js       # Shared data generation logic
│   ├── middleware/
│   │   ├── rateLimiter.js
│   │   └── cors.js
│   └── .env                     # Server environment variables
│
├── public/                      # Static assets served as-is
│
├── index.html                   # HTML entry point (Vite)
├── package.json                 # Frontend dependencies & scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS theme & design token extensions
├── postcss.config.js             # PostCSS configuration for Tailwind
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🔌 API Endpoints

> ⚠️ **Note**: These endpoints describe the **planned backend** and are not yet implemented.

### Base URL

```
http://localhost:3001/api/v1
```

### Endpoints

| Method | Endpoint | Description | Request Body | Response |
|---|---|---|---|---|
| `POST` | `/generate` | Generate mock data rows | `{ types: string[], quantity: number, format: "json" \| "csv" }` | `{ data: object[] }` or CSV string |
| `GET` | `/types` | List all available data field types | — | `{ types: DataType[] }` |
| `GET` | `/health` | Server health check | — | `{ status: "ok", timestamp: string }` |

### Example: POST /api/v1/generate

**Request:**

```json
{
  "types": ["name", "email", "phone", "uuid"],
  "quantity": 5,
  "format": "json"
}
```

**Response:**

```json
{
  "success": true,
  "meta": {
    "generatedAt": "2026-04-14T12:00:00.000Z",
    "quantity": 5,
    "fields": ["name", "email", "phone", "uuid"]
  },
  "data": [
    { "name": "Alice Smith", "email": "alice.smith@gmail.com", "phone": "(555) 123-4567", "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890" },
    { "name": "Bob Johnson", "email": "bob.johnson@outlook.com", "phone": "(555) 987-6543", "uuid": "b2c3d4e5-f6a7-8901-bcde-f23456789012" }
  ]
}
```

### Example: GET /api/v1/types

**Response:**

```json
{
  "types": [
    { "id": "name",      "label": "Full Name",   "category": "person"   },
    { "id": "firstName", "label": "First Name",  "category": "person"   },
    { "id": "email",     "label": "Email",       "category": "person"   }
  ],
  "categories": ["person", "location", "tech", "date", "text"]
}
```

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
   ```bash
   git clone https://github.com/NipunKachwaha/random-data-generator.git
   cd random-data-generator
   ```

2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit your Changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```

4. **Push to the Branch**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe your changes clearly
   - Reference any open issues
   - Ensure CI passes (if applicable)

### Coding Standards

- Use **ESLint** with the React/Vite config for linting
- Follow the existing **Tailwind CSS** class ordering conventions
- Add **type definitions** for any new generator functions
- Write **descriptive commit messages** using Conventional Commits

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for more information.

---

## 🔮 Future Scope & Roadmap

| Feature | Status | Description |
|---|---|---|
| Client-side data generation | ✅ **Complete** | All 24+ field types, table/JSON/CSV export |
| Express REST API | 🚧 **Planned** | Server-side generation with `/api/v1/generate` |
| Database-backed seeds | 🚧 **Planned** | MongoDB/PostgreSQL for realistic seed data |
| API rate limiting | 🚧 **Planned** | Helmet + `express-rate-limit` middleware |
| Persistent generation presets | 🚧 **Planned** | Save field configurations to database |
| Multi-language support | 📋 **Backlog** | i18n for localized data (names, addresses) |
| Docker Compose setup | 📋 **Backlog** | Containerized frontend + backend + database |
| CI/CD pipeline | 📋 **Backlog** | GitHub Actions for lint, test, and deploy |

---

<div align="center">

**Built with ❤️ by [Nipun Kachwaha](https://github.com/NipunKachwaha)**

[![GitHub](https://img.shields.io/badge/GitHub-NipunKachwaha-181717?style=flat-square&logo=github)](https://github.com/NipunKachwaha)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nipun-0077B5?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/nipun-/)

</div>
