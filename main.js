let log = console.log;

log("5");
log("here i am in Es6");
// let const map set weakmap weakset
//const and let like themselves does not happen hoisting for them
// is defined in their scope only
// const should have initial value and can not assigned block scope
// let block scope

// unlike var which is seen in functional scope

function logStatement() {
  for (var i = 0; i < 5; i++) {
    log(i);
    log("#".repeat(20));
  }
  log(i);
}

logStatement();
// let solved the problem of closure

// rest parameter in function definition  worked as array

// spread operator for concatenating two arrays
let arr1 = [1, 2, 3, 4];
let arr2 = ["a", "b", "c", ...arr1];
log(arr2);

function getNameandJob(name, job) {
  log(`${name} works as ${job}`);
}

let mahmoudDetails = ["Mahmoud", "Software Developer"];
getNameandJob(...mahmoudDetails);

// clone object and array without references
var obj = { name: "Mahmoud", age: 20 };
var obj2 = { ...obj, faculty: "Computer and Information Science" };
log("obj2");
log(obj2);
let arr = [1, 2, , 3, undefined, 4, 5, 6, 7, 8, 9, ["a", "b"]];
ShallowCopy = [...arr];
log(ShallowCopy);
// any change in them does not affect the other

let [x = 30, , z = 10, l, a = 15, f, ...rest] = arr;
log(x);
log(z);
log(a);
log(l);
log(f);
log(rest);
// ordering is important
var mahmoudInformation = {
  name: "Mahmoud",
  age: 21,
  born: 2003,
  personal: {
    married: "not married",
    friendly: "is friendly",
  },
};
const { name, born } = mahmoudInformation;
log(name);
log(born);
const {
  name: nm,
  name: newVal,
  born: y,
  fac = "Anonymous",
  personal: {
    married: isSingle,
    friendly: goodWithPeople,
    student: isStudent = "isStudent yes",
  },
} = mahmoudInformation;
log(nm);
log(newVal);
log(y);
log(fac);
log(isSingle);
log(goodWithPeople);
log(isStudent);
// ordering is not important

// arrow function , fat function , lambda function

// trim , trimRight , trimLeft
// startsWith , endsWith , includes , repeat(number)
log(String.fromCodePoint(97));
log(String.fromCodePoint(97, 65));

console.log("Mahmoud \n \t Ali");
console.log(String.raw`Mahmoud \n \t Ali`);
// static method gets string as plain text

function tag(strings, ...values) {
  // strings: Array of string literals
  // values: Interpolated values
  console.log(strings); // ["Hello ", " world", "!"]
  console.log(values); // ["big", 5]

  // You can return a manipulated string or any other type of value
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
}

const adjective = "big";
const number = 5;
const result = tag`Hello ${adjective} world ${number}!`;
console.log(result); // "Hello big world5!"

// Array Improvements
let fruits = ["oango", "orange", "strawberry"];
log(
  fruits.every((value, idx, arrayItself) => {
    log(idx);
    log(value);
    log(arrayItself);
    return value[0] === "o";
  })
);
// every works as anding &&
log("#".repeat(50));
log(
  fruits.some((value, idx, arrayItself) => {
    log(idx);
    log(value);
    log(arrayItself);
    return value[0] === "o";
  })
);
// some works as oring ||

log("#".repeat(50));

fruits.map((fruit) => log(fruit));
log("#".repeat(50));
fruits.forEach((fruit) => log(fruit));

// ====================forEach============================================
// Purpose: Used to execute a provided function once for each array element.
// Return Value: undefined (does not return a new array).

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => {
  console.log(num * 2); // Side effect: logging to console
});
// Output: 2, 4, 6, 8

// =====================map======================================================
// Purpose: Used to create a new array populated with the results of calling a provided function on every element in the calling array.
// Return Value: A new array with the transformed elements.

