import React from "react";
import './ModalWrapper.css';

const ModalWrapper = (props) => {
    return (
        <div className={`modal__wrapper ${props.isOpen && 'modal_open'}`}>
            <div className="close__container">
                <div className="close__button" onClick={props.closeModal}>X</div>
            </div>
            <div className="modal__body">
                {props.children}
            </div>
        </div>
    );
}

export default ModalWrapper;
