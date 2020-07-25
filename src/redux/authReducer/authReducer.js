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
    
            case authActionType.LOGIN_ERR :
                console.log('login failed' , action.payload)
                if (action.payload == 'auth/user-not-found')
                return {
                    ...state,
                    authErr : 'Email is not registered'
                }  
                if (action.payload == 'auth/wrong-password')
                return {
                    ...state,
                    authErr : 'Wrong password'
                }  
                
          
            case authActionType.SIGNUP_ERR :
            console.log('SignUp  Errr' , action.payload)
            if(action.payload == 'auth/email-already-in-use')
            return {
                ...state,
                authErr : 'This email is already associated with the existing account'
            }
    


        default:
            return state;
    }

}

export default authReducer;