const theNums = [1, 2, 3, 4];
const doubled = theNums.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredArray = myNums.filter((num) => num % 2 === 0);
console.log(filteredArray); // [2, 4, 6, 8]

// filtering based on conditions

// all of the previous take ((val,idx,array)=>{})

// i can destructure val if was object

// array.map(({title,price,age},idx,array)=>{})

// filter and map returns new array

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 15 },
];

const adultUser = users.find((user) => user.age >= 15);

console.log("adultUser"); // { name: 'Bob', age: 20 }
console.log(adultUser); // { name: 'Bob', age: 20 }

log(users.find(({ age }) => age > 17));

// find return first element meet the criteria

// name: name;
// name,

// default parameter is on of es6 feature

// Proxy

handler = {
  set(obj, prop, val) {
    if (obj.hasOwnProperty(prop)) {
      obj[prop] = val;
    } else {
      throw `property ${prop} is not exists`;
    }
    if (prop == "age") {
      if (val > 15) {
        obj[prop] = val;
      } else {
        throw `${val} is not correct it age should be more than 15`;
      }
    }
  },
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    } else {
      throw "Creating new Property is not allowed";
    }
  },
};

target = {
  name: "Mahmoud",
  age: 21,
};

var p = new Proxy(target, handler);
// if in

// log(p.name);
// log(p.age);
// log(p.faculty);
// p.name = "ali";
// p.faculty = "Computer and Information Science";
// p.age = 10;
// p.age = 50;

// Components of a Proxy
// Target: The original object which you want to proxy.
// Handler: An object that defines which operations will be intercepted
// and how to redefine them.The handler contains traps(methods)
// for various operations.

let theTarget = {
  name: "Alice",
  age: 25,
};

let theHandler = {
  get: function (target, property) {
    console.log(`Getting property "${property}"`);
    return property in target
      ? target[property]
      : `Property "${property}" not found.`;
  },
  set: function (target, property, value) {
    console.log(`Setting property "${property}" to "${value}"`);
    target[property] = value;
    return true; // Indicate success
  },
  deleteProperty: function (target, property) {
    console.log(`Deleting property "${property}"`);
    if (property in target) {
      delete target[property];
      return true; // Indicate success
    } else {
      return false; // Indicate failure
    }
  },
  has: function (target, property) {
    console.log(`Checking if property "${property}" exists`);
    return property in target;
  },
};

let proxy = new Proxy(theTarget, theHandler);

console.log(proxy.name); // Getting property "name" // Output: Alice
proxy.age = 30; // Setting property "age" to "30"
console.log(proxy.age); // Getting property "age" // Output: 30
delete proxy.name; // Deleting property "name"
console.log("name" in proxy); // Checking if property "name" exists // Output: false

const myFruitsArr = ["apple", "banana", "cherry"];
for (let index in myFruitsArr) {
  console.log(index);
  console.log(myFruitsArr[index]);
}

for (let value of myFruitsArr) {
  console.log(value);
}

myFruitsArr.forEach((value, index) => {
  console.log(index);
  console.log(value);
});

// difference between for ... in , forEach , for ... of

// for ... in
// Iterates Over: The property keys
// index of array or property of object
// in => index

// forEach
// iterates Over: Each element of the array, passing the value, index, and array itself to the callback.

// for ... of
// Iterates Over: The values of the iterable
// value of array
// to iterate over the values of an iterable object, such as arrays and strings.

let greeting = "hello";

for (let char of greeting) {
  log(char);
}

// set for non repeating values
const mySet = new Set([1, 2, 3]);
log(mySet);
mySet.add(4);
log(mySet);
mySet.has(1);
mySet.delete(2);
log(mySet);
mySet.clear();
log(mySet);

// if ... in
// checks for specified prop in obj

const deTails = {
  name: "Mahmoud",
  age: 21,
};
log("name" in deTails);
log("Faculty" in deTails);
log(deTails.hasOwnProperty("Job"));

