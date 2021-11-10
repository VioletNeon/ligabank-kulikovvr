import React from 'react';
import {ONE_HUNDRED_PERCENT, TIMER_IN_MILLISECONDS} from '../../const';
import {getTernaryItem} from '../../utils';

function InitialFee(props) {
  const {
    creditPurpose,
    percentageInitialFee,
    propertyValue,
    setInitialFee,
    initialFee
  } = props;

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

  return (
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
  )
}

export default InitialFee;
