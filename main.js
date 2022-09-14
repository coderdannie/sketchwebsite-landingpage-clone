// const button = document.querySelectorAll('.sub-nav-link');
// // console.log(button);
// document.addEventListener('DOMContentLoaded', function () {
//   button.forEach(item => {
//     item.addEventListener('mouseover', function () {
//       const ul = item.nextElementSibling;
//       ul.classList.remove('open');
//     });
//   });
//   button.forEach(item => {
//     item.addEventListener('mouseleave', function () {
//       const ul = item.nextElementSibling;
//       ul.classList.add('open');
//     });
//   });
// });

const toggleBar = document.querySelector('#toggleBar');
const body = document.body;
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');
// console.log(fadeElems);
const ulContainer = document.querySelector('#headerNav');
// console.log(ulContainer);
let overLay = document.querySelector('.overlay');
toggleBar.addEventListener('click', () => {
  console.log('clicked');
  if (header.classList.contains('active')) {
    ulContainer.classList.add('action');
    header.classList.remove('active');
    body.classList.remove('noscroll');
    fadeElems.forEach(function (element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  } else {
    header.classList.add('active');
    ulContainer.classList.remove('action');
    body.classList.add('noscroll');
    fadeElems.forEach(function (element) {
      element.classList.add('fade-in');
      element.classList.remove('fade-out');
    });
  }
});

const button = document.querySelectorAll('.header__sub-menu-flex');
button.forEach(item => {
  item.addEventListener('click', function () {
    const ul = item.nextElementSibling;
    if (ul.classList.contains('open')) {
      ul.classList.remove('open');
    } else {
      ul.classList.add('open');
    }
  });
});
