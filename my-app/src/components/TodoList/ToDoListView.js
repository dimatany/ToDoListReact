import React from 'react';
import TodoItem from './ToDoItem';
import { useSelector } from 'react-redux';


const TodoListView = () => {
	const todos = useSelector((state) => state.todos);
	
	return (
		<ul className='list-group'>
			{todos.map(el => (
				<TodoItem
					key={el.id}
					id={el.id}
					title={el.title}
					text={el.text}
					completed={el.completed}
				/>
			))}
		</ul>
	);
};

export default TodoListView;