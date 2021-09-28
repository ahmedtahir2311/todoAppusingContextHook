import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveEntery, settingState, updateValue } from "../redux/todoSlicer";
import TodoList from "./todoList";

const Input = () => {
  const todo = useSelector((state) => state.todone.todos);
  const settoogle = useSelector((state) => state.todone.settoogle);
  const setGetValue = useSelector((state) => state.todone.setGetValue);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveEntery({
        text: setGetValue,
        id: Math.ceil(Math.random() * 1122),
      })
    );
  };
  const changeHandler = (e) => {
    dispatch(settingState(e.target.value));
  };

  return (
    <>
      <div>
        <h1> Input</h1>

        <input value={setGetValue} onChange={changeHandler} />

        {settoogle ? (
          <button onClick={submitHandler}>ADD TO LIST</button>
        ) : (
          <button onClick={() => dispatch(updateValue(todo))}>
            Update Item
          </button>
        )}
      </div>
      <TodoList />
    </>
  );
};

export default Input;
