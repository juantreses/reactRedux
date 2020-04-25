import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementFive,
  multiplyBy,
} from "../data/count";
import { useField } from "../hooks";

export default () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const numberField = useField(0);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        reset
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(incrementFive());
        }}
      >
        +5
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(multiplyBy(numberField.value));
        }}
      >
        Muliply by
      </button>
      <input type="text" {...numberField} />
    </>
  );
};
