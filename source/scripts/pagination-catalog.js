const PAGINATION_INDEX = {
  MIN: 0,
  MAX: 2,
};

const pagination = document.querySelector('.pagination');
const switchButtonPrev = pagination.querySelector('.pagination__button--prev');
const switchButtonNext = pagination.querySelector('.pagination__button--next');
const pageNumberButtons = pagination.querySelectorAll('.pagination__page-number');

let currentPageNumber;
let currentId;
let currentIndex;
let newIndex;
let newId;

const checkIndex = (index) => {
  if (index === PAGINATION_INDEX.MIN) {
    switchButtonPrev.style.display = 'none';
  } else {
    switchButtonPrev.style.display = 'flex';
  }
  if (index === PAGINATION_INDEX.MAX) {
    switchButtonNext.style.display = 'none';
  } else {
    switchButtonNext.style.display = 'flex';
  }
};

const checkCurrentIndex = () => {
  currentPageNumber = pagination.querySelector('.pagination__page-number--current');
  currentId = currentPageNumber.id;
  currentIndex = Number(currentId[0]);
};

const changePageNumber = () => {
  currentPageNumber = pagination.querySelector('.pagination__page-number--current');
  currentPageNumber.classList.remove('pagination__page-number--current');
  currentPageNumber.removeAttribute('tabindex');
  pageNumberButtons[newIndex].classList.add('pagination__page-number--current');
  pageNumberButtons[newIndex].blur();
  pageNumberButtons[newIndex].setAttribute('tabindex', '-1');
};

const onPageNumberButtonClick = (evt) => {
  newId = evt.target.id;
  newIndex = Number(newId[0]);
  checkCurrentIndex();

  if (currentIndex !== newIndex) {
    changePageNumber(newIndex);
    checkIndex(newIndex);
  }
};

const initPaginationButtons = () => {
  pageNumberButtons.forEach((button) => button.addEventListener('click', onPageNumberButtonClick));
};

const initPagination = () => {
  checkCurrentIndex();
  checkIndex(currentIndex);
  initPaginationButtons();
};

export { initPagination };
