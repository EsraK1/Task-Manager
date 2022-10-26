import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';


const App: React.FC = ()=> {
  //  we use angled brackets to give ⬇ type 
  const [todo, setTodo] = useState<string>('')

  // array of a type/interface
    // Todo can be found in model.ts | ⬇ type is array 
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = () => {}


  console.log(todo)
  return (
    <div className="App">
    <span className='heading'>Task Manager</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
