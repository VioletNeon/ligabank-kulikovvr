import React from 'react';
import PropTypes from 'prop-types';
import {getTernaryItem, getValidDescription} from '../../utils';

function RegistrationOfApplication(props) {
  const {
    applicationNumber,
    creditPurpose,
    propertyValue,
    initialFee,
    loanTerms,
    userDataBox,
    fullName,
    telephoneNumber,
    email,
    inputName,
    setTelephoneNumber,
    setFullName,
    setEmail,
  } = props;

  const handleInputTelephoneChange = (evt) => {
    const inputLoanTermsNumbers = evt.target.value.match(/[0-9]/g);
    if (inputLoanTermsNumbers === null) {
      setTelephoneNumber('');
      return;
    }

    const [
      , second = '', third = '', fourth = '', fifth = '',
      sixth = '', seventh = '', eighth = '', ninth = '',
      tenth = '', eleventh = '',
    ] = inputLoanTermsNumbers;

    switch (inputLoanTermsNumbers.length) {
      case 1: setTelephoneNumber('+7'); break;
      case 2: case 3: case 4: setTelephoneNumber(`+7 (${second}${third}${fourth}`); break;
      case 5: case 6: case 7: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh}`); break;
      case 8: case 9: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh} - ${eighth}${ninth}`); break;
      case 10: case 11: default: setTelephoneNumber(`+7 (${second}${third}${fourth}) ${fifth}${sixth}${seventh} - ${eighth}${ninth} - ${tenth}${eleventh}`); break;
    }
  };

  const handleInputNameChange = (evt) => {
    const storageName = localStorage.getItem(evt.target.value);

    if (!storageName) {
      setFullName(evt.target.value);
      return;
    }

    const userData = JSON.parse(storageName);
    setFullName(userData.name);
    setTelephoneNumber(userData.telephone);
    setEmail(userData.email);
  };

  const handleInputEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  return (
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
          <p className="steps__value">{loanTerms} {getValidDescription(`${loanTerms}`)}</p>
          <p className="steps__description-tittle">Срок кредитования</p>
        </li>
      </ul>
      <div className="steps__user-data-wrapper" ref={userDataBox}>
        <label className="steps__user-data-description steps__user-data-description--full-width" htmlFor="name">
          <input
            className="steps__input-user-data"
            type="text"
            value={fullName}
            onChange={handleInputNameChange}
            id="name"
            placeholder="ФИО"
            ref={inputName}
            required
          />
        </label>
        <label className="steps__user-data-description" htmlFor="telephone">
          <input
            className="steps__input-user-data"
            type="tel"
            value={telephoneNumber}
            onChange={handleInputTelephoneChange}
            id="telephone"
            placeholder="Телефон"
            required
          />
        </label>
        <label className="steps__user-data-description" htmlFor="email">
          <input
            className="steps__input-user-data"
            type="email"
            value={email}
            onChange={handleInputEmailChange}
            id="email"
            placeholder="E-mail"
            required
          />
        </label>
      </div>
    </fieldset>
  );
}

RegistrationOfApplication.propTypes = {
  applicationNumber: PropTypes.string.isRequired,
  creditPurpose: PropTypes.object.isRequired,
  propertyValue: PropTypes.string.isRequired,
  initialFee: PropTypes.string.isRequired,
  loanTerms: PropTypes.string.isRequired,
  userDataBox: PropTypes.object.isRequired,
  fullName: PropTypes.string.isRequired,
  telephoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  inputName: PropTypes.object.isRequired,
  setTelephoneNumber: PropTypes.func.isRequired,
  setFullName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default RegistrationOfApplication;
