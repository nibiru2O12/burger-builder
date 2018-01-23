import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    
    let input = null;

    switch(props.type){
        case "select":
            input = <Select  className={classes.InputElement} {...props} />
            break;
        case "textarea":
            input = <textarea  className={classes.InputElement}  {...props}  />
            break;
        default:
            input = <input  className={classes.InputElement} {...props} />
    }

    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {input}
        </div>
    );
}

const Select = (props) => {

    let option_data = [...props.option];

    if(props.sortBy){
        option_data = option_data.sort((a,b) => {
            return  a[props.sortBy] > b[props.sortBy]
         })
    }

    const option = option_data.map(opt =>{
        return (
            <option key={opt.value} value={opt.value}>{opt.display}</option>
        );
    });

    return (
        <select className={props.className}>
            {option}
        </select>
    );

} 

const TextArea = (props) => {
    return(
        <TextArea {...props} />
    );
}


export default Input;