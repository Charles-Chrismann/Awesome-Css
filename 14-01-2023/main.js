let login = document.querySelector('.login')
let register = document.querySelector('.create')

let container = document.querySelector('.container')

login.addEventListener('click', () => {
  container.classList.add('signinForm')
})

register.addEventListener('click', () => {
  container.classList.remove('signinForm')
})