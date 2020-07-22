import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/Store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'
import firebase from './config/firebaseConfig'
import { PersistGate } from 'redux-persist/integration/react'




 const rrfConfig = {
        userProfile: 'users', // where profiles are stored in database
        useFirestoreForProfile: true, // use Firestore for profile instead of RTDB
        presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions' // where list of user sessions is stored in database (presence must be enabled)
}

const rrfProps = {
    firebase , 
    config : rrfConfig,
    dispatch : store.dispatch,
    attachAuthisReady:true,
    createFirestoreInstance
} 

ReactDOM.render(
    <Provider store = {store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <ReactReduxFirebaseProvider {...rrfProps}>
                    <App/>
                </ReactReduxFirebaseProvider>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();

//needed wghen you want collection of users in your project from firestore otherwise we leave it empty in rrfProps
// const rrfConfig = {
//     userProfile : 'users'
// }