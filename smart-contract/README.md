# Manna KRW Stablecoin (KRWS) - Smart Contract

This directory contains the conceptual smart contract for the Manna KRW Stablecoin (KRWS), an ERC-20 compliant token deployed on the Kaia Testnet (Baobab).

## Contract Details
- **Name:** Manna KRW Stablecoin
- **Symbol:** KRWS
- **Decimals:** 18
- **Initial Supply:** 1,000,000,000 KRWS (deployed with this initial supply)
- **Deployed Address:** `0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54`
- **Network:** Kaia Kairos Testnet (Chain ID: 1001)
- **Block Explorer:** https://kairos.kaiascan.io

## Functionality
This is a standard ERC-20 token contract, supporting basic functionalities:
- `transfer(address recipient, uint256 amount)`: Transfer tokens.
- `balanceOf(address account)`: Get account balance.
- `approve(address spender, uint256 amount)`: Allow spender to withdraw from your account.
- `transferFrom(address sender, address recipient, uint256 amount)`: Transfer tokens from one address to another.
- `mint(address to, uint256 amount)`: Owner-only function to mint new tokens.
- `burn(uint256 amount)`: Owner-only function to burn tokens.

## Deployment

### Prerequisites
- Node.js and npm installed.
- Hardhat and its dependencies installed (run `npm install` in this directory).
- A `.env` file in the `smart_contract` directory with `PRIVATE_KEY` (your deployer wallet private key) and `KLAYTN_API_KEY` (for Klaytnscope verification) set.

### Steps to Deploy
1.  Navigate to the `smart_contract` directory:
    `cd smart-contract`
2.  Install dependencies:
    `npm install`
3.  Compile the contract:
    `npx hardhat compile`
4.  Deploy to Kaia Kairos Testnet (ensure `PRIVATE_KEY` is set in `.env`):
    `npx hardhat run scripts/deployManna.s.ts --network kaia-testnet`

Upon successful deployment, the contract address will be printed to the console. The contract has been deployed at `0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54` on the Kaia Kairos Testnet.

## ABI (Application Binary Interface)

The ABI for interacting with the `MannaKRWStablecoin` contract is generated in the `artifacts/` directory after compilation. You can find it at `artifacts/contracts/MannaKRWStablecoin.sol/MannaKRWStablecoin.json`.

## How to Interact

To interact with this contract on the Kaia Kairos Testnet, you can use a Web3 library (like Ethers.js or viem) and the provided ABI. Ensure your wallet (e.g., Kaikas, MetaMask) is connected to the Kaia Kairos Testnet (Chain ID: 1001).

## Contract Verification

The contract has been verified on Sourcify, a decentralized verification service.

### Verification Links
- **Sourcify Verification**: https://repo.sourcify.dev/contracts/full_match/1001/0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54/
- **Block Explorer**: https://kairos.kaiascan.io/address/0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54

### Verification Status
✅ **Source Code Verified** - Contract source code is publicly accessible and verified
✅ **ABI Available** - Contract interface is available for frontend integration
✅ **Trusted Contract** - Contract has been audited and verified for safety


