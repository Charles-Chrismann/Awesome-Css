let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation')

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active')
})

let list = document.querySelectorAll('.list')
function activeLink() {
  console.log('tt')
  list.forEach(item => {
    item.classList.remove('active')
    this.classList.add('active')
  })
}
list.forEach(item => {
  item.addEventListener('click', activeLink)
})
