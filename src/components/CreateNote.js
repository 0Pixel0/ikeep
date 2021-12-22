import React from "react";

function CreateNote(props) {
  return (
    <div className="create-note-container">
      <div className="create-area  form-group">
        <form>
          <input
            onChange={props.changeInputHandler}
            className="create-input  "
            name="title"
            placeholder="Title"
            value={props.title}
          />
          <textarea
            onChange={props.changeTextHandler}
            className="create-textarea "
            name="content"
            placeholder="Take a note..."
            rows="3"
            value={props.content}
          />
          <button
            className="add"
            onClick={(event) => props.addNoteHandler(event)}
          >
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text">
              <i className="far fa-sticky-note"></i>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateNote;
