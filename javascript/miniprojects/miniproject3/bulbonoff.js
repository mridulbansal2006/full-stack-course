let button = document.querySelector('#buttononoff')

button.addEventListener('click', () => {
    let bulbimage = document.querySelector('#bulbimage')
    bulbimage.classList.toggle('bulbon')
    bulbimage.classList.toggle('bulboff')

})
