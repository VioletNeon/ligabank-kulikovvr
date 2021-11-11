import React from 'react';
import PropTypes from 'prop-types';
import {creditTypes} from '../../const';

function AdditionalParameters(props) {
  const {
    isMaternalCapital,
    isAutoInsurance,
    isLifeInsurance,
    selectOption,
    setMaternalCapitalState,
    setAutoInsuranceState,
    setLifeInsuranceState,
  } = props;

  const handleInputMaternalCapitalChange = (evt) => {
    setMaternalCapitalState(evt.target.checked);
  };

  const handleInputAutoInsuranceChange = (evt) => {
    setAutoInsuranceState(evt.target.checked);
  };

  const handleInputLifeInsuranceChange = (evt) => {
    setLifeInsuranceState(evt.target.checked);
  };

  return (
    <div className="steps__checkbox-wrapper">
      <label
        className={selectOption === creditTypes.MORTGAGE_LENDING_TYPE ? 'steps__checkbox-tittle' : 'visually-hidden'}
        htmlFor="maternal-capital"
      >
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
      <label
        className={selectOption === creditTypes.AUTOMOBILE_LOAN_TYPE ? 'steps__checkbox-tittle' : 'visually-hidden'}
        htmlFor="auto-insurance"
      >
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
      <label
        className={selectOption === creditTypes.AUTOMOBILE_LOAN_TYPE ? 'steps__checkbox-tittle' : 'visually-hidden'}
        htmlFor="life-insurance"
      >
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
    </div>
  );
}

AdditionalParameters.propTypes = {
  isMaternalCapital: PropTypes.bool.isRequired,
  isAutoInsurance: PropTypes.bool.isRequired,
  isLifeInsurance: PropTypes.bool.isRequired,
  selectOption: PropTypes.string.isRequired,
  setMaternalCapitalState: PropTypes.func.isRequired,
  setAutoInsuranceState: PropTypes.func.isRequired,
  setLifeInsuranceState: PropTypes.func.isRequired,
};

export default AdditionalParameters;
