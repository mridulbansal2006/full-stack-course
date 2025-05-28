// variables in js - 
// 1) var -> can be redeclared and updated , global scope 
// 2) let -> can't be redeclared , but can be updated 
// 3) const -> can't be redeclared and can't be updated

// in let we donot need to redeclare it again and again to update the value
// let age =98 
// age=87
// age=56
// the age gets updated to 56, and we didnt even need to redeclare it that good
// const=24; 
// fixd value can't be change 

// if a variable is declared but uska value ni mili then voh undefined hota h 
// let a ; 
// console.log(a) // it will give undefined
// you can redefine the same element in diffrent block , but not in a global scope for eg 
// { let a=98 ; let a=76} // it will give error 
// { let a=98} ; { let a=98} // it will not give error cause the variables are not in a global scope 
// they are bound in a local scope by the curly braves and you can also name those braces if you want 

// datatypes in js 
// primitive data types - number, strings , boolean , undefined ; nill ; Bigint ; symbol 
// non-primitive data types -  Object , Array
// differnece between them 
// 1) Primitive Data types are predefined.  , Non-Primitive data types are created by the programmer
// 2) Primitive Data types will have certain values. ,  Non-Primitive data types can be NULL.

/// operators 
// 1) airthmatic operators - > + , - , * , ** ,/  % , ++ ,-- 
// **-> exponential , / -> division , %-> modulus , (++)-> increment , (--)-> decrement
// 2) assignment operatos -> 
// a) ==	equal to
// b) ===	equal value and equal type
// c) !=	not equal
// d) !==	not equal value or not equal type
// e) >	greater than
// f) <	less than
// g) >=	greater than or equal to
// h) <=	less than or equal to
// i) ?	ternary operator ->>>>>>>> veryyyyyyyyyy imppppppppppp
//
// 3) Logical Operators
// a)  &&	logical and
// b)  ||	logical or
// c)  !	logical not

// special ones 
//  typeof	Returns the type of a variable

// question to swap numbers written by user ------
// let name1=Number(prompt('enter value'))
// let name2=Number(prompt('enter another value'))
// let swp

//console.log(Number(name1)+Number(name2))
// swp=name1
// name1=name2
// name2=swp
// console.log(name1,name2)
// ------------------


// console.log()
// document.writeln()
// alert()

// console.log(9==='9')

//--------------------------------------------------
//let age=90
// if (age>=90){
//     console.log('you are eligible for paper');
// }
// else{
//     console.log('you are not eligible for paper');
// }

// let result=(age>18)?'you are eligible':'else you are not eligible'
// console.log(result)

// let num=Number(prompt('enter value'))
// let num2=num%10
// console.log(num2)
// let a=(num2%3===0)?'yes the last digist is divisible':'no its not'
// console.log(a)

/* GRADE SYSTEM */

// let num=Number(prompt('enter your marks i will grade you accroding to it'));
// if (num>=90){
//     console.log('A grade');
// }else if(num>=80){
//     console.log('B grade')
// }else if(num>=70){
//     console.log('C grade')
// }else{
//     console.log('you are below average')
// }

// let a=Number(prompt('enter number'))
// if (a%3===0 && a%5===0){
//     console.log('fizzbuzz');
// }else if(a%3==0){
//     console.log('fizz');
// }else if(a%5==0){
//     console.log('Buzz')
// }else{
//     console.log('not divisible')
// }

// let a=Number(prompt('enter number'));
// if (a>0){
//     console.log('its positive');
// }else if(a<0){
//     console.log('its negative');
// }else{
//     console.log('its 0');
// }

// let a = Number(prompt('enter first number'))
// let b = Number(prompt('enter second number'))
// let c = Number(prompt('enter third number'))
// if (a >= b && a >= c) {
//     console.log('a is the greatest number', a)
// } else if (b >= a && b >= c) {
//     console.log('b is the greatest number', b)
// } else if (c >= a && c >= a) {
//     console.log('c is the greatest number', c)
// } else {
//     console.log('Two or more numbers are equal and greatest');
// }

