require("@nomiclabs/hardhat-etherscan");
const dotenv = require('dotenv');
dotenv.config();

const GOERLI_URL = process.env.GOERLI_URL
const SEPOLIA_URL = process.env.SEPOLIA_URL
const MUMBAI_URL = process.env.MUMBAI_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const API_KEY = process.env.API_KEY

module.exports = {
  solidity: "0.8.1",
  etherscan: {
    // Sua chave API key do Etherscan
    // Obtenha a sua em https://etherscan.io/
    apiKey: API_KEY,
  },
  networks: {
    goerli: {
      url: GOERLI_URL,
      accounts: [PRIVATE_KEY]
    },
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    },
    mumbai: {
      url: MUMBAI_URL,
      accounts: [PRIVATE_KEY]
    }
  },
};