import React, { useEffect, useState } from "react";
import "./App.css";
import Demo from "./components/Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Slider from "./components/Slider";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import KeepNote from "./components/KeepNote";
import Search from "./components/Search";
import TodoList from "./components/TodoList";

function App() {
  //-----------------------------------------------------------------------
  // const [signoutTime, setSignoutTime] = useState(5000);

  let logoutTimeout;

  const logout = () => {
    console.log("You have been Logout");
    alert("You have been Logout");
  };

  const setTimeouts = () => {
    logoutTimeout = setTimeout(logout, 600000);
  };

  const clearTimeouts = () => {
    if (logoutTimeout) clearTimeout(logoutTimeout);
  };

  useEffect(() => {
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress",
      "keydown",
      "keyup",
    ];

    const resetTimeout = () => {
      clearTimeouts();
      setTimeouts();
    };

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeouts();
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
        clearTimeouts();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="user" element={<User />} />

          <Route path="user/:userID" element={<UserDetails />} />

          <Route path="demo" element={<Demo />} />
          
          <Route path="test" element={<Test />}>
            {/* <Route index element={<Contact />} /> */}
            {/*byDefault Contact page */}
            <Route path="contact" element={<Contact />} />
            <Route path="keepNote" element={<KeepNote />} />
            <Route path="todoList" element={<TodoList />} />
          </Route>

          <Route path="slider" element={<Slider />} />

          <Route path="slider" element={<Slider />} />

          <Route path="search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//------------------------ reduce method task -----------------------------------//

/* let arr = [
  ["s", "a", "s"],
  ["a", "b"],
  ["f", "f", "f"],
  ["o"],
  ["c", "a", "p", "t"],
];
// 'SAS|AB|FFF|O|CAPT'
let str = arr.reduce((a, b, i) => {

  // console.log("a = ", a)
  // console.log("b = ", b)
  // console.log("i = ", i) 
  // console.log(a+"|"+b.join("").toUpperCase())
  // console.log("-------------------------")
  // return a+"|"+b.join("").toUpperCase()

  if(i == 0){
    // console.log(a+b.join("").toUpperCase())
    return a+b.join("").toUpperCase();
  }else {
    // console.log(a+"|"+b.join("").toUpperCase())
   return a+"|"+b.join("").toUpperCase()
  }

},"");
console.log(str); */
//--------------------- reduce method difficult task one line -----------------//
/*
let arr = [
  ["a", "a"],
  ["b", "b"],
  ["c", "c"],
  ["d", "d"],
  ["e", "e"],
];

let [e, ...nr] = arr;

let str = nr.reduce((a, b) => {
  return a.concat("|", b.join(""));
}, e.join(""));

console.log(arr);
console.log(str);
*/
//-----------------------------------------------------------------------------

//--------------------- reduce method difficult task -------------------------//
/*
let arr = [
  ["a", "a"],
  ["b", "b"],
  ["c", "c"],
  ["d", "d"],
  ["e", "e"],
];
// 'SAS|AB|FFF|O|CAPT'
let str = arr.reduce((a, b) => {

  console.log("a = ", a)
  console.log("b = ", b)

  console.log("----------------------")
  return a.concat("|",b.join(""))
  
  // let d =  a.join("").concat("|")
  // let e=[];
  // e.push(d.concat(b.join("")))
  // return e
  // let ss = a+"|"+b.join("")
  // return ss.split("a|").join("") // ini = ["a"]

},arr.shift().join(""));
console.log(arr)  
console.log(str);
*/
//-----------------------------------------------------------------------------
/* let arr = [
  ["s", "a", "s"],
  ["a", "b"],
  ["f", "f", "f"],
  ["o"],
  ["c", "a", "p", "t"],
];
// 'SAS|AB|FFF|O|CAPT'

let str = arr.reduce((a,b)=>{
  return a.concat("|"+b.join("")).toString().replace(/,/,"")
})
console.log(str) */
//----------------------------one line code-----------------------------------
// let arr = [
//   ["s", "a", "s"],
//   ["a", "b"],
//   ["f", "f", "f"],
//   ["o"],
//   ["c", "a", "p", "t"],
// ];
// 'SAS|AB|FFF|O|CAPT'

/* console.log(
  arr.reduce((a, b, i) =>
    i === 1 ? a.join("") + "|" + b.join("") : a + "|" + b.join("")
  )
); */

//-----------------------------------------------------------------------------
/* let arr = [
  ["s", "a", "s"],
  ["a", "b"],
  ["f", "f", "f"],
  ["o"],
  ["c", "a", "p", "t"],
];
// 'SAS|AB|FFF|O|CAPT'
let ss = ""
arr.forEach((x,i)=>{
  if(i === 0){
    ss = x.join("");
  }else{
    ss = ss+"|"+x.join("");
  }
})
console.log(ss) */
//----------------------------------------------
/* let arr = [
  ["s", "a", "s"],
  ["a", "b"],
  ["f", "f", "f"],
  ["o"],
  ["c", "a", "p", "t"],
];
// 'SAS|AB|FFF|O|CAPT'

let s = arr.map((e)=>{
  return e.join("")
})
console.log(s.join("|")) */

//  //------------------------------------------------------------------------//
/* let arr = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g", "h"],
  ["i"],
  ["j", "k", "l", "m"],
  ["n", "o", "p", "q"],
  ["r", "s", "t"],
  ["u"],
  ["v", "w", "x", "y", "z"],
];

// '[A]-[B]-[C]-...-[X]-[Y]-[Z]'

let str = arr.reduce((a, b, i) => {
  if (i == 0) {
    return a + b.join("]-[").toUpperCase() + "]";
  }
  return a + "-[" + b.join("]-[").toUpperCase() + "]";
}, "[");
console.log(str); */

//-------------------------------------------------------------------------------//

//------------------------Keeping Apps todo list--------------------------------//
/*
import React, { useEffect, useState } from "react";

function Demo() {
  const [form, setForm] = useState({})
  const [data, setData] = useState([]);

  const nameHandle = (e) => {
    setForm({...form, name: e.target.value});
  };
  const facultyHandle = (e) => {
    setForm({...form, faculty : e.target.value});
  };
  const addData = () => {
    setData([...data, form]);
    console.log(data);
    setForm({})
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
    </>
  );
}

export default Demo;
*/
//-------------------------------------------------------------------------------//

//------------------------- get data from API ------------------------------------//
/*
import React, { useEffect, useState } from "react";

function Demo() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const fetchData = await fetch("https://dummyjson.com/users");
      // console.log(fetchData)
      const jsonData = await fetchData.json();
      setData(jsonData.users);
      // console.log(jsonData.users)
    };
    getData();
  }, []);
  return (
    <div>
      {data.map((e) => {
        return (
          <div key={e.id}>
            <img style={{ height: "100px", width: "100px" }} src={e.image} />;
            <h1>
              {e.firstName} {e.lastName}
            </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Demo;
*/
//----------------------------------------------------------------------------//

//-------------------- CountDown Program full Components --------------------//
/*
import React, { useState } from "react";

function Demo() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [inDate, setInDate] = useState("");

  // let date = "05/06/2023";
  const inputDate = (e) => {
    e.preventDefault();
    setInDate(e.target.value);
  };

  const getTime = () => {
    const def = new Date(inDate) - new Date();
    // const def = (new Date(date) - new Date());
    setDays(Math.floor(def / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((def / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((def / 1000 / 60) % 60));
    setSeconds(Math.floor((def / 1000) % 60));

    const interval = setInterval(() => {
      getTime();
    }, 1000);
  };

  return (
    <div>
      <input
        style={{
          margin: "20px",
          padding: "5px",
          fontSize: "20px",
          width: "300px",
        }}
        type="text"
        placeholder="ex: august 02 2024 10:00 PM"
        value={inDate}
        onChange={inputDate}
      />
      <button style={{ fontSize: "20px" }} onClick={getTime}>
        lets Start
      </button>
      <h1>
        <span style={{ fontSize: "100px" }}> {days} </span> Days
        <span style={{ fontSize: "100px" }}> {hours} </span> Hours
        <span style={{ fontSize: "100px" }}> {minutes} </span> Minutes
        <span style={{ fontSize: "100px" }}> {seconds} </span> Seconds
      </h1>
    </div>
  );
}

export default Demo;
*/
//----------------------------------------------------------------------------//

/* let en = "10:00 AM"

let now = new Date();
now.setHours(8)
console.log(now.toLocaleTimeString())
let t = new Date().getHours()

let time = new Date().toLocaleTimeString()
console.log(time)
 
if (t >= 1 &&  t < 12){
  console.log("Good morning")
} else if (t >= 12 && t < 18 ) {
  console.log("Good Afternoon")
}  else if (t >= 18 && t <= 24){
  console.log("Good evening")
} else{
  console.log("Enter wrong time")
} */

// function fac(n) {
//   if (n < 0) {
//     console.log("e p n");
//   } else if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * fac(n - 1);
//   }
// }
// console.log(fac(5));

// let fec = 1;
// let num = 3;
// for (num; num >= 2; num--) {
//   fec = fec * num;
//   console.log(fec);
// }
