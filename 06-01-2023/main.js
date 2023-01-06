let sec1 = document.querySelector('.sec1');
let sec2 = document.querySelector('.sec2');

window.addEventListener('scroll', () => {
  let value = window.scrollY;
  sec1.style.clipPath = `circle(${value*1.15}px at 0 0)`;
  sec2.style.clipPath = `circle(${value}px at 100% 100%)`;
})