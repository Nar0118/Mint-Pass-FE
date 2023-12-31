// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');
require('dotenv').config();

async function main() {
  await deployFundraisingFactory();
}

const deployFundraisingFactory = async () => {
  const feeWalletAddress = process.env.FEE_WALLET_ADDRESS;
  const tokenAddress = process.env.TOKEN_ADDRESS;

  const Factory = await hre.ethers.getContractFactory('FundraisingFactory');
  const factory = await Factory.deploy(1, feeWalletAddress, tokenAddress);

  await factory.deployed();

  console.log('Lock with 1 ETH deployed to:', factory.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
