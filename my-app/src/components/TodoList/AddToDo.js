import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice';

const AddToDo = () => {
	const [value, setValue] = useState('');
	const [value2, setValue2] = useState('');
	const dispatch = useDispatch();
	
	const onSubmit = (event) => {
		event.preventDefault();
		if (value || value2) {
			dispatch(
				addTodo({
					title: value,
					text: value2
				})
			);
		}
		setValue('');
		setValue2('');
	};
	
	
	
	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3 d-flex align-items-baseline justify-content-evenly'>
			<input
				required pattern='^[а-яА-ЯёЁa-zA-Z0-9]+$'
				type='text'
				className='form-control mb-2 mr-sm-2 w-50'
				placeholder='Add a topic'
				value={value}
				onChange={(event) => setValue(event.target.value)}>
			</input>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2 w-50'
				placeholder='Add a text'
				value={value2}
				onChange={(event) => setValue2(event.target.value)}>
			</input>
			<button
				type='submit'
				className='btn btn-primary p-2'
				>
				Add
			</button>
		</form>
	);
};

export default AddToDo;