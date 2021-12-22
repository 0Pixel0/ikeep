import React from 'react'

function Note(props) {
	return (
    <div className="page-two">
      <div className="note">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <button className="delete" onClick={()=>{props.delNote(props.id)}}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default Note 
