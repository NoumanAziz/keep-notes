import {combineReducers} from 'redux'
import authReducer from './authReducer/authReducer'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import themeReducer from './themeReducer/themeReducer';
import mobLayoutReducer from './mobReducer/mobLayoutReducer';


const rootReducer = combineReducers({
    firebase : firebaseReducer ,
    firestore : firestoreReducer,
    auth : authReducer,
    theme : themeReducer,
    mobLayout : mobLayoutReducer,
   
})


export default rootReducer;