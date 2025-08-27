import { ethers } from "hardhat";

async function main() {
  const initialSupply = ethers.parseUnits("1000000000", 18); // 1 billion KRWS with 18 decimals
  
  const MannaKRWStablecoin = await ethers.getContractFactory("MannaKRWStablecoin");
  const mannaKRWStablecoin = await MannaKRWStablecoin.deploy(initialSupply);

  await mannaKRWStablecoin.waitForDeployment();

  console.log(
    `MannaKRWStablecoin deployed to ${await mannaKRWStablecoin.getAddress()}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
