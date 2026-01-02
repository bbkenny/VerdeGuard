# VerdeGuard Insurance Token - Smart Contract

This directory contains the smart contract for the VerdeGuard Insurance Token, an ERC-20 compliant token deployed on the Base Sepolia Testnet for managing crop insurance policies and payouts.

## Contract Details
- **Name:** VerdeGuard Insurance Token
- **Symbol:** VGIT
- **Decimals:** 18
- **Initial Supply:** 1,000,000,000 VGIT (deployed with this initial supply)
- **Deployed Address:** `0x89A2C29B55Fb31E5739682f5b9aE3a004E7a1a54` (Placeholder - to be deployed)
- **Network:** Base Sepolia Testnet (Chain ID: 84532)
- **Block Explorer:** https://sepolia.basescan.org

## Functionality
This is a standard ERC-20 token contract with additional insurance-specific features:
- `transfer(address recipient, uint256 amount)`: Transfer tokens
- `balanceOf(address account)`: Get account balance
- `approve(address spender, uint256 amount)`: Allow spender to withdraw from your account
- `transferFrom(address sender, address recipient, uint256 amount)`: Transfer tokens from one address to another
- `mint(address to, uint256 amount)`: Owner-only function to mint new tokens for insurance payouts
- `burn(uint256 amount)`: Owner-only function to burn tokens

## Deployment

### Prerequisites
- Node.js and npm installed
- Hardhat and its dependencies installed (run `npm install` in this directory)
- A `.env` file in the `smart-contract` directory with `PRIVATE_KEY` (your deployer wallet private key) and `BASESCAN_API_KEY` (for contract verification) set

### Steps to Deploy
1.  Navigate to the `smart-contract` directory:
    `cd smart-contract`
2.  Install dependencies:
    `npm install`
3.  Compile the contract:
    `npx hardhat compile`
4.  Deploy to Base Sepolia Testnet (ensure `PRIVATE_KEY` is set in `.env`):
    `npx hardhat run scripts/deploy.ts --network base-sepolia`

Upon successful deployment, the contract address will be printed to the console.

## ABI (Application Binary Interface)

The ABI for interacting with the `VerdeGuardInsuranceToken` contract is generated in the `artifacts/` directory after compilation. You can find it at `artifacts/contracts/VerdeGuardInsuranceToken.sol/VerdeGuardInsuranceToken.json`.

## How to Interact

To interact with this contract on the Base Sepolia Testnet, you can use a Web3 library (like Ethers.js or viem) and the provided ABI. Ensure your wallet (e.g., MetaMask) is connected to the Base Sepolia Testnet (Chain ID: 84532).

## Contract Verification

The contract will be verified on BaseScan after deployment.

### Verification Steps
1. Deploy the contract to Base Sepolia
2. Run verification command:
   ```bash
   npx hardhat verify --network base-sepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
   ```

### Expected Verification Status
✅ **Source Code Verified** - Contract source code publicly accessible
✅ **ABI Available** - Contract interface available for frontend integration
✅ **Trusted Contract** - Contract verified for safety

## Use Cases

- **Insurance Premiums**: Farmers pay premiums in VGIT tokens
- **Claim Payouts**: Automated payouts in VGIT tokens when claims are approved
- **Policy Management**: Track insurance policies and coverage on-chain
- **Transparent Operations**: All transactions visible on Base Sepolia block explorer



