const {fibonacciJs} = require('./fibonacci');
const {fibonacci: fibonacciWasm} = require('../pkg/fibonacci');

for (let i = 1; i <= 50; i++) {
  const jsLabel = `js ${i}`;
  console.time(jsLabel);
  fibonacciJs(i);
  console.timeEnd(jsLabel);

  const wasmLabel = `wasm ${i}`;
  console.time(wasmLabel);
  fibonacciWasm(i);
  console.timeEnd(wasmLabel);
}