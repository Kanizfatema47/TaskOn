import React from 'react';
import Calendarr from './Calendarr';
import CompletedTasks from './CompletedTasks';
import AddToDo from './ToDo/AddToDo';
import ToDoList from './ToDo/ToDoList';

const Home = () => {
    return (
        <div>
            <CompletedTasks></CompletedTasks>
            <AddToDo></AddToDo>
            <ToDoList></ToDoList>
            <Calendarr></Calendarr>
            
        </div>
    );
};

export default Home;