// const add = (a,b) => a+b;
// console.log(add(2,5));

// const student ={
//     name:'Aayush',
//     subject:'Data Structures',
//     marks:84,
//     greet(){
//         console.log('Hi I am '+this.name,"I study",this.subject);
//     }
// };

// student.greet();

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

let fruits = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

let fruitsTransformed = fruits.map(fruit=>{
    if(fruit==' ')
        return 'empty string';
    else
        return fruit;

        
});
console.log(fruits);
console.log(fruitsTransformed);

