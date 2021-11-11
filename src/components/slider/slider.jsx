import React, {useRef, useEffect} from 'react';
import PropTypes from 'prop-types';

const SWIPE_TIMER = 4000;
const INITIAL_POSITION_OF_SLIDER = 0;

function Slider({onButtonToCreditCalculatorClick, onButtonToMapClick}) {
  const slider = useRef(null);

  useEffect(() => {
    const swipeSlide = () => {
      const currentScrollPosition = slider.current.scrollLeft;
      const currentSliderWidth = slider.current.clientWidth;

      if ((slider.current.scrollWidth - currentSliderWidth) === (currentScrollPosition)) {
        slider.current.scrollLeft = INITIAL_POSITION_OF_SLIDER;
        return;
      }
      slider.current.scrollLeft = currentScrollPosition + currentSliderWidth;
    };

    const swipeSlideTimerID = setInterval(() => swipeSlide(), SWIPE_TIMER);

    return () => clearInterval(swipeSlideTimerID);
  });

  return (
    <section className="slider">
      <h2 className="visually-hidden">Предложения Лига Банк</h2>
      <div className="slider__list" ref={slider}>
        <div className="slider__slide slider__slide--first">
          <p className="slider__tittle-text slider__tittle-text--first-slide">Лига Банк</p>
          <p className="slider__text slider__text--first-slide">Кредиты на любой случай</p>
          <button className="slider__button" onClick={onButtonToCreditCalculatorClick}>Рассчитать кредит</button>
          <picture className="slider__black-card-wrapper">
            <source media="(min-width: 1024px)" srcSet={'img/black-card-desktop.png'} width="340" height="242"/>
            <source media="(min-width: 768px)" srcSet={'img/black-card-tab.png'} width="256" height="172"/>
            <img className="slider__black-card" src={'img/black-card.png'} alt="Примерный вид черной карточки банка"/>
          </picture>
          <picture className="slider__white-card-wrapper">
            <source media="(min-width: 1024px)" srcSet={'img/white-card-desktop.png'} width="340" height="242"/>
            <img className="slider__white-card" src={'img/white-card.png'} width="256" height="172" alt="Примерный вид белой карточки банка"/>
          </picture>
          <div className="slider__indicators">
            <span className="slider__indicator slider__indicator--active"/>
            <span className="slider__indicator"/>
            <span className="slider__indicator"/>
          </div>
        </div>
        <div className="slider__slide slider__slide--second">
          <p className="slider__tittle-text">Лига Банк</p>
          <p className="slider__text">Ваша уверенность в&nbsp;завтрашнем дне</p>
          <picture className="slider__image-wrapper">
            <source media="(min-width: 1365px)" srcSet={'img/man-in-suit-desktop.jpg'}/>
            <source media="(min-width: 768px)" srcSet={'img/man-in-suit-tab.jpg'}/>
            <img className="slider__image" src={'img/man-in-suit.jpg'} alt="Мужчина в деловом костюме"/>
          </picture>
          <div className="slider__indicators">
            <span className="slider__indicator"/>
            <span className="slider__indicator slider__indicator--active"/>
            <span className="slider__indicator"/>
          </div>
        </div>
        <div className="slider__slide slider__slide--third">
          <p className="slider__tittle-text">Лига Банк</p>
          <p className="slider__text">Всегда рядом</p>
          <button className="slider__button slider__button--blue" onClick={onButtonToMapClick}>Найти отделение</button>
          <picture className="slider__image-wrapper">
            <source media="(min-width: 1365px)" srcSet={'img/girl-with-card-desktop.jpg'}/>
            <source media="(min-width: 768px)" srcSet={'img/girl-with-card-tab.jpg'}/>
            <img className="slider__image" src={'img/girl-with-card.jpg'} alt="Девушка держит карту банка"/>
          </picture>
          <div className="slider__indicators">
            <span className="slider__indicator"/>
            <span className="slider__indicator"/>
            <span className="slider__indicator slider__indicator--active"/>
          </div>
        </div>
      </div>
    </section>
  );
}

Slider.propTypes = {
  onButtonToCreditCalculatorClick: PropTypes.func.isRequired,
  onButtonToMapClick: PropTypes.func.isRequired,
};

export default Slider;
