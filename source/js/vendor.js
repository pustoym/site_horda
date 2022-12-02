import './vendor/swiper';
// import Swiper, {Keyboard, Mousewheel, Pagination, Navigation} from 'swiper';

// const projectCarousel = new Swiper('[data-slider="projects"]', {
//   modules: [Keyboard, Mousewheel],
//   slideClass: 'carousel__slide',
//   slidesPerView: 'auto',
//   spaceBetween: 11,
//   breakpoints: {
//     768: {
//       slidesPerView: 'auto',
//       spaceBetween: 30,
//     },
//     992: {
//       spaceBetween: 30,
//       slidesPerView: 3,
//     },
//   },
//   mousewheel: {
//     eventsTarget: '.swiper-wrapper',
//     releaseOnEdges: true,
//   },
//   keyboard: true,
// });


// const stageSlider = new Swiper('[data-slider="stages"]', {
//   modules: [Keyboard, Pagination, Navigation],
//   pagination: {
//     el: '.stages__paginations',
//     // bulletActiveClass: 'is-active',
//     // bulletClass: 'swiper-pagination-bullet',
//     // wrapperClass: 'stages__slides-wrapper',
//     // slideClass: 'stages__slide',
//     clickable: true,
//     dynamicBullets: true,
//     dynamicMainBullets: 2,
//     renderBullet(index, className) {
//       let title = this.slides[index].querySelector('.stage-item__title').textContent;
//       return `<button class="${className}" type="button">${index + 1}. ${title}</button>`;
//     },
//   },
//   breakpoints: {
//     768: {
//       pagination: {
//         dynamicMainBullets: 2,
//       },
//     },
//     1280: {
//       pagination: {
//         dynamicMainBullets: 4,
//       },
//     },
//   },
//   slidesPerView: 1,
//   spaceBetween: 30,
//   speed: 800,
//   navigation: {
//     nextEl: '.stages__slider-arrow_next',
//   },
// });

// document.querySelectorAll('.stage-item__button').forEach((button) => {
//   button.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     stageSlider.slideNext();
//   });
// });

// const sliderOfWorks = new Swiper('[data-slider="works"]', {
//   modules: [Keyboard, Pagination, Navigation],
//   slidesPerView: 1,
//   spaceBetween: 30,
//   keyboard: true,
//   autoHeight: true,
//   pagination: {el: '.works__pagination', type: 'fraction'},
//   navigation: {nextEl: '.works__navigation_next', prevEl: '.works__navigation_prev'},
// });

// const sliderBlogPosts = new Swiper('[data-slider="news"]', {
//   modules: [Keyboard],
//   slidesPerView: 'auto',
//   spaceBetween: 10,
//   keyboard: true,
//   breakpoints: {
//     768: {
//       spaceBetween: 30,
//     },
//   },
// });
