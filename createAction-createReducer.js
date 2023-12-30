const { createReducer, configureStore, createAction } = require('@reduxjs/toolkit');
const { nanoid } = require('redux');
const logger = require('redux-logger').createLogger();

//Initial state
const initialState = {
	counter: 0,
};

//Action creator
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');
const resetcounter = createAction('RESET');

const incrementBy = createAction('INCREMENT_BY', (amount, user) => {
	return {
		payload: {
			amount,
		},
	};
});

//Reducer
const counterSlice = createReducer(initialState, (builder) => {
	//increment
	builder.addCase(increment, (state) => {
		state.counter += 1;
	});
	//decrement
	builder.addCase(decrement, (state) => {
		state.counter -= 1;
	});
	//reset
	builder.addCase(resetcounter, (state) => {
		state.counter = 0;
	});
	//incrementBy
	builder.addCase(incrementBy, (state, action) => {
		state.counter += action.payload.amount;
	});
});

//map object notation
// const counterSlice2 = createAction(initialState, {
// 	[increment]: (state) => {
// 		state.counter += 1;
// 	},
// 	[decrement]: (state) => {
// 		state.counter -= 1;
// 	},
// 	[resetcounter]: (state) => {
// 		state.counter = 0;
// 	},
// 	[incrementBy]: (state, action) => {
// 		state.counter += action.payload.amount;
// 	},
// });

//store
const store = configureStore({
	reducer: counterSlice,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

//dispatch
store.dispatch(increment());
store.dispatch(incrementBy(100));

console.log(store.getState());
