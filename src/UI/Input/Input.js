import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            <input className={classes.InputElement} {...props} />
        </div>
    );
}

export default Input;