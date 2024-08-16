import React from "react";

export default function TodoItem({ todo, todos, setTodos }) {
  function toggleCompleted() {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(updatedTodos);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={toggleCompleted}
      />{" "}
      {todo.text}
    </li>
  );
}
