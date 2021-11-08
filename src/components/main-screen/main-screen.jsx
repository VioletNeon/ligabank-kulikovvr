import React, {useRef} from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import Footer from '../footer/footer';
import {scrollToBlock} from '../../utils';

function MainScreen() {
  const calculatorSectionRef = useRef(null);

  const onButtonToCreditCalculatorClick = () => {
    scrollToBlock(calculatorSectionRef.current);
  };

  return (
    <>
      <Header/>
      <main className="page-main">
        <h1 className="visually-hidden">Услуги Лига Банк</h1>
        <Slider onButtonToCreditCalculatorClick={onButtonToCreditCalculatorClick}/>
        <Services/>
        <Calculator calculatorSectionRef={calculatorSectionRef}/>
      </main>
      <Footer/>
    </>
  )
}

export default MainScreen;
