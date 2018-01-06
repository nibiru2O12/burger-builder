import React from 'react';
import classes from './Modal.css';

const Modal = (props) => {

    const modal = props.show ? (
        <div className={classes.Modal}>
            {props.children}
        </div>
    ): null

    return (
        modal
    );
}
export default Modal;