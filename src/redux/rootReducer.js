import {combineReducers} from 'redux'
import authReducer from './authReducer/authReducer'
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import themeReducer from './themeReducer/themeReducer';

const rootReducer = combineReducers({
    firebase : firebaseReducer ,
    firestore : firestoreReducer,
    auth : authReducer,
    theme : themeReducer 
})


export default rootReducer;