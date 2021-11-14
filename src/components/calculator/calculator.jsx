import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {creditTypes, ONE_HUNDRED_PERCENT} from '../../const';
import {credit} from '../../mocks/mocks';
import ModalMessage from '../modal-message/modal-message';
import CreditType from '../credit-type/credit-type';
import PropertyValue from '../property-value/property-value';
import InitialFee from '../initial-fee/initial-fee';
import LoanTerms from '../loan-terms/loan-terms';
import AdditionalParameters from '../additional-parameters /additional-parameters';
import Offer from '../offer/offer';
import RegistrationOfApplication from '../registration-of-application/registration-of-application';

const EXAMPLE_PROPERTY_VALUE = '2000000';
const EXAMPLE_LOAN_TERMS = '5';
const TENTH_PART_PERCENT = 0.1;
const NULL_MATERNAL_CAPITAL_VALUE = 0;
const MATERNAL_CAPITAL_VALUE = 470000;
const NUMBER_OF_MONTHS_IN_YEAR = 12;
const COEFFICIENT = 1;
const PERMISSIBLE_PERCENTAGE_PAYMENT_OF_INCOME = 45;
const START_APPLICATION_NUMBER = '0011';
const SELECT_OPTION_NAME = 'option';
const ERROR_CLASS_NAME = 'error-shake';
const TIMER_SHOW_ERROR = 600;

const getValidNumber = (value) => value.replace(',', '.');

