// Modules - Encapsulated Code (only share minimum)
// CommonJS, evey file is module (by default)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
console.log(data);
// console.log(names);node
// console.log(sayHi);

require('./7-mind-grenade');

// sayHi('John');
// sayHi(names.saika);
// sayHi(names.michael);