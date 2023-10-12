import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import {todoCreateSlice} from './todoCreateSlice'

//Store holds state and combines reducers
export default configureStore({
	reducer: {
		todos: todoReducer,
		todoCreate: todoCreateSlice.reducer
	},
});
