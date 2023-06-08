import { useState } from "react";

function KeepNote() {
  const [hide, setHide] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const [addItem, setAddItem] = useState([]);

  const addEvent = () => {
    setAddItem([...addItem, note]);
    console.log("added successfully");
    setNote({
      title: "",
      content: "",
    });
  };

  const deleteNote = (inx) => {
    setAddItem(addItem.filter((val, i) => i !== inx));
  };

  return (
    <>
      <div >
        <h1>This is Keep Note Page</h1>
        {hide ? (
          <>
            <input
              name="title"
              type="text"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
            />
            <button onClick={addEvent}>add</button>{" "}
          </>
        ) : null}
        <br />
        <textarea
          name="content"
          value={note.content}
          onChange={inputEvent}
          placeholder="Write to note..."
          cols="45"
          rows="3"
          onClick={() => setHide(true)}
          onDoubleClick={() => setHide(false)}
        />
      </div>
      <hr />
      {addItem.map((val, inx) => {
        return (
          <div key={inx}>
            <h1>{val.title}</h1>
            <p>{val.content}</p>
            <button onClick={() => deleteNote(inx)}>Del</button>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default KeepNote;
