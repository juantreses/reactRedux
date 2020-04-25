import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleEven, toggleAdult, toggleStartsWith } from "../data/filters";
import { useField } from "../hooks";

export default function Filters() {
  const filterData = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const letterField = useField("A");
  const evenHandler = () => {
    dispatch(toggleEven());
  };
  const adultHandler = () => {
    dispatch(toggleAdult());
  };
  const startsWithHandler = () => {
    dispatch(toggleStartsWith(letterField.value));
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={filterData.isEven}
        onChange={evenHandler}
      />{" "}
      Even
      <input
        type="checkbox"
        checked={filterData.isAdult}
        onChange={adultHandler}
      />{" "}
      Adult
      <input
        type="checkbox"
        checked={filterData.startsWithA}
        onChange={startsWithHandler}
      />
      Starts with <input type="text" {...letterField} />
    </div>
  );
}
