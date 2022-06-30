import React, { useRef } from 'react';

const AddToDo = () => {
    const taskRef = useRef()

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
        .then(data => console.log(data))

        alert('Task added successfully')
        taskRef.current.value=''


    }
    return (
        <div className='m-auto text-center'>
            <label for="my-modal-6"  class="btn modal-button ">Add Tasks</label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form onSubmit={handleSubmit}>
                        
                     <input type="text" ref={taskRef} placeholder="Add Tasks" class="input input-bordered input-accent w-full max-w-xs" />
                     <div class="modal-action">
                        <button for="my-modal-6" class="btn btn-success">Enter</button>
                    </div>
                    
                    </form>
                    
                </div>
            </div>

        </div>
    );
};

export default AddToDo;