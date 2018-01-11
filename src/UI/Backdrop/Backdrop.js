import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

class Backdrop extends Component{

    static defaultProps={
        show:false
    }

    static propTypes = {
        show:PropTypes.bool,
        onClick:PropTypes.func
    }

    render(){
        return (
            this.props.show ? 
                <div className={classes.Backdrop} 
                     onClick={this.props.onClick}></div> : null
        )
    }
}

export default Backdrop;