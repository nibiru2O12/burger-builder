import axios from 'axios';

export const AUTH_START="AUTH_START";
export const AUTH_END="AUTH_END";
export const AUTH_FAIL="AUTH_FAIL";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_RESET = "AUTH_RESET";
export const AUTH_LOGOUT = "AUTH_LOGOUT";

export function authReset(){
    return{
        type:AUTH_RESET
    }
}

export function authStart(){
    return {
        type:AUTH_START
    }
}

function authFail(error){
    return {
        type:AUTH_FAIL,
        error
    }
}

function authSuccess(user){
    return {
        type:AUTH_SUCCESS,
        user
    }
}

function autoLogout(expiryInSeconds){
    return dispatch => {
        setTimeout( dispatch(logout()) ,expiryInSeconds * 1000);
    }
}

export function logout(){
    return{
        type:AUTH_LOGOUT
    }
}

export function signup(email,password){
    
    return dispatch =>{

        dispatch(authReset());
        dispatch(authStart());

        const key = 'AIzaSyDWlpnPQUCzzPDHsg-OEu_0tBYZhetTf_w';
        const endpoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${key}`;
        
        axios.post(endpoint,{email,password,returnSecureToken:true})
             .then(response => dispatch(authSuccess(response.data)))
             .catch(err => dispatch(authFail("Email address already exists")) );
    }

}

export function signin(email,password){
    
    return dispatch =>{

        dispatch(authReset());
        dispatch(authStart());

        const key = 'AIzaSyDWlpnPQUCzzPDHsg-OEu_0tBYZhetTf_w';
        const endpoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`;
        
        axios.post(endpoint,{email,password,returnSecureToken:true})
             .then(response => dispatch(authSuccess(response.data)))
             .catch(err => dispatch(authFail("Incorrect Email Address / Password")) );
    }

}
