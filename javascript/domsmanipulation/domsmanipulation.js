// window object 
// window object is the global object in the browser environment. 
// The window object is the top-level 
// object in the JavaScript environment of a web page.
// window object contains all the functions that the js has , it the super function which contains all the functions
// and properties of the js.
// console.log('mridul')
// window.console.log('mridul2') // they both will work cause all the functions come under window objects

// what is doms??
// when a web page is loaded, the browser creates a DOM of the page.
// all of our html code is available in the document object and that document onject is avaialble in the windows
// objects
// if we print window.document , our whole html code will get print  //  winow-document->model of what ( our html code)
// and this is called doms  , its a tree like structure , in tree like stucture 
// every box is called as node , every node is a object for us , the tree like sturcture starts with window 
// in window there is document node , in document there is our html node , in our html node -> there is 2 things 
// one is head and the other one is body node 
// our head node contains-> meta , link , titles etc
// our body tag have 2 things -> first is script and the other is our h1 , div, images , video , all of these things 

// in body there is child nodes -> which tell us how many ndodes are there like ,div ,text , h1 , and all

// why we use js to create user interface ?? -
// in html and css we create a permanent template in the core or server or anuything , but if we want to change 
// dymanically when user touch that button  this should happend and all , we use js , and we can acess js using 
// window.document.body.childnodes[3] , by some thing like this , the changes what happen will be 1 time , 
// only not everytime
// to do dyamnic changes we use doms , to do changes 


// console.log(window.document) // log prints the elements by assuming it is a element // it will give html like thing
// console.dir(document) // dir prints the objects , its used to print properties and methods  ,

// note-> alwasys use dir methods in js to do dyanmic changes 

// to access elemnts ( how to do it )-

// a) document.getElementByid('id') // to acess elemnt using id
// 1) if we dont have a elemnts with that id and we do , console.dir , we get null

// b) document.getElementsByClassName('myclass') // to access element using class , , 
// 1)it returns heml collections 
// 2)its is  very similar to array 
// 3) if a elements is not present or the element of that class is not present we get emplty html collections

// c) document.getElementsByTagName('p') // to access elements using tag name

// to acess elements using query selector 
// a) document.querySelector('myid/myclass/tags') // we can pass anything in it 
// it will automatically detect what kind of elemts we want 

// let firstelements=document.querySelector("h1") 
// // query selector nodelist detan h NodeList is not a real array but you can .forEach() on i
// // queryselector joh sabse pehla ement honga usko return krdenga
// // but if we want ki sarey tags , ya id , ya class hojaen to hum lagateh h , queryselectorAll

// console.dir(firstelements)

// let classelements=document.querySelector(".heyclass")
// console.dir(classelements)

// let idelements=document.querySelector("#hey")
// console.dir(#hey)

// note -> there are 3 imp terms , child , parent , siglings 

// there are 2 main properteis , first is firstchild property , and the other is lastchild property
// console.dir(document.body.firstChild)

// in dom tree , there are 3 nodes espically -> first is text nodes , comment nodes , element nodes 
// in dom we work on element nodes only 
// document.querySelector('div').children // it will give us html nodes , what it contains 
// we use this for navigation

// homework -> to read and learn about first child , last child , text node , comment node , element node 


// doms manipulation important properties 
// note- which i make mistake most -> js is the case sensitive so we need to keep check it 

// 1) tagName  , return tags for element nodes 
// 2) innertext  , returns the text content of the element and all its childrene 
// 3) innerhtml  , returns the plain text or html contents in the element
// 4) textContent , returns textual content even for hidden elemets 



// innertext -> document.querySelector('div').innerText , >> 
// 'hey first>\n\nsecond'
// we can also use innertags . to change the data of text dynamically , like we are doing in line, 104 and 105 


// in innertext only text comes , but in innerhtml it comes with tags also 

// tagname -> document.queryselector.('div').taName , >> it gives undefined

// innerhtml->  its giveing all the details of my html with tags 
// we can also use innerhtml , if we want to change and add some tags , like span or whatever 

// '\n        <p>hey first&gt;</p>\n        <div>\n            <p>second</p>\n        </div>\n 

// textcontent ->  returns textual content even for hidden elements 

// let heading=document.querySelector('h1')
// console.dir(heading)


// create a h2 heading element with text ='hello javascript'.append  'from college students ' , to this text using js

// let heading=document.querySelector('h2')
// console.dir(heading)
// heading.innerText=heading.innerText.concat(" from apna college students ") 

// let divs=document.querySelectorAll('.box')
// console.log(divs[0])
// divs[0].innerText='how you doing broo'

//let comment = document.createComment("Mridul was here 👑");
// document.body.prepend(comment);.

/// attributes in dom's manipulation
// "Attributes are properties set directly on HTML elements to provide extra information or settings."


// what is attributes , attributes is whatever wriiten is the html tags , like 
// <div style='colour'></div> // that style tag is a attribute
//getAttribute reads. setAttribute rewrites 

