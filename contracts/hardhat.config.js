require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/9e877cac8573440bb6c8167d499a4a6e`,
      accounts: [
        '411c3b4c3cf1477e6fc6499a06c2432352f8edfa86ec0f592e5716df75cdcdab',
      ],
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/eOqyl0wW61DUlScRV4SE05_DNpIh0s8S',
      accounts: [
        '411c3b4c3cf1477e6fc6499a06c2432352f8edfa86ec0f592e5716df75cdcdab',
      ],
    },
    alchemy: {
      url: `https://eth-goerli.g.alchemy.com/v2/4zkCEiBuCLd4sIXMQc1lracEwSPrC0XP`,
      accounts: [
        'b93a5e1b656fc411623c5a24cd06fa76f2153250e0556334216af23cd6132502',
      ],
    },
  },
};
