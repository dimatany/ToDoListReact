import { useSelector, useDispatch } from "react-redux";
import { updateValue, addTask } from "../../redux/todoSlice";
import List from "../../components/List/List";

const TodoList = () => {
	const value = useSelector((state) => state.todo.inputTaskValue);
	const todos = useSelector((state) => state.todo.todos);
	const dispatch = useDispatch();
	
	const handleChange = (e) => {
		dispatch(updateValue(e.target.value));
	};
	
	const handleKeyEnter = (e) => {
		if (e.key === "Enter") {
			dispatch(addTask());
		}
	};
	
	return (
		<div className='me-4 mx-4'>
			<div className='d-flex my-2 p-3 justify-content-center'>
				<input
					className='form-control my-lg-2 w-50 me-3'
					type="text"
					placeholder="Enter task"
					value={value}
					onChange={handleChange}
					onKeyDown={handleKeyEnter}
				/>
				<button
					className='btn btn-primary my-2'
					onClick={() => dispatch(addTask())}>Add</button>
			</div>
			
			<div className='form-floating text-start border-primary'>
				{todos.length ? (
					todos.map((todo) => <List key={todo.id} {...todo} />)
				) : (
					<h3>No todos...</h3>
				)}
			</div>
		</div>
	);
};

export default TodoList;
