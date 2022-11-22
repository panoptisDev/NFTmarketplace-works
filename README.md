# PanoptisDev NFT Marketplace With Payment in ERC20
![alt text](https://svgshare.com/i/jgJ.svg)
![alt text](https://iili.io/Hd53eOg.png)

Run command - npm install

# Migrate to Binance Smart Chain

* Step 1 - Add your private key to the truffle.config file.
* Step 2 - Run command - truffle migrate --reset --network bsctestnet

# Start Frontend

Run command - npm start
---
## truffle-config 
* yarn add @truffle/hdwallet-provider
* yarn add truffle-plugin-verify

## deployed contracts

* Migrations@0xf1D06e6ed05C5d0D708c375298c7E009887D4491
* ImageContract@0x550a245a9ad74c4659317B1B1596C6aeB268412F
* ImageSaleContract@0x5ce1DB1a82161348573B9BE8DdeD44fED1F4183F
* TokenContract@0xCF96af2b6dD15A0Ab4199d4949bfB2E1cC16E55b
* TokenSaleContract@0x3aE52C56eb8540963603CbeF34116D9b0226D039
---
* truffle run verify Migrations@0xf1D06e6ed05C5d0D708c375298c7E009887D4491 --network bsctestnet
* truffle run verify ImageContract@0x550a245a9ad74c4659317B1B1596C6aeB268412F --network bsctestnet
* truffle run verify ImageSaleContract@0x5ce1DB1a82161348573B9BE8DdeD44fED1F4183F --network bsctestnet
* truffle run verify TokenContract@0xCF96af2b6dD15A0Ab4199d4949bfB2E1cC16E55b --network bsctestnet
* truffle run verify TokenSaleContract@0x3aE52C56eb8540963603CbeF34116D9b0226D039 --network bsctestnet
---
* old (0x0000ADb55545be52c7DB7983cC95d177F29D3C5D // fee reciever,change to your wallet)
* 0x33c39CaCE33aD92579D1A1969201af58D4E3aBBF // fee reciever,change to your wallet

