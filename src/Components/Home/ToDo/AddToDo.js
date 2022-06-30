import React from 'react';

const AddToDo = () => {
    return (
        <div className='m-auto text-center'>
            <label for="my-modal-6" class="btn modal-button ">Add Tasks</label>

            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <form>
                        
                            <input type="text" placeholder="Add Tasks" class="input input-bordered input-accent w-full max-w-xs" />
                    
                    </form>
                    <div class="modal-action">
                        <label for="my-modal-6" class="btn">Enter</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddToDo;