const btns = document.querySelectorAll('button')
const p = document.querySelector('p')
let counter = 0

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        switch (i) {
            case 0:
                counter /= 2
                break
            case 1:
                counter--
                break
            case 2:
                counter++
                break
            case 3:
                counter *= 2
                break
        }
        p.textContent = counter
    })
}
