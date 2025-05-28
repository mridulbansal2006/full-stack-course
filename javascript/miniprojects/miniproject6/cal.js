let a = document.querySelectorAll('.boxstyling')
let result = ''
let output = document.querySelector('#result')
a.forEach(button => {
    button.addEventListener('click', () => {

        if ('0123456789+-/.*'.includes(button.innerText)) {
            result += button.innerText
        } else if (button.innerText === ('cross')) {
            result = ''
        } else if (button.innerText === ('C')) {
            result = result.slice(0, -1)
        } else if (button.innerText === '=') {
            try {
                result = eval(result)
                output.innerText = result
            } catch {
                output.innerText = 'ERROR'
                result = ''
            }
        }
         output.innerText = result;
    }
    )
})