// Example with Arrays
// The in operator can also be used with arrays to check if an index exists:
const nums = ["Mahmoud", "Array", "Hassan", "Mohammed"];
log(0 in nums);
log(1 in nums);
log(4 in nums);

let car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
log("make" in car ? "exits" : "not-exists");
log("color" in car ? "exits" : "not-exists");
// for (let val of car) {
//   console.log(`${val}`);
// }
// Error: car is not iterables

for (let idx in car) {
  console.log(`${idx} => ${car[idx]}`);
}

// In ES6, a Symbol is a unique and immutable primitive value
// that can be used as an identifier for object properties.
// Symbols can be created using the Symbol function.

let sym1 = Symbol();
let sym2 = Symbol("description");

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(description)
let sym3 = Symbol("foo");
let sym4 = Symbol("foo");

console.log(sym3 === sym4); // false

// default and named export
// default one per file

// import * as ... from ""
// import {getProducts as products} from ""

// async before function name means it returns a promise and if i do not promise in function definition
// await before promise
// await does not work without async function
// await make JavaScript waits for promise to finish
// very important for ordering
// if i have more than promise these works as they written
// await Keyword;
// The await keyword can only be used inside an async function.
// It makes JavaScript wait until the promise is resolved and returns the result.
// If the promise is rejected, await throws the rejected value.

async function example() {
  return "Hello";
}

example().then((result) => console.log(result)); // Output: Hello
// Use Cases
// 1. Fetching Data from an API
// Fetching data from an API is one of the most common use cases for async and await.

// Sometimes, you need to perform several asynchronous operations in sequence in order.

async function processFiles(files) {
  for (let file of files) {
    await processFile(file);
  }
  console.log("All files processed");
}

async function processFile(file) {
  // Simulate file processing
  return new Promise((resolve) => setTimeout(resolve, 1000));
}

processFiles(["file1.txt", "file2.txt", "file3.txt"]);

// async function fetchMultipleUrls(urls) {
//   let promises = urls.map((url) =>
//     fetch(url).then((response) => response.json())
//   );
//   let results = await Promise.all(promises);
//   console.log(results);
// }

// let urls = [
//   "https://api.example.com/data1",
//   "https://api.example.com/data2",
//   "https://api.example.com/data3",
// ];

// fetchMultipleUrls(urls);

// The fetch calls are initiated in parallel using map.
// Promise.all waits for all the Promises to resolve and returns the results as an array.

// This is particularly useful when the result of one operation depends on the previous one.
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // First, fetch the user by ID
// const fetchUserById = async (userId) => {
//   const response = await fetch(`https://api.example.com/users/${userId}`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch user');
//   }
//   const user = await response.json();
//   return user;
// };

// // Then, fetch the user's posts using the user ID from the previous fetch
// const fetchUserPosts = async (userId) => {
//   const response = await fetch(`https://api.example.com/users/${userId}/posts`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch posts');
//   }
//   const posts = await response.json();
//   return posts;
// };

// // Create the async thunk
// export const fetchUserAndPosts = createAsyncThunk(
//   'user/fetchUserAndPosts',
//   async (userId, thunkAPI) => {
//     try {
//       const user = await fetchUserById(userId);
//       const posts = await fetchUserPosts(user.id);
//       return { user, posts };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// without async and await we use .then(()=>{}).catch((err)=>{})

// js is interpreted language code executed line by line which is called synchronus programming

// make code async does not block the other implementation of the rest of the code
// if there was an operation that takes many time
// without async rest of code is blocking

// async make one thread in cput that run time of js node.js works for

// setTimeOut is async

// transpiler => translate + Compiler
// to change from lang to another
// translate into vanilla js
// like traceur from google
// Babel js

// include in array
const brothers = [];
const family = ["Mahmoud", "Mohammed", "Jana"];
for (let val of family) {
  val.includes("m") && brothers.push(val);
}
log(brothers);
log(family.includes("Jana"));
// exponetial operator
log(2 ** 3);

