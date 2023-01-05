let navigation = document.querySelector('.navigation');
let close = document.querySelector('.close');

navigation.addEventListener('click', () => {
  navigation.classList.add('active')
})

close.addEventListener('click', () => {
  navigation.classList.remove('active')
})