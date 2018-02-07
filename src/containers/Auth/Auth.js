import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as authAction  from '../../actions/authAction';

import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import validateInputControls,{inputValidation} from '../../UI/Input/inputValidation';
import classes from './Auth.css';
import { Redirect } from 'react-router-dom';

class Auth extends Component {

    state = {
        isSignIn:true,
        formControls: {
            email:{
                value:'',
                props:{
                    label:'Email Address',
                    name:'email',
                    type:'email',
                    placeholder:"Your email address"
                },
                validations:{
                    required:true,
                    email:true
                },
                errMessages:null
            },
            password:{
                value:'',
                props:{
                    label:"Password",
                    name:'password',
                    type:'password'
                },
                validations:{
                    minLength:8
                },
                errMessages:null
            }
        }
    }

    handleInputChange = ({target}) => {
        //create copy of order form
        const oform = {...this.state.formControls};

        //change field valud
        oform[target.name].value = target.value;

        //get all errors
        oform[target.name].errMessages =  inputValidation(oform[target.name]);

        this.setState({fromControls:oform});

    }

    handleSubmit = e => {
        e.preventDefault();

        const {newForm,hasError} = validateInputControls({...this.state.formControls});

        if(hasError){
            this.setState({
                formControls:newForm
            });
            return false;
        }

        const {email,password} = this.state.formControls;

        if(this.state.isSignIn){
            this.props.signin(email.value,password.value);
        }else{
            this.props.signup(email.value,password.value);
        }

    }

    handleToggleSignIn = (e) =>{
        e.preventDefault();
        this.setState(prev => {
            return {
                isSignIn : !prev.isSignIn
            }
        });
    }

    render() {

        let inputs = null;
        const {formControls} = this.state;

        //show loading
        if(this.props.isAuthenticating){
            inputs = (<Spinner />);
        }else{
            inputs = Object.keys(formControls).map(cust => {
                return <Input key={cust} 
                                {...formControls[cust].props} 
                                value={formControls[cust].value} 
                                error={formControls[cust].errMessages}
                                onChange={this.handleInputChange} />
            });
        }

        if(this.props.isAuthenticated){
            inputs = <Redirect to='/' />
        }

        return (
            <div>
                <form className={classes.Auth} onSubmit={(e)=>this.handleSubmit(e)}>
                    <h3><u>{this.state.isSignIn ? 'SIGN-IN' : 'SIGN-UP'}</u></h3>
                    {inputs}
                    <p>{this.props.error}</p>
                    <Button btnType="Success">Submit</Button>
                    <Button btnType="Danger" onClick={(e)=>this.handleToggleSignIn(e)}>
                            {!this.state.isSignIn ? 'Sign in' : 'Sign up'}
                    </Button>
                </form>
            </div>
        
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticating : state.auth.authenticating,
        isAuthenticated: state.auth.token !== null,
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signup : (email,password) => dispatch(authAction.signup(email,password)),
        signin : (email,password) => dispatch(authAction.signin(email,password))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);

