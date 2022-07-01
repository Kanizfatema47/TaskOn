import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gettask')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks])

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            const url = `http://localhost:5000/task/${id}`;
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

    return (
        <div className='mx-5  my-5'>
            <h1 className=' font-bold text-center text-3xl'>To Do</h1>
            {

                tasks?.map(task => (
                    <div class="form-control justify-start ml-24 items-center flex flex-row my-3">
                        <label class="cursor-pointer label">
                            <input type="checkbox" class="checkbox checkbox-accent" />
                        </label>
                        <p className='text-lg font-semibold w-full'>{task.tasks}</p>
                        <Link to={`/form/${task._id}`} className='flex justify-center items-center'><button class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Edit
                        </button></Link>
                        <button onClick={() => handleDelete(task._id)}  class="bg-red-400 hover:bg-red-600 text-white font-bold ml-2 py-2 px-4 rounded">
                            Delete
                        </button>

                    </div>
                ))

            }

        </div>
    );
};

export default ToDoList;