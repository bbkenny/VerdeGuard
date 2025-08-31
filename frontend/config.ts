import { http, createConfig, fallback } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';

declare module 'wagmi' {
    interface Register {
      config: typeof config
    }
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// Define Base Sepolia testnet chain
const baseSepolia = {
  id: 84532,
  name: 'Base Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.base.org'] },
    public: { http: ['https://sepolia.base.org'] },
  },
  blockExplorers: {
    default: { name: 'Base Sepolia Explorer', url: 'https://sepolia.basescan.org' },
  },
  testnet: true,
} as const;

export const supportedNetworks = [baseSepolia] as const;

export const config = createConfig({
  chains: supportedNetworks,
  connectors: [
    walletConnect({ projectId : projectId ?? ''}),
  ],
  transports: {
    [baseSepolia.id]: fallback([
      http('https://sepolia.base.org'),
    ]),
  },
});