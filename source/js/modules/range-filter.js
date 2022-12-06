import noUiSlider from 'nouislider';

const filterRange = document.querySelector('[data-range="filter-range"]');

const enableRange = (range) => {
  noUiSlider.create(range, {
    start: [250, 850],
    tooltips: true,
    connect: true,
    step: 1,
    range: {
      'min': 0,
      'max': 850,
    },
    format: {
      to(value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from(value) {
        return parseFloat(value);
      },
    },
    // cssPrefix: 'custom-range__',
  });
};

const initRangeFilter = () => {
  if (filterRange) {
    enableRange(filterRange);
  }
};

export {initRangeFilter};
