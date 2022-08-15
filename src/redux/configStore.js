import { configureStore, combineReducers } from '@reduxjs/toolkit';
import member from './modules/member';
import post from './modules/post';
import comment from './modules/comment';

const rootReducer = combineReducers({ member, post, comment });
const store = configureStore({ reducer: rootReducer });

export default store;