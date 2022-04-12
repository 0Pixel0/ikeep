import "./App.css";
import React, { useState,useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateNote from "./components/CreateNote";

function App() {

  const [noteContent, setNoteContent] = useState(JSON.parse(localStorage.getItem('noteContent')));

  const [noteTitle, setNoteTitle] = useState("");

  const [noteDescription, setNoteDescription] = useState("");
  useEffect(() => {
    console.log(noteContent);
    const json = JSON.stringify(noteContent);
    localStorage.setItem("noteContent", json);
  }, [noteContent]);



  useEffect(() => {
    const json = localStorage.getItem("noteContent");
    const savedNotes = JSON.parse(json);
    
    if (savedNotes) {
      setNoteContent(savedNotes);console.log(savedNotes);
    }
  },[]);

  let titleChangeHandler = (event) => setNoteTitle(event.target.value);

  let descriptionChangeHandler = (event) =>setNoteDescription(event.target.value);

  let addHandler = (event) => {
    setNoteContent(previous => {

      if(previous){return  [...previous, { title: noteTitle, content: noteDescription }]}
      else{
          return [ { title: noteTitle, content: noteDescription }];
      }
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
      {noteContent && noteContent.map((note, index) => {
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
