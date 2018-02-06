import * as authAction from '../actions/authAction';

const initialState = {
    authenticating: false,
    token:null,
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
            return {
                ...state, authenticating : false,
                token:action.user.idToken

            };
        case authAction.AUTH_FAIL:
            return {
                ...state, authenticating : false,
                token:null,error:action.error
            }
        default:
            return state;
    }

}

export default authReducer