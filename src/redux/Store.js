import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";

import thunk from "redux-thunk";
import { getFirebase} from 'react-redux-firebase'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['firebase','firestore' , 'theme'] // only navigation will be persisted
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const middleWare = [thunk.withExtraArgument({getFirebase})]


export const store = createStore(persistedReducer, composeEnhancers(
    applyMiddleware(...middleWare)
    ))
    
export const  persistor = persistStore(store)