// let age = Number(prompt('enter your age'))
// if (age >= 18) {
//     let gen = prompt('enter your gender MALE OR FEMALE')
//     let c = gen.toUpperCase()
//     if (c === 'MALE') {
//         console.log('go to room 5')
//     }
//     else if (c === 'FEMALE') {
//         console.log('go to room 6')
//     }
// }
// else {
//     console.log('you are not eligible')
// }
// let day=prompt('enter number of which day you want to see')
// switch(day){
//     case '1':console.log('its monday');break
//     case '2':console.log('its tuesday');break
//     case '3':console.log('its wednesday');break
//     case '4':console.log('its thuraday');break
//     case '5':console.log('its friday');break
//     case '6':console.log('its saturday');break
//     case '7':console.log('its sunday');break
//     default:
//         console.log('none')
// }

//--------------------------------------------------
// property hogyi joh hume kuch value deti h 
// method voh hota h joh hamara koi kaam krta  g
//practice of loops
// for (let i=1;i<=5;i++){
//     console.log(i);
// }
// initalize ( i=1 ) ; stopping condition (i<=5) ; updation( i++)


// let num=Number(prompt('enter till which number you want to find sum'))
// let a=0
// for (let i=1;i<=num; i++){
//     a=a+i
// }
// console.log(a)

// in var case ( if we use print the i variable after loop it will survive)'
// in let case ( it will not cause the variable is decalre in block statemnet so we need to again redeclareit)

// while loop
// let i=1
// while(i<=5){
//     console.log(i);
//     i++
// }
// the condition is check at the start whether its true or not


// but in do while it will check at last , so its gurantee that do while will work atleast
// one time no matter what
// in do while semicolon is neccessary to use 

// let i=10
// do{
//     console.log(i)
//     i++}while(i<=12);


// for of ( loop)
// it will help to put loop in strings and arrays 
// let s='mridul'
// for (i of s){  // iterator -> characters
//     console.log(i)
// }

// for in (loop)
// it is used for arrays and objext it gives us key when we used it 4
// let stud={
//     a:'35',
//     b:'r'
// };

// for (let i in stud){
//     console.log('key:',i,'value:',stud[i])
// }/



// Qs1. Print all even numbers from 0 to 100.
// for (let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// Create a game where you start with any random game number. Ask the user to keep
//  guessing the game number until the user enters correct value\
// let num=Number(prompt('enter the number (guess between 1 and 20 ,if you want to pass enter 100 , and you will get the ans)'))
// let gamenum=13

// while(num!==gamenum){
//  num=Number(prompt('enter the number (guess between 1 and 20 ,if you want to pass enter 100 , and you will get the ans)'))
// }
// console.log('you have entered correct number')

// question1 Sum of All Multiples of 3 and 5
// let n=Number(prompt('enter number'))
// let sum=0
// for ( let i=1;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         sum=sum+i
//     }
// }

// console.log(sum)
//Q2: Print Characters at Even Index
// let str='javascriptloops'
// for ( let i of str){
//     console.log(i)
// }
//Q3: Count the Number of Vowels in a String
// Total number of vowels

// Total number of consonants

// Total number of characters (excluding spaces and special symbols)
// let str='javascriptloops'
// let sumofvowels=0
// let sumofconsonants=0
// let totalcharacters=0
// for ( let i of str){
//     if ('aeiouAEIOU'.includes(i)){
//         sumofvowels+=1
//         totalcharacters+=1
//     }else{
//         sumofconsonants+=1
//         totalcharacters+=1
//     }
// }
// console.log(sumofvowels,'no of vowels')
// console.log(sumofconsonants,'no of consonants')
// console.log(totalcharacters,'no of total characters')

//Q4: Print All Keys and Values of an Object
// let student = {
//     name: "Arjun",
//     age: 19,
//     grade: "A"
//   }
// for ( let i in student)  {
//     console.log(i,'key',student[i],'value')
// }

//Q5: Sum of Digits in a Number
// let i=prompt('enter number bro')
// let sum=0
// let noofeven=0
// let noofodd=0
// for (let a of i){
//     if(Number(a)%2==0){
//         sum+=Number(a)
//         noofeven+=1
//     }else{
//         sum+=Number(a)
//         noofodd+=1
//     }
// }
// console.log(sum)
// console.log(noofeven)
// console.log(noofodd)

