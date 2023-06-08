import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Test() {
  const navigate = useNavigate()
  return (
    <div className="App">
     <h1>Testing page</h1>
      <button onClick={()=>{navigate(-1)}}>Go back</button>
      <Link to={"contact"}><button>Contact</button></Link>
      <Link to={"keepNote"}><button>Keep Note</button></Link>
      <Link to={"todoList"}><button>Todo List</button></Link>
      <hr />
      <Outlet />
    </div>
  );  
}

export default Test;