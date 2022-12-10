const panels = document.querySelectorAll('.panel')

let content = document.getElementsByClassName('content')
let coffe = document.getElementById('coffe')
let code = document.getElementById('code')
let money = document.getElementById('money')
let trading = document.getElementById('trading')
let setup = document.getElementById('setup')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

coffe.addEventListener('click',() => {
    content[0].innerText = "Have a refrshing coffee.";
})

code.addEventListener('click',() => {
    content[0].innerText = "The routine of a REAL Developer";
})

money.addEventListener('click',() => {
    content[0].innerText = "Why coders are highly paid ???";
})

trading.addEventListener('click',() => {
    content[0].innerText = "99 % traders loose money, be in 1 %.";
})

setup.addEventListener('click',() => {
    content[0].innerText = "Setup is everything.";
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
