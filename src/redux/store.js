import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import studentReducer from './reducer'
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,studentReducer)

export const store = configureStore({
    reducer:{
        student : persistedReducer
    }
});

export let persistor = persistStore(store)