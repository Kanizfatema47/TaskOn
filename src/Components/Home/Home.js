import React from 'react';
import Calendarr from './Calendarr';
import CompletedTasks from './CompletedTasks';
import AddToDo from './ToDo/AddToDo';

const Home = () => {
    return (
        <div>
            <CompletedTasks></CompletedTasks>
            <AddToDo></AddToDo>
            <Calendarr></Calendarr>
            
        </div>
    );
};

export default Home;