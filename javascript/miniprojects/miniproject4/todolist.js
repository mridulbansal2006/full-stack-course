
let addbutton = document.querySelector('#addbutton')
let deletebutton = document.querySelector('#delete')
addbutton.addEventListener('click', () => {
    let listitem = document.querySelector('#inpu').value
    let newtask = document.createElement('li')
    newtask.classList.add('buttondesignoftasks')
    document.querySelector('#todolist').append(newtask)
    newtask.innerText = listitem
    newtask.addEventListener('click', () => {
        newtask.classList.toggle('completed')
    })
    document.querySelector('#inpu').value = '';
})

deletebutton.addEventListener('click', () => {

    let listofelements = document.querySelectorAll('#todolist li')
    if (listofelements.length === 0) {
        let mess = document.createElement('h1')
        mess.classList.add('textmess')
        mess.innerText = 'No element to delete'
        document.body.append(mess)
        setTimeout(() => {
        mess.remove()
    },2000);

    }else{let elementdelete=Number(prompt('enter the number which element to delte'))
    listofelements[elementdelete-1].remove()}
})


