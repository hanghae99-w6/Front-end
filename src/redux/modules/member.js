// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios import
import { api, api_auth } from '../../shared/api';
import axios from 'axios';

// Package import
import { setCookie } from '../../shared/cookie';

// Redux Thunk 구현 부분
export const emailDupCheckThunk = createAsyncThunk(
  'member/emailDupCheck',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/api/members/idcheck`, payload)
      .then((res) => res.data)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const nickNameDupCheckThunk = createAsyncThunk(
  'member/nickNameDupCheckThunk',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/api/members/nicknamecheck`, payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const addMemberThunk = createAsyncThunk(
  'member/addMember',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/api/members/signup`, payload)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signMemberThunk = createAsyncThunk(
  'member/signMember',
  async (payload, thunkAPI) => {
    console.log('axios start');
    const resData = await api
      .get(`http://3.37.127.16:8080/api/members/login`)
      .then((res) => {
        console.log(res);
        return res.data.success;
      });
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  'member/kakaoLogin',
  async (payload, thunkAPI) => {
    console.log('test');
    console.log(payload);
    const resData = await api
      .post(`http://localhost:5001/code`, payload)
      .then((res) => res.data);
    window.location.replace('/main');
    setCookie('nickname', 'test');
    return thunkAPI.fulfillWithValue(resData);
  }
);

// Member 초기 상태 값
const initialState = {
  nickname: '',
  loginStatus: false,
};

// reducers 또는 extraReducers 구현
export const memberSlice = createSlice({
  name: 'member',
  initialState: initialState,
  reducers: {
    signInAction: (state, action) => {
      setCookie('nickname', action.payload.nickname);
      state.nickname = action.payload.nickname;
      state.loginStatus = action.payload.loginStatus;
    },
  },
  extraReducers: (builder) => {},
});

export const { signInAction } = memberSlice.actions;
export default memberSlice.reducer;