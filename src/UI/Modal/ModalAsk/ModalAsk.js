import React, { Component } from 'react';

import classes from '../Modal.css';

import Aux from '../../../hoc/Aux';
import Backdrop from '../../Backdrop/Backdrop';
import Button from '../../Button/Button';

class ModalAsk extends Component{

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} onClick={this.props.close}/>            
                <div className={classes.Modal} style={{backgroundColor:"white",
                            transform : this.props.show ? "translateY(0)" : "translateY(-100vh)"
                            }}>
                    <p>{this.props.children}</p>
                    <Button btnType="Success" onClick={this.props.yes}>YES</Button>
                    <Button btnType="Danger" onClick={this.props.close}>NO</Button>
                </div>
            </Aux>
        );
    }

}

export default ModalAsk;