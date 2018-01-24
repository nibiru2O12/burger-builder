import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    
    let input = null;

    let inputClass = [classes.InputElement];

    if(props.error) inputClass.push(classes.InputError);

    console.log(inputClass)
    switch(props.type){
        case "select":
            input = <Select className={inputClass.join(' ')} {...props} />
            break;
        case "textarea":
            input = <textarea value={props.value}  className={inputClass.join(' ')}  {...props}  />
            break;
        default:
            input = <input value={props.value} className={inputClass.join(' ')} {...props} />
    }


    return(
        <div className={classes.Input}>
            <label className={classes.Label}>
                { props.isrequired ? `*${props.label}` : props.label}
            </label> 
            {input}
            {
                props.error ? <p className={classes.Error}>{`*${props.label} ${props.error}`}</p> :null
             }
        </div>
    );
}

const Select = (props) => {

    let option_data = [...props.option];

    if(props.sortby){
        //setup sorting
        option_data = option_data.sort((a,b) => {
            return  a[props.sortby] > b[props.sortby]
         })
    }

    const option = option_data.map(opt =>{
        //setup options
        return (
            <option key={opt.value} value={opt.value} >{opt.display}</option>
        );
    });

    return (
        <select className={props.className} {...props}>
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