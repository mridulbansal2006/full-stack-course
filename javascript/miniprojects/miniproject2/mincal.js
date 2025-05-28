
let add=document.querySelector('#add')
let subtract=document.querySelector('#subtract')
let multiply=document.querySelector('#multiply')
let divide=document.querySelector('#divide')


const sum=()=>{
    let firstnumber=document.querySelector('#firstnumber').value
    let secondnumber=document.querySelector('#secondnumber').value
    let addresult= (Number(firstnumber))+(Number(secondnumber));

    let oldelement=document.querySelector('.result')
    oldelement?.remove();
 
    let printe=document.createElement('h1')
    printe.innerText=addresult
    printe.classList.add('result')
    document.body.appendChild(printe);
}

add.addEventListener('click',sum)
const sub=()=>{
    let firstnumber=document.querySelector('#firstnumber').value
    let secondnumber=document.querySelector('#secondnumber').value
    let subresult= (Number(firstnumber))-(Number(secondnumber));

    let oldelement=document.querySelector('.result')
    oldelement?.remove();

    let printe=document.createElement('h1')
    printe.innerText=subresult
    printe.classList.add('result')
    document.body.appendChild(printe);


}
subtract.addEventListener('click',sub)

const mult=()=>{
    let firstnumber=document.querySelector('#firstnumber').value
    let secondnumber=document.querySelector('#secondnumber').value
    let multiplyresult= (Number(firstnumber))*(Number(secondnumber));

    let oldelement=document.querySelector('.result')
    oldelement?.remove();

    let printe=document.createElement('h1')
    printe.innerText=multiplyresult
    printe.classList.add('result')
    document.body.appendChild(printe);

}
multiply.addEventListener('click',mult)


const divi=()=>{
    let firstnumber=document.querySelector('#firstnumber').value
    let secondnumber=document.querySelector('#secondnumber').value
    let divideresult= (Number(firstnumber))/(Number(secondnumber));

    let oldelement=document.querySelector('.result')
    oldelement?.remove();

    let printe=document.createElement('h1')
    printe.innerText=divideresult
    printe.classList.add('result')
    document.body.appendChild(printe);

}
divide.addEventListener('click',divi)
