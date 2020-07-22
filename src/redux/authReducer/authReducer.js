import { authActionType } from "./authActionType";

const ISTATE = {
    authErr : null
}

const authReducer = (state = ISTATE , action)=>{
    switch (action.type) {
        case authActionType.LOGIN_SUCCESS :
            console.log('success')
            return {
                ...state,
                authErr : null
            }
        case authActionType.LOGIN_ERR :
            console.log('login failed' , action.payload)
            return {
                ...state,
                authErr : 'Login Failed'
            }  
        case authActionType.SIGNOUT_SUCCESS :
            console.log('Sign-out , success')
            return {
                ...state,
                authErr : null
            }
        case authActionType.SIGNUP_SUCCESS :
            console.log('SignUp , success')
            return {
                ...state,
                authErr : null
            }
        case authActionType.SIGNUP_ERR :
        console.log('SignUp  Errr' , action.payload)
        return {
            ...state,
            authErr : 'Signup failed'
        }


        default:
            return state;
    }

}

export default authReducer;