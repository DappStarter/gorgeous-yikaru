require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remove coffee hidden argue outer giggle'; 
let testAccounts = [
"0x000b89c5025fa5039a1a3bb9a5c7e9e58868e938104928558cdc4272fc4733fc",
"0x56b8b0e1afee7a39f6654e9ad5c1d111a0a93cee96c298d4542082531aaf7735",
"0xaff9d9c0befb1223f8bdef3683b1c810a147a793c1846b5eff2712e5f17ee7c3",
"0x6392d256622c0021301031fd94034a2c0100aeac41ecffc06b32b8fdb1590012",
"0xf90996f8ce8a94d668f97de69309d82b8e29996ed103fe4d548c36d17df0ae83",
"0x0e1980b1a68b6e5639bf311ae38894d8ac27214e59a4a31e6f53af576ba38593",
"0x3356ef86f2eff7fd03e949971a8b5036a79c837dd55ec024c5b5150a145e4f38",
"0x6817fb63f2cd5517dd13319831d6b1d935173929c2adad892630a1336be4f2ed",
"0xeb15c1a6179d3a8ff8089d622e9d135e84c8d78956a169a3da3ace3990cf8248",
"0x7f6ab5bc1c052e7744cf50a1bd9ed03365fdd8c01c173b1af1c2402d69ca474c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

