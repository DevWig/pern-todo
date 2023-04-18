import React, { useState, useEffect } from 'react';

import { MdModeEditOutline, MdDeleteForever } from 'react-icons/md';

function ListTodos() {
  const [todoList, setTodoList] = useState([]);
  const [editTodoUI, setEditTodoUI] = useState(false);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5500/todos');
      const jsonData = await response.json();
      setTodoList(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:5500/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(deleteTodo);
      setTodoList(todoList.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const editTodo = async (id) => {
    try {
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
              <td>{todo.description}</td>
              <td>
                <button>
                  <MdModeEditOutline />
                </button>
              </td>
              <td>
                <button onClick={() => deleteTodo(todo.todo_id)}>
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
