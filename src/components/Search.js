import React, { useEffect, useState } from "react";

function Search() {
  const [img, setImg] = useState("");
  const search = (e) => {
    setImg(e.target.value);
    console.log(img);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type for Search..."
        value={img}
        onChange={search}
      />
      <br />
      {
        img === "" ? null : 
      
      <img
        src={`https://source.unsplash.com/800x480/?${img}`}
        alt="search terms"
      />}
    </div>
  );
}

export default Search;
