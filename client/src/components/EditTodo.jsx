import React, { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';

function EditTodo({ todo }) {
  const [description, setDescription] = useState(todo.description);

  const updateTodo = async (e) => {
    const body = { description };
    try {
      const response = await fetch(
        `http://localhost:5500/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target={`#id${todo.todo_id}`}
      >
        <MdModeEditOutline />
      </button>

      <div className='modal' id={`id${todo.todo_id}`}>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h4 className='modal-title'>Modal Heading</h4>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className='modal-body'>
              <input
                className='form-control'
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-success'
                data-dismiss='modal'
                onClick={updateTodo}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTodo;
