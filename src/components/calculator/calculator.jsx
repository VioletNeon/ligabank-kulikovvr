import React, {useState, useRef} from 'react';
import {scrollToBlock} from '../../utils';

const EXAMPLE_PROPERTY_VALUE = '2000000';
const EXAMPLE_LOAN_TERMS = '5';
const ONE_HUNDRED_PERCENT = 100;
const TENTH_PART_PERCENT = 0.1;
const NULL_MATERNAL_CAPITAL_VALUE = 0;
const MATERNAL_CAPITAL_VALUE = 470000;
const NUMBER_OF_MONTHS_IN_YEAR = 12;
const COEFFICIENT = 1;
const PERMISSIBLE_PERCENTAGE_PAYMENT_OF_INCOME = 45;
const START_APPLICATION_NUMBER = '0011';
const TIMER_IN_MILLISECONDS = 2000;

const creditTypes = {
  DEFAULT_TITTLE_CREDIT_TYPE: 'Выберите цель кредита',
  MORTGAGE_LENDING_TYPE: 'Ипотечное кредитование',
  AUTOMOBILE_LOAN_TYPE: 'Автомобильное кредитование',
};

const credit = {
  [creditTypes.DEFAULT_TITTLE_CREDIT_TYPE]: {
    type: '',
    minPropertyValue: 0,
    maxPropertyValue: 0,
    stepPropertyValue: 0,
    tittlePropertyValue: '',
    tittleLoanAmount: '',
    descriptionTypeCredit: '',
    startCoefficientOfInitialFee: 0,
    startPercentagePartOfInitialFee: 0,
    minLoanAmount: 0,
    minLoanTerms: 0,
    maxLoanTerms: 0,
    estimatedPercentageLevelMin: 0,
    estimatedPercentageLevelMax: 0,
    mostPercentageRate: '',
    leastPercentageRate: '',
    determiningFactorValue: 0,
  },
  [creditTypes.MORTGAGE_LENDING_TYPE]: {
    type: 'Ипотека',
    minPropertyValue: 1200000,
    maxPropertyValue: 25000000,
    stepPropertyValue: 100000,
    tittlePropertyValue: 'Стоимость недвижимости',
    tittleLoanAmount: 'Сумма ипотеки',
    descriptionTypeCredit: 'ипотечные кредиты',
    startCoefficientOfInitialFee: 0.1,
    startPercentagePartOfInitialFee: 10,
    minLoanAmount: 500000,
    minLoanTerms: 5,
    maxLoanTerms: 30,
    estimatedPercentageLevelMin: 15,
    estimatedPercentageLevelMax: 15,
    mostPercentageRate: '9,40',
    leastPercentageRate: '8,50',
    determiningFactorValue: 0,
  },
  [creditTypes.AUTOMOBILE_LOAN_TYPE]: {
    type: 'Автокредит',
    minPropertyValue: 500000,
    maxPropertyValue: 5000000,
    stepPropertyValue: 50000,
    tittlePropertyValue: 'Стоимость автомобиля',
    tittleLoanAmount: 'Сумма автокредита',
    descriptionTypeCredit: 'автокредиты',
    startCoefficientOfInitialFee: 0.2,
    startPercentagePartOfInitialFee: 20,
    minLoanAmount: 200000,
    minLoanTerms: 1,
    maxLoanTerms: 5,
    estimatedPercentageLevelMin: 15,
    estimatedPercentageLevelMax: 16,
    mostPercentageRate: '8,50',
    leastPercentageRate: '3,50',
    determiningFactorValue: 2000000,
  },
};

const getTernaryItem = (item) => item.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
const getValidNumber = (value) => value.replace(",", ".");

