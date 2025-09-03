# 🔗 IBC Explorer
**IBC Network Explorer** - A blockchain explorer for exploring cross-chain ecosystems.

## 🛠️ Tech Stack

- **Frontend Framework**: Vue 3 + TypeScript
- **Build Tool**: Vite 
- **UI Library**: Ant Design Vue
- **CSS Framework**: Tailwind CSS + Less
- **State Management**: Pinia
- **Charts Library**: ECharts
- **Utilities**: Lodash, Day.js, BigNumber.js
- **Code Standards**: ESLint + Prettier + Husky

## 📁 Project Structure

```
├── Dockerfile                # Docker deployment configuration
├── index.html                # HTML entry file
├── package.json              # Project dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── public/                   # Static assets
└── src/
    ├── api/                  # API interface definitions
    ├── assets/               # Static asset files
    ├── components/           # Reusable components
    ├── composables/          # Vue 3 composable functions
    ├── constants/            # Constants definitions
    ├── directive/            # Custom directives
    ├── helper/               # Helper functions
    ├── layout/               # Layout components
    ├── router/               # Router configuration
    ├── store/                # Pinia state management
    ├── theme/                # Global styles
    ├── types/                # TypeScript type definitions
    ├── utils/                # Utility functions
    ├── views/                # Page components
    └── main.ts               # Application entry file
```

## ⚙️ Environment Configuration

Create environment variable files and configure necessary parameters:

### `.env.development` (Development Environment)
```bash
# Environment identifier
MODE = 'development'

# Backend API endpoint
VITE_BASE_GO_API = 'https://your-dev-api-endpoint.com'
```

### `.env.production` (Production Environment)  
```bash
# Environment identifier
MODE = 'production'

# Backend API endpoint
VITE_BASE_GO_API = 'https://your-prod-api-endpoint.com'
```

## 🚀 Quick Start

### Development Environment

1. **Install Dependencies**
   ```bash
   pnpm install --frozen-lockfile 
   ```

2. **Configure Environment Variables**
   ```bash
   # Copy and modify environment variable file
   cp .env.example .env.development
   # Edit .env.development to fill in actual API address
   ```

3. **Start Development Server**
   ```bash
   pnpm dev
   ```
   
   > Development server will start at http://localhost:3000

### Production Environment

1. **Install Dependencies**
   ```bash
   pnpm install --frozen-lockfile
   ```

2. **Build Project**
   ```bash
   pnpm build:prod
   ```

3. **Preview Build Result**
   ```bash
   pnpm preview
   ```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm prod` - Start production environment
- `pnpm build:dev` - Build development version
- `pnpm build:prod` - Build production version
- `pnpm preview` - Preview build result
- `pnpm eslint` - Run ESLint check
- `pnpm prettier` - Format code

## 🐳 Docker Deployment

### Build Docker Image

```bash
# Build production environment image
docker build . -t ibc-explorer:prod --build-arg 'ENVIRONMENT=prod'

# Build development environment image  
docker build . -t ibc-explorer:dev --build-arg 'ENVIRONMENT=dev'
```

### Run Container

```bash
# Run production environment container
docker run -d -p 80:80 --name ibc-explorer ibc-explorer:prod

# Run development environment container
docker run -d -p 8080:80 --name ibc-explorer-dev ibc-explorer:dev
```

## 🔧 Development Standards

### Code Commit Standards

The project uses `commitizen` and `husky` to ensure code quality:

```bash
# Use standardized commits
pnpm commit

# Or use git cz (requires global installation of commitizen)
git cz
```

### Code Formatting

The following will run automatically before commits:
- ESLint check and fix
- Prettier code formatting
- TypeScript type checking

## 📊 Main Pages

- **Home** (`/home`) - Display IBC ecosystem statistics overview, including chain information and latest transfers
- **Transfer List** (`/transfers`) - Browse and search IBC cross-chain transfer records
- **Transfer Details** (`/transfers/details`) - Detailed transfer information and status tracking
- **Token List** (`/tokens`) - IBC token overview and filtering
- **Token Details** (`/tokens/details`) - Detailed information and cross-chain data for specific tokens
- **Blockchain Networks** (`/chains`) - List of supported IBC blockchain networks
- **Channel Monitoring** (`/channels`) - IBC channel connection status monitoring
- **Relayer List** (`/relayers`) - Relayer running status overview
- **Relayer Details** (`/relayers/details/:relayerId`) - Detailed relayer information and performance data
- **Address Query** (`/address/:address`) - Query address token balances and transaction history
- **Search Results** (`/searchResult/:result`) - Global search results display
- **Data Analysis** (`/overview`) - Contains the following sub-pages:
  - **Market Heatmap** (`/overview/heatmap`) - IBC token market heatmap
  - **Volume Analysis** (`/overview/volume`) - Cross-chain transaction volume trends
  - **Token Distribution** (`/overview/distribution`) - Token distribution across chains

## 📝 License

This project is licensed under the Apache License 2.0 — see the [LICENSE](LICENSE) file for details.
