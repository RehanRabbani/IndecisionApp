import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) =>{
    return(
        <Modal
        isOpen={!!props.arraySelectedOption}
        onRequestClose ={props.DeleteAction}
        contentLabel ="hello Moto"

        >
        <h1>Selected Option</h1>
        {props.arraySelectedOption && (<p>{props.arraySelectedOption}</p>)}
        <button onClick={props.DeleteAction}>OK</button>
        </Modal>
    );

}
export default OptionModal;