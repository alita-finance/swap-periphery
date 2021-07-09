require('dotenv').config();

module.exports = {
    networks: {
        bscTestnet: {
            host: "https://data-seed-prebsc-1-s1.binance.org",
            port: 8545,
            network_id: "97",
        },
        bscMainnet: {
            host: "https://bsc-dataseed.binance.org",
            port: 8545,
            network_id: "56",
        },
    },
    compilers: {
        solc: {
            version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
            // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: true
                },
                // evmVersion: "byzantium"
            }
        }
    },
    db: {
        enabled: false
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: process.env.BSCSCAN_API_KEY
    }
};
