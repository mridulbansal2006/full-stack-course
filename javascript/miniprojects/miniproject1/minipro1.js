let body=document.querySelector('body')
let header=document.querySelector('#heading')
let divbox=document.querySelector('#buttonsdiv')
let light=document.querySelector('#light')
let dark=document.querySelector('#dark')
let hacker=document.querySelector('#hacker')



const lightchanges=()=>{
    header.classList.remove('headingdark')
    body.classList.remove('bodydark')
    header.classList.remove('headinghacker')
    body.classList.remove('bodyhacker')
    

    header.classList.add('headinglight')
    body.classList.add('bodynew')
    light.classList.add('lighttheme')

}
light.addEventListener('click',lightchanges)

const darkchanges=()=>{
    body.classList.remove('bodynew')
    header.classList.remove('headinglight')
    header.classList.remove('headinghacker')
    body.classList.remove('bodyhacker')

    header.classList.add('headingdark')
    body.classList.add('bodydark')
    dark.classList.add('darktheme')
}
dark.addEventListener('click',darkchanges)

const hackerchanges=()=>{
    body.classList.remove('bodynew')
    header.classList.remove('headinglight')
    header.classList.remove('headingdark')
    body.classList.remove('bodydark')

    header.classList.add('headinghacker')
    body.classList.add('bodyhacker')
    hacker.classList.add('hackertheme')

}
hacker.addEventListener('click',hackerchanges)
