import {initProjectsSlider} from './init-projects-slider';
import {initStagesSlider} from './init-stages-slider';
import {initWorksSlider} from './init-works-slider';
import {initNewsSlider} from './init-news-slider';
import {initProductSlider} from './init-product-slider';

const initSliders = () => {
  initProjectsSlider();
  initStagesSlider();
  initWorksSlider();
  initNewsSlider();
  initProductSlider();
};

export {initSliders};
