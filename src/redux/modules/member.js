// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import axios from 'axios';
import { setCookie } from '../../shared/cookie';

// Redux Thunk 구현 부분
export const emailDupCheckThunk = createAsyncThunk(
  'member/emailDupCheck',
  async (payload, thunkAPI) => {
    let check = false;
    const resData = await axios
      .get(`http://localhost:5001/member`)
      .then((res) => res.data)
      .catch((error) => console.err(error));
    resData.forEach((member) => {
      console.log(member.loginId);
      if (payload === member.loginId) check = true;
    });
    return thunkAPI.fulfillWithValue(check);
  }
);

export const nickNameDupCheckThunk = createAsyncThunk(
  'member/nickNameDupCheckThunk',
  async (payload, thunkAPI) => {
    let check = false;
    const resData = await axios
      .get(`http://localhost:5001/member`)
      .then((res) => res.data)
      .catch((error) => console.err(error));
    resData.forEach((member) => {
      console.log(member.nickname);
      if (payload === member.nickname) check = true;
    });
    return thunkAPI.fulfillWithValue(check);
  }
);

export const addMemberThunk = createAsyncThunk(
  'member/addMember',
  async (payload, thunkAPI) => {
    const resData = await axios
      .post(`http://localhost:5001/member`, payload)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const getMemberThunk = createAsyncThunk(
  'member/getMember',
  async (payload, thunkAPI) => {
    const resData = await axios
      .get(`http://localhost:5001/member`)
      .then((res) => res.data);
    const match = resData.find((user) => user.loginId === payload);
    return thunkAPI.fulfillWithValue(match);
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
