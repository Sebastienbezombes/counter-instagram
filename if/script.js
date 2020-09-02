const diviseBtn = document.querySelector('.diviseValue')
const lessBtn = document.querySelector('.lessValue')
const addBtn = document.querySelector('.addValue')
const multiplieBtn = document.querySelector('.multiplieValue')

const p = document.querySelector('p')
let counter = 0

diviseBtn.addEventListener('click', () => {
    counter /= 2
    p.textContent = counter
})

lessBtn.addEventListener('click', () => {
    counter--
    p.textContent = counter
})

addBtn.addEventListener('click', () => {
    counter++
    p.textContent = counter
})

multiplieBtn.addEventListener('click', () => {
    counter *= 2
    p.textContent = counter
})