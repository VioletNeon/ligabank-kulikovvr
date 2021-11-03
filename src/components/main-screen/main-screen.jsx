import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';

function MainScreen() {
  return (
    <>
      <Header/>
      <main className="page-main">
        <h1 className="visually-hidden">Услуги Лига Банк</h1>
        <Slider/>
        <Services/>
        <Calculator/>
      </main>
    </>
  )
}

export default MainScreen;
