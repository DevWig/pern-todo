import React, { useState, useEffect } from 'react';

import { MdModeEditOutline, MdDeleteForever } from 'react-icons/md';
import EditTodo from './EditTodo';

function ListTodos() {
  const [todoList, setTodoList] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5500/todos');
      const jsonData = await response.json();
      setTodoList(jsonData);
      console.log(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5500/todos/${id}`, {
        method: 'DELETE',
      });
      setTodoList(todoList.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h2>Current Todos</h2>
      <table className='table'>
        <tbody>
          {todoList.map((todo) => (
            <tr key={todo.todo_id}>
              <td className='align-middle text-left'>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  <MdDeleteForever />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
