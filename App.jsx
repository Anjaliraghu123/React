import React, { useState } from 'react';
import Task from './Task';
import  Index from "./Index.css";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
 
  const changeHandler = e => {
    setTask(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (task.trim() !== "") {
      const newTodo = { id: Date.new(), task: task };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const deleteHandler = indexValue => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
 
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Todo Management Application</h5>
            <form onSubmit={submitHandler}>
              <input size="30" type="text" name="task" value={task} onChange={changeHandler} />&nbsp;&nbsp;
              <input type='submit' value="Add" name="Add" />
            </form>
            <Task todos={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
