/** @format */

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate()
  return (
    <div className="App">
      <h1>404!</h1>
      <h2>This site cannot be reached</h2>
 
        <button onClick={()=>navigate(-1)}>Back 🔙</button>

    </div>
  );
}

export default Error;
