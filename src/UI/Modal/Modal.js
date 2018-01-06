import React,{Component} from 'react';
import classes from './Modal.css';

import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{

    render(){
        const modal = this.props.show ? (
            <Aux>
                <Backdrop onClick={this.props.close} />
                <div className={classes.Modal}>
                    <span 
                        className={classes.Close}
                        onClick={this.props.close}>x</span>
                        
                    {this.props.children}
                
                </div>
            </Aux>
        ): null
    
        return modal;    
    }
}

export default Modal;