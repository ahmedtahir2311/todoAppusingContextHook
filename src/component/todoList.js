import React from "react";
import { useDispatch } from "react-redux";
import { deleteAll } from "../redux/todoSlicer";

import TodoAdd from "./TodoAdd";

const TodoList = (props) => {
  const dispatch = useDispatch();
  // console.log(props.setToggleSubmit);
  return (
    <div>
      <TodoAdd />
      <div>
        <button onClick={() => dispatch(deleteAll())}>Delete All</button>
      </div>
    </div>
  );
};

export default TodoList;
