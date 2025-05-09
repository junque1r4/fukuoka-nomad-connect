# Fukuoka Nomad Connect

A digital ecosystem platform for nomads in Fukuoka, Japan, built on Next.js and Solana blockchain.

![Fukuoka Nomad Connect](public/assets/fuku_coin_logo.png)

## 🌟 Overview

Fukuoka Nomad Connect is a web3 platform that bridges digital nomads and locals in Fukuoka through three core features:

- **Local Value Network**: A local cryptocurrency system for the Fukuoka nomad community
- **Skills Hub**: Exchange platform for sharing knowledge and services
- **Community Fund**: Collective funding for community initiatives and projects

The platform is built on Solana for fast, low-cost transactions.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.3, React 19, TypeScript
- **Styling**: Tailwind CSS 4 with custom design system
- **Blockchain**: Solana with Wallet Adapter integration
- **Smart Contracts**: Anchor framework
- **Authentication**: NFT-based Nomad Welcome Pass

## 🚀 Getting Started

### Prerequisites

- Node.js 20.x or later
- NPM 10.x or later
- Solana CLI tools (for blockchain interaction)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-org/fukuoka-nomad-connect.git
   cd fukuoka-nomad-connect
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser

## 📋 Features

### Local Value Network
A community currency system where nomads and locals can exchange services, goods, and support the local economy.

### Skills Hub
A platform for talent exchange, mentorship, and knowledge sharing between digital nomads and local residents.

### Community Fund
A collective treasury for funding local initiatives, events, and projects that benefit the community.

### Nomad Welcome Pass NFT
NFT-based access pass that serves as identity verification and platform access token.

## 🚢 Deployment

1. Build the production-ready application:
   ```bash
   npm run build
   ```

2. Run the deployment script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

3. Configure your preferred deployment option in `deploy.sh`:
   - Vercel (recommended for Next.js)
   - Netlify
   - AWS Amplify
   - Standard Node.js server

## 🧪 Testing

```bash
# Run unit and integration tests
npm test

# Run end-to-end tests
npm run test:e2e
```

## 🙏 Acknowledgements

- Fukuoka City for supporting digital nomad initiatives
- Solana Foundation for blockchain infrastructure
- Superteam Japan for hosting the sidetrack
