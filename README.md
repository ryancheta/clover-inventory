## Get Started
#### dependencies
- [![Node and npm](https://img.shields.io/badge/dependencies-brightgreen.svg?style=flat)](https://nodejs.org/en/)

#### setup the project
1. open terminal to desired directory location, `git clone https://github.com/ryancheta/clover-inventory && cd clover-inventory`
1. type `npm install` to resolve all project dependencies

#### create necessary local files
1. run `mkdir data` to create `/data`
1. run `touch local_vars.js`
1. in the `local_vars.js` file, copy and paste the following *insert your credentials*:
    - `exports.accessToken = <YOUR_ACCESS_TOKEN>`
    - `exports.merchantId = <YOUR_MERCHANT_ID>`
1. in the terminal, type `npm run-script clover`

#### CSV file will be generated in the `data` folder at `./data/*.csv`
