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

  // whereever we send a variable we have to define its type 
  // for example the type of handleAdd is also defined in inputField.tsx file
  //               event type ⬇
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      //     generating a random id ⬇
      setTodos([...todos, {id: Date.now(), todo, isDone:false}])
      // ⬇ once the todo is submitted the todo field is cleared
      setTodo("");
    }

  }


  console.log(todos)
  return (
    <div className="App">
    <span className='heading'>Task Manager</span>
    <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    {todos.map((t) => (<li>{t.todo}</li>))}
    </div>
  );
}

export default App;
