// let user = {
//     name: "John",
//     age: 30
// };

// let key = "name";

// console.log( user.key);

// let fruit = "apple";

// // let bag = {
// //     [fruit]: 5,
// // };
// let bag = {};

// bag[fruit + 'Computers'] = 5;

// console.log(bag.appleComputers);

// function makeUser(name, age){
//     return {
//         name,
//         age: age,
//     };
// }

// let user = makeUser ("John", 30);
// console.log(user);

// let user = { name: "John", age: 30};
// console.log ("age" in user); //true
// console.log ("blabla" in user); //false

// let obj = {
//     test: undefined
//   };
  
//   console.log( obj.test ); // it's undefined, so - no such property?
  
//   console.log( "test" in obj ); // true, the property does exist!

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user) {
//     console.log(`keys: ${key}`);
//     console.log(`values: ${user[key]}`);
// }

//https://javascript.info/object#ordered-like-an-object

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// function isEmpty(obj) {
//     for (let prop in obj){
//         return false;
//     }
//     return true;
// }
// let schedule = {};
// console.log (isEmpty(schedule));

// schedule["8:30"] = "get up";
// console.log(isEmpty(schedule));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   let sum = 0;
//   for (let prop in salaries) {
//     sum+=salaries[prop];
//   }
//   console.log(sum);

// function multiplyNumeric(obj){
//     for (let prop in obj){
//         if (typeof menu[prop] === "number"){
//             menu[prop]=menu[prop] * 2;
//         }
//     }

// }

// // before the call
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
  
//   multiplyNumeric(menu);

//   console.log(menu);

// function addOne(num) {
//     return num + 1;
// }

// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(addOne);
// console.log(mappedArr);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map((num) => num + 1);
// console.log(mappedArr);


// function isOdd(num){
//     return num % 2 !== 0;
// }
// const arr = [1,2,3,4,5];
// const oddNums = arr.filter(isOdd);
// console.log(oddNums);
// console.log(arr);

// const arr = [1,2,3,4,5];
// const productOfAllNums = arr.reduce((total, currentItem) => {
//     return total * currentItem;
// }, 1);

// console.log(productOfAllNums);
// console.log(arr);

//Mine
// function sumOfTripledEvens(array){
//     const evens = array.filter((num) => {return num % 2 ===0});
//     const triple = evens.map((num) => {return num * 3});
//     return triple.reduce((total, currentItem) => {return total + currentItem; });
// }

//odin
function sumOfTripledEvens(array){
    return array.filter((num) => num %2 ===0).map((num) => num * 3).reduce((acc,curr) => acc+curr);
}
const arr = [1,2,3,4,5];

console.log(sumOfTripledEvens(arr));