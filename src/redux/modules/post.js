// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios import
import { api, api_auth } from '../../shared/api';

// Redux Thunk 구현 부분
export const getPostThunk = createAsyncThunk(
  'post/getPost',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`http://localhost:5001/post`)
      .then((res) => res.data)
      .catch((err) => console.err(err));

    return thunkAPI.fulfillWithValue(resData);
  }
);

// Post 초기 상태 값
const initialState = {
  is_loaded: false,
  post: [],
};

// reducers 또는 extraReducers 구현
export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostThunk.fulfilled, (state, action) => {
      state.is_loaded = true;
      state.post = action.payload;
    });
  },
});

export const { signInAction } = postSlice.actions;
export default postSlice.reducer;