//--------------------------------------------------

//practice of strings
// let st='apnacollege'
// let n=98
// let age=12
// st.length
// st[0],st[1],st[2]
// this is template literal , ` ` , and we can add any variable in between by using this
// console.log(`my name is mridul age is ${age} and i scored ${n} in computer science`)
// template literal is a way to embedded expressions in strings
// to create stings by doing subsitition of placeholder -> is know as string interpolation
// in  ${ first the value is calculated and then it becomes strings}

// escape characters -

// \n-> next line
// \t-> tab spac

// string methods --------

// ------------- these are the methods of strings only -------------------------
//let st='apnacollege'
//console.log(st.toUpperCase())

// the method does not change in the original string it creates a new string and we store that string in new variable
// and then do any work 

// strings are immutable in js 
//console.log(st.toLowerCase())

// trim method , it removes all the whites spaces in the string
//console.log(st.trim());

//console.log(st.slice(2,3,2));
// in slice there can be starting and ending calue ,and how many steps you want to take 

//let st2='rsbs'
//console.log(st.concat(st2));
// to conactinate 2 stings  , concat is the function 

//console.log(st.replace('col','hey')); 
// -> replace
// but for eg we have a string which has multiple strings we need to replace then we will use 
//console.log(st.replaceAll('a','r'))

// charAt method is used to find the character or value at a particluar index 
//console.log(st.charAt(3)); // we will get a

// String toLowerCase()-> this will lowercase the string 
// trimstart()
// trimStart() method works like trim(), but removes whitespace only from the start of a string.

// trimend()
//trimEnd() method works like trim(), but removes whitespace only from the end of a string.

//  includes('sub')- Checks if string contains substring- Example: "hello".includes("ll")  true
//  indexOf('sub')- Returns index of first occurrence- Example: "apnaapna".indexOf("a")  0
//  startsWith('sub')- Checks if string starts with value- Example: "abc".startsWith("a")  true
//  endsWith('sub')- Checks if string ends with value- Example: "abc".endsWith("c")  true
//  split(separator)- Splits string into array- Example: "a-b-c".split("-")  ["a","b","c"
//  substring(start, end)- Returns a substring (excludes end)- Example: "hello".substring(1, 4)  "ell"
//  repeat(n)- Repeats the string n times- Example: "ab".repeat(3)  "ababab

// ------------- these are the methods of strings only and its end here , the methods ends here -----------

// question to prac-> 
// prompt the user to enter their full name . genrate the username for them based on a input .
// start username with @ followed by their full name and ending with full name with length

//  let a=prompt('enter your name')
//  let b=`@${a}${a.length}`
//  console.log(b);


// Q-Prompt user for a word.
// Replace all vowels (a, e, i, o, u) with 
// Repeat the final string twice
// Show both original and secret string

//  let a=prompt('enter string')
//  b=a.replaceAll(/['aeiouAEIOU']/g,'*')
//  c=b.repeat(2)
//  console.log(c);

//--------------------------------------------------
/// arrayss
//let a=[1,2,3,4];
// console.log(a);
// console.log(a.length);
// console.log(typeof a); /// object ; it can be assume that it is a key value pair , but instead of key we use indexing

//console.log(a[0]);
// when we will goes beyong range it wikll not give error , instead it will give undefined
//a[2]=99
//console.log(a);
// array is a mutable dataype
// for i in -> gives you index , great for objects like dictonary 
// for i of -> gives you direct values , great for arrays and all  , it works only on iterables like list and strings 

// for (let i in a){
//     console.log(i);
// }
// for (let i=0; i<a.length ; i++){
//     console.log(a[i])
// }
// for ( let i of a ){
//     console.log(i)
// }


// Q. For a given array with marks of students →
// [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.
// let marks=[85, 97, 44, 37, 76, 60]
// let sum=0
// for ( let i of marks){
//     sum+=i
// }
// console.log(`average marks is ${sum/marks.length}`)


// 🔹 Question 2: Discounted Prices of Items
// Q. For a given array with prices of 5 items →
// [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them.
// Change the array to store final price after applying the offer.

