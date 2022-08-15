// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Package import
import axios from 'axios';

// Redux Thunk 구현 부분
const addComment = createAsyncThunk(
  'commnet/addComment',
  async (payload, thunkAPI) => {
    // 비동기 통신 구현
  }
);

// GET
export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    const resData = await axios
      .get(`http://localhost:5001/comment/${payload}`)
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue({ resData });
  }
);

// Comment 초기 상태 값
const initialState = {
  is_loaded: true,
  comment: [],
};

// reducers 또는 extraReducers 구현
export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentThunk.fulfilled, (state, action) => {
      state.is_loaded = false;
      const newState = state.comment.filter(
        (com) => com.id !== action.payload.id
      );

      // 상태 변화 코드 작성
      state.comment = newState.push(action.payload);
    });
  },
});

export default commentSlice.reducer;
