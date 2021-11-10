import React from 'react';
import {creditTypes} from '../../const';
import {getTernaryItem, scrollToBlock} from '../../utils';

function Offer(props) {
  const {
    selectOption,
    loanAmount,
    creditPurpose,
    percentageRate,
    monthlyPayment,
    requiredIncome,
    isThreeStepHidden,
    setApplicationNumber,
    inputName,
    setThreeStepState
  } = props;

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

  return (
    <div className="offer">
      <div className={selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE && loanAmount >= creditPurpose.minLoanAmount ? 'offer__wrapper' : 'visually-hidden'}>
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
      <div className={selectOption !== creditTypes.DEFAULT_TITTLE_CREDIT_TYPE && loanAmount < creditPurpose.minLoanAmount ? 'offer__wrapper' : 'visually-hidden'}>
        <p className="offer__tittle-popup">
          Наш банк не выдаёт {creditPurpose.descriptionTypeCredit} меньше {getTernaryItem(`${creditPurpose.minLoanAmount}`)} рублей.
        </p>
        <p className="offer__text">
          Попробуйте использовать другие параметры для расчёта.
        </p>
      </div>
    </div>
  )
}

export default Offer;
