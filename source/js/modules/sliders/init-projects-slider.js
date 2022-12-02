const projectsSlider = document.querySelector('[data-slider="projects"]');

const enableSwiper = (slider) => {

  let mySwiper = new Swiper(slider, {
    // modules: [Keyboard, Mousewheel],
    slideClass: 'carousel__slide',
    slidesPerView: 'auto',
    spaceBetween: 11,
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
    mousewheel: {
      eventsTarget: '.swiper-wrapper',
      releaseOnEdges: true,
    },
    keyboard: true,
  });
};

const initProjectsSlider = () => {
  if (projectsSlider) {
    enableSwiper(projectsSlider);
  }
};

export {initProjectsSlider};
