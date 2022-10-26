import React from 'react';
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>
    //      event type ⬇
  handleAdd:(e: React.FormEvent) => void;
}


// defining Props here to provide the ⬇ types
const InputField = ({todo, setTodo, handleAdd}:Props) => {
  return (
    // Whenever this form is submitted the ⬇ handleAdd function is fired
    <form className='input' onSubmit={handleAdd}>
      <input type='input'
      value={todo}
      onChange = {(e)=>setTodo(e.target.value)}
      placeholder='Enter a task' className='input_box'
      />

      <button className='input_submit' type='submit'>Add
      </button>
    </form>
  )
}

export default InputField
