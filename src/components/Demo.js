/** @format */

import React, { useEffect, useState } from "react";


function Demo() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);

  const nameHandle = (e) => {
    setForm({ ...form, name: e.target.value });
  };
  const facultyHandle = (e) => {
    setForm({ ...form, faculty: e.target.value });
  };
  const addData = () => {
    setData([...data, form]);
    setForm({ name: "", faculty: "" });
  };
  const deleteData = (e) => {
    setData(data.filter((v, i) => e != i));

    // ⬆ same to same ⬆⬇
    // let arr = data;
    // arr.splice(e, 1);
    // setData([...arr]);
  };

  return (
    <>
   
      <hr />
      <div className="App">
        <div className="demo">
          <input
            type="text"
            placeholder="name"
            value={form.name}
            onChange={nameHandle}
          />
          <input
            type="text"
            placeholder="faculty"
            value={form.faculty}
            onChange={facultyHandle}
          />
          <button onClick={addData}>Add</button>
        </div>
        <div className="header">
          <h2>no.</h2>
          <h2>name</h2>
          <h2>faculty</h2>
          <h2>delete</h2>
        </div>

        {data.map((e, i) => {
          return (
            <div key={i} className="data">
              <h2>{i + 1}</h2>
              <h2>{e.name}</h2>
              <h2>{e.faculty}</h2>
              <button onClick={() => deleteData(i)}>❌</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Demo;
