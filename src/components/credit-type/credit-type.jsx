import React from 'react';
import PropTypes from 'prop-types';

function CreditType(props) {
  const {
    onOptionClick,
    isSelectClosed,
    setSelectState,
    selectOption,
  } = props;

  const handleToggleClick = () => {
    setSelectState(!isSelectClosed);
  };

  return (
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
      <ul
        className={`steps__options ${isSelectClosed && 'visually-hidden'}`}
        onClick={onOptionClick}
      >
        <li
          className="steps__option"
          data-select="option"
          data-value="Ипотечное кредитование"
          data-index="0"
        >
          Ипотечное кредитование
        </li>
        <li
          className="steps__option"
          data-select="option"
          data-value="Автомобильное кредитование"
          data-index="1"
        >
          Автомобильное кредитование
        </li>
      </ul>
    </div>
  );
}

CreditType.propTypes = {
  onOptionClick: PropTypes.func.isRequired,
  isSelectClosed: PropTypes.bool.isRequired,
  setSelectState: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
};

export default CreditType;
