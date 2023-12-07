
const fs = require("fs");

// First read in the secrets.json to get our mnemonic
let secrets;
let mnemonic;
if (fs.existsSync("secrets.json")) {
  secrets = JSON.parse(fs.readFileSync("secrets.json", "utf8"));
  mnemonic = secrets.mnemonic;
} else {
  console.log(
    "No secrets.json found. If you are trying to publish EPM " +
      "this will fail. Otherwise, you can ignore this message!"
  );
  // Example mnemonic below. PLEASE DON'T USE FOR ANYTHING ELSE!
  mnemonic =
    "wrist find shock leisure stand barely field sunset script evidence key idea diesel journey gravity";
}

module.exports = {
  path: {
    sources: "contracts",
  },
  networks: {
    live: {
      url: "https://mainnet.infura.io/v3/130dfea36eb541b79694f0b6c003b2b2",
      accounts: { mnemonic },
      chainId: 1, // Ethereum public network
      // optional config values
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    ropsten: {
      accounts: { mnemonic },
      url: "https://ropsten.infura.io/v3/130dfea36eb541b79694f0b6c003b2b2",
      chainId: 3,
    },
    development: {
      url: "http://localhost:8545",
    },
    // ganache: {
    //   url: "http://localhost:7545"
    // },
  },
  solidity: {
    version: "0.8.20", // A version or constraint - Ex. "^0.5.0"
  },
};
