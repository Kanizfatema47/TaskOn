import React from 'react';
import CompletedTasks from './CompletedTasks';
import AddToDo from './ToDo/AddToDo';
import ToDoList from './ToDo/ToDoList';

const Home = () => {
    return (
        <div>
            <AddToDo></AddToDo>
            <div className='grid lg:grid-cols-2 gap-10 sm:grid-cols-1 justify-center '>
                <ToDoList></ToDoList>
                <CompletedTasks></CompletedTasks>
            </div>


        </div>
    );
};

export default Home;