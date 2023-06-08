/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const { userID } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        `https://dummyjson.com/users?skip=${userID - 1}&limit=1`
      );
      const jsonData = await res.json();
      setData(jsonData.users);
      console.log(jsonData.users);
    };
    get();
  }, []);
  return (
    <>
      {data.map((a, i) => {
        return (
          <div className="App">
            <h1 style={{margin:"5px"}}>
              This is
              <i style={{margin:"10px"}}>
                <u style={{ fontSize: "30px" }}>
                  {a.firstName} {a.lastName}'s
                </u>
              </i>
              page
            </h1>
            <img src={a.image} style={{margin:"0px"}}/>
            <h4>
              <span>Address: {a.address.address}</span>,
              <span>City: {a.address.city}</span>,
              <span>PinCode: {a.address.postalCode}</span>
            </h4>
            <h3>Date Of Birth: {a.birthDate}</h3>
            <h3>E-Mail ID: {a.email}</h3>
            <h3>Phone Number: {a.phone}</h3>
          </div>
        );
      })}
      <div className="App">
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}

export default UserDetails;
