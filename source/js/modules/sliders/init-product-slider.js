const productSlider = document.querySelector('[data-slider="product"]');
const productThumbsSlider = document.querySelector('[data-slider="product-thumbs"]');

let mySwiper;
let thumbsSwiper;

const enableSwiper = (slider, thumbSlider) => {

  thumbsSwiper = new Swiper(thumbSlider, {
    // spaceBetween: 35,
    slidesPerView: 'auto',
    // freeMode: true,
    watchSlidesProgress: true,
  });

  mySwiper = new Swiper(slider, {
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
};

const initProductSlider = () => {
  if (productSlider) {
    enableSwiper(productSlider, productThumbsSlider);
  }
};

export {initProductSlider};
