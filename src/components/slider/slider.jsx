import React, {useRef, useEffect} from 'react';

function Slider() {
  const slider = useRef(null);
  let xDown = null;

  const handleSliderTouchStart = (evt) => {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
  };

  const handleSliderTouchMove = (evt) => {
    const xUp = evt.touches[0].clientX;
    const xDiff = xDown - xUp;

    if (((slider.current.scrollWidth - slider.current.clientWidth) === (slider.current.scrollLeft)) && (xDiff > 0)) {
      setTimeout(() => {slider.current.scrollLeft = 0}, 300);
    } else if (slider.current.scrollLeft === 0) {
      setTimeout(() => {slider.current.scrollLeft = slider.current.scrollWidth - slider.current.clientWidth}, 300);
    }

    xDown = null;
  };

  useEffect(() => {
    const swipeSlide = () => {
      const currentScrollPosition = slider.current.scrollLeft;
      const currentSliderWidth = slider.current.clientWidth;

      if ((slider.current.scrollWidth - currentSliderWidth) === (currentScrollPosition)) {
        slider.current.scrollLeft = 0;
        return;
      }
      slider.current.scrollLeft = currentScrollPosition + currentSliderWidth;
    };

    const swipeSlideTimerID = setInterval(() => swipeSlide(), 4000);

    return () => clearInterval(swipeSlideTimerID);
  });

  return (
    <section className="slider">
      <h2 className="visually-hidden">Предложения Лига Банк</h2>
      <div className="slider__list" ref={slider} onTouchMove={handleSliderTouchMove} onTouchStart={handleSliderTouchStart}>
        <div className="slider__slide slider__slide--first">
          <p className="slider__tittle-text slider__tittle-text--first-slide">Лига Банк</p>
          <p className="slider__text slider__text--first-slide">Кредиты на любой случай</p>
          <a className="slider__button" href="#">Рассчитать кредит</a>
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
          <a className="slider__button slider__button--blue" href="#">Найти отделение</a>
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
  )
}

export default Slider;