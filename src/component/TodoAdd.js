import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOne, editItem } from "../redux/todoSlicer";

const TodoAdd = () => {
  const todo = useSelector((state) => state.todone.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todo.map((todo) => (
        <p>
          <span>{todo.text}</span>
          <button onClick={() => dispatch(editItem(todo))}>Edit</button>
          <button onClick={() => dispatch(deleteOne(todo.id))}> Delete </button>
        </p>
      ))}
    </div>
  );
};

export default TodoAdd;
