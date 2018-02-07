import * as authAction from '../actions/authAction';

const initialState = {
    authenticating: false,
    token:null,
    expiry:null,
    error:null
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
            localStorage.setItem('token',action.user.idToken);
            return {
                ...state, authenticating : false,
                token:action.user.idToken

            };
        case authAction.AUTH_FAIL:
            return {
                ...state, authenticating : false,
                token:null,error:action.error
            }
        case authAction.AUTH_RELOG:
            return {
                ...initialState,token:action.token
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