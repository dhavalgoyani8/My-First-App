import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(null);
  const [chang, setChang] = useState(true);

  const addItem = () => {
    if (!todo) {
      alert("please fill something... in input fill");
    } else if (todo && !chang) {
      setList(
        list.map((val) => {
          if (val.id === edit) {
            return { ...val, name: todo };
          }
          return val;
        })
      );

      setChang(true);
      setTodo("");
      setEdit(null);
    } else {
      const allTodoData = { id: new Date().getTime().toString(), name: todo };
      setList([...list, allTodoData]);
      setTodo("");
      console.log(list);
      console.log(allTodoData);
    }
  };

  const deleteTodo = (id) => {
    const newTodo = list.filter((val) => {
      return id !== val.id;
    });
    setList(newTodo);
  };

  const editTodo = (id) => {
    let editNow = list.find((val) => {
      return val.id === id;
    });
    console.log(editNow);
    setChang(false);
    setTodo(editNow.name);
    setEdit(id);
  };

  return (
    <>
      <h1>My Todo list</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      {chang ? (
        <button onClick={addItem}>add</button>
      ) : (
        <button onClick={addItem}>add Edit </button>
      )}

      {list.map((v) => {
        return (
          <ComponentA
            v={v.name}
            id={v.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        );
      })}
      <button onClick={() => setList([])}>delete All</button>
    </>
  );
}

export default TodoList;

function ComponentA({ v, deleteTodo, id, editTodo }) {
  const [line, setLine] = useState(false);

  const checkTodo = () => {
    setLine(!line);
  };

  return (
    <div>
      <div key={id}>
        <p style={{ textDecorationLine: line ? "line-through" : "none" }}>
          {v}
        </p>
        <button onClick={checkTodo}>{line ? "UnCheck" : "Check"}</button>
        <button onClick={() => editTodo(id)}>Edit</button>
        <button onClick={() => deleteTodo(id)}>Delete</button>
        <hr />
      </div>
    </div>
  );
}
