import React from 'react';
import PropTypes from 'prop-types';
import {TIMER_IN_MILLISECONDS} from '../../const';
import {getValidDescription} from '../../utils';

function LoanTerms({loanTerms, creditPurpose, setLoanTerms}) {

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

  return (
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
        <span
          className="steps__description"
        >
          {creditPurpose.minLoanTerms} {getValidDescription(`${creditPurpose.minLoanTerms}`)}
        </span>
        <span
          className="steps__description"
        >
          {creditPurpose.maxLoanTerms} {getValidDescription(`${creditPurpose.maxLoanTerms}`)}
        </span>
      </p>
    </div>
  );
}

LoanTerms.propTypes = {
  loanTerms: PropTypes.string.isRequired,
  creditPurpose: PropTypes.object.isRequired,
  setLoanTerms: PropTypes.func.isRequired,
};

export default LoanTerms;
