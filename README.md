## Get Started
#### dependencies
- node and npm

#### setup the project
1. open terminal to directory location
1. type `npm install` to resolve all project dependencies
1. in terminal type `node clover.js`

> CSV file will be generated in the `data` folder at `./data/*.csv`

#### create local_vars
1. create a new file named `local_vars.js` in the root directory of the project 
1. declare and initialize variables with the following names:
    - `exports.accessToken`
    - `exports.merchantId`
1. in the `clover.js` file, import the file to access the variables 
     - `const keys = require('local_info')`

### create directory /data
1. in root of the project, create diretory named `data`