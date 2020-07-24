
import { authActionType } from "./authActionType";




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
            console.log('snapshot', res)
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
    console.log ('inside signup' ,creds)
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
            .catch(err=>dispatch(signupFailed(err)))
    }
}
 

export const signIn = (creds) => {
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();

        firebase
        .auth()
        .signInWithEmailAndPassword(creds.email , creds.password)
            .then(() =>dispatch(loginSuccess()))
            .catch(err=>dispatch(loginFailed(err)))
    }
}
 

export const signOut = () => {
    return (dispatch , getState , { getFirebase })=>{
        const firebase  = getFirebase();

        firebase
        .auth()
        .signOut()
        .then(() =>dispatch(signoutSuccesss()))
    }
}




export const loginSuccess =()=> ({
    type : authActionType.LOGIN_SUCCESS
})

export const loginFailed =(err)=> ({
    type : authActionType.LOGIN_ERR,
    payload : err
})

export const signoutSuccesss =()=> ({
    type : authActionType.SIGNOUT_SUCCESS
})


export const signupSuccess =()=> ({
    type : authActionType.SIGNUP_SUCCESS
})

export const signupFailed =(err)=> ({
    type : authActionType.SIGNUP_ERR,
    payload : err
})
