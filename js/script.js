const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');


modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);


const modalMenu = document.querySelector('.backdrop-menu');
const modalMenuBtnOpen = document.querySelector('.modal-menu-btn-open');
const modalMenulBtnClose = document.querySelector('.modal-menu-btn-close');

const toggleModalMenu = () => modalMenu.classList.toggle('is-hidden');


modalMenuBtnOpen.addEventListener('click', toggleModalMenu);
modalMenulBtnClose.addEventListener('click', toggleModalMenu);


// const swiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 1,
//     spaceBetween: 20,
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//       },
//       1280: {
//         slidesPerView: 3,
//       },
//     },
//     pagination: {
//       el: '.pagination',
//       bulletClass: 'pagination__button',
//       bulletActiveClass: 'pagination__button--active',
//     },
//     navigation: {
//       nextEl: '.carousel-button.next',
//       prevEl: '.carousel-button.prev',
//     },
//   });




const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        768: {
          slidesPerView: 2,
        },
        // when window width is >= 640px
        1280: {
          slidesPerView: 3,
        }
        
      },
    loop: true,
    pagination: {
      el: '.pagination',
      bulletClass: 'pagination__button'
    },
    navigation: {
      nextEl: '.procedurs__btn.next',
      prevEl: '.procedurs__btn.prev',
    },
  });