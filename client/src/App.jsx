import { useState } from 'react';
import './App.css';

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <>
      <div className='container'>
        <InputTodo />
      </div>
      <div className='container mt-5'>
        <ListTodos />
      </div>
    </>
  );
}

export default App;
