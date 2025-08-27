# Manna Frontend - Korean Creator Tipping Platform

A modern Next.js application for the Manna (만나) platform, enabling global fans to support Korean creators through instant KRW-S stablecoin transfers on the Kaia blockchain.

## 🚀 Features

### Core Functionality
- **Instant Tipping**: Send KRW-S tokens directly to Korean creators
- **Dynamic Creator Support**: Input any creator's wallet address to tip
- **Real-time Balance Updates**: Live balance tracking for both users and creators
- **Multi-wallet Support**: Connect with Kaikas, MetaMask, and other Web3 wallets
- **Network Integration**: Optimized for Kaia Baobab testnet

### User Experience
- **Fixed Header Navigation**: Always accessible wallet connection and navigation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional UI**: Clean, modern interface with Manna brand colors
- **Transaction Feedback**: Real-time status updates and success confirmations

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#144489` - Trust, stability, finance
- **Accent Gold**: `#EFAC20` - Korean culture, creativity, passion
- **Neutral White**: `#FFFFFF` - Clean, minimal backgrounds

### Typography
- **Headings**: Bold, blue text for hierarchy
- **Body Text**: Clean, readable gray text
- **Interactive Elements**: Clear hover states and transitions

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3 Integration**: Wagmi v2 + Viem
- **Icons**: Lucide React
- **State Management**: React hooks

### Project Structure
```
frontend/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── user-profile/      # User profile and tipping interface
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── Header/           # Navigation and wallet connection
│   └── Footer/           # Site footer
├── constants/            # Contract ABIs and helpers
├── hooks/               # Custom React hooks
├── public/              # Static assets
└── config.ts            # Wagmi configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Kaia testnet wallet (Kaikas, MetaMask, etc.)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/thebabalola/manna.git
   cd manna/frontend
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
- **Network**: Kaia Baobab Testnet (Chain ID: 1001)
- **Contract**: MannaKRWStablecoin (KRW-S)
- **Address**: `0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54`
- **Explorer**: [Kaiascan](https://kairos.kaiascan.io)

### Key Functions
- `balanceOf(address)`: Check KRW-S balance
- `transfer(to, amount)`: Send KRW-S tokens
- `mint(to, amount)`: Mint new tokens (owner only)

## 💰 How to Use

### For Fans
1. **Connect Wallet**: Use the header to connect your Web3 wallet
2. **Switch Network**: Ensure you're on Kaia Baobab testnet
3. **Enter Creator Address**: Input the creator's wallet address
4. **Set Amount**: Choose tip amount or use quick tip buttons
5. **Send Tip**: Confirm transaction in your wallet

### For Creators
1. **Share Address**: Provide your wallet address to fans
2. **Receive Tips**: Get instant KRW-S transfers
3. **Track Balance**: Monitor real-time balance updates

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file in the frontend directory:
```env
NEXT_PUBLIC_CONTRACT_ADDRESS=0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54
NEXT_PUBLIC_CHAIN_ID=1001
NEXT_PUBLIC_RPC_URL=https://public-en-kairos.node.kaia.io
```

### Network Configuration
The app is configured for Kaia Baobab testnet by default. To switch networks:
1. Use the network switcher in the header
2. Add Kaia testnet to your wallet manually
3. Ensure you have testnet KAIA tokens for gas fees

## 🧪 Testing

### Testnet Tokens
- **KAIA**: For gas fees (get from [faucet](https://faucet.lambda256.io))
- **KRW-S**: For tipping (contact project team for test tokens)

### Testing Flow
1. Deploy the smart contract to testnet
2. Mint test KRW-S tokens to your wallet
3. Test tipping functionality between wallets
4. Verify balance updates and transaction history

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

This project is part of the Manna platform. See the main repository for licensing information.

## 🆘 Support

- **Documentation**: Check the main project README
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join project discussions for questions

---

**Manna (만나)** - Bridging Global Passion to Korean Creativity 🇰🇷✨
