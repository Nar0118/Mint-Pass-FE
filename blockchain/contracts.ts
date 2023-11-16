import factoryJson from '../contracts/artifacts/contracts/Fundraising/Factory.sol/FundraisingFactory.json';
const FACTORY_ABI = factoryJson['abi'];
import Web3 from 'web3';
import env from 'utils/constants/env';

export enum ContractName {
  FACTORY,
}

export class config {
  static CHAIN_ID = `${env.web3ChainId}`;

  // A factory with this address is deployed on Mumbai Testnet
  static FACTORY_ADDRESS: string = `${env.factorySCAddress}`;

  static chainId() {
    return this.CHAIN_ID;
  }

  static address(contract: ContractName): string {
    let address: string;
    switch (contract) {
      case ContractName.FACTORY:
        address = this.addressFactory();
        break;
      default:
        address = '';
    }
    return address;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static abi(contract: ContractName): any[] | undefined {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let abi: any[] | undefined;
    switch (contract) {
      case ContractName.FACTORY:
        abi = this.abiFactory();
        break;
      default:
        abi = undefined;
    }
    return abi;
  }

  static addressFactory() {
    return this.FACTORY_ADDRESS;
  }

  static abiFactory() {
    return FACTORY_ABI;
  }
}

export class contracts {
  static getContract(web3: Web3, contract: ContractName) {
    return new web3.eth.Contract(
      config.abi(contract),
      config.address(contract),
    );
  }
}
