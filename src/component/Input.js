import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEntery } from "../redux/todoSlicer";

const Input = () => {
  const [value, setvalue] = useState("");
  const todo = useSelector((state) => state.todone.todos);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveEntery({
        text: value,
        id: Math.ceil(Math.random() * 1122),
      })
    );
    console.log(todo);
  };

  return (
    <>
      <div>
        <h1> Input</h1>

        <input value={value} onChange={(e) => setvalue(e.target.value)} />
        <button onClick={submitHandler}>ADD TO LIST</button>
      </div>
    </>
  );
};

export default Input;
