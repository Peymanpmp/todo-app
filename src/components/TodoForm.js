import React, { useState } from "react";

export default function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="type here..."
      />
      {input.length > 0 ? (
        <button type="submit" className="todo-button">
          add
        </button>
      ) : (
        <button type="submit" className="btn-disabled" disabled>
          add
        </button>
      )}
    </form>
  );
}
