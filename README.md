# smart contract structure
we need to build three of methods : 
1- Receive Deposit in pool
2- Withdraw fund from pool method 
3- Deposit Rewards to distribute rewards in pool ( managing team )
use oppen zeppein access control it support team Roles 
we need to add events we need in this smart contract to add two event to call (deposit & withdraw ) methods

# verify contract on Ropsten testnet
```

$ npx hardhat verify 0x35599CfFCdC8Bb29e77e316Be974D31B6a932eD2
Successfully submitted source code for contract
verified contract ETHPool on Etherscan.
https://ropsten.etherscan.io/address/0x35599CfFCdC8Bb29e77e316Be974D31B6a932eD2#code

# Advanced Sample Hardhat Project

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help


# Etherscan verification

To try out Etherscan verification, you first need to deploy a contract to an Ethereum network that's supported by Etherscan, such as Ropsten.

In this project, copy the .env.example file to a file named .env, and then edit it to fill in the details. Enter your Etherscan API key, your Ropsten node URL (eg from Alchemy), and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:

```shell
hardhat run --network ropsten scripts/sample-script.ts
```

Then, copy the deployment address and paste it in to replace `DEPLOYED_CONTRACT_ADDRESS` in this command:

```shell
npx hardhat verify --network ropsten DEPLOYED_CONTRACT_ADDRESS "Hello, Hardhat!"
```


