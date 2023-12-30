const { createSlice, configureStore } = require('@reduxjs/toolkit');
//initial state
const initialState = {
	counter: 0,
};

//createSlice
const counterSlice = createSlice({
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
			state.counter += action.payload;
		},
	},
});

//generate action
const { increment, decrement, resetcounter, incrementBy } = counterSlice.actions;

//generate reducer
const counterReducer = counterSlice.reducer;

//store
const store = configureStore({
	reducer: counterReducer,
});

//dispatch
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(resetcounter());

store.dispatch(incrementBy(200));

console.log(store.getState());
