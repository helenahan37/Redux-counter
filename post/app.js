const { createAsyncThunk } = require('@reduxjs/toolkit');
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
createAsyncThunk('posts/fetchPosts', async () => {});

//slice
