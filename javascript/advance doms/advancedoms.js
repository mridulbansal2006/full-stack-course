
       //////// OOPS /////////// 
// classes and objects 
// prototypes in js 

// a js object is a entity having state and behaviour ( methods and properties )
// js objects have a special property called prototype 

// in js when we create a object it will automatically create one object called prototype in there

// const a={
//     name:'mridul',
//     marks:345,
//     printmarks:()=>{
//         console.log('this is my marks',this.marks) // this.marks== student.marks 
//     }
// }

// in prototype object , is the thing which contain all the built in function of that object 
// casuse think we dont define it but we use those functions where those function coms from , simple it comes from 
// prototype objects 


// const tax={
//     mridul(){
//     console.log('tax is')
//     }
// }

// Object.setPrototypeOf(a, tax); // prototye is a reference to one object , for eg , tax function cannot be include 
//                                in each functions

// if the tax function is in the a ibject alsoe


// =========SPECIAL CASE ========

// const a={
//     name:'mridul',
//     marks:345,
//     printmarks:()=>{
//         console.log('this is my marks',this.marks) // this.marks== student.marks 
//     },
//      mridul(){
//     console.log('tax is')
//     }
// }

// Object.setPrototypeOf(a, tax);

// const tax={
//     mridul(){
//     console.log('tax is')
//     }
// }

// IF THE PROTOTYPE AND THE OBJECT HAVE SAME FUNCTION THEN , THE OBJECT FUNCTION PRIORTY IS HIGH

////////////////////////////////////////////////////////////////////////////////////////////


// CLASSES- 

// class is a program code template for creating objects ( in simple words its a BLUEPRINT )
// these objects will have some functions and variables inside it , like a blueprint 

// class car{
//     start(){
//         console.log('start')
//     }
//     stop(){
//         console.log('stop')
//     }
//     setbrand(brand){
//         this.brandName=brand
//     }
// }
// let toyotacar= new car(); // new is the property which create ne wobjects for us through classes
// toyotacar.setbrand('fortuner')

// constructor 
// its a special method  , whewn it create , it will automaticcly do the first thing what we have assighned 
// the task it to , 

// inheritance in JS

// paasing down properties and method from parent calss to child classs 
// class1 have - p1 ,p2 ,m1 , m2 
// calss 2 have - none

// if we want to use class 1 properties , in class 2 , we will use inhertinace 

// class parent {
//     tax(){
//         console.log('this is 10% tax')
//     }
// }
// class child extends parent{
// }
// let newchild= new child()

// NOTE -> child and parent have same method , child method will be used. 

// class person{
//        constructor(){
//         this.species='homospacieasn'
//        }
//     eat(){
//         console.log('eats')
//     }
//     sleep(){
//         console.log('sleep')
//     }
// }

// class engeenier extends person{
//     work(){
//         console.log('work')
//     }
// }
// let mridul=new engeenier()

// super keyword 
// 
// class user{
//     name(namee){
//         console.log(this.namee)
//     }
//     email(emails){
//         console.log(this.emails)
//     }
// }

// const mridul=new data()
// mridul.name('mridul')
// mridul.email('mrid@gmail')

// -==========================================================================================================

///////// PROMISES //////////



// synchronous and asynchonus 
// sync-> when code run in a squence like second statement cannot work until
//        first statement work is complete , 
// async-> when code run in a non-squence manner , simple words , if one condition taking too much 
//         time to complete so why does the other conditions need to stop , they can start working asap 
//         so first condition runs in baground but till then the next conditions works 

// setTimeout(function name , time in ms) , it is used to dealay the functions  
// callback is a , function in function 

// callback hell -
// nested callbacks , functions ke andar functions 
// function mridul(data , nextdata){
//     setTimeout(data,2000)
//     nextdata()
// }
// mridul(1,23)


// promises 
// promise is for eventual complettion of tasks , it is an object in js , its is a solution of callback hell 
// let promise= new Promise((resolve , reject)=>{})  // function with 2 handlers  , resolve and reject are callback 
// provided by js 
//
//
