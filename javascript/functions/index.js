const myFunction = () => {
  console.log("hello world");
};

myFunction();

const myFunctionArgument = (myArgument) => {
  console.log(`The value of my argument is: ${myArgument}`);
};

myFunctionArgument(17);
myFunctionArgument("Taco");

const Sum = (num1, num2) => {
  return num1 + num2;
};

const five = Sum(3, 2);
console.log(five);

const AddOneToSum = (num1, num2) => {
  const sum = Sum(num1, num2);
  return sum + 1;
};
const six = AddOneToSum(2, 3);
console.log(six);

const cake = { progress: "not started" };

const mixCakeBatter = () => {
  // ingredientsNeeded is undefined outside of the function
  const ingredientsNeeded = [
    "flour",
    "sugar",
    "eggs",
    "baking soda",
    "baking powder",
    "salt",
    "milk",
  ];

  // the object cake is accessible here and can be updated.
  cake.progress = "mixed";
};

// console.log(ingredientsNeeded); // this is not defined and will give an error
console.log(cake.progress); // this results in "not started" because we have not invoked the function yet

mixCakeBatter();

console.log(cake.progress); // this results in "mixed" because we invoked the function.

const yellowChairMaker = (chairMaterial) => {
  const chairObject = {
    type: "Chair",
    color: "Yellow",
    material: chairMaterial,
    price: 49.29,
  };

  return chairObject;
};

// Now you can invoke the function - or start the task - to make two chairs.
const metalChair = yellowChairMaker("Aluminum");
const oakChair = yellowChairMaker("Oak");

console.log(metalChair);
console.log(oakChair);

/*
	Vocabulary:
		- `chairObject` is a parameter. It can only be used inside the function.
		- `chairStringMaker` is a variable whose value is a function
		- `stringRepresentation` is an internal variable for the function.
			It, also, can only be used inside the function, not outside it.
*/
const chairStringMaker = (chairObject) => {
  // Note that the last interpolation has two dollar signs.
  // The first one is just a dollar sign. The second is for the interpolation.
  const stringRepresentation = `The ${chairObject.color}, ${chairObject.material} ${chairObject.type} costs $${chairObject.price}`;

  return stringRepresentation;
};

const returnedChairObject = yellowChairMaker("Oak");
// At this moment, the returnedChairObject variable has an object as its value

const returnedChairString = chairStringMaker(returnedChairObject);
// At this moment, the returnedChairString variable has a string as its value

console.log(returnedChairString);

const arr = ["apples", "oranges", "bananas", "grapes", "strawberries"];

console.log(arr);
arr.push("lemon"); // adds an element to the end of the array
console.log(arr);
arr.pop(); //removes an element from the end of the array
console.log(arr);
arr.unshift("lime"); // adds an item to the beginning of the array
console.log(arr);
arr.shift();
console.log(arr); // removes an item from the beginning of the array

const arr1 = ["a", "b", "c", "d"];
const arr2 = [1, 2, 3, 4];
console.log(arr1.concat(arr2)); // Add the two arrays arr2 at the end
console.log(arr1.join("-")); // creates a string from the elements
console.log(arr1.reverse()); // reverses the order of the array

let arr3 = [5, 3, 4, 1, 2];
console.log(arr3.sort()); // puts the elements in order

let arr4 = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(arr4.slice(1, 5)); // Makes a new array that starts at the first index and ends BEFORE the second index

let arr5 = [1, 2, 3, 4, 5, "a", "b", "c"];
arr5.splice(4, 1, "monkey"); // replaces 5 with 'monkey'
console.log(arr5);

let cities = [
  "Nashville",
  "Atlanta",
  "New York",
  "Seatle",
  "Minneapolis",
  "Chicgo",
];
console.log(cities.length); // gives the number of elements in the array
cities.forEach((city) => console.log(city));

// the .map method creates a new array
const helloCities = cities.map((city) => {
  return `Hello  ${city}`;
});

console.log(helloCities);
console.log(cities);

console.log(
  "-----------------------Basic Function Practice-----------------------------------"
);
const basicFunction = () => console.log("FUNctions are fun!");
basicFunction();

const sumFunction = (num1, num2) => {
  return num1 + num2;
};

console.log(sumFunction(10, 50));

const productFunction = (num1, num2) => {
  return num1 * num2;
};

console.log(productFunction(2, 34));

const addMultiplyFunction = (num1, num2, num3) => {
  return productFunction(sumFunction(num1, num2), num3);
};

console.log(addMultiplyFunction(10, 20, 4));

console.log(
  "-----------------------Array Methods Practice-----------------------------------"
);

/* For each of the sections, consider the array and the method.  What would you expect the output to be? */
let letters = ["l", "s", "a", "r", "d", "f"];

console.log(letters.sort());
console.log(letters.pop());
console.log(letters);
console.log(letters.push("q"));
console.log(letters);
console.log(letters.shift());
console.log(letters);
console.log(letters.unshift("y"));
console.log(letters);
console.log(letters.slice(1, 2));
console.log(letters);

let names = ["John", "Mandeep", "Ruby", "Rose", "Jackson"];

console.log(names.concat(letters));
console.log(names.join(" "));
console.log(names.reverse());

let superheroes = [
  "Wonder Woman",
  "Captain America",
  "Spiderman",
  "Batman",
  "The Flash",
];

// iterate over superheroes and console log the superhero's name in the following sentance "<NAME> is a superhero!".

for (const superhero of superheroes) {
  console.log(`${superhero} is a superhero!`);
}

console.log(
  "-----------------------Array Methods Practice-----------------------------------"
);

let superheroesDetails = [
  {
    id: 1,
    name: "Wonder Woman",
    isDC: true,
  },
  {
    id: 1,
    name: "Captain America",
    isDC: true,
  },
  {
    id: 1,
    name: "Batman",
    isDC: true,
  },
  {
    id: 1,
    name: "The Flash",
    isDC: true,
  },
  {
    id: 1,
    name: "Spiderman",
    isDC: false,
  },
];

// iterate over superheroesDetails if the superhero is a DC character (isDC = true)
//console log "<the heros name> is in the Justice League.".
//Otherwise console log "<the heros name> is a superhero"
//in the following sentence "<NAME> is a superhero!".

for (const superhero of superheroesDetails) {
  if (superhero.isDC) console.log(`${superhero.name} is in the Justice League`);
  else console.log(`${superhero.name} is a superhero`);
}
