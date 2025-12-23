// Modules - Encapsulated Code (only share minimum)
// CommonJS, evey file is module (by default)

const secret = 'SUPER SECRET';
const saika = 'Saika';
const michael = 'Michael';

const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

sayHi('John');
sayHi(saika);
sayHi(michael);