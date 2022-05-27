import React from "react";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, unCompleteTodo } = props;
  return (
    <div className="todo-row">
      <div className="iconsContainer">
        {todo.completed ? (
          <span
            className="icon-check"
            onClick={() => unCompleteTodo(todo.id)}
          />
        ) : (
          <span className="icon-minus" onClick={() => completeTodo(todo.id)} />
        )}
        <p className={todo.completed ? "complete" : ""}>{todo.text}</p>
      </div>

      <span
        className="icon-trash iconsContainer"
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  );
}
