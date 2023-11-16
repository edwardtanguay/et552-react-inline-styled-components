const logArgs = (...args) => console.log(...args);

// logArgs('1', '2')


// const favoriteFood = 'pizza';
// logArgs`I like ${favoriteFood}.`


const favoriteFood = 'pizza';
const favoriteDrink = 'water';
logArgs`I like ${favoriteFood} and ${favoriteDrink}.`