import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';

function MainScreen() {
  return (
    <>
      <Header/>
      <main className="page-main">
        <h1 className="visually-hidden">Услуги Лига Банк</h1>
        <Slider/>
        <section className="services">
          <h2 className="visually-hidden">Услуги</h2>
          <div className="services__tabs">
            <div className="services__tabs-wrapper">
              <input className="visually-hidden" type="radio" name="inset" value="tab_1" id="tab_1"/>
              <label className="services__tab" htmlFor="tab_1" tabIndex="0">
                <span>Вклады</span>
              </label>
              <input className="visually-hidden" type="radio" name="inset" value="tab_2" id="tab_2"/>
              <label className="services__tab" htmlFor="tab_2" tabIndex="0">
                <span>Кредиты</span>
              </label>
              <input className="visually-hidden" type="radio" name="inset" value="tab_3" id="tab_3"/>
              <label className="services__tab" htmlFor="tab_3" tabIndex="0">
                <span>Страхование</span>
              </label>
              <input className="visually-hidden" type="radio" name="inset" value="tab_4" id="tab_4"/>
              <label className="services__tab" htmlFor="tab_4" tabIndex="0">
                <span>Онлайн-сервисы</span>
              </label>
            </div>
            <div className="services__first-service">
              <p className="services__tittle-text">Вклады Лига Банка – это выгодная инвестиция в свое будущее</p>
              <ul className="services__list">
                <li className="services__item">
                  <p className="services__text">Проценты по вкладам до 7%</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Разнообразные условия</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Возможность ежемесячной капитализации или вывод процентов на банковскую карту</p>
                </li>
              </ul>
              <a className="services__button" href="#">Узнать подробнее</a>
              <picture>
                <source media="(min-width: 768px)" srcSet={'img/piggybank-tab.jpg'}/>
                <img className="services__image" src={'img/piggybank.jpg'} alt="Копилка в виде свинки"/>
              </picture>
            </div>
            <div className="services__second-service">
              <p className="services__tittle-text">Лига Банк выдает кредиты под любые цели</p>
              <ul className="services__list">
                <li className="services__item">
                  <p className="services__text">Ипотечный кредит</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Автокредит</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Потребительский кредит</p>
                </li>
              </ul>
              <p className="services__text">Рассчитайте ежемесячный платеж и ставку по кредиту воспользовавшись нашим
                <a className="services__text-link" href="#">
                  кредитным калькулятором
                </a>
              </p>
              <picture>
                <source media="(min-width: 768px)" srcSet={'img/car-tab.jpg'}/>
                <img className="services__image" src={'img/car.jpg'} alt="Автомобиль на стопке монет"/>
              </picture>
            </div>
            <div className="services__third-service">
              <p className="services__tittle-text">Лига Страхование — застрахуем все что захотите</p>
              <ul className="services__list">
                <li className="services__item">
                  <p className="services__text">Автомобильное страхование</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Страхование жизни и здоровья</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Страхование недвижимости</p>
                </li>
              </ul>
              <a className="services__button" href="#">Узнать подробнее</a>
              <picture>
                <source media="(min-width: 768px)" srcSet={'img/lock-tab.jpg'}/>
                <img className="services__image" src={'img/lock.jpg'} alt="Замок с сердечком"/>
              </picture>
            </div>
            <div className="services__fourth-service">
              <p className="services__tittle-text">Лига Банк — это огромное количество онлайн-сервисов для вашего удобства</p>
              <ul className="services__list">
                <li className="services__item">
                  <p className="services__text">Мобильный банк, который всегда под рукой</p>
                </li>
                <li className="services__item">
                  <p className="services__text">Приложение Лига-проездной позволит вам оплачивать билеты по всему миру</p>
                </li>
              </ul>
              <a className="services__button" href="#">Узнать подробнее</a>
              <picture>
                <source media="(min-width: 768px)" srcSet={'img/smartphone-tab.jpg'}/>
                <img className="services__image" src={'img/smartphone.jpg'} alt="Смартфон с заставкой Лига Банк"/>
              </picture>
            </div>
          </div>
        </section>
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
