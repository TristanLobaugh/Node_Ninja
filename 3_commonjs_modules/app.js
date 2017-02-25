const math = require('./math');

const command = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

const value = math[command](a, b);

console.log(value);
