const btns = document.querySelectorAll('button')
const p = document.querySelector('p')
let counter = 0

for (let i = 0; i <= btns.length; i++) {
    btns[i].addEventListener('click', () => {
        i === 0 ? counter /= 2 : ''
        i === 1 ? counter-- : ''
        i === 2 ? counter++ : ''
        i === 3 ? counter *= 2 : ''
        p.textContent = counter
    })
}