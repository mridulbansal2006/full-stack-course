function validation() {
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value
    let valid = true
    let message = document.querySelector('#message')
    let emailmess = document.querySelector('#emailerror')
    let passmess = document.querySelector('#passworderror')
    message.innerText = '';
    emailmess.innerText = ''
    passmess.innerText = ''

    if (name.trim() === '') {
        message.innerText += 'NAME IS EMPTY'
        valid = false
    } else if (!/^[a-zA-Z]+$/.test(name)) {
        message.innerText += 'name must contain only alphabets'
        valid = false;
    } else if (name.length < 5) {
        message.innerText += 'name should be greater than 5'
        valid = false
    } else {
        valid = true
        message.innerText = ''
    }

    if (email.trim() === '') {
        emailmess.innerText = 'EMAIL IS EMPTY'
        valid = false
    } else {
        valid = true
        emailmess.innerText = ''
    }

    if (password.trim() === '') {
        passmess.innerText = 'password is empty'
        valid = false
    } else if ((!/^[a-zA-Z]+$/.test(password))) {
        passmess.innerText = 'password must contain only alphabets'

        valid = false;
    } else if (password.length < 5) {
        passmess.innerText = 'password length should be greater than 5'
        valid = false
    } else {
        valid = true
        passmess.innerText = ''
    }
    return valid
}
