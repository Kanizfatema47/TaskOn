import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SetCompletedtask } from '../../../App';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [completedtask, setCompletedtask] = useState([]);


    const setContextTask = useContext(SetCompletedtask)

    useEffect(() => {
        fetch('https://bearded-canoe-07042.herokuapp.com/gettask')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `https://bearded-canoe-07042.herokuapp.com/task/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    const remaining = tasks.filter((task) => task._id !== id);
                    setTasks(remaining);
                });
        }
    };

    const handleCheck = (e, task, id) => {
        const check = e.target.checked;
        if (check) {
            // console.log(task)
            const taskcomplete = [...completedtask, task]
            setCompletedtask(taskcomplete)
            setContextTask(taskcomplete)


            const url = `https://bearded-canoe-07042.herokuapp.com/completetask/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((result) => {
                    const remaining = tasks.filter((task) => task._id !== id);
                    setTasks(remaining);
                });

                setTimeout(() => {
                    e.target.checked =''
                  }, 500);
          
        }
     

    }
    // console.log(completedtask)

    return (
        <div className='lg:mx-5  my-5 sm:mx-1 my-5'>
            <h1 className=' font-bold text-center text-3xl my-5'>To Do</h1>
            {

                tasks?.map(task => (
                    <div class="form-control justify-start  items-center flex flex-row my-3 lg:ml-24">
                        <label class="cursor-pointer label">
                            <input type="checkbox" onClick={(e) => handleCheck(e, task, task._id)} class="checkbox checkbox-accent" />
                        </label>
                        <p className='text-lg font-semibold w-full'>{task.tasks}</p>
                        <Link to={`/form/${task._id}`} className='flex justify-center items-center'><button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button></Link>
                        <button onClick={() => handleDelete(task._id)} class="bg-red-400 hover:bg-red-600 text-white font-bold ml-2 py-2 px-4 rounded">
                            Delete
                        </button>

                    </div>
                ))

            }

        </div>
    );
};

export default ToDoList;