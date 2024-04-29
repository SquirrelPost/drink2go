const BG_COLORS = [
  'slider--flat-white', 'slider--lavender-latte', 'slider--espresso'
];

const minSlideIndex = 0;
const maxSlideIndex = 2;

const slider = document.querySelector('.slider');
const switchButtonPrev = slider.querySelector('.slide-switch__button--prev');
const switchButtonNext = slider.querySelector('.slide-switch__button--next');
const paginationButtons = slider.querySelectorAll('.slide-pagination__button');
const sliderItems = slider.querySelectorAll('.slider__item');

const listOfSliderClasses = slider.classList;
let currentIndex;
let currentButton;
let newIndex;
let currentPaginationButton;
let currentSliderItem;
let currentId;

const checkIndex = (index) => {
  if (index === minSlideIndex) {
    switchButtonPrev.disabled = true;
  } else {
    switchButtonPrev.disabled = false;
  }
  if (index === maxSlideIndex) {
    switchButtonNext.disabled = true;
  } else {
    switchButtonNext.disabled = false;
  }
};

const calcNewIndex = (evt, oldIndex) => {
  currentButton = evt.target.classList[1];
  if (currentButton.includes('next')) {
    newIndex = oldIndex + 1;
  } if (currentButton.includes('prev')) {
    newIndex = oldIndex - 1;
  } return newIndex;
};

const changeBgColor = () => {
  checkIndex(newIndex);
  slider.classList.replace(BG_COLORS[currentIndex], BG_COLORS[newIndex]);
};

const changePagination = () => {
  currentPaginationButton = slider.querySelector('.slide-pagination__button--current');
  currentPaginationButton.classList.remove('slide-pagination__button--current');
  currentPaginationButton.setAttribute('href', '#');
  paginationButtons[newIndex].classList.add('slide-pagination__button--current');
  paginationButtons[newIndex].removeAttribute('href');
};

const changeSliderItem = () => {
  currentSliderItem = slider.querySelector('.slider__item--current');
  currentSliderItem.classList.remove('slider__item--current');
  sliderItems[newIndex].classList.add('slider__item--current');
};

const setChanges = () => {
  changeBgColor(newIndex);
  changePagination(newIndex);
  changeSliderItem(newIndex);
};

const onSwitchButtonClick = (evt) => {
  currentIndex = BG_COLORS.indexOf(listOfSliderClasses[1]);
  calcNewIndex(evt, currentIndex);
  setChanges(newIndex);
};

const initSwitchButtons = () => {
  switchButtonPrev.addEventListener('click', onSwitchButtonClick);
  switchButtonNext.addEventListener('click', onSwitchButtonClick);
};

const onPaginationButtonClick = (evt) => {
  currentId = evt.target.id;
  newIndex = Number(currentId);
  currentIndex = BG_COLORS.indexOf(listOfSliderClasses[1]);
  setChanges(newIndex);
};

const initPaginationButtons = () => {
  paginationButtons.forEach((button) => button.addEventListener('click', onPaginationButtonClick));
};

const initSlider = () => {
  currentIndex = BG_COLORS.indexOf(listOfSliderClasses[1]);
  checkIndex(currentIndex);
  initSwitchButtons();
  initPaginationButtons();
};

export { initSlider };
