import React, {useEffect, useRef} from 'react';
import {trapFocus} from '../../utils';

const MODAL_MESSAGE_CLASS_NAME = 'modal-message';
const KEY_ESCAPE_CODE = 27;

function ModalMessage({onModalMessageStateSet}) {
  const modalMessage = useRef(null);

  const onEscKeyDown = (evt) => {
    if (evt.keyCode === KEY_ESCAPE_CODE) {
      evt.preventDefault();
      onModalMessageStateSet();
    }
  };

  const onOverlayModalClick = (evt) => {
    if (evt.target.className === MODAL_MESSAGE_CLASS_NAME) {
      onModalMessageStateSet();
    }
  };

  useEffect(() => {
    trapFocus(modalMessage.current);
    document.addEventListener('keydown', onEscKeyDown);
    return () => document.removeEventListener('keydown', onEscKeyDown);
  });

  return (
    <div className="modal-message" onClick={onOverlayModalClick} ref={modalMessage}>
      <div className="modal-message__wrapper">
        <p className="modal-message__tittle-text">
          Спасибо за обращение в наш банк.
        </p>
        <p className="modal-message__text">
          Наш менеджер скоро свяжется с&nbsp;вами по указанному номеру телефона.
        </p>
        <button className="modal-message__modal-close-button" type="button" aria-label="Закрыть" onClick={onModalMessageStateSet} tabIndex="0">
        </button>
      </div>
    </div>
  );
}

export default ModalMessage;
