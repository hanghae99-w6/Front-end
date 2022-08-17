// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios import
import { api } from '../../shared/api';

// Redux Thunk 구현 부분
// ADD
export const addCommentThunk = createAsyncThunk(
  'comment/addComment',
  async (payload, thunkAPI) => {
    const resData = await api
      .post(`http://localhost:5001/auth/comment`, payload) //첫번째 인자, 두번째 인자
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue({ resData });
  }
);

// GET
export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`http://localhost:5001/post/${payload}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));

    return thunkAPI.fulfillWithValue({ resData });
  }
);

// Delete
export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    const resData = await api
      .delete(`http://localhost:5001/comment/${payload}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));

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
