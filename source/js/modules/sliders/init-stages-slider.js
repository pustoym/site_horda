const stagesSlider = document.querySelector('[data-slider="stages"]');

const enableSwiper = (slider) => {

  let mySwiper = new Swiper(slider, {
    // modules: [Keyboard, Pagination, Navigation],
    pagination: {
      el: '.stages__paginations',
      // bulletActiveClass: 'is-active',
      // bulletClass: 'swiper-pagination-bullet',
      // wrapperClass: 'stages__slides-wrapper',
      // slideClass: 'stages__slide',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
      renderBullet(index, className) {
        let title = this.slides[index].querySelector('.stage-item__title').textContent;
        return `<button class="${className}" type="button">${index + 1}. ${title}</button>`;
      },
    },
    breakpoints: {
      768: {
        pagination: {
          dynamicMainBullets: 2,
        },
      },
      1280: {
        pagination: {
          dynamicMainBullets: 4,
        },
      },
    },
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 800,
    navigation: {
      nextEl: '.stages__slider-arrow_next',
    },
  });

  document.querySelectorAll('.stage-item__button').forEach((button) => {
    button.addEventListener('click', (evt) => {
      evt.preventDefault();
      mySwiper.slideNext();
    });
  });

};

const initStagesSlider = () => {
  if (stagesSlider) {
    enableSwiper(stagesSlider);
  }
};

export {initStagesSlider};
