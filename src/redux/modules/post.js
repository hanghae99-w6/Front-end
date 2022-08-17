// Redux import
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Axios import
import { api, api_auth, api_image } from '../../shared/api';

export const getMoviePostThunk = createAsyncThunk(
  'get/getMoviePost',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/main/movie`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const getDramaPostThunk = createAsyncThunk(
  'get/getDramaPost',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/main/drama`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const getEntertainPostThunk = createAsyncThunk(
  'get/getPgetDramaPostost',
  async (payload, thunkAPI) => {
    const resData = await api
      .get(`/main/entertain`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const uploadImageThunk = createAsyncThunk(
  'post/uploadImage',
  async (payload, thunkAPI) => {
    const resData = await api_image
      .post(`/upload`, payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));

    return thunkAPI.fulfillWithValue({
      success: resData.success,
      data: resData.data,
    });
  }
);

export const addPostThunk = createAsyncThunk(
  'post/addPost',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .post(`/auth/post`, payload)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const likePostThunk = createAsyncThunk(
  'post/likePost',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .post(`/auth/postlikes/${payload.id}`)
      .then((res) => res.data)
      .catch((err) => console.err(err));

    return thunkAPI.fulfillWithValue(resData);
  }
);

export const userLikePostThunk = createAsyncThunk(
  'get/userLikePost',
  async (payload, thunkAPI) => {
    const resData = await api_auth
      .get(`/auth/likedpost`)
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

const initialState = {
  detail_is_loaded: false,
  movie_is_loaded: false,
  drama_is_loaded: false,
  entertain_is_loaded: false,
  movie_post: [],
  drama_post: [],
  entertain_post: [],
  liked_post: []
};

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMoviePostThunk.fulfilled, (state, action) => {
      state.movie_is_loaded = true;
      state.movie_post = action.payload;
    });
    builder.addCase(getDramaPostThunk.fulfilled, (state, action) => {
      state.drama_is_loaded = true;
      state.drama_post = action.payload;
    });
    builder.addCase(getEntertainPostThunk.fulfilled, (state, action) => {
      state.entertain_is_loaded = true;
      state.entertain_post = action.payload;
    });
    builder.addCase(userLikePostThunk.fulfilled, (state, action) => {
      state.liked_post = action.payload;
    });
  },
});

export const { signInAction } = postSlice.actions;
export default postSlice.reducer;