function Calculator({calculatorSectionRef}) {
  const [isSelectClosed, setSelectState] = useState(true);
  const [selectOption, setSelectOption] = useState(creditTypes.DEFAULT_TITTLE_CREDIT_TYPE);
  const [propertyValue, setPropertyValue] = useState(EXAMPLE_PROPERTY_VALUE);
  const [initialFee, setInitialFee] = useState(`${propertyValue * TENTH_PART_PERCENT}`);
  const [loanTerms, setLoanTerms] = useState(EXAMPLE_LOAN_TERMS);
  const [isMaternalCapital, setMaternalCapitalState] = useState(false);
  const [isThreeStepHidden, setThreeStepState] = useState(true);
  const [applicationNumber, setApplicationNumber] = useState(START_APPLICATION_NUMBER);
  const [isAutoInsurance, setAutoInsuranceState] = useState(false);
  const [isLifeInsurance, setLifeInsuranceState] = useState(false);
  const [fullName, setFullName] = useState('');
  const [telephoneNumber, setTelephoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isModalMessageOpen, setModalMessageState] = useState(false);
  const inputName = useRef(null);
  const userDataBox = useRef(null);

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
  };

  const percentageRate = getPercentageRate();
  const monthlyPercentageRate = (getValidNumber(percentageRate) / ONE_HUNDRED_PERCENT) / NUMBER_OF_MONTHS_IN_YEAR;
  const monthlyPayment = Math.round(loanAmount * (monthlyPercentageRate + monthlyPercentageRate / (((COEFFICIENT + monthlyPercentageRate) ** (loanTerms * NUMBER_OF_MONTHS_IN_YEAR)) - COEFFICIENT)));
  const requiredIncome = Math.round(monthlyPayment * ONE_HUNDRED_PERCENT / PERMISSIBLE_PERCENTAGE_PAYMENT_OF_INCOME);

  const onOptionClick = (evt) => {
    if (evt.target.dataset.select !== SELECT_OPTION_NAME) {
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

  const onModalMessageStateSet = () => {
    setModalMessageState(!isModalMessageOpen);
    document.body.style.overflow = isModalMessageOpen ? 'visible' : 'hidden';
  };

  const resetCalculatorState = () => {
    setSelectState(true);
    setSelectOption(creditTypes.DEFAULT_TITTLE_CREDIT_TYPE);
    setPropertyValue(EXAMPLE_PROPERTY_VALUE);
    setInitialFee(`${propertyValue * TENTH_PART_PERCENT}`);
    setLoanTerms(EXAMPLE_LOAN_TERMS);
    setMaternalCapitalState(false);
    setThreeStepState(true);
    setAutoInsuranceState(false);
    setLifeInsuranceState(false);
    setFullName('');
    setTelephoneNumber('');
    setEmail('');
  };

  const handleButtonFormClick = (evt) => {
    evt.preventDefault();

    if (!fullName && !telephoneNumber && !email) {
      userDataBox.current.classList.add(ERROR_CLASS_NAME);
      setTimeout(() => {
        userDataBox.current.classList.remove(ERROR_CLASS_NAME);
      }, TIMER_SHOW_ERROR);
      return;
    }

    localStorage.setItem(fullName, JSON.stringify({name: fullName, telephone: telephoneNumber, email: email}));
    onModalMessageStateSet();
    resetCalculatorState();
  };

  return (
    <section className="calculator">
      <h2 className="calculator__tittle">Кредитный калькулятор</h2>
      <form className="calculator__form" ref={calculatorSectionRef}>
        <div className="calculator__wrapper-parameters">
          <fieldset className="steps">
            <p className="steps__text-tittle">Шаг 1. Цель кредита</p>
            <CreditType
              onOptionClick={onOptionClick}
              isSelectClosed={isSelectClosed}
              setSelectState={setSelectState}
              selectOption={selectOption}
            />
          </fieldset>
          <fieldset className={selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE ? 'steps' : 'visually-hidden'}>
            <p className="steps__text-tittle steps__text-tittle--margin">Шаг 2. Введите параметры кредита</p>
            <PropertyValue
              creditPurpose={creditPurpose}
              propertyValue={propertyValue}
              setPropertyValue={setPropertyValue}
              setInitialFee={setInitialFee}
              isIncorrectPropertyValue={isIncorrectPropertyValue}
            />
            <InitialFee
              creditPurpose={creditPurpose}
              percentageInitialFee={percentageInitialFee}
              propertyValue={propertyValue}
              setInitialFee={setInitialFee}
              initialFee={initialFee}
            />
            <LoanTerms
              loanTerms={loanTerms}
              creditPurpose={creditPurpose}
              setLoanTerms={setLoanTerms}
            />
            <AdditionalParameters
              isMaternalCapital={isMaternalCapital}
              isAutoInsurance={isAutoInsurance}
              isLifeInsurance={isLifeInsurance}
              selectOption={selectOption}
              setMaternalCapitalState={setMaternalCapitalState}
              setAutoInsuranceState={setAutoInsuranceState}
              setLifeInsuranceState={setLifeInsuranceState}
            />
          </fieldset>
        </div>
        <Offer
          selectOption={selectOption}
          loanAmount={loanAmount}
          creditPurpose={creditPurpose}
          percentageRate={percentageRate}
          monthlyPayment={monthlyPayment}
          requiredIncome={requiredIncome}
          isThreeStepHidden={isThreeStepHidden}
          setApplicationNumber={setApplicationNumber}
          inputName={inputName}
          setThreeStepState={setThreeStepState}
        />
        <div className={`${isThreeStepHidden ? 'visually-hidden' : 'calculator__wrapper-registration'}`}>
          <RegistrationOfApplication
            applicationNumber={applicationNumber}
            creditPurpose={creditPurpose}
            propertyValue={propertyValue}
            initialFee={initialFee}
            loanTerms={loanTerms}
            userDataBox={userDataBox}
            fullName={fullName}
            telephoneNumber={telephoneNumber}
            email={email}
            inputName={inputName}
            setTelephoneNumber={setTelephoneNumber}
            setFullName={setFullName}
            setEmail={setEmail}
          />
          <button className="calculator__form-button" type="submit" onClick={handleButtonFormClick}>
            Отправить
          </button>
        </div>
      </form>
      {isModalMessageOpen && <ModalMessage onModalMessageStateSet={onModalMessageStateSet}/>}
    </section>
  );
}


Calculator.propTypes = {
  calculatorSectionRef: PropTypes.object.isRequired,
};

export default Calculator;
