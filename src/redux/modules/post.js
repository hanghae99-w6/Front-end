// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import axios from 'axios';

// Redux Thunk 구현 부분
const addPost = createAsyncThunk('post/addPost', async (payload, thunkAPI) => {
  // 비동기 통신 구현
});

// Post 초기 상태 값
const initialState = {
  detail_is_loaded: false,
  is_loaded: false,
  post: [],
};

// reducers 또는 extraReducers 구현
export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPost.fulfilled, (state, action) => {
      // 상태 변화 코드 작성
    });
  },
});

export const { signInAction } = postSlice.actions;
export default postSlice.reducer;
