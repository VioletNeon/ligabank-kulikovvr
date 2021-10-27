import React from 'react';

function Slider() {
  return (
    <section className="slider">
      <h2 className="visually-hidden">Предложения Лига Банк</h2>
      <div className="slider__slide slider__slide--first">
        <p className="slider__tittle-text slider__tittle-text--first-slide">Лига Банк</p>
        <p className="slider__text slider__text--first-slide">Кредиты на любой случай</p>
        <a className="slider__button" href="#">Рассчитать кредит</a>
        <picture className="slider__image-wrapper">
          <source media="(min-width: 768px)" srcSet={'img/black-card-tab.png'}/>
          <img className="slider__image slider__image--black-card" src={'img/black-card.png'} alt="Примерный вид черной карточки банка"/>
        </picture>
        <img className="slider__image slider__image--white-card" src={'img/white-card.png'} alt="Примерный вид белой карточки банка"/>
      </div>
      <div className="slider__slide slider__slide--second">
        <p className="slider__tittle-text">Лига Банк</p>
        <p className="slider__text">Ваша уверенность в&nbsp;завтрашнем дне</p>
        <picture className="slider__image-wrapper">
          <source media="(min-width: 768px)" srcSet={'img/man-in-suit-tab.jpg'}/>
          <img className="slider__image" src={'img/man-in-suit.jpg'} alt="Мужчина в деловом костюме"/>
        </picture>
      </div>
      <div className="slider__slide slider__slide--third">
        <p className="slider__tittle-text">Лига Банк</p>
        <p className="slider__text">Всегда рядом</p>
        <a className="slider__button slider__button--blue" href="#">Найти отделение</a>
        <picture className="slider__image-wrapper">
          <source media="(min-width: 768px)" srcSet={'img/girl-with-card-tab.jpg'}/>
          <img className="slider__image" src={'img/girl-with-card.jpg'} alt="Девушка держит карту банка"/>
        </picture>
      </div>
      <div className="slider__indicators">
        <label className="slider__indicators-label">
          <input className="visually-hidden" name="slide" type="radio" aria-label="Первый слайд" value='1'/>
          <span className="slider__indicator"/>
        </label>
        <label className="slider__indicators-label">
          <input className="visually-hidden" name="slide" type="radio" aria-label="Второй слайд" value='2'/>
          <span className="slider__indicator"/>
        </label>
        <label className="slider__indicators-label">
          <input className="visually-hidden" name="slide" type="radio" aria-label="Третий слайд" value='3'/>
          <span className="slider__indicator"/>
        </label>
      </div>
    </section>
  )
}

export default Slider;
