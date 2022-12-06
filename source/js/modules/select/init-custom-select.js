import {CustomSelect} from './custom-select';


const initCustomSelect = () => {
  if (document.querySelectorAll('[data-select]').length > 0) {
    const select = new CustomSelect();
    select.init();
  }
};

export {initCustomSelect};
