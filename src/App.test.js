import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Input from './UI/Input/Input';


class AppTest extends Component{

  state = {
          form:{
            lastname : {
              name:"last_name",
              value:"",
              props:{
                      type:"input",
                      label:"Last Name",
                      placeholder:"Last name",
                      required:true
                    }
            },
            firstname : {
                          name:"first_name",
                          value:"",
                          props:{
                                  type:"input",
                                  label:"First Name",
                                  placeholder:"First name",
                                  required:true
                                }
                        },
            middlename : {
                          name:"middle_name",
                          value:"",
                          props:{
                                  type:"input",
                                  label:"Middle Name",
                                  placeholder:"Middle name",
                                  required:false
                                }
                        },  
                          
            gender : {
                          name:"gender",
                          value:"",
                          props:{
                                  type:"select",
                                  label:"Gender",
                                  option:[
                                          {value:"male",display:"Male"},
                                          {value:"female",display:"Female"}
                                        ],
                                  required:true
                                }
                        },  
                                          
            address : {
                          name:"address",
                          value:"",
                          props:{
                                  type:"textarea",
                                  rows:3,
                                  label:"Address",
                                  required:true
                                }
                        } 
          }

  }


  render(){

    const inputs = Object.keys(this.state.form).map(i=>{
        const input = this.state.form[i];
        return (
          <Input key={input.name} name={input.name} value={input.value} {...input.props} />
        );
    });

    return (
      <div>
        {inputs}
      </div>
    )
  }
}

export default AppTest;