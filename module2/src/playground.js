
/* 1. Array operations */
const colors = ['green', 'red', 'yellow', 'blue'];

// Head
console.log('head:', head(colors));

// Tail
console.log('tail:', tail(colors));

// Init
console.log('init:', init(colors));

// Last
console.log('last:', last(colors));

console.log('Original array not changed:', colors);

/* 2. Concat */
const animals = ['elephant', 'lion', 'zebra', 'dog'];

console.log('concat:', concat(colors, animals));
console.log('multiConcat:', multiConcat(colors, animals, colors, animals));

console.log('Original arrays not changed:', colors, animals);

/* 3. Clone Merge */
const person = {
  name: 'John',
  age: 48,
  employed: true
}

// Clone
const clonedPerson = clone(person);
clonedPerson.age = 22;

console.log('clone:', person, clonedPerson);

const company = {
  name: 'servinube',
  city: 'Marbella',
  year: 2008
}

// Merge
console.log('merge:', merge(person, company));

/* 4. Read Books */
console.log('Read Books:');

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));

/* 5. Slot Machine */
console.log('Slot Machine:');

const machine1 = new SlotMachine();

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
