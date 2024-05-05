const price = {
  max: 1055,
  min: 0,
};
const step = 1;

const rangeContainer = document.querySelector('.range');

const initRangeSlider = () => {
  const rangeSlider = rangeContainer.querySelector('.range__slider');
  const inputMin = rangeContainer.querySelector('#min-price');
  const inputMax = rangeContainer.querySelector('#max-price');

  if (!rangeSlider || !inputMin || !inputMax) {
    return;
  }
  const inputs = [inputMin, inputMax];

  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    range: {
      min: price.min,
      max: price.max
    },
    step: step,
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