function Calculator({calculatorSectionRef}) {
  const [isSelectClosed, setSelectState] = useState(true);
  const [selectOption, setSelectOption] = useState(creditTypes.DEFAULT_TITTLE_CREDIT_TYPE);
  const [propertyValue, setPropertyValue] = useState(EXAMPLE_PROPERTY_VALUE);
  const [initialFee, setInitialFee] = useState(`${propertyValue * TENTH_PART_PERCENT}`);
  const [loanTerms, setLoanTerms] = useState(EXAMPLE_LOAN_TERMS);
  const [isMaternalCapital, setMaternalCapitalState] = useState(false);
  const [isThreeStepHidden, setThreeStepState] = useState(true);
  const [applicationNumber, setApplicationNumber] = useState(START_APPLICATION_NUMBER);
  const [isAutoInsurance, setAutoInsuranceState] = useState(true);
  const [isLifeInsurance, setLifeInsuranceState] = useState(false);
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const inputName = useRef(null);

  const creditPurpose = credit[selectOption];
  const maternalCapital = isMaternalCapital ? MATERNAL_CAPITAL_VALUE : NULL_MATERNAL_CAPITAL_VALUE;
  const isIncorrectPropertyValue = propertyValue > creditPurpose.maxPropertyValue || propertyValue < creditPurpose.minPropertyValue;
  const loanAmount = propertyValue - initialFee - maternalCapital;
  const percentageInitialFee = (initialFee * ONE_HUNDRED_PERCENT) / propertyValue;

  const getPercentageRate = () => {
    if (selectOption === creditTypes.MORTGAGE_LENDING_TYPE) {
     return percentageInitialFee < creditPurpose.estimatedPercentageLevelMax ? creditPurpose.mostPercentageRate : creditPurpose.leastPercentageRate;
    } else if (selectOption === creditTypes.AUTOMOBILE_LOAN_TYPE) {
      let rate = propertyValue < creditPurpose.determiningFactorValue ? creditPurpose.estimatedPercentageLevelMax : creditPurpose.estimatedPercentageLevelMin;
      if (isAutoInsurance && isLifeInsurance) {
        rate = creditPurpose.leastPercentageRate;
      } else if (isAutoInsurance || isLifeInsurance) {
        rate = creditPurpose.mostPercentageRate;
      }
      return `${rate}`;
    }
    return creditPurpose.mostPercentageRate;
  }

  const percentageRate = getPercentageRate();
  const monthlyPercentageRate = (getValidNumber(percentageRate) / ONE_HUNDRED_PERCENT) / NUMBER_OF_MONTHS_IN_YEAR;
  const monthlyPayment = Math.round(loanAmount * (monthlyPercentageRate + monthlyPercentageRate / (((COEFFICIENT + monthlyPercentageRate) ** (loanTerms * NUMBER_OF_MONTHS_IN_YEAR)) - COEFFICIENT)));
  const requiredIncome = Math.round(monthlyPayment * ONE_HUNDRED_PERCENT / PERMISSIBLE_PERCENTAGE_PAYMENT_OF_INCOME);

  const handleToggleClick = () => {
    setSelectState(!isSelectClosed);
  };

  const handleOptionClick = (evt) => {
    if (evt.target.dataset.select !== 'option') {
      return;
    }
    setSelectOption(evt.target.dataset.value);
    setInitialFee(`${propertyValue * credit[evt.target.dataset.value].startCoefficientOfInitialFee}`);
    setMaternalCapitalState(false);
    setAutoInsuranceState(false);
    setLifeInsuranceState(false);
    setLoanTerms(credit[evt.target.dataset.value].minLoanTerms);
    setSelectState(!isSelectClosed);
  };

  const handleInputCostChange = (evt) => {
    const inputNumbers = evt.target.value.match(/[0-9]/g);
    if (inputNumbers === null) {
      setPropertyValue('');
      setInitialFee('');
      return;
    }
    const numberItems = inputNumbers.join('');

    setPropertyValue(numberItems);

    setInitialFee(`${Math.round(numberItems * creditPurpose.startCoefficientOfInitialFee)}`);
  };

  const handleInputInitialFeeRangeChange = (evt) => {
    setInitialFee(`${propertyValue * evt.target.value / ONE_HUNDRED_PERCENT}`);
  };

  const handleInputInitialFeeChange = (evt) => {
    const inputNumbers = evt.target.value.match(/[0-9]/g);
    if (inputNumbers === null) {
      setInitialFee('');
      return;
    }

    const abbreviatedInitialFee = inputNumbers.join('');
    const partOfPropertyValue = propertyValue * creditPurpose.startCoefficientOfInitialFee;

    if (abbreviatedInitialFee < partOfPropertyValue) {
      setInitialFee(abbreviatedInitialFee);
      setTimeout(() => {
        if (evt.target.value.replace(' ', '') < partOfPropertyValue && evt.target.value !== '') {
          setInitialFee(`${partOfPropertyValue}`);
        }
      }, TIMER_IN_MILLISECONDS);
      return;
    }

    setInitialFee(abbreviatedInitialFee);
  };

  const handleInputLoanTermsChange = (evt) => {
    const inputLoanTermsNumbers = evt.target.value.match(/[0-9]/g);
    if (inputLoanTermsNumbers === null) {
      setLoanTerms('');
      return;
    }

    const terms = inputLoanTermsNumbers.join('');

    if (terms > creditPurpose.maxLoanTerms) {
      setLoanTerms(`${creditPurpose.maxLoanTerms}`);
      return;
    }

    if (terms < creditPurpose.minLoanTerms) {
      setLoanTerms(terms);
      setTimeout(() => {
        if (evt.target.value < creditPurpose.minLoanTerms && evt.target.value !== '') {
          setLoanTerms(`${creditPurpose.minLoanTerms}`);
        }
      }, TIMER_IN_MILLISECONDS);
      return;
    }

    setLoanTerms(terms);
  };

  const handleInputLoanTermsRangeChange = (evt) => {
    setLoanTerms(evt.target.value);
  };

  const getValidDescription = (terms) => {
    if (terms > 20) {
      const secondNumber = terms[1];
      if (secondNumber > '1' && secondNumber <= '4') {
        return 'года';
      } else if (secondNumber === '1') {
        return 'год';
      }
    } else if (terms < 5) {
      if (terms > '1' && terms <= '4') {
        return 'года';
      } else if (terms === '1') {
        return 'год';
      }
    }
    return 'лет';
  };

  const handleButtonCounterClick = (evt) => {
    if (evt.currentTarget.name === 'plus') {
      const addedPropertyValue = +propertyValue + creditPurpose.stepPropertyValue;
      setPropertyValue(`${addedPropertyValue}`);
      setInitialFee(`${Math.round(addedPropertyValue * creditPurpose.startCoefficientOfInitialFee)}`);
      return;
    } else if (propertyValue < creditPurpose.stepPropertyValue) {
      return;
    }
    const detractedPropertyValue = +propertyValue - creditPurpose.stepPropertyValue;
    setPropertyValue(`${detractedPropertyValue}`);
    setInitialFee(`${Math.round(detractedPropertyValue * creditPurpose.startCoefficientOfInitialFee)}`);
  };

  const handleInputMaternalCapitalChange = (evt) => {
    setMaternalCapitalState(evt.target.checked);
  };

  const handleButtonOfferClick = () => {
    if (isThreeStepHidden) {
      setApplicationNumber((prevState => {
        return `00${(+prevState + 1)}`;
      }));
      inputName.current.focus();
      scrollToBlock(inputName.current);
    }

    setThreeStepState(false);
  };

  const handleInputAutoInsuranceChange = (evt) => {
    setAutoInsuranceState(evt.target.checked);
  };

  const handleInputLifeInsuranceChange = (evt) => {
    setLifeInsuranceState(evt.target.checked);
  };

  const handleInputTelephoneChange = (evt) => {
    const inputLoanTermsNumbers = evt.target.value.match(/[0-9]/g);
    if (inputLoanTermsNumbers === null) {
      setTelephoneNumber('');
      return;
    }

    const [
      , second = '', third = '', fourth = '', fifth = '',
      sixth = '', seventh = '', eighth = '', ninth = '',
      tenth = '', eleventh = ''
    ] = inputLoanTermsNumbers;

    switch (inputLoanTermsNumbers.length) {
      case 1: setTelephoneNumber('+7'); break;
      case 2: case 3: case 4: setTelephoneNumber(`+7 (${second}${third}${fourth}`); break;
      case 5: case 6: case 7: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh}`); break;
      case 8: case 9: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh} - ${eighth}${ninth}`); break;
      case 10: case 11: default: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh} - ${eighth}${ninth} - ${tenth}${eleventh}`); break;
    }
  };

  return (
    <section className="calculator">
      <h2 className="calculator__tittle">Кредитный калькулятор</h2>
      <form className="calculator__form" ref={calculatorSectionRef}>
        <div className="steps__wrapper-parameters">
          <fieldset className="steps">
            <p className="steps__text-tittle">Шаг 1. Цель кредита</p>
            <div className="steps__select-box" id="select-1">
              <button
                className={`steps__toggle ${isSelectClosed ? 'steps__toggle-down' : 'steps__toggle-up'}`}
                type="button"
                value="ford"
                data-select="toggle"
                data-index="1"
                onClick={handleToggleClick}
              >
                {selectOption}
              </button>
              <ul className={`steps__options ${isSelectClosed && 'visually-hidden'}`} onClick={handleOptionClick}>
                <li className="steps__option" data-select="option" data-value="Ипотечное кредитование" data-index="0">Ипотечное кредитование</li>
                <li className="steps__option" data-select="option" data-value="Автомобильное кредитование" data-index="1">Автомобильное кредитование</li>
              </ul>
            </div>
          </fieldset>
          <fieldset className={`steps ${selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE ? '' : 'visually-hidden'}`}>
            <p className="steps__text-tittle">Шаг 2. Введите параметры кредита</p>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">{creditPurpose.tittlePropertyValue}</span>
              <div className="steps__input-wrapper">
                <button className="steps__button-minus" type="button" name="minus" onClick={handleButtonCounterClick}>
                  <span className="visually-hidden">Отнять</span>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#1F1E25" strokeWidth="2"/>
                  </svg>
                </button>
                <label
                  className={`steps__input-description ${isIncorrectPropertyValue && 'steps__input-description--incorrect'}`}
                  htmlFor="property-values"
                >
                  <input
                    className="steps__input"
                    maxLength="10"
                    type="text"
                    id="property-values"
                    onChange={handleInputCostChange}
                    value={getTernaryItem(propertyValue)}
                  />
                  <span className="steps__currency">рублей</span>
                  <span className={`${isIncorrectPropertyValue ? 'steps__incorrect-value' : 'visually-hidden'}`}>Некорректное значение</span>
                </label>
                <button className="steps__button-plus" type="button" name="plus" onClick={handleButtonCounterClick}>
                  <span className="visually-hidden">Прибавить</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16M8 0V16" stroke="#1F1E25" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <p className="steps__description-wrapper">
                <span className="steps__description">От {getTernaryItem(`${creditPurpose.minPropertyValue}`)}  до {getTernaryItem(`${creditPurpose.maxPropertyValue}`)} рублей</span>
              </p>
            </div>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">Первоначальный взнос</span>
              <div className="steps__input-wrapper">
                <label className="steps__input-description" htmlFor="initial-fee">
                  <input
                    className="steps__input"
                    maxLength="10"
                    type="text"
                    id="initial-fee"
                    value={getTernaryItem(initialFee)}
                    onChange={handleInputInitialFeeChange}
                  />
                  <span className="steps__currency">рублей</span>
                </label>
              </div>
              <label className="steps__range-description" htmlFor="initial-fee-range">
                <input
                  className="steps__input-range range-calculator"
                  type="range"
                  id="initial-fee-range"
                  min={creditPurpose.startPercentagePartOfInitialFee}
                  max="100"
                  step="5"
                  value={Math.round(percentageInitialFee)}
                  onChange={handleInputInitialFeeRangeChange}
                />
              </label>
              <p className="steps__description-wrapper">
                <span className="steps__description">{Math.round(percentageInitialFee)}%</span>
              </p>
            </div>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">Срок кредитования</span>
              <div className="steps__input-wrapper">
                <label className="steps__input-description" htmlFor="credit-term">
                  <input
                    className="steps__input"
                    maxLength="2"
                    type="text"
                    id="credit-term"
                    value={loanTerms}
                    onChange={handleInputLoanTermsChange}
                  />
                  <span className="steps__currency">{getValidDescription(`${loanTerms}`)}</span>
                </label>
              </div>
              <label className="steps__range-description" htmlFor="credit-term-range">
                <input
                  className="steps__input-range range-calculator"
                  type="range"
                  id="credit-term-range"
                  min={creditPurpose.minLoanTerms}
                  max={creditPurpose.maxLoanTerms}
                  step="1"
                  value={loanTerms}
                  onChange={handleInputLoanTermsRangeChange}
                />
              </label>
              <p className="steps__description-wrapper">
                <span className="steps__description">{creditPurpose.minLoanTerms} {getValidDescription(`${creditPurpose.minLoanTerms}`)}</span>
                <span className="steps__description">{creditPurpose.maxLoanTerms} {getValidDescription(`${creditPurpose.maxLoanTerms}`)}</span>
              </p>
            </div>
              <label className={selectOption === creditTypes.MORTGAGE_LENDING_TYPE ? 'steps__checkbox-tittle' : 'visually-hidden'} htmlFor="maternal-capital">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="maternal-capital"
                  checked={isMaternalCapital}
                  onChange={handleInputMaternalCapitalChange}
                />
                <svg className="steps__checkbox-image" viewBox="-3 -3 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2.14286L3.5 5L7 1" stroke="#F6F7FF"/>
                </svg>
                <span>Использовать материнский капитал</span>
              </label>
              <label className={selectOption === creditTypes.MORTGAGE_LENDING_TYPE ? 'visually-hidden' : 'steps__checkbox-tittle'} htmlFor="auto-insurance">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="auto-insurance"
                  checked={isAutoInsurance}
                  onChange={handleInputAutoInsuranceChange}
                />
                <svg className="steps__checkbox-image" viewBox="-3 -3 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2.14286L3.5 5L7 1" stroke="#F6F7FF"/>
                </svg>
                <span>Оформить КАСКО в нашем банке</span>
              </label>
              <label className={selectOption === creditTypes.MORTGAGE_LENDING_TYPE ? 'visually-hidden' : 'steps__checkbox-tittle'} htmlFor="life-insurance">
                <input
                  className="visually-hidden"
                  type="checkbox"
                  id="life-insurance"
                  checked={isLifeInsurance}
                  onChange={handleInputLifeInsuranceChange}
                />
                <svg className="steps__checkbox-image" viewBox="-3 -3 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2.14286L3.5 5L7 1" stroke="#F6F7FF"/>
                </svg>
                <span>Оформить Страхование жизни в нашем банке</span>
              </label>
          </fieldset>
        </div>
        <div className="offer">
          <div className={`offer__wrapper ${selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE && loanAmount >= creditPurpose.minLoanAmount ? '' : 'visually-hidden'}`}>
            <p className="offer__tittle">Наше предложение</p>
            <ul className="offer__list">
              <li className="offer__item">
                <p className="offer__value">{getTernaryItem(`${loanAmount}`)} рублей</p>
                <p className="offer__description">{creditPurpose.tittleLoanAmount}</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{percentageRate}%</p>
                <p className="offer__description">Процентная ставка</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{getTernaryItem(`${monthlyPayment}`)} рублей</p>
                <p className="offer__description">Ежемесячный платеж</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">{getTernaryItem(`${requiredIncome}`)} рублей</p>
                <p className="offer__description">Необходимый доход</p>
              </li>
            </ul>
            <button className="offer__button" type="button" onClick={handleButtonOfferClick}>Оформить заявку</button>
          </div>
        <div className={`offer__wrapper ${selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE && loanAmount < creditPurpose.minLoanAmount ? '' : 'visually-hidden'}`}>
          <p className="offer__tittle-popup">Наш банк не выдаёт {creditPurpose.descriptionTypeCredit} меньше {getTernaryItem(`${creditPurpose.minLoanAmount}`)} рублей.</p>
          <p className="offer__text">Попробуйте использовать другие параметры для расчёта.</p>
        </div>
        </div>
        <div className={`${isThreeStepHidden ? 'visually-hidden' : 'steps__wrapper-registration'}`}>
          <fieldset className="steps">
            <p className="steps__text-tittle steps__text-tittle--center">Шаг 3. Оформление заявки</p>
            <ul className="steps__list">
              <li className="steps__item">
                <p className="steps__value">№ {applicationNumber}</p>
                <p className="steps__description-tittle">Номер заявки</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">{creditPurpose.type}</p>
                <p className="steps__description-tittle">Цель кредита</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">{getTernaryItem(propertyValue)} рублей</p>
                <p className="steps__description-tittle">{creditPurpose.tittlePropertyValue}</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">{getTernaryItem(initialFee)} рублей</p>
                <p className="steps__description-tittle">Первоначальный взнос</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">{loanTerms} лет</p>
                <p className="steps__description-tittle">Срок кредитования</p>
              </li>
            </ul>
            <div className="steps__user-data-wrapper">
              <label className="steps__user-data-description steps__user-data-description--full-width" htmlFor="name">
                <input className="steps__input-user-data" type="text" id="name" placeholder="ФИО" ref={inputName} required/>
              </label>
              <label className="steps__user-data-description" htmlFor="telephone">
                <input className="steps__input-user-data" type="tel" value={telephoneNumber} onChange={handleInputTelephoneChange} id="telephone" placeholder="Телефон" required/>
              </label>
              <label className="steps__user-data-description" htmlFor="email">
                <input className="steps__input-user-data" type="email" id="email" placeholder="Email" required/>
              </label>
            </div>
          </fieldset>
          <button className="calculator__form-button" type="submit">Отправить</button>
        </div>
      </form>
    </section>
  )
}

export default Calculator;
