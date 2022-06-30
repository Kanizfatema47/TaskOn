import React, { useEffect, useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gettask')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

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
        <div className='grid grid-cols-3 gap-10 justify-center'>
            {

                tasks?.map(task => (
                    <div class="form-control justify-center items-center flex flex-row">
                        <label class="cursor-pointer label">
                            <input type="checkbox"  class="checkbox checkbox-accent" />
                        </label>
                        <p>{task.tasks}</p>
                        <button type="submit" className='btn btn-success mx-2'>Edit</button>
                        <button type="submit"onClick={()=>handleDelete(task._id)}  className='btn btn-danger mx-2'>Delete</button>

                    </div>
                ))

            }

        </div>
    );
};

export default ToDoList;