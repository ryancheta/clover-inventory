## Get Started
#### dependencies
- [Node and npm](https://nodejs.org/en/)

#### setup the project
1. open terminal to desired directory location, clone repo and `cd` to `clover-inventory`
1. type `npm install` to resolve all project dependencies

#### **create directory /data**
1. while in the root of the project, type `mkdir data` to create `/data`

#### create local_vars
1. while in the root of the project type `touch local_vars.js`
1. within the `local_vars.js` copy and paste the following *insert your credentials*:
    - `exports.accessToken = <YOUR_ACCESS_TOKEN>`
    - `exports.merchantId = <YOUR_MERCHANT_ID>`
1. in the terminal, type `npm run-script clover`

#### CSV file will be generated in the `data` folder at `./data/*.csv`
