import { useState } from "react";


function Home() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>this is home page</h1>
         <h1>{count}</h1>
         <button onClick={()=>setCount(count - 1)}>Decrement</button>
         <button onClick={()=>setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Home;



function ComponentA() {
 
  return <div>
    <h1>Component A </h1>
  </div>;
}

// function ComponentB() {  
//   return (
//     <div className="ComponentB">
//       <h1>I am Com B</h1>
//     </div>
//   );
// }

// function ComponentC() {
//   const user = useContext(AppState)
//   return (
//     <div className="ComponentC">
//       <h1>I am Com C</h1>
//       <h1>{user.name}</h1>
//     </div>
//   );
// }
