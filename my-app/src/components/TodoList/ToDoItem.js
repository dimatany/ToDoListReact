import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodo} from '../../redux/todoSlice';

const ToDoItem = ({ id, title, text, completed }) => {
	const dispatch = useDispatch();
	const [newTodoText, setNewTodoText] = useState('');
	const [editingTodoId, setEditingTodoId] = useState(null);
	
	const handleCheckboxClick = () => {
		dispatch(toggleComplete({ id, completed: !completed }));
	};
	const handleDeleteClick = () => {
		dispatch(deleteTodo({ id }));
	};
	
	const handleUpdateTodo = () => {
		if (newTodoText.trim() === '') return;
		dispatch(updateTodo({ id: editingTodoId, text: newTodoText }));
		setEditingTodoId(null);
		setNewTodoText('');
	};
	
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
                <span className='d-flex align-items-center fw-bold' style={{ textDecoration: completed && 'line-through' }}>
	                <span className="m-lg-2">
		                <input
			                type='checkbox'
			                className='mr-3'
			                onChange={handleCheckboxClick}
			                checked={completed}
		                >
		                </input>
	                </span>
	                {title} -
	                <span className="ms-4 fw-normal">{text}</span>
                </span>
				<div>
					<button
						className='btn btn-outline-info m-2'
						onClick={handleUpdateTodo}
					>&#8634;</button>
					<button
						className='btn btn-danger'
						onClick={handleDeleteClick}
					>&#215;</button>
				</div>
				
			</div>
		</li>
	);
};

export default ToDoItem;