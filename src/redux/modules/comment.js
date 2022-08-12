// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import axios from 'axios';

// Redux Thunk 구현 부분
const addComment = createAsyncThunk('commnet/addComment', async (payload, thunkAPI) => {
  // 비동기 통신 구현
});

// Comment 초기 상태 값
const initialState = {
  is_Loaded: true,
  commnet: []
};

// reducers 또는 extraReducers 구현
export const commentSlice = createSlice({
  name: 'Comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addComment.fulfilled, (state, action) => {
      // 상태 변화 코드 작성
    })
  },
});

export const { signInAction } = commentSlice.actions;
export default commentSlice.reducer;