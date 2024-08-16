import React, { useRef } from "react";

export default function Form({ addTodo }) {
  const inputRef = useRef();

  function clickHandler() {
    const inputElement = inputRef.current;
    if (inputElement.value.trim()) {
      addTodo(inputElement.value);
      inputElement.value = ""; // Clear input after adding
    }
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Write a new todo" />
      <br />
      <button onClick={clickHandler}>Add todo</button>
    </div>
  );
}