// let prices=[250, 645, 300, 900, 50]
// for (let i=0;i<prices.length;i++){
//     prices[i]=(prices[i]*0.1)
// }
// console.log(prices)


// array functions 
// push method -> is used to add the elemnt at last , its more like a append method in python , it doesnot
// return new list , it changes in the current list , cause its a mutable datatype
// Used heavily in dynamic data apps (adding new items to a cart, list, etc.)
// let a=[250, 645, 300, 900, 50]
// a.push(879)
// a.push(984,43,'t4we','4te')//we can also push multpiple Element  without thinking of putting them in lists and then add
// console.log(a);

// pop functions - remove the last elements from the arrays 
//Cart feature: remove last added item
// id the array is empty and then we use this it will give me undefined 
// we cannot pop the elemts  at a specific index , it will only pop last elemnt
// to remove any elements in a specific element you need to use other fucntion like splice 
//a.pop() 
//console.log(a);

// shift function  -
//Purpose: Removes the first element from an array
//Returns the removed element
//Only removes one item at a time
//Safe on empty arrays → returns undefined
//a.shift()
//console.log(a);
// let cities = ['Delhi', 'Mumbai', 'Pune'];
// let first = cities.shift();
// console.log(cities);
// console.log(first);

// unshift function- 
// Opposite of shift()
// Mutates original array
//  You can add multiple items at once
//unshift() only adds, it doesn’t replace.
// to replace we can use both fuction , first shift to delte and then unshift to renenmter 
//Never assume it replaces anything — it only pushes data at start.
// a.unshift('mridul', 'bansal','hellobrooo')
// console.log(a);

// splice function ( veryyyyy imppppppp put this function in you soul) -
//a.splice(3,4) // delete 4 items from 3rd position 
// splice( staring index , how many elemnts to delete , ' to add any elemnts its completely optional , 
// you can write multiple lements )
//a.splice(3,2,'mridul','tueday')
// a.splice(1,0,99999) // to replace the item , see what happening 1 is telling the postion , 0 ,telling delete 0 items
// after 1st posistion , and replace the item at first with 99999 , so if you remove the 99999 , the array will 
// remain same ,
/// If you only give startIndex deletes all items from index  to end
// let deletedItems = a.splice();
// console.log(deletedItems); // shows what was removed
//console.log(a)

// slice function -
//  same as string 
//Does NOT mutate the original array (unlike splice)
// Commonly used to:
// Extract parts of an array
// Works with negative indexes too
// Create a copy
// b=a.slice(2,5)
// console.log(b)

// concat function-
// to combine 2 arrays
// yo can also add multiple elemnets in arrays , using concat 
// let a = [1, 2];
// let b = [3, 4];

// console.log(a.concat(b))
// console.log(a.concat(1,2,3))
// console.log(a.concat([1,'rdv'],['mri','dal'],['x']))

// join fuction-\
//join() does NOT change the original array — it returns a new string.
// join() is non-mutating
// It gives back a new string, doesn’t modify a
// let a=['mri','dul','helllo','broo']
// console.log(a.join('-')) // output:-mri-dul-helllo-broo

// index of function-:
// Returns index of first match, or -1 if not found
// let a=['mri','dul','helllo','broo']
// console.log(a.indexOf('mri'))

// includes() function
// Returns true/false if item exists
// let a=['mri','dul','helllo','broo']
// console.log(a.includes('mri'))

// reverse()
// Reverses array in-place
// let a=['mri','dul','helllo','broo']
// a.reverse()
// console.log(a)

// sort() 
// Sorts alphabetically by default.
// let a=['mri','dul','helllo','broo']
// a.sort()
// console.log(a)
// for each function - , react js needed , when doing map 

// question prac 
// Question
// Q. Create an array to store the following companies:
// "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
// a. Remove the first company from the array
// b. Remove "Uber" and add "Ola" in its place
// c. Add "Amazon" at the end of the array
// let a=["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// a.shift(0)
// console.log(a)
// a.splice(2,1,'ola')
// a.push('amazon')
// console.log(a)
//--------------------------------------------------

/////////////// functionsss //////////////
//What is a Function?
//A function is a block of code that performs a task when it's called.
// It avoids repetition and makes your code reusable and clean.
// function goals(){
//     console.log(' i will be in top 100 in ai till 2029')
//     console.log(' i will achive it no matter waht')
// }
// goals();

