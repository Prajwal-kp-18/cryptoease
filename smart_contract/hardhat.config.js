require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/g6D0L6NCw0Y3WSrtYeqhpw1ppu2JNZVk",
      accounts: [
        "3c3b5db52c85ac4d76fa167ca43d6536b18533d5014b8d606b132b28656fbb88",
      ],
    },
  },
};
