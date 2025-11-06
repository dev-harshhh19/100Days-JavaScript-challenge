// Import default + named exports from math.js
import multiply, { add, subtract } from './math.js';

console.log('add(2,3) =', add(2, 3));        // 5
console.log('subtract(5,3) =', subtract(5, 3)); // 2
console.log('multiply(2,3) =', multiply(2, 3)); // 6

// Import entire module as a namespace
import * as math from './math.js';
console.log('math.add(2,4) =', math.add(2, 4));
console.log('math.subtract(9,5) =', math.subtract(9, 5));
// default is available as `math.default` when using namespace import
console.log('math.default (multiply) =', math.default(3, 5));

// Import re-exports from util.js (util re-exports add, subtract and multiply)
import * as util from './util.js';
console.log('util.add(4,5) =', util.add(4, 5));
console.log('util.multiply(4,5) =', util.multiply(4, 5));

// Dynamic import (useful for lazy-loading)
async function loadMathModule() {
    const dynamicMath = await import('./math.js');
    console.log('dynamic import add(8,9) =', dynamicMath.add(8, 9));
}

loadMathModule();
