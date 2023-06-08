/** @format */

import React, { useState } from "react";
import data from "./Data.js";

function Slider() {
  const [n, setN] = useState(1);
  const [show, setShow] = useState(true);
  const next = () => {
    if (n === data.length) {
      setN(1);
    } else {
      setN(n + 1);
    }
    setShow(true)
  };
  const prev = () => {
    if (n === 1) {
      setN(data.length);
    } else {
      setN(n - 1);
    }
    setShow(true)
  };

  return (
    <div className="App">
      <img src={data[n - 1].img } className="img"/>
      <h1>name: {data[n - 1].name}</h1>
      <h1>
        ({n}/{data.length})
      </h1>
      <button onClick={prev}>⬅</button>
      <button onClick={() => setShow(!show)}>
        {show ? "show info" : "hide info"}
      </button>
      <button onClick={next}>➡</button>
      {show ? null : <p>{data[n - 1].info}</p>}
    </div>
  );
}

export default Slider;
