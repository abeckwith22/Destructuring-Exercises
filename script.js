// 1. What does the following print/return?
let facts = { numPlanets1: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets1, yearNeptuneDiscovered } = facts;

console.log(numPlanets1); // 8
console.log(yearNeptuneDiscovered); // 1846

// 2. What does the following print/ return?
let planetFacts = {
  numPlanets2: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};
let { numPlanets2, ...discoveryYears } = planetFacts;
console.log(discoveryYears); // { yearNeptuneDiscovered: 8, yearsMarsDiscovered: 1659 }

// 3. What does the following code return/print?
function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" })); // Your name is Alejandro and you like purple
console.log(getUserData({ firstName: "Melissa" })); // Your name is Melissa and you like green
console.log(getUserData({})); // Your name is undefined and you like green

// 4. Array Destructuring 1, What does the following code return/print?
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

// 5. Array Destructuring 2, What does the following code return/print?
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // Raindrops on roses
console.log(whiskers); // whiskers on kittens
console.log(aFewOfMyFavoriteThings); // [ 'Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings'];

// 6. Array Destructuring 3, What does the following code return/print?
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // [10, 30, 20]

// 7. ES2015 Refactoring, In this exercise, you'll refactor some ES5 code into ES2015
// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

/* ES2015 Version */
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

console.log(a, b); // 1, 2

// 8. ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/* Write an ES2015 Version */
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

const raceResults = ([first, second, third, ...rest]) => ({
  first,
  second,
  third,
  rest,
});

console.log(raceResults(["Tom", "Margaret", "Allison", "David", "Pierre"])); // returns { 'Tom', 'Margaret', 'Allison', [ 'David', 'Pierre' ] }
