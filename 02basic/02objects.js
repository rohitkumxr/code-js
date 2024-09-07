const mySym = Symbol('Key1');

const student = {
    name : "Rohit",
    "full name" : "Rohit Kumar",
    age : 20,
    isLog : false ,
    [mySym] : "kkk"
}

console.log(typeof student[mySym]);
console.log(student);

const obj1={
    1 : 'a',
    2 : 'b'

}
const obj2 ={
    3 : 'c',
    4 : 'd'
}

console.log(Object.assign({},obj1,obj2));

// spread most used 

const obj3 = {...obj1, ...obj2};
console.log(obj3);

