const csv = require('csv-parser');
const fs = require('fs');

// Array to store the csv values.
let kpis : string[] = [];

kpis= fs.readFileSync('C:/myplaywrighttests/tests/data.csv')
  .toString() // convert Buffer to string
  .split('\n') // split string to lines
  .map(e => e.trim()) ; // remove white spaces for each line;

console.log("All Data:" + kpis);
console.log("First row:"+ kpis[1]);