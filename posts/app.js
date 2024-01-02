const { createAsyncThunk, createSlice, configureStore } = require('@reduxjs/toolkit');

const axios = require('axios');

//inital state
const API = 'https://jsonplaceholder.typicode.com/posts';
//action creater
const initialState = {
	posts: [],
	loading: false,
	error: null,
};
//create async thunk
const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const res = await axios.get(API);
	return res.data;
});

//slice
const postSlice = createSlice({
	name: 'posts',
	initialState,
	extraReducers: (builder) => {
		//handle pending, fulfilled, rejected lifecycle actions
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.posts = action.payload;
			state.loading = false;
		});
		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.posts = [];
			state.loading = false;
			state.error = action.error;
		});
	},
});

//generate reducer
const postsReducer = postSlice.reducer;

//store
const store = configureStore({
	reducer: postsReducer,
});

//dispatch
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchPosts());
