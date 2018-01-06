import React from 'react';
import classes from './Modal.css';

import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
    const modal = !props.show ? (
        <div className={classes.Modal}>
            {props.children}
        </div>
    ): null

    return (
        <Aux>
            <Backdrop />
            {modal}
        </Aux>
    );
}
export default Modal;