const newsSlider = document.querySelector('[data-slider="news"]');

const enableSwiper = (slider) => {

  let mySwiper = new Swiper(slider, {
    // modules: [Keyboard],
    slidesPerView: 'auto',
    spaceBetween: 10,
    keyboard: true,
    breakpoints: {
      768: {
        spaceBetween: 30,
      },
    },
  });
};

const initNewsSlider = () => {
  if (newsSlider) {
    enableSwiper(newsSlider);
  }
};

export {initNewsSlider};
