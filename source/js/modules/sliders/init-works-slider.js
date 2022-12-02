const worksSlider = document.querySelector('[data-slider="works"]');

const enableSwiper = (slider) => {

  let mySwiper = new Swiper(slider, {
    // modules: [Keyboard, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: true,
    autoHeight: true,
    pagination: {el: '.works__pagination', type: 'fraction'},
    navigation: {nextEl: '.works__navigation_next', prevEl: '.works__navigation_prev'},
  });
};

const initWorksSlider = () => {
  if (worksSlider) {
    enableSwiper(worksSlider);
  }
};

export {initWorksSlider};
