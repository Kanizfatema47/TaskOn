import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddToDo = () => {
    const taskRef = useRef()
 const navigate = useNavigate()

useEffect(()=>{
    

}, [])


    const handleSubmit =(e)=>{
        e.preventDefault();
        const tasks = taskRef.current.value;
        const newtasks = {tasks}
        console.log(newtasks)

        
        fetch("http://localhost:5000/task", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newtasks)
        })
        .then(res=> res.json())
        .then(data => console.log(data)
            // if(data){
            //     navigate('/')
            // }
        )

      
        taskRef.current.value=''




    }
    return (
        <div className='m-auto text-center my-16'>
            <label for="my-modal-5"  class="btn modal-button bg-transparent  hover:bg-gray-400 text-black  text-black">Add Tasks</label>

            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit}>
                        
                     <input type="text" ref={taskRef} placeholder="Add Tasks" class="input input-bordered input-accent w-full max-w-xs" />
                     <div class="modal-action">
                        <button for="my-modal-5" class="btn btn-success">Enter</button>
                    </div>
                    
                    </form>
                    
                </div>
            </div>

        </div>
    );
};

export default AddToDo;