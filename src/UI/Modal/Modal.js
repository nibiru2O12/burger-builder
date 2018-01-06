import React,{Component} from 'react';
import classes from './Modal.css';

import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    render(){
        const {show} = this.props;
        return (
            <Aux>
                <Backdrop onClick={this.props.close} show={show} />
                <div className={classes.Modal} 
                    style={{
                        transform : show ? "translateY(0)" : "translateY(-100vh)",
                        opacity :  show ? "1" : "0",
                    }}>
                    <span 
                        className={classes.Close}
                        onClick={this.props.close}>x</span>
                        
                    {this.props.children}
                
                </div>
            </Aux>
        );    
    }
}

export default Modal;