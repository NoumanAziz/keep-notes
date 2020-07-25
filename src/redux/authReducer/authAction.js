
import { authActionType } from "./authActionType";
import { openSnackbar } from "../snackbarReducer/snackbarReducerAction";




export const googleSignin  = () => {
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();
        const firestore = getFirebase().firestore()
    const auth = firebase.auth();
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({  
    'prompt': 'select_account'
    })
    auth.signInWithPopup(provider)


    .then((response) =>{
        
        console.log('response after signin from google' , response)
 
        firestore.collection('users').doc(response.user.uid).get().then(res => {
            // const  name  = response.user.displayName ;
        !res.exists && (
            
                        firestore.collection('users').doc(response.user.uid)

                            .set({
                                
                                name : response.user.displayName ,
                                photoURL : response.user.photoURL,
                                createdAt : new Date()
                                })
                        )
                }
            )
            
        })
            .then(()=>dispatch(loginSuccess()))
            .catch(err=>dispatch(loginFailed(err)))
    }};


    
export const signUp = (creds) => {
 
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();
        const firestore = getFirebase().firestore()

        firebase
        .auth()
        .createUserWithEmailAndPassword(creds.email , creds.password)
            .then((response) =>
            firestore.collection('users').doc(response.user.uid)
            .set({
                name : creds.name,
                photoURL : creds.photoURL,
                createdAt : new Date()
            })
            )
            .then(()=>dispatch(signupSuccess()))
            .catch(err=>dispatch(signupFailed(err.code)))
    }
}
 

export const signIn = (creds) => {
   
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();

        firebase
        .auth()
        .signInWithEmailAndPassword(creds.email , creds.password)
            .catch(err=>dispatch(loginFailed(err.code)))
    }
}
 

export const signOut = () => {
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();

        firebase
        .auth()
        .signOut()
        .then(() =>dispatch(openSnackbar(`Signed Out !!!`)))
    }
}





export const loginFailed =(erorr)=> ({
    type : authActionType.LOGIN_ERR,
    payload : erorr
})

export const signupFailed =(err)=> ({
    type : authActionType.SIGNUP_ERR,
    payload : err
})



export const loginSuccess =()=> ({
    type : authActionType.LOGIN_SUCCESS
})
export const signupSuccess =()=> ({
    type : authActionType.SIGNUP_SUCCESS
})

export const signoutSuccesss =()=> ({
    type : authActionType.SIGNOUT_SUCCESS
})