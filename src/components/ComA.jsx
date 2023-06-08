import React from "react";
import { useEffect, useState } from "react";


function ComA(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url);
      const jsonData = await res.json();
      setData(jsonData.users);
    };
    getData();
  }, []);
  return [data];
}

export default ComA;
