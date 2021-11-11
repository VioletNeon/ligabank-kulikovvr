import React from 'react';
import PropTypes from 'prop-types';
import {getTernaryItem} from '../../utils';

const NAME_BUTTON_PLUS = 'plus';

function PropertyValue(props) {
  const {
    creditPurpose,
    propertyValue,
    setPropertyValue,
    setInitialFee,
    isIncorrectPropertyValue,
  } = props;

  const handleButtonCounterClick = (evt) => {
    if (evt.currentTarget.name === NAME_BUTTON_PLUS) {
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

  return (
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
          <span className={isIncorrectPropertyValue ? 'steps__incorrect-value' : 'visually-hidden'}>Некорректное значение</span>
        </label>
        <button className="steps__button-plus" type="button" name="plus" onClick={handleButtonCounterClick}>
          <span className="visually-hidden">Прибавить</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 8H16M8 0V16" stroke="#1F1E25" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      <p className="steps__description-wrapper">
        <span className="steps__description">
          От {getTernaryItem(`${creditPurpose.minPropertyValue}`)}  до {getTernaryItem(`${creditPurpose.maxPropertyValue}`)} рублей
        </span>
      </p>
    </div>
  );
}

PropertyValue.propTypes = {
  creditPurpose: PropTypes.object.isRequired,
  propertyValue: PropTypes.string.isRequired,
  setPropertyValue: PropTypes.func.isRequired,
  setInitialFee: PropTypes.func.isRequired,
  isIncorrectPropertyValue: PropTypes.bool.isRequired,
};

export default PropertyValue;
