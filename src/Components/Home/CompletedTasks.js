import React, { useContext } from 'react';
import { Completedtask } from '../../App';

const CompletedTasks = () => {
    const tasks = useContext(Completedtask)
    console.log(tasks)
    return (
        <div className=' w-full'>
            <h1 className=' font-bold text-center text-3xl my-5 mx-5'>Completed Tasks</h1>
            <div className='flex flex-col justify-center items-cenetr'>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Completed Tasks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks?.map((task, index) => <tr>
                                    <th>{index+1}</th>
                                    <td>{task.tasks}</td>
                                </tr>)

                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default CompletedTasks;