//Functions can be customized using parameters → they're like placeholders.
//When you call the function, you give it arguments → real values that fill the placeholders.
//  function mridul(name,year){
//     console.log(`i am ${name} and i will achieve my goals by ${year}`)
//  }
// mridul('mridul',2029)
// mridul('Goggins', 2026)
// mridul('Alex Hormozi', 2025)
// return ke baad wala exccute nahi hota , return means functions eneded

// Write a function success that takes milestone and year, and returns a string like:
// "I will achieve AI milestone: <milestone> by <year>"
// Use return, not console.log.
// Then store it in a variable and print it.
// function success(milestone,year){
//     a=`I will achieve AI milestone: ${milestone} by ${year}`
//     return a
// }
// b=success('top100','2029')
// console.log(b)

// function parameters => like local varaibles -> block scope 

// function expressions: 
// const a1=function(a,b){
//     return a+b;
// }
// console.log(a1(3,4))
// function is a keyword here 

//arrow functions 

// first normal sunction

// function sum1(a,b){
//     return a+b
// }
// // arrow functions 
// // they are part of mordern java script , the below one 
// // they are ussalu use for short functions 
// const d=(c,e)=>{ 
//     return c+e
// }
// console.log(sum1(3,4));
// console.log(d(24,56));

// const printhello =()=>{
//     console.log('helloworld')
// }
// printhello()


// question practice 
// Q1: Normal Function – Vowel Counter
// Write a function countVowels using the function keyword
// Accepts a string as parameter
// Counts and returns the number of vowels (a, e, i, o, u)
// Return the result, don’t console.log inside function
// Handle both lowercase and uppercase letters

// function countVowels(a){
//     let vowels=0
//     for (let i of a){
//         if ('aeiouAEIOU'.includes(i)){
//             vowels+=1
//         }
//     }
//     return vowels
// }
// b=countVowels('mridulbansal')
// console.log(b);

//Q2: Arrow Function – Same Task
// const countVowels=(a)=>{
//     let vowels=0
//     for (let i of a){
//         if ('aeiouAEIOU'.includes(i)){
//             vowels+=1
//         }
//     }
//     return vowels
// }
// c=countVowels('heybroHOW')
// console.log(c);

//Q-3 :Create an arrow function that takes a string and returns an object with the following:
//Boolean: does the string contain the letter ‘x’ or ‘X’?

// const string1=(a)=>{
//     if ((a.toLowerCase()).includes('x')){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(string1("matrix"));
// console.log(string1("matri"));

// Q4: Create an arrow function stringInfo that takes a string and returns an object with the
//  following details:
//  vowelCount: total number of vowels in the string
// hasX: true if it contains 'x' or 'X', false otherwise
//  isAllLower: true if all characters are lowercase
// length: total number of characters in the string

// const stringInfo = (b) => {
//     let vowels = 0
//     for (let i of b) {
//         if ('aeiouAEIOU'.includes(i)) {
//             vowels += 1
//         }
//     }
//     let isAllLower=(b.toLowerCase()===b)
//     let hasX=b.toLowerCase().includes('x')
//     return {
//         'vowelcount':vowels,
//         'isalllower':isAllLower,
//         'hasX':hasX,
//         'lengthoftring':b.length
//     }
// }
// c=stringInfo('mridulbansalx')
// console.log(c);



// for each-method ||
//forEach() doesn’t return anything
// in js only there a special thing , that you can pass functions as a parameters 
// callback is a function which is passed to another function as a arguments:

// function abc(){
//     console.log('hello')
// }
// function tru(abc){
//     return abc
// }
// d=tru(abc)
// console.log(d)

// first pass is value ( necessary) , second one is index you can use it , third one is , a ( the array itself)
//let a=[1,2,3,4,'mridul','bansal']
// a.forEach(function mridul(val,index,a){
//     console.log(val,index,a)
// })
//  a.forEach((val,index,a)=>{
//     console.log(val,index,a)
//  })


// what is higher order functions 
// higher order functions are those functions which take another function/methods as a parameters insdie them 
// or which another functions


