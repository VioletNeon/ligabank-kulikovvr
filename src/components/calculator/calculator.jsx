import React from 'react';

function Calculator() {
  return (
    <section className="calculator">
      <h2 className="calculator__tittle">Кредитный калькулятор</h2>
      <form className="calculator__form">
        <div className="steps__wrapper-parameters">
          <fieldset className="steps">
            <p className="steps__text-tittle">Шаг 1. Цель кредита</p>
            <div className="steps__select-box" id="select-1">
              <button type="button" className="steps__toggle" name="car" value="ford" data-select="toggle" data-index="1">Выберите из списка</button>
              <ul className="steps__options">
                <li className="steps__option steps__option_selected" data-select="option" data-value="Ипотечное кредитование" data-index="0">Ипотечное кредитование</li>
                <li className="steps__option" data-select="option" data-value="Автомобильное кредитование" data-index="1">Автомобильное кредитование</li>
              </ul>
            </div>
          </fieldset>
          <fieldset className="steps">
            <p className="steps__text-tittle">Шаг 2. Введите параметры кредита</p>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">Стоимость недвижимости</span>
              <div className="steps__input-wrapper">
                <button className="steps__button-minus" type="button">
                  <span className="visually-hidden">Отнять</span>
                  <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="1" x2="16" y2="1" stroke="#1F1E25" strokeWidth="2"/>
                  </svg>
                </button>
                <label className="steps__input-description" htmlFor="property-values">
                  <input className="steps__input" min="1200000" max="25000000" type="number" id="property-values"/>
                </label>
                <button className="steps__button-plus" type="button">
                  <span className="visually-hidden">Прибавить</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 8H16M8 0V16" stroke="#1F1E25" strokeWidth="2"/>
                  </svg>
                </button>
              </div>
              <p className="steps__description-wrapper">
                <span className="steps__description">От 1 200 000  до 25 000 000 рублей</span>
              </p>
            </div>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">Первоначальный взнос</span>
              <div className="steps__input-wrapper">
                <label className="steps__input-description" htmlFor="initial-fee">
                  <input className="steps__input" min="200000" type="number" id="initial-fee"/>
                </label>
              </div>
              <label className="steps__input-description" htmlFor="initial-fee-range">
                <input className="steps__input-range range-calculator" type="range" id="initial-fee-range"/>
              </label>
              <p className="steps__description-wrapper">
                <span className="steps__description">10%</span>
              </p>
            </div>
            <div className="steps__wrapper">
              <span className="steps__input-tittle">Срок кредитования</span>
              <div className="steps__input-wrapper">
                <label className="steps__input-tittle" htmlFor="credit-term">
                  <input className="steps__input" min="5" max="30" type="number" id="credit-term"/>
                </label>
              </div>
              <label className="steps__input-description" htmlFor="credit-term-range">
                <input className="steps__input-range range-calculator" type="range" id="credit-term-range"/>
              </label>
              <p className="steps__description-wrapper">
                <span className="steps__description">5 лет</span>
                <span className="steps__description">30 лет</span>
              </p>
            </div>
              <label className="steps__checkbox-tittle" htmlFor="maternal-capital">
                <input className="visually-hidden" type="checkbox" id="maternal-capital"/>
                <svg className="steps__checkbox-image" viewBox="-3 -3 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 2.14286L3.5 5L7 1" stroke="#F6F7FF"/>
                </svg>
                <span>Использовать материнский капитал</span>
              </label>
          </fieldset>
        </div>
        <div className="offer">
          <div className="offer__wrapper">
            <p className="offer__tittle">Наше предложение</p>
            <ul className="offer__list">
              <li className="offer__item">
                <p className="offer__value">1 330 000 рублей</p>
                <p className="offer__description">Сумма ипотеки</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">9,40%</p>
                <p className="offer__description">Процентная ставка</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">27 868 рублей</p>
                <p className="offer__description">Ежемесячный платеж</p>
              </li>
              <li className="offer__item">
                <p className="offer__value">61 929 рублей</p>
                <p className="offer__description">Необходимый доход</p>
              </li>
            </ul>
            <button className="offer__button" type="button">Оформить заявку</button>
          </div>
        </div>
        <div className="steps__wrapper-registration">
          <fieldset className="steps">
            <p className="steps__text-tittle steps__text-tittle--center">Шаг 3. Оформление заявки</p>
            <ul className="steps__list">
              <li className="steps__item">
                <p className="steps__value">№ 0010</p>
                <p className="steps__description-tittle">Номер заявки</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">Ипотека</p>
                <p className="steps__description-tittle">Цель кредита</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">2 000 000 рублей</p>
                <p className="steps__description-tittle">Стоимость недвижимости</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">200 000 рублей</p>
                <p className="steps__description-tittle">Первоначальный взнос</p>
              </li>
              <li className="steps__item">
                <p className="steps__value">5 лет</p>
                <p className="steps__description-tittle">Срок кредитования</p>
              </li>
            </ul>
            <div className="steps__user-data-wrapper">
              <label className="steps__user-data-description steps__user-data-description--full-width" htmlFor="name">
                <input className="steps__input-user-data" type="text" id="name" placeholder="ФИО"/>
              </label>
              <label className="steps__user-data-description" htmlFor="telephone">
                <input className="steps__input-user-data" type="tel" id="telephone" placeholder="Телефон"/>
              </label>
              <label className="steps__user-data-description" htmlFor="email">
                <input className="steps__input-user-data" type="email" id="email" placeholder="Email"/>
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
