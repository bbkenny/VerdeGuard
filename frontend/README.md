# VerdeGuard Frontend - Decentralized Crop Insurance Platform

A modern Next.js application for VerdeGuard, enabling Latin American farmers to access AI-powered, blockchain-based crop insurance with instant payouts on Base Sepolia.

## 🚀 Features

### Core Functionality
- **Crop Insurance Dashboard**: Manage insurance policies and view coverage details
- **AI-Powered Claims**: Automated damage assessment using satellite imagery
- **Instant Payouts**: Blockchain-based smart contracts for immediate compensation
- **Multi-wallet Support**: Connect with MetaMask, WalletConnect, and other Web3 wallets
- **Network Integration**: Optimized for Base Sepolia testnet

### User Experience
- **Fixed Header Navigation**: Always accessible wallet connection and navigation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional UI**: Clean, modern interface with VerdeGuard brand colors
- **Transaction Feedback**: Real-time status updates and success confirmations
- **Farmer Dashboard**: Comprehensive insurance management interface

## 🎨 Design System

### Color Palette
- **Primary Green**: `#10b981` - Growth, sustainability, agriculture
- **Dark Green**: `#059669` - Stability, trust, nature
- **Accent Orange**: `#f97316` - Energy, innovation, warmth
- **Neutral White**: `#FFFFFF` - Clean, minimal backgrounds

### Typography
- **Headings**: Bold, green text for hierarchy
- **Body Text**: Clean, readable gray text
- **Interactive Elements**: Clear hover states and transitions

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3 Integration**: Wagmi v2 + Viem
- **Icons**: Lucide React
- **State Management**: React hooks
- **UI Components**: shadcn/ui

### Project Structure
```
frontend/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── user-dash/         # Farmer dashboard and insurance interface
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header/           # Navigation and wallet connection
│   ├── Footer/           # Site footer
│   └── ui/               # shadcn/ui components
├── constants/            # Contract ABIs and helpers
├── hooks/               # Custom React hooks
├── public/              # Static assets
└── config.ts            # Wagmi configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Base Sepolia testnet wallet (MetaMask, WalletConnect, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-babs/VerdeGuard.git
   cd VerdeGuard/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔗 Smart Contract Integration

### Contract Details
- **Network**: Base Sepolia Testnet (Chain ID: 84532)
- **Contract**: VerdeGuard Insurance (Future deployment)
- **Address**: `0x0000000000000000000000000000000000000000` (Placeholder)
- **Explorer**: [Base Sepolia Explorer](https://sepolia.basescan.org)

### Key Functions (Planned)
- `purchasePolicy(farmer, crop, coverage)`: Buy insurance policy
- `fileClaim(farmer, policyId, damageData)`: Submit damage claim
- `processPayout(claimId)`: Automated payout processing
- `getPolicyDetails(policyId)`: Retrieve policy information

## 🌾 How to Use

### For Farmers
1. **Connect Wallet**: Use the header to connect your Web3 wallet
2. **Switch Network**: Ensure you're on Base Sepolia testnet
3. **Access Dashboard**: Click "Dashboard" to manage insurance policies
4. **Purchase Insurance**: Select crop type and coverage amount
5. **File Claims**: Submit damage reports for automated processing

### For Insurance Providers
1. **Deploy Contracts**: Smart contracts for policy management
2. **Monitor Claims**: AI-powered damage assessment
3. **Process Payouts**: Automated compensation distribution

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_PROJECT_ID=your_walletconnect_project_id
NEXT_PUBLIC_CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
NEXT_PUBLIC_CHAIN_ID=84532
NEXT_PUBLIC_RPC_URL=https://sepolia.base.org
```

### Network Configuration
The app is configured for Base Sepolia testnet by default. To switch networks:
1. Use the network switcher in the header
2. Add Base Sepolia testnet to your wallet manually
3. Ensure you have testnet ETH for gas fees

## 🧪 Testing

### Testnet Tokens
- **ETH**: For gas fees (get from [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-sepolia-faucet))
- **Insurance Tokens**: For policy purchases (contact project team for test tokens)

### Testing Flow
1. Deploy the smart contracts to Base Sepolia testnet
2. Test insurance policy purchases
3. Simulate crop damage scenarios
4. Verify automated claim processing and payouts

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the VerdeGuard platform. See the main repository for licensing information.

## 🆘 Support

- **Documentation**: Check the main project README
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join project discussions for questions

## 🌱 VerdeGuard Vision

VerdeGuard is revolutionizing crop insurance for Latin American farmers by combining:
- **Satellite Monitoring**: Real-time crop health assessment
- **AI Analysis**: Automated damage detection and quantification
- **Blockchain Technology**: Transparent, instant payouts
- **Accessibility**: No credit history or collateral requirements

---

**VerdeGuard** - Protecting Farmers, Securing Futures 🌱🛡️
