import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTodo = () => {
    if (taskInput.trim() !== "") {
      // Add the task to the todolist array
      setTodolist([...todolist, taskInput]);

      // Clear the input field
      setTaskInput("");
    }
  };

  const handleInputChange = (event) => {
    // Update the taskInput state when the input value changes
    setTaskInput(event.target.value);
  };

  const deleteTodo = (index) => {
    // Create a copy of the todolist without the task at the specified index
    const updatedTodolist = [...todolist.slice(0, index), ...todolist.slice(index + 1)];
    setTodolist(updatedTodolist);
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        type="text"
        className="text-inpt"
        placeholder="add item"
        value={taskInput}
        onChange={handleInputChange}
      />
      <button type="button" onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todolist.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
