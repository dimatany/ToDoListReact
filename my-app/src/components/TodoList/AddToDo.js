import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {addTodo, updateTodo} from '../../redux/todoSlice'
import {setModalVisibility, setText, setTitle} from '../../redux/todoCreateSlice'

const AddToDo = () => {
	const title = useSelector(state => state.todoCreate.title)
	const text = useSelector(state => state.todoCreate.text)
	const todoId = useSelector(state => state.todoCreate.todoId)

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		if (todoId === undefined) {
			if (title === '' || text === '') return
			dispatch(
				addTodo({
					title,
					text
				})
			);
		} else {
			dispatch(updateTodo({
				id: todoId,
				title,
				text
			}))
		}
		dispatch(setModalVisibility(false))
	};


	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 d-flex align-items-baseline justify-content-evenly'>
			<input
				required pattern='[A-Za-zА-Яа-я\s\w]*'
				type='text'
				className='form-control mb-2 mr-sm-2 w-50'
				placeholder='Add a topic'
				value={title}
				onChange={(event) => dispatch(setTitle(event.target.value))}>
			</input>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2 w-50'
				placeholder='Add a text'
				value={text}
				onChange={(event) => dispatch(setText(event.target.value))}>
			</input>
			<button
				type='submit'
				className='btn btn-primary p-2'
				>
				{todoId ? 'Edit' : 'Add'}
			</button>
		</form>
	);
};

export default AddToDo;
