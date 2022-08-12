// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import axios from 'axios';

// Redux Thunk 구현 부분
const addUser = createAsyncThunk('user/addUser', async (payload, thunkAPI) => {
  // 비동기 통신 구현
});

// User 초기 상태 값
const initialState = {
  user: '',
  loginStatus: false,
};

// reducers 또는 extraReducers 구현
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addUser.fulfilled, (state, action) => {
      // 상태 변화 코드 작성
    })
  },
});

export const { signInAction } = userSlice.actions;
export default userSlice.reducer;