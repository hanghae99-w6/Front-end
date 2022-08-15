import { configureStore, combineReducers } from '@reduxjs/toolkit';
import member from './modules/member';
import comment from './modules/comment';

const rootReducer = combineReducers({ member, comment });
const store = configureStore({ reducer: rootReducer });

export default store;
