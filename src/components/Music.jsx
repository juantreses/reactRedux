import React from "react";
import MusicForm from "./MusicForm";

export default function Music() {
  return (
    <>
      <h2>Search your favorite music</h2>
      <MusicForm />
      <p>Loading music...</p>
      <p>Error loading music...</p>
      <p>Results</p>
    </>
  );
}
