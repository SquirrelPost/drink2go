import { initNav } from './nav.js';
import { initSlider } from './slider.js';
import { initRangeSlider } from './range-slider.js';
import { initPagination } from './pagination-catalog.js';

const initPage = () => {
  initNav();
  initSlider();
  initRangeSlider();
  initPagination();
};

initPage();

