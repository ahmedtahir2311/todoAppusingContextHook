import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todo = useSelector((state) => state.todone.todos);

  return (
    <div>
      <p>
        {todo.map((todo) => (
          <p>{todo.text}</p>
        ))}
      </p>
    </div>
  );
};

export default TodoList;
