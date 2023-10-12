import { createSlice } from '@reduxjs/toolkit';
import {v4} from 'uuid';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [
		{
			id: v4(),
			title: 'Тема 1',
			text: 'Відображення списку завдань',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 2',
			text: 'Для кожного завдання відображення назви, опису та статусу (виконано чи не виконано).',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 3',
			text: 'Додавання кнопки "Додати завдання", яка відкриває модальне вікно для створення нового завдання.',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 4',
			text: 'Модальне вікно для створення/редагування завдання.',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 5',
			text: 'Можливість додавати нові завдання з вказівкою назви, опису та статусу.',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 6',
			text: 'Можливість редагувати існуючі завдання.',
			completed: false
		},
		{
			id: v4(),
			title: 'Тема 7',
			text: 'Валідація полів (назва не може бути порожньою)',
			completed: false
		},
	],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: v4(),
				title: action.payload.title,
				text: action.payload.text,
				completed: false,
			};
			state.push(todo);
		},
		toggleComplete: (state, action) => {
			const index = state.findIndex((todo) => todo.id === action.payload.id);
			state[index].completed = action.payload.completed;
		},
		deleteTodo: (state, action) => {
			return state.filter((todo) => todo.id !== action.payload.id);
		},
		//////////////////////////////////
		updateTodo: (state, action,...args) => {
			const { id, text, title } = action.payload;
			const todoToUpdate = state.find(todo => todo.id === id);
			if (todoToUpdate) {
				todoToUpdate.title = title;
				todoToUpdate.text = text;
			}
		},
	},
});


export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
