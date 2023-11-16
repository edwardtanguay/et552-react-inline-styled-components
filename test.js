// const logArgs = (...args) => console.log(...args);

// const favoriteFood = 'pizza';
// const favoriteDrink = 'water';
// logArgs`I like ${favoriteFood} and ${favoriteDrink}.`

const myTemplate = (strings, ...values) => {
//   let result = '';
//   for (let i = 0; i < strings.length; i++) {
//     result += strings[i];
//     if (i < values.length) {
//       result += values[i].toUpperCase();
//     }
//   }
//   return result;
console.log(111, strings);
console.log(222, values);
}

const prefix = 'Hey, ';
const name = 'John';
const age = 25;
const output = myTemplate`${prefix}my name is ${name} and I am ${age} years old.`;

console.log(output);