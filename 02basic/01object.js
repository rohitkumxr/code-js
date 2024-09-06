const jsUser ={
    name : "Rohit",
    age : 20,
    isLog : false

}

// console.log(jsUser.isLog);

// console.log(jsUser["isLog"]);

let hero = ["a","b"];
let zero = ["c","d"];

const together = [...hero , ...zero]; // merge two array called spread operator
console.log(together);

// console.log(Array.of(hero,zero));