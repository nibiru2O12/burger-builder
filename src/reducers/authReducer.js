import * as authAction from '../actions/authAction';

const initialState = {
    authenticating: false,
    token:null,
    expiry:null,
    error:null,
    expiresIn:null
}

function authReducer(state=initialState,action){

    switch(action.type){
        case authAction.AUTH_RESET:
            return {
                ...state,...initialState
            }
        case authAction.AUTH_START:
            return {
                ...state, authenticating : true,
                token:null
            };
        case authAction.AUTH_SUCCESS:

            const expiresDate = new Date(new Date().getTime() + (action.user.expiresIn * 1000));
            localStorage.setItem('token',action.user.idToken);
            localStorage.setItem('expiryDate',expiresDate);

            return {
                ...state, authenticating : false,
                token:action.user.idToken,expiresIn:action.user.expiresIn

            };
        case authAction.AUTH_FAIL:
            return {
                ...state, authenticating : false,
                token:null,error:action.error
            }
        case authAction.AUTH_RELOG:
            
            const expiresIn = (new Date(action.expiryDate) - new Date())/1000

            return {
                ...initialState,token:action.token,expiresIn:expiresIn
            }
        case  authAction.AUTH_LOGOUT:
            return{
                ...initialState
            }
        default:
            return state;
    }

}

export default authReducer