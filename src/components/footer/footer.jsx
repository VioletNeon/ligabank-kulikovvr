import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function Footer({isMenuClosed}) {
  return (
    <footer className={`page-footer ${isMenuClosed ? '' : 'page-footer--menu-open'}`}>
      <div className="page-footer__wrapper">
        <div className="page-footer__about-company-wrapper">
          <Link className="page-footer__logo-link" to='#'>
            <img className="page-footer__logo" src={'img/logo.svg'} width="115" height="17" alt="Лига банк"/>
          </Link>
        </div>
        <p className="page-footer__text footer-text">
          150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019
        </p>
        <ul className="page-footer__nav-list">
          <li className="page-footer__nav-item">
            <Link className="page-footer__nav-link" to='#'>Услуги</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link className="page-footer__nav-link" to='#'>Рассчитать кредит</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link className="page-footer__nav-link" to='#'>Контакты</Link>
          </li>
          <li className="page-footer__nav-item">
            <Link className="page-footer__nav-link" to='#'>Задать вопрос</Link>
          </li>
        </ul>
        <ul className="page-footer__contacts-list">
          <li className="page-footer__contacts-item">
            <svg className="page-footer__mobile-phone-icon" width="10" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#mobile-phone-icon"/>
            </svg>
            <span className="page-footer__mobile-phone">*0904</span>
            <p className="page-footer__info-subscribers footer-text">
              Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
            </p>
          </li>
          <li className="page-footer__contacts-item">
            <svg className="page-footer__phone-icon" width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#phone-icon"/>
            </svg>
            <span className="page-footer__phone">&nbsp;8 800 111 22 33</span>
            <p className="page-footer__info-global-phones footer-text">
              Бесплатный для всех городов России
            </p>
          </li>
        </ul>
        <ul className="social">
          <li className="social__item">
            <a className="social__link" href={'https://www.facebook.com'}>
              <span className="visually-hidden">Мы в Фейсбуке</span>
              <svg className="social__link-logo" width="9" height="16" fill="none">
                <use xlinkHref="#footer-facebook-logo"/>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href={'https://www.instagram.com'}>
              <span className="visually-hidden">Мы в Инстаграме</span>
              <svg className="social__link-logo" width="16" height="16" fill="none">
                <use xlinkHref="#footer-instagram-logo"/>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href={'https://twitter.com'}>
              <span className="visually-hidden">Мы в Твиттер</span>
              <svg className="social__link-logo" width="16" height="13" fill="none">
                <use xlinkHref="#footer-twitter-logo"/>
              </svg>
            </a>
          </li>
          <li className="social__item">
            <a className="social__link" href={'https://www.youtube.com'}>
              <span className="visually-hidden">Мы на Ютуб</span>
              <svg className="social__link-logo" width="16" height="13" fill="none">
                <use xlinkHref="#footer-youtube-logo"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  isMenuClosed: PropTypes.bool.isRequired,
};

export default Footer;
