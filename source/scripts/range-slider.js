const PRICE = {
  MAX: 1068,
  MIN: 0,
};
const STEP = 1;

const initRangeSlider = () => {
  const rangeSlider = document.querySelector('.range__slider');
  const inputMin = document.querySelector('#min-price');
  const inputMax = document.querySelector('#max-price');

  if (!rangeSlider || !inputMin || !inputMax) {
    return;
  }
  const inputs = [inputMin, inputMax];

  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      min: PRICE.MIN,
      max: PRICE.MAX
    },
    step: STEP,
  });

  rangeSlider.noUiSlider.on('update', (values, handle) => {
    inputs[handle].value = Number(values[handle]);
  });

  inputMin.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function () {
    rangeSlider.noUiSlider.set([null, this.value]);
  });
};

export { initRangeSlider };
