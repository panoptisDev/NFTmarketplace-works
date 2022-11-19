# Install required modules

Run command - npm install

# Migrate to Binance Smart Chain

Step 1 - Add your private key to the truffle.config file.
Step 2 - Run command - truffle migrate --reset

# Start Frontend

Run command - npm start
---
## deployed contracts

* Migrations@ 0xcB5a43141db3b2c88b9EeA7CaD7867De2E6E1682
* ImageContract@ 0x36f610c5a9D6A2832634Ee69A6735d29879990a9
* ImageSaleContract@ 0x70CF2b4D14626B24246FE9a109E39b3Ff48E385A
* TokenContract@ 0xdEA2ebA1F973567DEAC4cf87330FdF8d4AaD2cf2
* TokenSaleContract@ 0x6a078F11dF5e289F1D51cCb5a6A9025EF91e728F

* truffle run verify Migrations@0xcB5a43141db3b2c88b9EeA7CaD7867De2E6E1682 --network bsctestnet
* truffle run verify ImageContract@0x36f610c5a9D6A2832634Ee69A6735d29879990a9 --network bsctestnet
* truffle run verify ImageSaleContract@0x70CF2b4D14626B24246FE9a109E39b3Ff48E385A --network bsctestnet
* truffle run verify TokenContract@0xdEA2ebA1F973567DEAC4cf87330FdF8d4AaD2cf2 --network bsctestnet
* truffle run verify TokenSaleContract@0x6a078F11dF5e289F1D51cCb5a6A9025EF91e728F --network bsctestnet
