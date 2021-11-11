import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Header({onModalAuthorizationStateSet}) {
  const [isMenuClosed, setMenuState] = useState(true);

  const handleButtonMenuClick = () => {
    setMenuState(!isMenuClosed);
  };

  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <button className="page-header__burger" type="button" onClick={handleButtonMenuClick}>
          <span className="visually-hidden">Открыть меню</span>
        </button>
        <Link className="page-header__logo-link" to=''>
          <img className="page-header__logo" src={'img/logo.svg'} width="115" height="17" alt="Лига Банк"/>
        </Link>
      </div>
      <nav className={`main-nav ${isMenuClosed && 'main-nav--closed'}`}>
        <div className="main-nav__button-wrapper">
          <button className="main-nav__close" type="button" onClick={handleButtonMenuClick}>
            <span className="visually-hidden">Закрыть меню</span>
          </button>
        </div>
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">Услуги</Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">Рассчитать кредит</Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">Конвертер валют</Link>
          </li>
          <li className="main-nav__item">
            <Link className="main-nav__link" to="#">Контакты</Link>
          </li>
        </ul>
        <Link className="main-nav__authentication-link" to="#" onClick={onModalAuthorizationStateSet}>
          <svg className="main-nav__logo-authentication" viewBox="0 0 14 16" width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.56 10.4H3.1v4h9.33V1.6H3.11v4H1.56V.8c0-.21.08-.42.22-.57A.77.77 0 0 1 2.33 0h10.9c.2 0 .4.08.54.23.15.15.23.36.23.57v14.4c0 .21-.08.42-.23.57a.77.77 0 0 1-.55.23H2.33c-.2 0-.4-.08-.55-.23a.81.81 0 0 1-.22-.57v-4.8Zm4.66-3.2V4.8l3.9 3.2-3.9 3.2V8.8H0V7.2h6.22Z" fill="#1F1E25"/>
          </svg>
          <p className="main-nav__authentication-description">Войти в Интернет-банк</p>
        </Link>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onModalAuthorizationStateSet: PropTypes.func.isRequired,
};

export default Header;
