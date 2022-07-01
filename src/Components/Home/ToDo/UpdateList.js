import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateList = () => {
    const taskRef = useRef()
    const {id} = useParams()
    const navigate = useNavigate()

    const handleSubmit =(e)=>{
        e.preventDefault();
        const tasks = taskRef.current.value;
        const newtasks = {tasks}
        console.log(newtasks)

        
        fetch(`https://bearded-canoe-07042.herokuapp.com/task/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newtasks)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                navigate('/')
            }
        })
    }

    return (
        <div className='my-32 flex justify-center items-center'>
            <form onSubmit={handleSubmit}>

                <input type="text" ref={taskRef} placeholder="Add Tasks" class="input input-bordered input-accent w-full max-w-xs" />
                
                    <button class="btn btn-success m-auto my-5">Enter</button>
           

            </form>
        </div>
    );
};

export default UpdateList;