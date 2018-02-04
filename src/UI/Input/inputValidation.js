export const inputValidation = (field) => {

    let errMsg = [];

    // return true if no validation is setup
    if(!field.validations) return errMsg;

    //check all validation
    for(let v in field.validations){
        switch(v){
            case "required":
                if(field.value==='') errMsg.push('is Required');
                break;
            case "minLength":
               if(field.value.length < field.validations[v]) 
                {
                    errMsg.push(`Please enter atleast ${field.validations[v]} characters`);
                }
                break;
            case "maxLength":
                if(field.value.length > field.validations[v]){
                    errMsg.push(`Please enter not exceeding ${field.validations[v]} characters`);
                }
                break;
            default:
        }
    }

    return errMsg;

 }

 const validateInputControls = (formControls) =>{
    let values = {};

    let hasError = false;

    for( let o in formControls){
        formControls[o].errMessages = inputValidation(formControls[o]);
        values[o]=formControls[o].value ;
        
        if(formControls[o].errMessages.length!==0){
            hasError=true;
        }
        
    }

    return {
        newForm:formControls, hasError, values
    }
 }

 export default validateInputControls
