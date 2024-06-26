const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
  privateKeys: ['0xc44444444444444444444444444444444444444444444444444444'],
  providerOrUrl: 'https://bsc-testnet.public.blastapi.io'
});

module.exports = {
  networks: {
  bsctestnet: {
<<<<<<< HEAD
    provider: () => new HDWalletProvider(`run run run words word word run run run words word word `, `https://bsc-testnet.public.blastapi.io`),
=======
    provider: () => new HDWalletProvider(`word word word word word word word word word`, `https://bsc-testnet.public.blastapi.io`),
>>>>>>> d4d1d61a78a9cce63d3601694317892ad10b4f2b
    network_id: 97,
    confirmations: 5,       // # of confs to wait between deployments. (default: 0)
    gasPrice: 20000000000,
    timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    skipDryRun: true,       // Skip dry run before migrations? (default: false for public nets )
    networkCheckTimeout:999999
  },
    development: {
      provider: () => provider,
      network_id: "97"
    },
  },
  plugins: [
    'truffle-plugin-verify',
  ],
  api_keys: {
    bscscan:`333333333333333333333333333333`,
	polygonscan:`1212121212121212121212121212`,
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      version: "0.8.0", 
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
