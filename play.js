// const add = (a,b) => a+b;
// console.log(add(2,5));

const { rejects } = require("assert");

// const student ={
//     name:'Aayush',
//     subject:'Data Structures',
//     marks:84,
//     greet(){
//         console.log('Hi I am '+this.name,"I study",this.subject);
//     }
// };

// student.greet();

/////////////////////////////////////////////////////////////////////////////////////////////////////////Classes + This Keyword
// class Student{
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }

//     setPlacementAge(minPlacementAge){
//         //console.log(this)
//         return  (minMarks)=>{                                   //Normal function if returned -- gives 'this' as undefined inside it
//             if(this.marks>minMarks &&this.age>minPlacementAge){
//                 console.log(this.name,"is ready for placement");
//             }
        
//         else{
//             console.log(this.name, "is NOT ready for placement");
//             }  
//         };
//     }
// }



// //Instantiating 
// const Yash = new Student('Yash',25,75);
// const Vaibhav = new Student('Vaibhav',13,35);

// Yash.setPlacementAge(18)(40);              //placementAge and Eligible minMarks - set by distinct companies

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Array.map((cb)=>return transform(each element)) **

//let fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

// let fruitsTransformed = fruits.map(fruit=>{
//     if(fruit==' ')
//         return 'empty string';
//     else
//         return fruit;
// });
// console.log(fruits);
// console.log(fruitsTransformed);

/*   SPREAD and REST operator

// const copiedFruits = [...fruits];
// console.log(copiedFruits===fruits);         //Deep Copy using SPREAD

// const toArr = (...args)=>args;                  //REST operator to Create ARRAY out of arguments
// console.log(toArr('a','b','c','d'));

*/


/////* DESTRUCTURING 
// const obj1 = { 'key1': 1, "key2": 2, "key3": 1000 }

// const { key1, key3 } = { ...obj1 }


// console.log(key1, key3)

///////////////////////////////////////////////////////////////////ASYNC JS

//Challenge Task5   - Using call backs
// console.log('a');

// console.log('b');

// setTimeout(() => {
//     console.log('c');
//     setTimeout(() => {
//         console.log('d');
//         console.log('e');
//         }, 0)}
//     ,3000);

////// Using Promises!!

// console.log('a');
// console.log('b');
// new Promise((resolve,reject)=>{
//     setTimeout(() => resolve('c'), 3000)})
//     .then((res)=>{
//         console.log(res);
//         new Promise((resolve,reject)=>{
//             setTimeout(() => resolve('d'), 0);
//         })
//         .then((res)=>{
//             console.log(res);
//             console.log('e');})
//     })

////////// Using Async AWAIT
async function abc(){
console.log('a');
console.log('b');

const c = await new Promise((res,rej)=>setTimeout(() => res('c'), 3000));
console.log(c);

const d = await new Promise((res, rej) => setTimeout(() => res('d'), 0));
console.log(d);

console.log('e');

}
abc();







