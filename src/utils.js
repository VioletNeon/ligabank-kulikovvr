const KEYCODE_TAB = 9;
const NAME_KEYBOARD_TAB = 'Tab';
const SECOND_INDEX_OF_STRING = 1;
const TWENTY_YEARS = 20;
const ONE_YEAR = '1';
const FOUR_YEAR = '4';
const FIVE_YEARS = 5;
const YEARS = 'года';
const YEAR = 'год';
const YEARS_IN_OTHER = 'лет';

const scrollToBlock = (element) => {
  setTimeout(() => element.scrollIntoView(true), 0);
};

const trapFocus = (element) => {
  const focusableElements = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (evt) => {
    const isTabPressed = (evt.key === NAME_KEYBOARD_TAB || evt.keyCode === KEYCODE_TAB);

    if (!isTabPressed) {
      return;
    }

    if (evt.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        evt.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }
  });
};

const getTernaryItem = (item) => item.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const getValidDescription = (terms) => {
  if (terms > TWENTY_YEARS) {
    const secondNumber = terms[SECOND_INDEX_OF_STRING];
    if (secondNumber > ONE_YEAR && secondNumber <= FOUR_YEAR) {
      return YEARS;
    } else if (secondNumber === ONE_YEAR) {
      return YEAR;
    }
  } else if (terms < FIVE_YEARS) {
    if (terms > ONE_YEAR && terms <= FOUR_YEAR) {
      return YEARS;
    } else if (terms === ONE_YEAR) {
      return YEAR;
    }
  }
  return YEARS_IN_OTHER;
};

export {scrollToBlock, trapFocus, getTernaryItem, getValidDescription};
