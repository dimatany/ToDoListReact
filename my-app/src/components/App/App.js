import React, { useState } from 'react';
import AddToDo from '../TodoList/AddToDo';
import ToDoListView from '../TodoList/ToDoListView';
import Modal from '../TodoList/Modal';


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='flex-column my-2 p-3 justify-content-center'>
            <h1>TO DO List</h1>
            <button className='btn btn-primary mb-3' onClick={openModal}>Add Tasks</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>This is a modal window for data entering TodoList.</p>
                <AddToDo />
            </Modal>
            
            
            <ToDoListView />
        </div>
    );
}

export default App;