import React,{Component} from 'react';

import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import validateInputControls,{inputValidation} from '../../UI/Input/inputValidation';
import classes from './Auth.css';

class Auth extends Component {

    state = {
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

        console.log(target);
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
        
    }

    render() {

        const {formControls} = this.state;

        const inputs = Object.keys(formControls).map(cust => {
            return <Input key={cust} 
                            {...formControls[cust].props} 
                            value={formControls[cust].value} 
                            error={formControls[cust].errMessages}
                            onChange={this.handleInputChange} />
        });

        return (

            <form className={classes.Auth} onSubmit={(e)=>this.handleSubmit(e)}>
                {inputs}
                <Button btnType="Success">Submit</Button>
                <Button btnType="Danger">Cancel</Button>
            </form>
        );
    }
}

export default Auth;

