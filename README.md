## Get Started
#### dependencies
- node and npm

#### setup the project
1. open terminal to directory location
1. type `npm install` to resolve all project dependencies

#### **create directory /data**
1. in root of the project, create directory named `data`

#### create local_vars
1. create a new file named `local_vars.js` in the root directory of the project 
1. declare and initialize variables with the following names:
    - `exports.accessToken = <YOUR_ACCESS_TOKEN>`
    - `exports.merchantId = <YOUR_MERCHANT_ID>`
1. in the `clover.js` file, import the file to access the variables 
     - `const keys = require('local_vars')`
1. in the terminal, type `npm run-script clover`

#### CSV file will be generated in the `data` folder at `./data/*.csv`
