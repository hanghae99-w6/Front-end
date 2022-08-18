// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import { api } from '../../shared/api';

// Redux Thunk 구현 부분
export const emailDupCheckThunk = createAsyncThunk(
  'member/emailDupCheck',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/members/idcheck`, payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const nickNameDupCheckThunk = createAsyncThunk(
  'member/nickNameDupCheckThunk',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/members/nicknamecheck`, payload)
      .then((res) => res.data.success)
      .catch((error) => console.err(error));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const addMemberThunk = createAsyncThunk(
  'member/addMember',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/members/signup`, payload)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const signMemberThunk = createAsyncThunk(
  'member/signMember',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://3.37.127.16:8080/members/login`, payload)
      .then((res) => res)
      .catch((err) => console.err(err));
    window.localStorage.setItem(
      'authorization',
      resData.headers['authorization'].split(' ')[1]
    );
    window.localStorage.setItem(
      'refresh-token',
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
  }
);

export const kakaoAuthThunk = createAsyncThunk(
  'member/kakaoLogin',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/members/kakao/callback?code=${payload.code}`)
      .then((res) => res);
    window.localStorage.setItem(
      'authorization',
      resData.headers['authorization'].split(' ')[1]
    );
    window.localStorage.setItem(
      'refresh-token',
      resData.headers['refresh-token']
    );

    return thunkAPI.fulfillWithValue(resData.data.success);
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
      state.nickname = action.payload.nickname;
      state.loginStatus = action.payload.loginStatus;
    },
    headerAction: (state, action) => {
      state.nickname = action.payload.nickname;
      state.loginStatus = action.payload.loginStatus;
    },
  },
  extraReducers: (builder) => {},
});

export const { signInAction, headerAction } = memberSlice.actions;
export default memberSlice.reducer;
