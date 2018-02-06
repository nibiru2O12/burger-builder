import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as authAction  from '../../actions/authAction';

import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import validateInputControls,{inputValidation} from '../../UI/Input/inputValidation';
import classes from './Auth.css';

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

        if(!this.props.location.state.from){
        }
        this.props.history.replace('/orders');
        console.log(this.props.location.state.from)

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
        
        if(!this.props.token){
            this.props.history.replace('/orders');
            return <div></div>
        }

        let inputs = null;
        const {formControls} = this.state;
        let authMethod = this.state.isSignIn ? 'SIGN-IN' : 'SIGN-UP'

        //show loading
        if(this.props.auth.authenticating){
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
        return (
            <div>
                <form className={classes.Auth} onSubmit={(e)=>this.handleSubmit(e)}>
                    <h3><u>{this.state.isSignIn ? 'SIGN-IN' : 'SIGN-UP'}</u></h3>
                    {inputs}
                    <p>{this.props.auth.error}</p>
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
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signup : (email,password) => dispatch(authAction.signup(email,password)),
        signin : (email,password) => dispatch(authAction.signin(email,password))
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth);