const mahmoudName = "Mahmoud";
log(mahmoudName);
log(mahmoudName.padStart(15)); // add spaces at start to make full chars 15 spaces+chars
log(mahmoudName.padEnd(15)); // add spaces at end to make full chars 15 spaces+chars
log(mahmoudName.padStart(15, "-")); // add spaces at start to make full chars 15 spaces+chars
log(mahmoudName.padEnd(15, "-")); // add spaces at end to make full chars 15 spaces+chars

log(Object.getOwnPropertyDescriptors(String));
log(Object.getOwnPropertyDescriptors(String.prototype));
log(Object.getOwnPropertyDescriptors(Number));
log(Object.getOwnPropertyDescriptors(Number.prototype));

let details = { name: "Mahmoud", age: 21 };
log(Object.values(details));
// return array of values
log(Object.keys(details));
// return array of keys
log(Object.entries(details));
// returns array of arrays every array is two indexs first key second value

// bigInt is used to store numbers that are greater than safe number (2 ^53)-1

let num = BigInt(10);
let n = 10n;
log(num);
log(n);

// Nullish Operator ?? , chanining Operator
// if it was undefined or null it

console.log(12 || "not found"); // 12
console.log(0 || "not found"); // "not found"

console.log("jane" || "not found"); // "jane"
console.log("" || "not found"); // "not found"

console.log(true || "not found"); // true
console.log(false || "not found"); // "not found"

console.log(undefined || "not found"); // "not found"
console.log(null || "not found"); // "not found"
// In many cases, you might only want the right value if left is null or undefined. That's what the nullish coalescing operator ?? is for:

console.log(12 ?? "not found"); // 12
console.log(0 ?? "not found"); // 0

console.log("jane" ?? "not found"); // "jane"
console.log("" ?? "not found"); // ""

console.log(true ?? "not found"); // true
console.log(false ?? "not found"); // false

console.log(undefined ?? "not found"); // "not found"
console.log(null ?? "not found"); // "not found"

// some use Cases
// 1. Default Props
// When defining default values for props,
//  the nullish coalescing operator ensures that only null or undefined values are replaced,
//  not other falsy values.

// 2- When initializing state with potentially null or undefined values, you can provide a default value.
// const [user, setUser] = useState(null);
// const username = user?.name ?? "Guest";

// API Data Handling
// When dealing with data from APIs, you can ensure that your component has sensible defaults if the API response contains null or undefined values.

// jsx
// Copy code
// const [data, setData] = useState(null);

// // Assume fetchData is a function that fetches data from an API
// useEffect(() => {
//   fetchData().then(response => {
//     setData(response ?? {});
//   });
// }, []);

// const content = data.content ?? "No content available.";

// return <div>{content}</div>;

var m;
log(m);
// undefined

// chaining operator ?.

const user = {
  name: "John",
  address: {
    city: "New York",
    zip: {
      code: 10001,
    },
  },
};

const zipCode = user?.address?.zip?.code; // 10001
const streetName = user?.address?.street; // undefined, no error
log(zipCode);
log(streetName);

const items = {
  data: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ],
};

const firstItemName = items?.data?.[0]?.name; // "Item 1"
const secondItemName = items?.data?.[1]?.name; // "Item 2"
const thirdItemName = items?.data?.[2]?.name; // undefined, no error
log(thirdItemName);

// safe method
const logger = {
  logging: (message) => console.log(message),
};

logger?.logging?.("This is a log message"); // Logs "This is a log message" without error

// array by default is sent by reference fun(arr) but if i sent it by reference it is sent by value fun([...arr])
function check(arr) {
  arr.push("new");
  log(`from function array is${arr}`);
}

let myarr = [1, 2, 3];
check(myarr);
log(myarr);

let thearr = [1, 2, 3];
check([...thearr]);
log(thearr);

// eslintrc with js and typescript rules
// eslint extension should be installed
console.log("hello mahmoud ali hassan");
// jira
