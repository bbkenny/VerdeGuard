import { HardhatUserConfig, vars} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.26",
  networks: {
    kaia: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1001,
    },
    'kaia-testnet': {
      url: 'https://public-en-kairos.node.kaia.io',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1001,
    },
  },
  sourcify: {
    enabled: true,
  },
  etherscan: {
    apiKey: {
      kaia: process.env.ETHERSCAN_API_KEY || "empty",
      "kaia-testnet": process.env.ETHERSCAN_API_KEY || "empty",
    },
    customChains: [
      {
        network: "kaia",
        chainId: 1001,
        urls: {
          apiURL: "https://kairos.kaiascan.io/api",
          browserURL: "https://kairos.kaiascan.io",
        },
      },
      {
        network: "kaia-testnet",
        chainId: 1001,
        urls: {
          apiURL: "https://kairos.kaiascan.io/api",
          browserURL: "https://kairos.kaiascan.io"
        }
      }
    ],
  },
};

export default config;

