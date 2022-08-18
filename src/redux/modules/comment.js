// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios import
import { api, api_auth } from '../../shared/api';

// Redux Thunk 구현 부분
export const addCommentThunk = createAsyncThunk(
  'comment/addComment',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };

    const resData = await api_auth
      .post(`/auth/comment`, payload, { headers })
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

// GET
export const getCommentThunk = createAsyncThunk(
  'comment/getComment',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/comment/${payload}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));

    return thunkAPI.fulfillWithValue(resData);
  }
);

// Delete
export const deleteCommentThunk = createAsyncThunk(
  'comment/deleteComment',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };

    const resData = await api_auth
      .delete(`/auth/comment/${payload}`, { headers })
      .then((res) => res.data)
      .catch((err) => {
        alert('본인 댓글만 삭제가 가능합니다.');
        console.err(err);
      });
    return thunkAPI.fulfillWithValue({ resData, id: payload });
  }
);

// Comment 초기 상태 값
const initialState = {
  is_loaded: false,
  comment: [],
};

// reducers 또는 extraReducers 구현
export const commentSlice = createSlice({
  name: 'comment',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCommentThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      state.comment = action.payload.data;
    });
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      state.comment = [...state.comment, action.payload.data];
    });
    builder.addCase(deleteCommentThunk.fulfilled, (state, action) => {
      state.comment = state.comment.map((com) => {
        if (com.id === action.payload.id) {
          com.comment = '삭제된 댓글입니다.';
        }
        return com;
      });
    });
  },
});

export default commentSlice.reducer;
