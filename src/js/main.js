import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import maskPhone from './modules/maskPhone';
import checkTextInput from './modules/checkTextInput';
import showMoreStyles from './modules/showMoreStyles';
import calcPrice from './modules/calcPrice';
import filter from './modules/filter';
import pictureView from './modules/pictureView';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drop from './modules/drop';


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  modals();
  sliders('.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
  sliders('.main-slider-item', '', '', true);
  forms();
  maskPhone('[name="phone"]');
  checkTextInput('[name="name"]');
  checkTextInput('[name="message"]');
  showMoreStyles('.button-styles', '.styles-2');
  calcPrice('#size', '#material', '#options', '.promocode', '.calc-price');
  filter();
  pictureView('.sizes-block');
  accordion('.accordion-heading', '.accordion-block');
  burger('.burger-menu', '.burger');
  scrolling('.pageup');
  drop();
});