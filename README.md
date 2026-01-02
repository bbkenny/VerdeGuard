# VerdeGuard 🌱🛡️

**Decentralized Crop Insurance Platform for Latin American Farmers**

**Vision:** Revolutionizing agricultural insurance through AI-powered damage assessment and blockchain-based instant payouts.

---

## About VerdeGuard

VerdeGuard is a decentralized platform designed to provide accessible, transparent, and instant crop insurance for Latin American farmers. By combining satellite monitoring, AI-powered damage assessment, and blockchain technology, VerdeGuard eliminates traditional barriers like credit history requirements, high premiums, and delayed claim processing.

This repository contains the complete VerdeGuard platform, including the frontend application and smart contract infrastructure for automated insurance policy management and instant payouts.

## Key Features

- **🛰️ Satellite Monitoring** - Real-time crop health assessment using satellite imagery
- **🤖 AI-Powered Claims** - Automated damage detection and quantification
- **⚡ Instant Payouts** - Blockchain-based smart contracts for immediate compensation
- **🌍 Accessibility** - No credit history or collateral requirements
- **💚 Transparency** - All transactions and claims visible on-chain
- **📱 User-Friendly** - Simple dashboard for farmers to manage policies

## Repository Structure

This repository is organized into two main parts:
- `/frontend/`: Next.js application for farmer dashboard and insurance management
- `/smart-contract/`: Hardhat project for insurance policy smart contracts

For detailed instructions on running the frontend, please refer to the [Frontend README](./frontend/README.md).
For details on the smart contracts, please refer to the [Smart Contract README](./smart-contract/README.md).

## Tech Stack

- **Blockchain:** Base Sepolia Testnet
- **Frontend:** Next.js 15 (TypeScript, Tailwind CSS)
- **Web3 Library:** Wagmi v2 + Viem
- **Wallet Integration:** MetaMask / WalletConnect
- **Smart Contracts:** Solidity (ERC-20 based insurance tokens)
- **UI Components:** shadcn/ui

## Quick Start

### Prerequisites
- Node.js 18+
- MetaMask or compatible Web3 wallet
- Base Sepolia testnet ETH

### Installation

```bash
# Clone the repository
git clone https://github.com/bbkenny/VerdeGuard.git
cd VerdeGuard

# Install dependencies
npm install

# Start frontend
cd frontend
npm run dev

# Deploy smart contracts (in separate terminal)
cd smart-contract
npm install
npx hardhat compile
```

## How It Works

1. **Purchase Policy** - Farmers select crop type and coverage amount
2. **Satellite Monitoring** - Automated crop health tracking via satellite
3. **Damage Detection** - AI analyzes imagery for crop damage
4. **Instant Payout** - Smart contract automatically processes claims and transfers funds

## Contributing

We welcome contributions! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - See LICENSE file for details

## Contact

**Project Lead:** Babalola Taiwo J  
**Email:** t.babalolajoseph@gmail.com

---

**VerdeGuard** - Protecting Farmers, Securing Futures 🌱🛡️




