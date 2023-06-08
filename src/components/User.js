/** @format */

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dna } from "react-loader-spinner";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function User() {
  const [num, setNum] = useState(2);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const get = async () => {
      const res = await fetch(
        `https://dummyjson.com/users?skip=0&limit=${num}`
      );
      const jsonData = await res.json();
      // console.log(jsonData.users);
      setData(jsonData.users);
      setLoading(false);
      // tostify massage
      toast.success("SuccessFully get data")
      // toast.error("SuccessFully get data")
      // toast.warning("SuccessFully get data")
      // toast.info("SuccessFully get data")
      // toast.dark("SuccessFully get data")

    };
    get();
  }, [num]);


  // const [data] = ComA(`https://dummyjson.com/users?skip=0&limit=${num}`)

  return (
    <div className="App">
    <ToastContainer />
      <button
        style={{ position: "fixed", display: "block" }}
        onClick={() => setNum(num + 2)}>
        ({num}),add 2 user
      </button>
      <h1>Hy this is User page</h1>

      {loading ? (
        <Dna />
      ) : (
        data.map((a, i) => {
          return (
            <Link to={`/user/${a.id}`} key={i}>
              <div key={i}>
                <img src={a.image} />
                <h3>
                  name: {a.firstName} {a.lastName} ▶ {a.id}
                </h3>
                <hr />
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default User;
