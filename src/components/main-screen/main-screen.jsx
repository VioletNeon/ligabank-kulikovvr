import React, {useRef, useState} from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import Services from '../services/services';
import Calculator from '../calculator/calculator';
import ModalAuthorization from '../modal-authorization/modal-authorization';
import Map from '../map/map';
import Footer from '../footer/footer';
import {scrollToBlock} from '../../utils';

function MainScreen() {
  const [isModalAuthorizationOpen, setModalAuthorizationState] = useState(false);
  const calculatorSectionRef = useRef(null);
  const mapRef = useRef(null);

  const onButtonToCreditCalculatorClick = () => {
    scrollToBlock(calculatorSectionRef.current);
  };

  const onButtonToMapClick = () => {
    scrollToBlock(mapRef.current);
  };

  const onModalAuthorizationStateSet = () => {
    setModalAuthorizationState(!isModalAuthorizationOpen);
    document.body.style.overflow = isModalAuthorizationOpen ? 'visible' : 'hidden';
  };

  return (
    <>
      <Header onModalAuthorizationStateSet={onModalAuthorizationStateSet}/>
      <main className="page-main">
        <h1 className="visually-hidden">Услуги Лига Банк</h1>
        <Slider onButtonToCreditCalculatorClick={onButtonToCreditCalculatorClick} onButtonToMapClick={onButtonToMapClick}/>
        <Services/>
        <Calculator calculatorSectionRef={calculatorSectionRef}/>
        {isModalAuthorizationOpen && <ModalAuthorization onModalAuthorizationStateSet={onModalAuthorizationStateSet}/>}
        <Map mapRef={mapRef}/>
      </main>
      <Footer/>
    </>
  )
}

export default MainScreen;
