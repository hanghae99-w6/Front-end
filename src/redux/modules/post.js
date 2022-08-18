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

export const getSinglePostThunk = createAsyncThunk(
  'get/getSinglePost',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };

    const resData = await api_auth
      .get(`/post/${payload}`, { headers })
      .then((res) => res.data.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
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
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };
    const resData = await api_auth
      .post(`/auth/post`, payload, { headers })
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData.data);
  }
);

export const likePostThunk = createAsyncThunk(
  'post/likePost',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };
    const resData = await api_auth
      .post(`/auth/postlikes/${payload.id}`, {}, { headers })
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const userLikePostThunk = createAsyncThunk(
  'get/userLikePost',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };

    const resData = await api_auth
      .get(`/auth/likedpost`, { headers })
      .then((res) => res.data)
      .catch((err) => console.err(err));
    return thunkAPI.fulfillWithValue(resData);
  }
);

export const deletePostThunk = createAsyncThunk(
  'get/deletePost',
  async (payload, thunkAPI) => {
    const headers = {
      authorization: `Bearer ${window.localStorage.getItem('authorization')}`,
      'refresh-token': `${window.localStorage.getItem('refresh-token')}`,
    };

    const resData = await api_auth
      .delete(`/auth/post/${payload}`, { headers })
      .then((res) => res.data)
      .catch((err) => {
        alert('본인 포스팅만 삭제가 가능합니다.');
        console.err(err);
      });
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
  liked_post: [],
  single_post: [],
};

export const postSlice = createSlice({
  name: 'post',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPostThunk.fulfilled, (state, action) => {
      switch(action.payload.category) {
        case 'movie': {
          state.movie_post = action.payload;
          break;
        }
        case 'drama': {
          state.drama_post = action.payload;
          break;
        }
        case 'entertain': {
          state.entertain_post = action.payload;
          break;
        }
        default:
          break;
      }
      state.movie_post = action.payload;
    });
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
    builder.addCase(getSinglePostThunk.fulfilled, (state, action) => {
      state.detail_is_loaded = true;
      state.single_post = action.payload;
    });
  },
});

export const { signInAction } = postSlice.actions;
export default postSlice.reducer;
