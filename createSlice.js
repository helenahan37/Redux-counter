const { createSlice, configureStore } = require('@reduxjs/toolkit');
//initial state
const initialState = {
	counter: 0,
};

//createSlice
createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment: (state) => {
			state.counter += 1;
		},
		decrement: (state) => {
			state.counter -= 1;
		},
		resetcounter: (state) => {
			state.counter = 0;
		},
		incrementBy: (state, action) => {
			state.counter += action.payload.amount;
		},
	},
});
