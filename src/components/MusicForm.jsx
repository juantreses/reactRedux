import React from "react";
import { useDispatch } from "react-redux";
import { useField } from "../hooks";
import { searchMusic } from "../data/music";

export default function MusicForm() {
  const { error, setError, setValue, ...field } = useField("", true);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (!field.value) {
      setError(true);
    } else {
      dispatch(searchMusic(field.value));
      setValue("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <input type="text" {...field} className={error ? "error" : ""} />
      <button type="submit">Search...</button>
    </form>
  );
}
