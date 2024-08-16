//import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";
import Form from "./components/Form";

const LSKEY = "MyTodoApp.todos";

function App() {
  const [todos, setTodos] = useState([]);

  // Retrieve todos from localStorage on initial load
  useEffect(() => {
    const storedTodos = JSON.parse(window.localStorage.getItem(LSKEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); // Empty array means this effect runs once when the component mounts

  // Save todos to localStorage when they change
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([...todos, { id: uuidv4(), text: todo, isCompleted: false }]);
  }

  return (
    <div className="App">
      <h1>My Todos</h1>
      <Form addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;