// question practice ---
// For a given array of numbers, create a new array where:
// Only even numbers are squared
// Then, print the sum of those squared values using forEach()

// let a=[1,2,3,4,5,6,7,8,9,10]
// let b=[]
// for (let i of a){
//     if (i%2===0){
//         b.push((i**2))
//     }
// }
// let sum=0
// b.forEach((c)=>{
//     sum+=c
// })
// console.log(b)
// console.log(sum)
// the c in foreach is just a place holder you can name it anything you want 

// some imp array methods 

// map method , similar to foreach 

//map() processes every item and returns a new array

// important rule 
// If you just need to act → forEach()
// If you need to save the output → map()
// let a=[1,2,4]
// let c=a.map((b)=>{
//     return b
// })
// console.log(c)

// map() is like an internal forEach() + push() combo
//Except it automatically builds the new array for you

// filter method 
// let a=[1,2,3,4,5,6]
// let d=a.filter((c)=>{
//     return c%2===0
// })
// console.log(d);
// Used to remove elements that don’t meet a condition
//Always returns a shorter or equal-length array
//“If this returns true — keep it
//If false — REMOVE it from the new array

// imp rule -> map() modifies items , filter() removes item
// gives a new array , doesnot change in orginal one 

// reduce method -> when there is a lot in input , but we need only 1 value at last as result 
// like sum of all array , average of all array , in those conditions we need to use reduce method 
// let a=[1,2,3,4,5,6,139,42,321]
// const b=a.reduce((pre,curr)=>{
//     return (pre>curr)?pre:curr
// })
// console.log(b)
// this code is for to find largest number in a array using reduce function , and we use ternary operator intead of 
// if-else here for returning the value 

// Use val.name when you're hardcoding.
// Use val[key] only when you want dynamic property access (like in loops, APIs, etc).
// let students = [
//     { namee: "Aarav", marks: 93 },
//     { namee: "Mridul", marks: 87 },
//     { namee: "Komal", marks: 99 },
//     { namee: "Yash", marks: 64 },
//     { namee: "Reena", marks: 91 },
//     { namee: "Dhruv", marks: 86 }
//   ];

// // ques 1 Filter out only the students who scored 90+.
// students.forEach(val=>{
//     if (val.marks>90){
//         console.log(val.namee)
//     }
// })

// question2 , Use .map() + Ternary to Grade Students
// Use a ternary operator for grade:
// "A+" → if marks ≥ 95
// "A" → if marks between 90–94
// "B" → if marks between 85–89
//  ques 3 Calculate the average marks of the filtered group using reduce()
//Write a function calculateAverage(callback)
//that takes the reduce function as callback and returns the average

// let students = [
//     { namee: "Aarav", marks: 93 },
//     { namee: "Mridul", marks: 87 },
//     { namee: "Komal", marks: 99 },
//     { namee: "Yash", marks: 64 },
//     { namee: "Reena", marks: 91 },
//     { namee: "Dhruv", marks: 86 }
// ];


// d= students.map((student)=>{
//     let grade=student.marks>=95?'A+'
//     : student.marks>=90?'A':
//     student.marks>=85?'B+':'no grade'

//     return{grade}
// })
// console.log(d)
// how to sort numbers ; instead of string
////////////////////// doubtssssss thiss codeee is not workingggggggggggg

// question practice------------ for test 

// let countvowel=0
// const d=(str)=>{
//     for (let i of str){
//         if ('aeiouAEIOU'.includes(i)){
//             countvowel+=1
//         }
//     }
// }
// d('dragon')
// console.log(countvowel)
// Write a function sumArray(arr) that takes an array of numbers and returns the sum of all elements.
// arr=[1,2,3,4,5]

// const d=arr.reduce((pre,next)=>{
//     return pre+next
// })
// console.log(d);
// const iseven=(num)=>{
//     return (num%2==0)?'EVEN':'ODD'
// }
// iseven(98)

// const findmax=arr.reduce((pre,next)=>{
//     return pre>next?pre:next
// })
// findMax([5, 17, 2, 89, 3])


//////////////// now doms manipulation ////////////// 

/// 3 musketeers of web dev /// 
//  1) html structure
//  2) css styling 
//  3) js logic
