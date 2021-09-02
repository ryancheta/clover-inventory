const fetch = require('node-fetch');
const cliProgress = require('cli-progress');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const keys = require('./data/local_vars');

let date = new Date();
const csvWriter = createCsvWriter({
  path: `./data/${date.toISOString()}-barmys.csv`,
  header: [
    { id: 'id', title: 'id' },
    { id: 'hidden', title: 'hidden' },
    { id: 'name', title: 'name' },
    { id: 'alternateName', title: 'alternateName' },
    { id: 'code', title: 'code' },
    { id: 'sku', title: 'sku' },
    { id: 'price', title: 'price' },
    { id: 'priceType', title: 'priceType' },
    { id: 'defaultTaxRates', title: 'defaultTaxRates' },
    { id: 'unitName', title: 'unitName' },
    { id: 'cost', title: 'cost' },
    { id: 'isRevenue', title: 'isRevenue' },
    { id: 'stockCount', title: 'stockCount' },
    { id: 'modifiedTime', title: 'modifiedTime' },
    { id: 'priceWithoutVat', title: 'priceWithoutVat' }
  ]
});

const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
let baseUrl = 'https://api.clover.com/v3/merchants/';
let uri =
  baseUrl +
  keys.merchantId +
  '/items?access_token=' +
  keys.accessToken +
  '&limit=1000&offset=';
let limit = 1000;
var headers = {
  'Content-Type': 'application/json',
  mode: 'no-cors'
};

!(async function fetchCall() {
  let maxOffset = 9000;
  for (i = 0; i < maxOffset; i += limit) {
    await fetch(uri + i, headers)
      .then(res => res.json())
      .then(data => {
        csvWriter.writeRecords(data.elements).then(() => {
          showProgressBar(maxOffset, i);
        });
      })
      .catch(error => {
        console.error('in catch: ', error);
      });
  }
})().then(bar1.stop());

function showProgressBar(maxOffset, i) {
  bar1.start(maxOffset, 0, { speed: 'N/A' });
  bar1.increment();
  bar1.update(i);
}
