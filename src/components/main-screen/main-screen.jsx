import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';

function MainScreen() {
  return (
    <>
      <Header/>
      <main className="page-main">
        <h1 className="visually-hidden">Услуги Лига Банк</h1>
        <Slider/>
        <Services/>
        <section className="calculator">
          <h2 className="calculator__tittle">Кредитный калькулятор</h2>
          <form className="calculator__form">
            <fieldset className="steps">
              <p className="steps__text-tittle">Шаг 1. Цель кредита</p>
              <label className="visually-hidden" htmlFor="steps-select">Выберите цель кредита</label>
              <select className="steps__select" id="steps-select">
                <option>Ипотечное кредитование</option>
                <option>Автомобильное кредитование</option>
              </select>
            </fieldset>
            <fieldset className="steps">
              <p className="steps__text-tittle">Шаг 2. Введите параметры кредита</p>
              <div className="steps__wrapper">
                <label className="steps__input-tittle" htmlFor="property-values">Стоимость недвижимости</label>
                <input className="steps__input" min="1200000" max="25000000" type="number" id="property-values"/>
                <span className="steps__input-text">рублей</span>
                <button className="steps__button-plus" type="button">
                  <span className="visually-hidden">Прибавить</span>
                </button>
                <button className="steps__button-minus" type="button">
                  <span className="visually-hidden">Отнять</span>
                </button>
                <span className="steps__description">От 1 200 000  до 25 000 000 рублей</span>
              </div>
              <div className="steps__wrapper">
                <label className="steps__input-tittle" htmlFor="initial-fee">Первоначальный взнос</label>
                <input className="steps__input" min="200000" type="number" id="initial-fee"/>
                <span className="steps__input-text">рублей</span>
                <input className="steps__input-range" type="range" id="initial-fee"/>
                <span className="steps__description">10%</span>
              </div>
              <div className="steps__wrapper">
                <label className="steps__input-tittle" htmlFor="credit-term">Срок кредитования</label>
                <input className="steps__input" min="5" max="30" type="number" id="credit-term"/>
                <span className="steps__input-text">лет</span>
                <input className="steps__input-range" type="range" id="credit-term"/>
                <span className="steps__description">5 лет</span>
              </div>
              <div className="steps__wrapper">
                <label className="steps__tittle" htmlFor="maternal-capital">Использовать материнский капитал</label>
                <input className="steps__input-maternal-capital" type="checkbox" id="maternal-capital"/>
              </div>
            </fieldset>
            <div className="offer">
              <p className="offer__tittle">Наше предложение</p>
              <ul className="offer__list">
                <li>
                  <p className="offer__value">1 330 000 рублей</p>
                  <p className="offer__description">Сумма ипотеки</p>
                </li>
                <li>
                  <p className="offer__value">9,40%</p>
                  <p className="offer__description">Процентная ставка</p>
                </li>
                <li>
                  <p className="offer__value">27 868 рублей</p>
                  <p className="offer__description">Ежемесячный платеж</p>
                </li>
                <li>
                  <p className="offer__value">61 929 рублей</p>
                  <p className="offer__description">Необходимый доход</p>
                </li>
              </ul>
            </div>
            <fieldset className="steps">
              <p className="steps__text-tittle">Шаг 3. Оформление заявки</p>
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
              <div className="steps__wrapper">
                <label className="visually-hidden" htmlFor="name">ФИО</label>
                <input className="steps__input-user-data" type="text" id="name"/>
                <label className="visually-hidden" htmlFor="telephone">Телефон</label>
                <input className="steps__input-user-data" type="tel" id="telephone"/>
                <label className="visually-hidden" htmlFor="email">Email</label>
                <input className="steps__input-user-data" type="email" id="email"/>
              </div>
            </fieldset>
            <button className="calculator__form-button" type="submit">Отправить</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default MainScreen;