// to get div attributes , means node ke attribute ko get krna hein then we use 
// 1) getAttribute(attr)
// 2) setAttribute('class','what you want to enter')
// let div=document.querySelector('div')
// console.log('div')
// let id=div.getAttribute('class')
// console.log(id)

// let a=document.querySelector('div')
// console.log(a.setAttribute('class','box'))

// to change the styles and all of the elements 
// node.style 
// a.style.backgroundColor='purple'

// how to add new element , but before that we need to create a node first , then we can do anything 

// let btnn=document.createElement('button')
// btnn.innerText='hey bro click me'
// a.before(btnn)

// there are 4 ways which are generally used to insert new elements 

// 1) node.append(ele)  => adds at the end of the node (inside)
// 2) node.prepend(ele) => adds at the start of the node (inside)
// 3) node.before(ele)  => adds before the node (outside)
// 4) node.after(ele)   => adds after the node (outside)

// how to delete any node 

// btnn.remove()

// there are 4 methods of class list , and its a newer version in doms 
//  element=document.querySelector('any element')

// 1) element.classlist.add('fade-in', 'glow') // you can add either multiple classes // or simply add one class
// 2) element.classlist.replace(oldClass, newClass) 
// 3) element.classlist.toggle() // if the class present it removes , if it doesnot present it adds
// 4) element.classlist.removes() // it will remove the class 
// 5) element.classlist.contains('class') // if it present it will give true , else false , we can use if condition

//element.className = 'btn red'; this way i can do , if i just want to add one clas name 

//question
// ✅ Question 1:
// Create a new button element.
// Give it a text: "click me"
// Set background color to red
// Set text color to white
// Insert the button as the first element inside the <body> tag
// let ele=document.createElement('button')
// ele.classList.add('buttonques')
// ele.innerText='click me'
// document.querySelector('body').prepend(ele)


// ✅ Question 2    :
// Create a <p> tag in HTML.
// Give it one class and add some CSS styling to that class (e.g., color, font-size).
// Now, in JS:
// Create a new class in CSS with different styling.
// Try adding this new class to the <p> tag using setAttribute('class', ...)
// Observe: your previous class gets overwritten.
// Now solve this using classList.add() so that both classes are active on the element.

// let bro=document.querySelector('.textpara')
// bro.setAttribute('class','newclass')
// bro.classList.add('mridul')

////////////// events ///////////////
// for more event type we can go to event mdn to check what we want to down and we can apply it

// in inline event handling JS has dominate over HTML 

// inline eveent handling 
// onclick
// ondblclick
// onmouseover  
//  exampless

{/* <button onclick="alert('hey');console.log('button was clicked')">click me </button>
    <button ondblclick="console.log('print hey')">click me 2 times</button>
    <div id="first"; onmouseover="console.log('you move to the mouse')"> 
        hey what are you doing
    </div> */}
// but this way the html code is too bulky so too avoid that we will do this in js 

// node.event // node means->accessing the element , and event is like onclick , ondblclick like this , and have to 
// put it in the function

// node.event=()=>{}

// let a = document.querySelector('#hey')
// a.onclick = () => {
//     console.log('it was clicked');
//     alert('hey')
// }



// event object
// node.event=(e/event // any variable here )=>{
//  console.log(e.type);
//  console.log(e.target);
//  console.log(e.clientX);
//  console.log(e.clientY);
//  console.log(e); }

// | Property      | What it tells you                     | Real Use Case                                  |
// | ------------- | ------------------------------------- | ---------------------------------------------- |
// | `e.type`      | What event occurred (click, dblclick) | Custom logic for different event types         |
// | `e.target`    | Which exact HTML element triggered it | Button clicks inside a big `div`, check origin |
// | `e.clientX/Y` | Mouse coordinates on the screen       | Build drawing apps, tooltips, popups           |
// | `e`           | Whole event with TONS of info         | Inspect default behavior, modifiers, etc.      |

// event listeners-
// 1) node.addEventListener(event,callback)
// 2) node.removeEventListener(event,callback)  

// note-> the callback reference should be same to remove 
// callback is a event handler

// let a = document.querySelector('#hey')
// const fu=()=>{
//     console.log('hey how')
//     ;alert('broo')
// }
// a.addEventListener('dblclick',fu)

// with the HELP OF EVENT LISTENER , we can work on the same event multiple times
// let a = document.querySelector('#hey')
// a.addEventListener('dblclick', (evt) => {
//     console.log('hey how')
//     console.log(evt.type)
//     console.log(evt.target)
// })
// a.addEventListener('dblclick', () => {
//     alert('broo')
// })

// to remove events , we must store them in a variable then we can delete them , otherwise 
// we cant delete them , cause the memory they stored is diff in js , that' why IF WE DIRECTLY COPY THE 
// FUNCTION AND PASS IT WILL NOT DO THING

