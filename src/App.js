import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

function App() {

  const [noteContent, setNoteContent] = useState([]);

  const [noteTitle, setNoteTitle] = useState("");

  const [noteDescription, setNoteDescription] = useState("");

  let titleChangeHandler = (event) => setNoteTitle(event.target.value);

  let descriptionChangeHandler = (event) =>setNoteDescription(event.target.value);

  let addHandler = (event) => {
    setNoteContent(previous => {
      return [...previous, { title: noteTitle, content: noteDescription }];
    });
    setNoteTitle("");
    setNoteDescription("");
    event.preventDefault();
  };

  let deleteNote = (id) => {
    setNoteContent((previous) => {
      return previous.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="page">
      <Header></Header>
      <CreateNote
        title={noteTitle}
        content={noteDescription}
        changeInputHandler={titleChangeHandler}
        changeTextHandler={descriptionChangeHandler}
        addNoteHandler={addHandler}
      />
      {noteContent.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            delNote={deleteNote}
          ></Note>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
